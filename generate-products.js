const fs = require("fs");

const products = JSON.parse(fs.readFileSync("products.json","utf8"));

const template = fs.readFileSync("products/product-template.html","utf8");

products.forEach(product => {

let page = template
.replaceAll("PRODUCT_TITLE", product.name)
.replaceAll("PRODUCT_PRICE", product.price.toLocaleString())
.replaceAll("PRODUCT_IMAGE", product.images[0])
.replaceAll("PRODUCT_DESCRIPTION", product.description || "")
.replaceAll("PRODUCT_BRAND", product.brand || "")
.replaceAll("PRODUCT_CATEGORY", product.category || "");

/* Generate Features List */

let featuresHTML = "";

if(product.features){
featuresHTML = product.features
.map(f => `<li>${f}</li>`)
.join("\n");
}

page = page.replace("PRODUCT_FEATURES", featuresHTML);


/* Generate Specifications Table */

let specsHTML = "";

if(product.specs){

for(const key in product.specs){

specsHTML += `
<tr>
<td>${key}</td>
<td>${product.specs[key]}</td>
</tr>
`;

}

}

page = page.replace("PRODUCT_SPECS", specsHTML);


/* Save Product Page */

fs.writeFileSync(`products/${product.slug}.html`, page);

});

console.log("✅ Product pages generated successfully!");