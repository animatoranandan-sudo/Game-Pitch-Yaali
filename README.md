# YAALI - SHADOWS OF THE WING
## Game Pitch Website

A premium, cinematic game pitch website for YAALI - SHADOWS OF THE WING, a mythic Indian action-adventure game set in 6th century South India.

## 🎮 About the Game

**Genre:** Narrative Action-Adventure · Mythic Realism  
**Setting:** 6th-century South India during the Irunda Kaalam  
**Tagline:** When fear takes form, wings rise.

Experience stealth, parkour, and Yaali transformations as you become the Winged Heir and shape fear into power.

## 🌟 Website Features

- **Cinematic Design:** Dark stone backgrounds with bronze/gold accents inspired by ancient Dravidian aesthetics
- **Particle Animations:** Atmospheric floating particles for immersive experience
- **Parallax Scrolling:** Depth and movement as you scroll through the story
- **Responsive Design:** Optimized for desktop, tablet, and mobile devices
- **Interactive Timeline:** Expandable story phases with CUTSCENE/GAMEPLAY tags
- **Smooth Navigation:** Sticky navbar with smooth scroll to sections

## 📁 Project Structure

```
.
├── index.html      # Main HTML structure
├── styles.css      # Comprehensive styling with Dravidian aesthetics
├── script.js       # Interactive features and animations
└── README.md       # This file
```

## 🚀 Quick Start

### Option 1: Open Directly
Simply open `index.html` in your web browser.

### Option 2: Local Server (Recommended)
If you have Python installed:

```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

Or with Node.js:

```bash
npx serve
```

### Option 3: Live Server (VS Code)
1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

## 🎨 Design System

### Color Palette
- **Background:** Dark stone (#1a1410, #0a0806)
- **Accents:** Bronze (#cd7f32), Gold (#d4af37)
- **Text:** Light beige (#f5f5dc)

### Typography
- **Headings:** Cinzel (Google Fonts)
- **Body:** Cormorant Garamond (Google Fonts)

### Key Sections
1. **Hero Section** - Full-screen introduction with CTA buttons
2. **Game Overview** - Genre, setting, and core experience
3. **The World** - Five key locations with gradient placeholders
4. **Core Mythology** - Three Yaali forms (Lion, Elephant, Horse)
5. **Game Loop** - Three-step gameplay cycle
6. **The Story** - Expandable timeline from Prologue to Act 2
7. **Game Mechanics** - Five core mechanics
8. **Characters** - Five main characters
9. **Key Features** - Six unique selling points
10. **Trailer Breakdown** - 60-second teaser structure
11. **Downloads & Contact** - GDD, pitch deck, and contact info

## 🖼️ Adding Your Own Images

The website currently uses gradient placeholders. To add your own images:

### Hero Background
Replace the inline SVG in `styles.css` (line ~225) with:
```css
background: 
    linear-gradient(rgba(10, 8, 6, 0.7), rgba(10, 8, 6, 0.8)),
    url('path/to/your/hero-image.jpg');
```

### Location Images
Update the inline styles in `index.html` for each `.location-image` div:
```html
<div class="location-image" style="background-image: url('path/to/location.jpg');"></div>
```

### Character Portraits
Update the inline styles for each `.character-portrait` div:
```html
<div class="character-portrait" style="background-image: url('path/to/character.jpg');"></div>
```

## 🌐 Deployment

### GitHub Pages
1. Push this repository to GitHub
2. Go to Settings → Pages
3. Select branch (main/master) and root folder
4. Your site will be live at: `https://yourusername.github.io/repository-name/`

### Other Hosting Options
- **Netlify:** Drag and drop the folder
- **Vercel:** Connect your GitHub repository
- **Cloudflare Pages:** Connect your GitHub repository

## 📱 Responsive Breakpoints

- **Desktop:** 1400px+ (full experience)
- **Tablet:** 768px - 1399px (adjusted layouts)
- **Mobile:** < 768px (stacked layouts, hamburger menu)

## ✨ Interactive Features

- **Smooth Scroll:** Click navigation links for smooth scrolling
- **Expandable Timeline:** Click phase headers to expand/collapse story sections
- **Hover Effects:** Cards lift and glow on hover
- **Particle System:** Animated floating particles in background
- **Mobile Menu:** Hamburger menu for mobile devices
- **Easter Egg:** Click the logo 5 times for a surprise!

## 🛠️ Customization

### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --color-bronze: #cd7f32;
    --color-gold: #d4af37;
    /* Add your custom colors */
}
```

### Modify Content
All content is in `index.html`. Simply edit the text within the HTML tags.

### Add New Sections
Follow the existing section structure:
```html
<section class="section" id="your-section">
    <div class="container">
        <h2 class="section-title">Your Title</h2>
        <!-- Your content -->
    </div>
</section>
```

## 📄 License

This website template is created for the YAALI game pitch. All game content and intellectual property belong to the respective owners.

## 🎯 Next Steps

1. **Add Real Images:** Replace gradient placeholders with actual game artwork
2. **Link PDFs:** Add your GDD and pitch deck PDFs to the download section
3. **Update Contact:** Change the email in the contact section
4. **Add Analytics:** Consider adding Google Analytics or similar
5. **SEO Optimization:** Update meta tags with final content
6. **Social Media:** Add Open Graph images for better social sharing

## 📞 Support

For questions or support regarding this website template, please refer to the documentation or contact the development team.

---

**Built with:** HTML5, CSS3, Vanilla JavaScript  
**Fonts:** Google Fonts (Cinzel, Cormorant Garamond)  
**No frameworks required** - Pure web technologies for maximum compatibility

**When fear takes form, wings rise.** 🦅
