const fs = require("fs");
const path = require("path");

// Load products
const products = JSON.parse(fs.readFileSync("products.json", "utf8"));
const productTemplate = fs.readFileSync("products/product-template.html", "utf8");
const categoryTemplate = fs.readFileSync("products/category-template.html", "utf8");

// Ensure main folder exists
const productsDir = path.join(__dirname, "products");
if (!fs.existsSync(productsDir)) fs.mkdirSync(productsDir);

// Precompute category mapping
const categoryMap = {};
products.forEach(p => {
  if (!categoryMap[p.category]) categoryMap[p.category] = [];
  categoryMap[p.category].push(p);
});

// Generate product pages
products.forEach(product => {
  let page = productTemplate
    .replaceAll("PRODUCT_TITLE", product.name)
    .replaceAll("PRODUCT_PRICE", product.price.toLocaleString())
    .replaceAll("PRODUCT_DESCRIPTION", product.description || "")
    .replaceAll("PRODUCT_BRAND", product.brand || "")
    .replaceAll("PRODUCT_CATEGORY", product.category || "")
    .replaceAll("PRODUCT_SLUG", product.slug)
    .replaceAll("PRODUCT_WHATSAPP", encodeURIComponent(product.name));

  // Images
  let imagesHTML = (product.images || []).slice(0, 10)
    .map((img,i)=>`<div class="swiper-slide"><img src="${img}" alt="${product.name} - Image ${i+1}" loading="lazy"></div>`).join("\n");
  page = page.replace("PRODUCT_IMAGES", imagesHTML);

  let thumbsHTML = (product.images || []).slice(0, 10)
    .map((img,i)=>`<div class="swiper-slide"><img src="${img}" alt="${product.name} - Thumbnail ${i+1}"></div>`).join("\n");
  page = page.replace("PRODUCT_THUMBNAILS", thumbsHTML);

  // Features
  let featuresHTML = (product.features || []).map(f=>`<li>${f}</li>`).join("\n");
  page = page.replace("PRODUCT_FEATURES", featuresHTML);

  // Specs
  let specsHTML = "";
  if(product.specs){
    for(const key in product.specs){
      specsHTML += `<tr><td>${key}</td><td>${product.specs[key]}</td></tr>`;
    }
  }
  page = page.replace("PRODUCT_SPECS", specsHTML);

  // Related
  let relatedHTML = (categoryMap[product.category] || [])
    .filter(p=>p.slug!==product.slug)
    .slice(0,4)
    .map(r=>`<div class="product-card">
      <a href="${r.category}/${r.slug}.html">
        <img src="${r.images?.[0]||""}" alt="${r.name}" loading="lazy">
        <h3>${r.name}</h3>
        <p class="price">KSh ${r.price.toLocaleString()}</p>
      </a>
    </div>`).join("\n");
  page = page.replace("RELATED_PRODUCTS", relatedHTML);

  // Save product HTML
  const productDir = path.join(productsDir, product.category);
  if(!fs.existsSync(productDir)) fs.mkdirSync(productDir, { recursive:true });
  fs.writeFileSync(path.join(productDir, `${product.slug}.html`), page);
});

// Generate category index pages with pagination
const pageSize = 20;

for(const category in categoryMap){
  const items = categoryMap[category];
  const totalPages = Math.ceil(items.length/pageSize);
  const categoryDir = path.join(productsDir, category);
  if(!fs.existsSync(categoryDir)) fs.mkdirSync(categoryDir,{recursive:true});

  for(let pageNum=1; pageNum<=totalPages; pageNum++){
    const start = (pageNum-1)*pageSize;
    const end = start + pageSize;
    const pageItems = items.slice(start,end);

    // Product cards HTML
    const cardsHTML = pageItems.map(p=>`<div class="product-card">
      <a href="${p.category}/${p.slug}.html">
        <img src="${p.images?.[0]||""}" alt="${p.name}" loading="lazy">
        <h3>${p.name}</h3>
        <p class="price">KSh ${p.price.toLocaleString()}</p>
      </a>
    </div>`).join("\n");

    // Pagination links
    let paginationHTML = "";
    if(totalPages>1){
      if(pageNum>1) paginationHTML += `<a href="${pageNum-1===1?'index.html':'page-'+(pageNum-1)+'.html'}" class="prev">Previous</a>`;
      if(pageNum<totalPages) paginationHTML += `<a href="page-${pageNum+1}.html" class="next">Next</a>`;
    }

    let pageHTML = categoryTemplate
      .replaceAll("PRODUCT_CATEGORY", category)
      .replace("PRODUCT_CARDS", cardsHTML)
      .replace("PAGINATION_LINKS", paginationHTML);

    const fileName = pageNum===1?'index.html':`page-${pageNum}.html`;
    fs.writeFileSync(path.join(categoryDir, fileName), pageHTML);
  }
}

console.log(`✅ Generated ${products.length} product pages + category indexes successfully!`);