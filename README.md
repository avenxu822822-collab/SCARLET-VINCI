# SCARLET VINCI Website

Static brand website for SCARLET VINCI, essence laboratory.

## Structure

- `index.html`: complete single-page website.
- `assets/`: optimized web assets used by the page.

## Local Preview

```bash
python3 -m http.server 8000
```

Open:

```text
http://localhost:8000
```

## Deployment

This site can be deployed as a static site on Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

No build command is required. The output directory is the project root.

## Internal reservation desk

The staff-only mobile desk is available at:

```text
/admin/
```

It uses Supabase Auth email/password accounts and does not expose reservation data to public visitors.

1. Run `supabase/reservations.sql` first if it has not been applied already.
2. Run `supabase/admin-access.sql` in the Supabase SQL Editor.
3. In Supabase: **Authentication -> Users -> Add user**, create one email/password account for every internal staff member.
4. In the same SQL Editor, add those exact email addresses to `public.staff_users` using the example at the end of `admin-access.sql`.
5. Staff open `https://your-domain/admin/` on mobile and add it to their home screen.

The public website may insert reservation requests, but only approved authenticated staff can select or update them.

## Asset Source Library

Shared website materials are stored outside this project at:

```text
/Users/avenxu/Desktop/SCARLET_VINCI_Website_Assets
```

New unsorted materials can be placed in:

```text
/Users/avenxu/Desktop/SCARLET_VINCI_Website_Assets/00_Inbox
```
