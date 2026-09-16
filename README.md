# Believe in the Beard

Website for Believe in the Beard, a real-beard Santa serving the Capital
District of New York.

## Structure

- `index.html` — home page
- `services.html` — details on the four visit types (home visits, corporate
  & community events, photo sessions, virtual visits)
- `booking.html` — booking request form
- `contact.html` — contact info + general inquiry form
- `css/style.css` — all styling
- `js/main.js` — mobile nav toggle, booking form service pre-select, footer year
- `images/logo.png` — site logo

Plain HTML/CSS/JS, no build step or framework required.

## Before launch: activate the booking form

The booking and contact forms submit via [Formspree](https://formspree.io),
which delivers form submissions by email without needing a backend server.

1. Create a free Formspree account (suggested: `jasonwdion@gmail.com`).
2. Create a new form and copy its endpoint URL — it looks like
   `https://formspree.io/f/xxxxabcd`.
3. In both `booking.html` and `contact.html`, replace `YOUR_FORM_ID` in the
   `<form action="...">` attribute with your real form ID.
4. In the Formspree dashboard, add `juliedion1@gmail.com` as an additional
   notification recipient for the form (the `_cc` hidden field in both forms
   also targets this address, but multi-recipient support may require a
   paid Formspree plan — check your plan's settings).
5. Test both forms by submitting a real entry and confirming email delivery
   to both addresses.

Until step 3 is done, form submissions will not go anywhere.

## Deploying with GitHub Pages

1. Push this repo to `main` on GitHub.
2. In the repo settings, go to **Pages** and set the source to the `main`
   branch, root folder.
3. Your site will be live at `https://juliedion.github.io/believeinthebeard/`
   (or your custom domain, if you attach one under Pages settings).

## Adding real photos later

Drop new images into `images/` and reference them in the HTML — for
example, replacing the icon emoji in the service cards on `index.html` /
`services.html`, or adding a gallery section to the home page.
