# RateVault

Next.js 15 port of the RateVault static site. Same look, same form-to-sheet integration.

## Quick start

```bash
yarn
yarn dev
```

Then open <http://localhost:3000>.

## Build

```bash
yarn build
yarn start
```

> If you don't have yarn installed, run `npm install -g yarn` first.

## Structure

- `app/` — App Router pages and layouts
  - `(site)/` — route group for pages with full header/footer (home + legal pages)
  - `thanks/` — minimal layout (header only, no footer)
- `components/` — shared React components
- `public/` — static assets (favicon)

## Form submissions

The enquiry form POSTs JSON to a Google Apps Script Web App that appends rows to a Google Sheet. The deployment URL is in `components/EnquiryForm.tsx`. To swap to a different sheet, replace that one constant.
