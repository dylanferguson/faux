const fs = require("fs");
const path = require("path");

const globby = require("globby");
const prettier = require("prettier");

(async () => {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc");

  const pages = await globby(["out/**/*.html", "!out/_next/**/*"]);
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page) => {
        const path = page.replace(/^out/, "").replace("index.html", "");

        return `
                <url>
                    <loc>${`https://faux.digital${path}`}</loc>
                </url>
            `;
      })
      .join("")}
    </urlset>
`;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  fs.writeFileSync(path.join(__dirname, "../out/sitemap.xml"), formatted);
})();
