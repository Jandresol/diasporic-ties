# Diasporic Ties: Visualizing the Black Diaspora Through Artifacts

Interactive network visualization exploring connections between objects, artworks, and cultural items across the Black diaspora. Created for WOMGEN 1471: Art, Culture, and the Global Struggle for Black Liberation.

## Concept

"The Black diaspora is built through artifacts. It is the elements within them that form our invisible ties."

Each artifact node connects to others through thematic, historical, geographic, and spiritual relationships. Users navigate the web by clicking nodes to explore details and edges to reveal narratives between objects.

## Visualization

### Elements (Color-Coded Categories)
- **Water** — Migration, travel, displacement, survival  
- **Root** — Origin, grounding, ancestral ties  
- **Ember** — Resistance, heat, revolution, passion  
- **Breath** — Spirit, presence, voice, intangibility  
- **Thread** — Connection, continuity, weaving, narrative  
- **Aether** — Transcendence, the immaterial, collective consciousness  

### Design
- **Kente-pattern top bar** — References Ghanaian textile traditions as visual anchor  
- **Dark interface** with warm ochre, terracotta, and muted earth tones  
- **Node-link diagram** visualizing artifact connections as curved edges  
- **Interactive legend** to filter by element  
- **Side panel** showing artifact metadata and related connections  
- **Edge details** revealing narratives and thematic relationships  

## Tech Stack

- Vanilla JavaScript (no frameworks)
- HTML5 Canvas (ambient background gradient)
- SVG (interactive node-link diagram and animations)
- Google Fonts (Playfair Display serif + Space Mono monospace)
- CSS custom properties for theming and responsive layout

## Features

- **Clickable nodes** — Open side panel with artifact details (name, date, geo-location, image, description)
- **Clickable edges** — Reveal connection narrative in bottom flash panel  
- **Nested highlighting** — Related nodes brighten; others desaturate  
- **Element filtering** — Toggle categories on/off from legend  
- **Responsive canvas** — Redraws on window resize  
- **Intro screen** — Fade-in thesis statement on load  
- **Ambient responsiveness** — Node labels reflow; canvas scales  

## Data Structure

Each artifact node contains:
- `id` — Unique identifier
- `name` — Artifact or artwork title
- `type` — Category (e.g., "Textile", "Sculpture", "Performance")
- `elem` — Element category (water, root, ember, etc.)
- `date` — Historical period or creation date
- `desc` — Short description or context
- `geo` — Geographic origin or location
- `img` — Image URL (optional)

Each edge (connection) contains:
- `a`, `b` — Node IDs to connect
- `title` — Connection title
- `body` — Narrative explanation
- `quote` — Optional quote or supporting text

## Files

- `web-viewer.html` — Complete standalone visualization (all HTML, CSS, JS)
- `diaspora-web/` — Data directory (node and edge definitions)

## Usage

Open `web-viewer.html` in any modern browser. No build step or server required.

### Interaction
1. Click **"Enter the Web"** to dismiss intro
2. **Click any node** to open side panel with artifact details
3. **Hover edges** and **click** to reveal narrative connections
4. **Toggle elements** in top-right legend to filter by category
5. **Click again** to deselect and reset highlighting

## Course Context

Built as final project for WOMGEN 1471, exploring how cultural artifacts embody and transmit diaspora identity, resistance, and continuity. The six "element" categories provide a poetic framework for understanding thematic resonances across geography, time, and medium.

## Status

Complete and interactive. Currently viewing artifacts and their invisible ties as a classroom teaching tool.
