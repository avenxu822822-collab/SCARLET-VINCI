-- SCARLET VINCI internal reservation desk
-- Run this once AFTER supabase/reservations.sql.
-- This keeps customer information private: only approved Auth users can read or update reservations.

create table if not exists public.staff_users (
  email text primary key check (email = lower(email)),
  display_name text not null default '',
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.staff_users enable row level security;
revoke all on table public.staff_users from anon, authenticated;

create or replace function public.is_active_sv_staff()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.staff_users
    where email = lower(coalesce(auth.jwt() ->> 'email', ''))
      and is_active = true
  );
$$;

grant execute on function public.is_active_sv_staff() to authenticated;
grant select, update on table public.reservations to authenticated;

drop policy if exists "Staff can view reservations" on public.reservations;
create policy "Staff can view reservations"
on public.reservations
for select
to authenticated
using (public.is_active_sv_staff());

drop policy if exists "Staff can update reservations" on public.reservations;
create policy "Staff can update reservations"
on public.reservations
for update
to authenticated
using (public.is_active_sv_staff())
with check (public.is_active_sv_staff());

-- Add each staff email only after you create the matching Supabase Auth user.
-- Replace the example emails below before running these lines.
-- insert into public.staff_users (email, display_name) values
--   ('owner@your-company.com', '管理员'),
--   ('colleague@your-company.com', '同事')
-- on conflict (email) do update set display_name = excluded.display_name, is_active = true;

-- To remove access later:
-- update public.staff_users set is_active = false where email = 'colleague@your-company.com';
