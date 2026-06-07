# Wenhao He Personal Homepage

Personal academic homepage for `https://hhhhao123.github.io`, built with Jekyll.

## Local Preview

If Ruby and Bundler are installed, run these commands in this project folder:

```powershell
bundle install
bundle exec jekyll build
```

The compiled website will be generated in `_site/`.

For a local preview server:

```powershell
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

Then open `http://127.0.0.1:4000`.
Keep that terminal open while previewing the site. Press `Ctrl+C` to stop the server.

The pages are also mostly static HTML, so `index.html` can be opened directly for a quick content check, though Jekyll template variables resolve only after a Jekyll build.

This project uses Jekyll 4 for local builds because newer Ruby versions are not compatible with the older Jekyll version pinned by the `github-pages` gem.

## Deploy to GitHub Pages

Create a public repository named:

```text
hhhhao123.github.io
```

Push this project to the repository's `main` branch. GitHub Pages will publish the site at:

```text
https://hhhhao123.github.io
```

If GitHub Pages is not enabled automatically, enable it in the repository settings using the `main` branch as the source.
