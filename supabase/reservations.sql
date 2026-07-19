-- SCARLET VINCI reservation requests
-- Run this once in Supabase: SQL Editor -> New query -> paste -> Run.

create table if not exists public.reservations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  product_code text not null check (product_code ~ '^(AF|CD)-[0-9]{2}$'),
  product_name text not null check (char_length(product_name) between 1 and 120),
  product_size text not null check (char_length(product_size) between 1 and 40),
  product_price text not null check (char_length(product_price) between 1 and 40),
  customer_name text not null check (char_length(customer_name) between 1 and 60),
  phone text not null check (phone ~ '^[0-9+() -]{6,24}$'),
  wechat_id text check (wechat_id is null or char_length(wechat_id) <= 80),
  shipping_address text not null check (char_length(shipping_address) between 5 and 500),
  note text check (note is null or char_length(note) <= 1000),
  status text not null default 'pending' check (status in ('pending', 'contacted', 'paid', 'shipped', 'cancelled'))
);

alter table public.reservations enable row level security;

revoke all on table public.reservations from anon, authenticated;
grant insert on table public.reservations to anon;

drop policy if exists "Public can submit reservations" on public.reservations;
create policy "Public can submit reservations"
on public.reservations
for insert
to anon
with check (
  char_length(customer_name) between 1 and 60
  and phone ~ '^[0-9+() -]{6,24}$'
  and char_length(shipping_address) between 5 and 500
);

-- Intentionally no SELECT, UPDATE or DELETE policy for public visitors.
-- Manage reservations in the Supabase Dashboard Table Editor as the project owner.
