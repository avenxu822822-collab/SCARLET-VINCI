# SCARLET VINCI Website Project Context

Last updated: 2026-04-13

## Project Status

The SCARLET VINCI website is live.

Production domain:

```text
https://scarletvinci.com
```

Vercel temporary/project domain:

```text
https://scarlet-vinci-57a7qpsqd-avenxus-projects.vercel.app
```

GitHub repository:

```text
git@github.com:avenxu822822-collab/SCARLET-VINCI.git
https://github.com/avenxu822822-collab/SCARLET-VINCI
```

Local project path:

```text
/Users/avenxu/Documents/New project
```

Asset library path:

```text
/Users/avenxu/Desktop/SCARLET_VINCI_Website_Assets
```

Unsorted new materials should be placed in:

```text
/Users/avenxu/Desktop/SCARLET_VINCI_Website_Assets/00_Inbox
```

## Current Site Structure

The site is a static one-page brand website.

Main files:

```text
index.html
README.md
PROJECT_CONTEXT.md
assets/
```

The page currently includes:

- Hero with official SCARLET VINCI registered logo.
- `essence laboratory` subtitle.
- Studio profile.
- Practice domains.
- Three product line structure.
- Selected parfum preview.
- Private commission section.
- Contact section.

## Brand Direction

SCARLET VINCI is positioned as:

```text
A fragrance, design, and immersive storytelling studio based in Shanghai.
```

Chinese supporting direction:

```text
香氛、设计与沉浸式叙事工作室，坐标上海。
```

Tone:

- English-first, simple Chinese support.
- Luxury restraint.
- Laboratory narrative.
- Cold, quiet, editorial.
- Not e-commerce-heavy.
- Not cute, colorful, or promotional.

Visual direction:

- Warm off-white paper background.
- Black typography.
- SCARLET VINCI red accent.
- Gray borders.
- Dark gold highlights.
- Large whitespace.
- Hermes Agent-like restrained layout rhythm.
- Le Labo-like fragrance editorial restraint.

Current background tone:

```text
--paper: #fbf7ed
```

## Product Line Framework

The website currently preserves three product-line placeholders:

```text
Online Collection
```

For e-commerce / ready-to-wear fragrance products.

```text
Custom Formulation
```

For bespoke / private / brand fragrance commissions.

```text
Salon Collection
```

For high-end salon fragrance line and more conceptual work.

## Product Naming Notes

Important correction:

```text
TUBEREUSE
```

Use `TUBEREUSE`, not `TUBEEUSE`.

Current selected product previews:

- TUBEREUSE
- IRIS
- VIOLETTE

There are more products planned. The current three are only visual anchors for the first version.

## Trademark / Logo Notes

SCARLET VINCI is now registered.

Use:

```text
SCARLET VINCI®
```

Do not use:

```text
SCARLET VINCI™
```

Current website hero logo is generated from:

```text
/Users/avenxu/Desktop/SCARLET_VINCI_Website_Assets/00_Inbox/SCARLET VINCI LOGO.pdf
```

Archived original:

```text
/Users/avenxu/Desktop/SCARLET_VINCI_Website_Assets/01_Brand/Logo/SCARLET VINCI LOGO - registered.pdf
```

Website asset:

```text
assets/logo-scarlet-vinci-r.png
```

## Asset Library Structure

Current shared asset folder:

```text
SCARLET_VINCI_Website_Assets/
  00_Inbox
  01_Brand
    Logo
    Colors_Fonts
    Trademark
  02_Collections
    Online_Collection
    Custom_Formulation
    Salon_Collection
  03_Product_Photos
    TUBEREUSE
    IRIS
    VIOLETTE
    Other_Products
  04_Studio
    Studio_Photos
    Process
    Materials
    Packaging
  05_Copy
    Studio_Profile
    Product_Descriptions
    Collections
    Contact_FAQ
  06_References
    Websites
    Moodboard
    Screenshots
  07_Exports_For_Web
```

User can place new materials into `00_Inbox`. Future updates should review that folder first, classify materials, then copy optimized web-ready versions into the project `assets/` folder.

## Background Direction

User prefers:

- Full-page unified background.
- No segmented section backgrounds.
- Warmer rice-white tone.
- Less gray.
- Product areas can keep white/gray display surfaces.

Current background assets:

```text
assets/background-desktop.jpg
assets/background-mobile.jpg
```

Source files:

```text
/Users/avenxu/Desktop/SCARLET_VINCI_Website_Assets/06_References/Moodboard/背景2400x1600.png
/Users/avenxu/Desktop/SCARLET_VINCI_Website_Assets/06_References/Moodboard/背景1200 x 1800.png
```

## Deployment / Update Workflow

The site is deployed through:

```text
GitHub -> Vercel -> scarletvinci.com
```

To update the live site:

1. Edit local files in:

```text
/Users/avenxu/Documents/New project
```

2. Preview locally:

```bash
python3 -m http.server 8000
```

Open:

```text
http://localhost:8000
```

3. Commit changes:

```bash
git add .
git commit -m "Update website"
```

4. Push to GitHub:

```bash
git push
```

5. Vercel automatically redeploys.

After deploy completes, changes appear at:

```text
https://scarletvinci.com
```

## Git / SSH Notes

This local repo is configured to use a dedicated SSH key:

```text
~/.ssh/scarlet_vinci_website
```

Remote:

```text
origin git@github.com:avenxu822822-collab/SCARLET-VINCI.git
```

The key has been authorized in GitHub.

## Current Contact

Current site contact:

```text
18024832@qq.com
WECHAT: 18024832
```

The live version keeps contact minimal and text-only: email plus WeChat, no social media icons.

## Future Update Suggestions

Likely next updates:

- Replace or refine product descriptions with real formula / concept notes.
- Add more products into the three collection lines.
- Add dedicated sections or pages for Online Collection, Custom Formulation, and Salon Collection.
- Add stronger registered logo assets if new official files are provided.
- Add more studio/process imagery if white/gray background style is preserved.
- Add bilingual copy polish.
- Add custom domain polish / SEO metadata / Open Graph preview image.
- Consider analytics later.

## Instructions For Future AI Sessions

At the start of a future update session, read:

```text
/Users/avenxu/Documents/New project/PROJECT_CONTEXT.md
/Users/avenxu/Documents/New project/README.md
```

Then inspect:

```text
/Users/avenxu/Desktop/SCARLET_VINCI_Website_Assets/00_Inbox
```

Do not redesign from scratch unless explicitly requested. Continue from the current SCARLET VINCI live site direction.
