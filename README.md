# Public Scripts CDN

This repository serves as a centralized, version-controlled library of JavaScript scripts hosted on **Cloudflare Pages**. It functions as a lightweight, scalable CDN for custom scripts used across multiple websites and projects.

---

## Purpose

- **Host custom JavaScript modules** for internal or external use  
- Provide a **single source of truth** for script versions and updates  
- Leverage Cloudflare’s global CDN for fast, reliable delivery  
- Enable easy script integration with URLs pointing to Cloudflare-hosted files  

---

## Repository Structure

```
public/
└── js/
    ├── project-name/
    │   └── script-file.js
    └── another-project/
        └── another-script.js
└── demos/
    └── example-demo.html
```

- Scripts are organized by project name in subfolders under `/public/js/`  
- Demo/test HTML files are stored under `/public/demos/`  

---

## How Scripts Are Hosted

- Scripts and static assets are deployed via **Cloudflare Pages** connected to this GitHub repository.  
- The live, CDN-hosted URL base is:  
  `https://public-scripts.pages.dev`  

- Example script URL:  

```html
<script src="https://public-scripts.pages.dev/js/project-name/script-file.js"></script>
```

---

## How to Access and Use the Scripts

1. Find the script folder under `/js/` corresponding to the functionality you need.  
2. Reference the script in your HTML or JavaScript by embedding a `<script>` tag with the full Cloudflare Pages URL.  
3. You can call global methods or functions exposed by the scripts after they load.  

---

## Versioning and Organization

- Organize scripts in versioned folders if needed:  

```
/js/project-name/v1/script.js
/js/project-name/v2/script.js
```

- This allows for safe upgrades and backwards compatibility.  

---

## Deployment Workflow

- Push code changes to the GitHub repo.  
- Cloudflare Pages automatically rebuilds and deploys the site.  
- The latest scripts become available instantly on the CDN URLs.  

---

## Support and Contributions

- Feel free to open issues or pull requests for bug fixes, new scripts, or improvements.  
- For questions or usage help, contact the repo maintainer.  

---

## Links

- GitHub Repo: [https://github.com/v0gel/public-scripts](https://github.com/v0gel/public-scripts)  
- Cloudflare Pages Site: [https://public-scripts.pages.dev](https://public-scripts.pages.dev)  

---

*Maintained by v0gel — your personal script CDN.*
