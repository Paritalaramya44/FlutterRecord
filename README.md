# Flutter Academic Record (Static Site)

A clean, professional, and responsive static website to document a 10-week Flutter academic journey.

## Structure
- `index.html` — Hero page with image, name, roll no, and CTA.
- `records.html` — Index listing week 1–10 with titles.
- `week-1.html` ... `week-10.html` — Individual week pages with Date, Questions, Code, and Output.
- `assets/css/style.css` — Shared styles.
- `assets/js/main.js` — Minor interactions.
- `assets/img/` — Place your `profile.jpg` here.

## Usage
1. Put your photo at `assets/img/profile.jpg`.
2. Edit name and roll no in `index.html` (`#student-name`, `#roll-no`).
3. Fill dates and content in each `week-*.html` page.

## Quick Preview (Windows)
Use VS Code Live Server or run a simple server:

```powershell
# Option 1: Python
python -m http.server 8080
# Open http://localhost:8080/d:/Projects/flutter-record/index.html

# Option 2: PowerShell
Start-Process msedge "d:/Projects/flutter-record/index.html"
```
