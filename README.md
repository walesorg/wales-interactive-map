# Wales Interactive Map

> An open-source interactive map of Wales with **1,963 hand-picked locations** across 18 filterable categories. Embeddable on any travel site, blog or DMO page in one line of HTML. Partner-safe: when embedded on a third-party site, our affiliate links automatically hide so the map doesn't compete with the host site's own bookings.

[![Live demo](https://img.shields.io/badge/Live_demo-wales.org-2563eb?style=flat-square)](https://wales.org/interactive-map-wales/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)
![Pins](https://img.shields.io/badge/Pins-1%2C963-success?style=flat-square)
![Categories](https://img.shields.io/badge/Categories-18-orange?style=flat-square)

**Live demo:** [wales.org/interactive-map-wales](https://wales.org/interactive-map-wales/)

**Free embed:** [wales.org/embed](https://wales.org/embed/)

**Embed snippet:** [Skip to the iframe code](#embed-on-your-own-site)

![Wales Interactive Map embed — partner-safe view at wales.org/embed/ showing the dark header with "Designed by Wales.org" attribution, the 18-category filter bar, marker-clustered pins across mid-Wales, the categories legend panel, and the clean footer with no affiliate buttons](wales-map-embed.png)

---

## Partner-safe by design

The full version with affiliate links runs only on `wales.org/interactive-map-wales/` itself.

This embed is built for the rest of the travel industry — cottage operators, experience-day providers, DMOs, holiday-let owners, travel bloggers, regional tourism boards.

The version on wales.org has affiliate links in pin popups (Viator for experiences, HolidayCottages.co.uk for stays). That's how we monetise. But the moment we made the map embeddable, it became obvious that a Welsh holiday-cottage operator embedding our map on their listings page would effectively be putting competitor affiliate links on their own site. Same problem for any experience-day provider against the Viator buttons.

So when the map is embedded on a third-party site, or loaded from `wales.org/embed/` directly, it automatically:

- Hides our affiliate buttons in pin popups
- Hides our header booking CTAs ("Book Experiences" / "Find a Cottage")
- Keeps the "Read More" link to the relevant Wales.org guide — that's the legitimate quid pro quo for free use, and it gives the host site valuable contextual content for visitors
- Keeps a small attribution footer that doesn't intrude on the host's branding

Detection is automatic via `window.self !== window.top` plus a URL-path check. No configuration needed from anyone embedding it. There's also a CSS fallback that hides any affiliate buttons even if the JavaScript ever fails — belt-and-braces partner safety.

---

## Why we open-sourced this

Most "maps of Wales" online are printable PDFs, Google My Maps with thirty pins, or paywalled tourism-board widgets that won't let you customise anything. Welsh tourism is a £6bn+ industry and the web infrastructure around it should be as open as the trails.

So we shipped:

- A free embeddable map any travel site can drop in with one block of HTML
- The full codebase, so anyone can fork it for Cornwall, the Highlands, the Lake District, or anywhere else
- The pin dataset as version-controlled JS, so contributors can submit corrections and hidden gems via PR

If this saves another regional travel site a year of dev work, it was worth open-sourcing.

---

## What it does

A fully interactive map of Wales featuring 1,963 location pins across 18 categories — castles, beaches, hiking trails, restaurants, campsites, dog-friendly walks, heritage railways, and more. Every pin opens a rich popup card with description, Google rating where available, a link to the full Wales.org guide, and 2–3 "nearby" suggestions that chain visitors from pin to pin.

### Features

- **1,963 pins across 18 filterable categories** — Castles, Beaches, Hiking, Cycling, Water Sports, Wildlife, Food & Drink, Museums, Gardens, Festivals, Family, Towns, Railways, Adventure, Restaurants, Pubs, Cafes
- **Multi-select category filters** with pin counts that update in real time
- **Universal search** by pin name, region, town, city or venue. Typing "Anglesey" zooms to show all pins in the area; clicking a result opens its popup
- **Rich popup cards** with name, category badge, description, Google rating, guide link and (where appropriate) booking buttons
- **"Nearby" suggestions** — every popup shows 2–3 nearby pins from different categories, creating a natural exploration chain
- **Marker clustering** via Leaflet.markercluster, expanding smoothly as users zoom in
- **Mobile responsive** — touch-optimised popup sizing and adaptive filter layout
- **Fast** — all pin data is static JS, no API calls or database queries on page load
- **Partner-safe** — automatic affiliate-button hiding in embed contexts (see above)
- **WordPress-ready** — runs inside a Gutenberg Custom HTML block, no plugin needed
- **Standalone-ready** — works as a static HTML page on any web server, no backend required
- - **Fullscreen mode** — expandable to full-viewport via Leaflet.fullscreen; works inside iframe embeds without requiring `allow="fullscreen"` on the host page

---

## Embed on your own site

Paste this into any HTML editor, WordPress Custom HTML block, Squarespace code block, Wix embed widget, Webflow embed, or any website builder that accepts custom HTML.

```html
<iframe
  src="https://wales.org/embed/"
  width="100%"
  height="750"
  style="border: 1px solid #e2e8f0; border-radius: 8px;"
  title="Interactive Map of Wales"
  loading="lazy"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen>
</iframe>
<p style="text-align:center; font-size:14px; margin-top:8px; font-family:sans-serif;">
  Powered by the
  <a href="https://wales.org/interactive-map-wales/" target="_blank" rel="noopener">Interactive Map of Wales</a>
  from Wales.org
</p>
```

You'll get all 1,963 pins, all 18 filters, and the partner-safe popup behaviour. Free to use with attribution.

---

## Self-host the map

If you want to run the map on your own infrastructure, customise the styling, or fork it for a different region, here's the full install.

### File structure

```
wales-interactive-map/
├── .gitignore                    Files Git should ignore
├── wales-map-app.js              Map logic — init, filters, search, popups, nearby
├── wales-map-style.css           Styles — filters, popups, search, responsive
├── wales-venues.js               Google Places venue pins
├── wales-extra-pins-verified.js  Additional verified pins
├── wales-premium-pins.js         Featured business pins
├── Wales-Interactive-Map.png     README screenshot
├── README.md
└── LICENSE
```

### Architecture

The map is built with three pin-data layers, all loaded client-side as static JS:

1. Approximately 170 handcrafted pins curated from Wales.org content with custom descriptions, guide links and affiliate URLs
2. Google Places venue pins (restaurants, cafés, pubs, attractions) with ratings and review counts
3. Additional Google-verified points of interest

No server-side API calls, no database queries, no latency.

### WordPress install

1. Upload the JS and CSS files to your theme directory (for example `wp-content/themes/your-child-theme/`).

2. Create a page with a Custom HTML block containing:

   ```html
   <div id="wales-map-container"></div>
   <script src="/wp-content/themes/your-child-theme/wales-venues.js?v=14"></script>
   <script src="/wp-content/themes/your-child-theme/wales-extra-pins-verified.js?v=14"></script>
   <script src="/wp-content/themes/your-child-theme/wales-premium-pins.js?v=14"></script>
   <script src="/wp-content/themes/your-child-theme/wales-map-app.js?v=14"></script>
   ```

3. Add Leaflet and MarkerCluster to your site header (via WPCode or similar):

   ```html
   <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
   <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
   <link rel="stylesheet" href="https://unpkg.com/leaflet.fullscreen@3.0.2/Control.FullScreen.css" />
   <script src="https://unpkg.com/leaflet.fullscreen@3.0.2/Control.FullScreen.js"></script>
   <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.css" />
   <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.Default.css" />
   <script src="https://unpkg.com/leaflet.markercluster@1.5.3/dist/leaflet.markercluster.js"></script>
   ```

4. If using Perfmatters or a similar JS-delay plugin, exclude the Leaflet and map scripts from delay.

### Standalone HTML install

Wrap the container `<div>` and script tags in a standard HTML document and serve from any web server. The standalone embed at `wales.org/embed/` is a working example — view source for a complete reference implementation.

### Performance notes

- Pin data is static JS, no API calls on page load
- MarkerCluster handles rendering performance for 1,963 simultaneous pins
- Standalone embed at `wales.org/embed/` bypasses WordPress entirely, so it isn't affected by CMS updates, plugin conflicts or theme changes
- Compatible with LiteSpeed Cache (exclude map scripts from UCSS)
- Compatible with Perfmatters (add script filenames to Delay JS exclude list)
- Built and tested in production on wales.org alongside a full WordPress stack with caching and image-optimisation plugins

### Security and accessibility

- All outbound links use `rel="noopener"`
- The recommended embed iframe sets `referrerpolicy="strict-origin-when-cross-origin"` so partners get clean referrer data
- Map container and header use proper ARIA roles
- Filter buttons and search input are keyboard navigable

---

## Customisation

**Adding pins.** Each pin is a JavaScript object with `name`, `lat`, `lng`, `cat` (category), `desc`, `url` (guide link) and optional `affiliate` (booking link) properties. Add new objects to the appropriate data file:

```js
{
  name: "Conwy Castle",
  lat: 53.2806,
  lng: -3.8252,
  cat: "castle",
  desc: "13th-century UNESCO World Heritage fortress.",
  url: "https://wales.org/things-to-do-in-wales/attractions/castles/",
  affiliate: "https://www.viator.com/..."
}
```

**Adding categories.** Categories are defined in the filter configuration at the top of `wales-map-app.js`. Each has a name, icon, colour and filter button.

**Changing affiliate links.** Base URLs are defined as variables at the top of `wales-map-app.js`. Replace with your own tracking parameters. Note: the partner-safe detection logic will hide whichever affiliate URLs you set when the map is embedded.

**Forking for another region.** The architecture is location-agnostic. Swap the pin data files and update the initial map centre and zoom in `wales-map-app.js` and you have an interactive map of Cornwall, Devon, the Scottish Highlands, Provence, Tuscany — wherever.

---

## Use cases

- Tourism boards and DMOs wanting an embeddable regional map without building from scratch
- Travel bloggers who want a richer "places to visit" page than Google My Maps allows
- Holiday-let and cottage operators displaying nearby attractions on listing pages, without sending visitors to a competitor
- Experience-day operators showing what's near their tour locations
- Hospitality and tourism courses using it as a real-world open dataset
- Forks for other regions — if you adapt this somewhere else, [open an issue](https://github.com/walesorg/wales-interactive-map/issues) so we can feature it

---

## Contributing

Pull requests welcome — particularly for:

- New pins (hidden gems, recently opened venues, places we missed)
- Corrections (wrong coordinates, outdated info, closed venues)
- Accessibility data (wheelchair access, dog-friendly status, parking info)
- Welsh translations (Cymraeg location names and descriptions)
- Bug fixes
- Forks adapted for other regions — we'd love to feature them

Spotted something but don't want to open a PR? [Open an issue](https://github.com/walesorg/wales-interactive-map/issues/new) — it takes 30 seconds.

If you fork this for a different region, drop us a line at [nicholas@wales.org](mailto:nicholas@wales.org).

---

## License

Released under the **MIT License** — see [LICENSE](LICENSE) for details. Free to use, modify and redistribute, including in commercial and proprietary projects. The only requirement is keeping the copyright notice.

---

## About

Built and maintained by [**Nicholas Barrett**](https://wales.org/author/nicholas-barrett/) and the [Wales.org](https://wales.org) team.

Pembrokeshire-born travel writer and founder of Wales.org. Born in Haverfordwest, now based in Hertfordshire — covering Welsh castles, national parks, festivals and family staycations across all 22 Welsh counties.

Pin data curated from local knowledge, OpenStreetMap, Cadw, Visit Wales and contributor submissions. Map tiles © OpenStreetMap contributors.

### Stay connected

- **Website:** [wales.org](https://wales.org)
- **Email:** [nicholas@wales.org](mailto:nicholas@wales.org)
- **LinkedIn:** [Nicholas Barrett](https://www.linkedin.com/in/nicholas-barrett-wales/)
- **Newsletter:** [Discover Wales on Substack](https://discoverwales.substack.com/)

If this project is useful to you, the kindest thing you can do is star the repo — it helps other travel-tech builders find it.

---

*Croeso i Gymru.*
