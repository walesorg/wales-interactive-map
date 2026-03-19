
[README.md](https://github.com/user-attachments/files/26125881/README.md)
# Wales Interactive Map — Leaflet + WordPress

A high-performance interactive map of Wales with 1,962 filterable pins, affiliate-linked popups, and universal search. Built for [wales.org](https://wales.org), the comprehensive travel guide to Wales.

![Leaflet](https://img.shields.io/badge/Leaflet-1.9-green?logo=leaflet)
![Pins](https://img.shields.io/badge/Pins-1%2C962-blue)
![License](https://img.shields.io/badge/License-GPL--2.0-green)
![Version](https://img.shields.io/badge/Version-12-orange)

## What It Does

A fully interactive map of Wales featuring nearly 2,000 location pins across 19 categories — from castles and beaches to restaurants and campsites. Every pin has a rich popup card with descriptions, star ratings, affiliate booking links, and "nearby" suggestions that chain users from pin to pin.

**Live demo:** [wales.org/interactive-map-wales/](https://wales.org/interactive-map-wales/)

## Features

- **1,962 pins** across 19 filterable categories (Castles, Beaches, Walks, Towns, Food & Drink, Wildlife, Activities, Accommodation, Camping, Heritage Railways, Gardens, Museums, Waterfalls, Dog-Friendly, and more)
- **Multi-select category filters** — Toggle multiple categories simultaneously. Pin counts update in real time.
- **Universal search** — Search all pins by name, region, town, city, or venue. Typing "Anglesey" zooms to show all pins in that area. Clicking a specific result zooms to that pin and opens its popup.
- **Rich popup cards** — Each pin opens a card showing the location name, category badge, description, Google rating (where available), a link to the full wales.org guide, and affiliate booking buttons.
- **Nearby suggestions** — Every popup shows 2-3 nearby pins from different categories, creating an exploration chain. Clicking a nearby suggestion pans to that pin and opens its popup.
- **Affiliate integration** — "Book experience" buttons link to [Viator](https://www.viator.com) and "Find accommodation" buttons link to [HolidayCottages.co.uk](https://www.holidaycottages.co.uk), both with full affiliate tracking.
- **Marker clustering** — Uses Leaflet.markercluster to group dense pin areas at low zoom levels, expanding smoothly as users zoom in.
- **Mobile responsive** — Touch-optimised with adaptive popup sizing and filter layout.
- **WordPress compatible** — Runs inside a Gutenberg Custom HTML block with external JS/CSS files. No plugin installation required.

## Architecture

The map is built with three data layers:

1. **170 handcrafted pins** — Curated locations from wales.org content with custom descriptions, guide links, and affiliate URLs
2. **664 Google Places venues** — Restaurants, cafés, pubs, and attractions with Google ratings and review counts
3. **1,132 Google-verified extra pins** — Additional points of interest verified via the Google Places API for accuracy

All data is loaded client-side as static JS files — no server-side API calls, no database queries, no latency.

## File Structure

```
wales-interactive-map/
├── wales-map-app.js              # All map logic — init, filters, search, popups, nearby (40KB)
├── wales-map-style.css           # All styles — filters, popups, search, responsive (6KB)
├── wales-venues.js               # 664 Google Places venue pins (83KB)
├── wales-extra-pins-verified.js  # 1,132 additional verified pins
├── README.md
└── LICENSE
```

## Installation (WordPress)

1. Upload the JS and CSS files to your theme directory (e.g., `wp-content/themes/your-child-theme/`)
2. Create a page in WordPress with a Custom HTML block containing:

```html
<div id="wales-map-container"></div>
<script src="/wp-content/themes/your-child-theme/wales-venues.js?v=12"></script>
<script src="/wp-content/themes/your-child-theme/wales-extra-pins-verified.js?v=12"></script>
<script src="/wp-content/themes/your-child-theme/wales-map-app.js?v=12"></script>
```

3. Add the Leaflet and MarkerCluster libraries to your site header (via WPCode or similar):

```html
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.css" />
<link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.Default.css" />
<script src="https://unpkg.com/leaflet.markercluster@1.5.3/dist/leaflet.markercluster.js"></script>
```

4. If using Perfmatters or similar JS delay plugins, exclude the Leaflet and map scripts from delay.

## Installation (Standalone HTML)

The map can also run as a standalone HTML page without WordPress. Wrap the HTML structure and script tags in a standard HTML document and serve from any web server.

## Performance Notes

- All pin data is static JS — no API calls on page load
- MarkerCluster handles rendering performance for 1,962 simultaneous pins
- Compatible with LiteSpeed Cache (exclude map scripts from UCSS)
- Compatible with Perfmatters (add script filenames to Delay JS exclude list)
- Tested on wales.org alongside a full WordPress stack at 97/100 desktop PageSpeed

## Customisation

**Adding pins:** Each pin is a JavaScript object with `name`, `lat`, `lng`, `cat` (category), `desc`, `url` (guide link), and optional `affiliate` (booking link) properties. Add new objects to the appropriate data file.

**Adding categories:** Categories are defined in the filter configuration at the top of `wales-map-app.js`. Each category has a name, icon, colour, and filter button.

**Changing affiliate links:** Affiliate base URLs are defined as variables at the top of `wales-map-app.js`. Update with your own tracking parameters.

## Background

This map was built as the centrepiece interactive feature of [wales.org](https://wales.org) — a travel platform covering every corner of Wales. The site features comprehensive guides to [Welsh castles](https://wales.org/castles-in-wales/), [beaches](https://wales.org/beaches-in-wales/), [hiking trails](https://wales.org/hiking-in-wales/), [cycling routes](https://wales.org/cycling-in-wales/), [water sports](https://wales.org/water-sports-in-wales/), [dog-friendly destinations](https://wales.org/dog-friendly-wales/), and [holiday accommodation](https://wales.org/hotels-in-wales/).

The interactive map connects all of this content into a single explorable interface, driving users from discovery to booking through affiliate partnerships with Viator, GetYourGuide, and HolidayCottages.co.uk.

## Contributing

Pull requests welcome — especially for additional pin data, new category types, or accessibility improvements. If adapting for a different region, the architecture is designed to be location-agnostic: swap the pin data files and update the initial map centre/zoom in `wales-map-app.js`.

## License

GPL-2.0 — see [LICENSE](LICENSE) for details.

## Author

Built by [Wales.org](https://wales.org) — the definitive travel guide to Wales.
