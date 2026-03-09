'use strict';

/* =====================================================
   PRODUCT DATA
===================================================== */

const products = [
{
id:1,
slug:"dell-xps-13-plus",
name:"Dell XPS 13 Plus – Intel Core i7, 16GB RAM",
category:"Laptops",
tags:["Dell","XPS"],
price:185000,
oldPrice:210000,
rating:4.8,
reviews:94,
images:["https://images.unsplash.com/photo-1593642632823-8f785ba67e45"]
},
{
id:2,
slug:"macbook-air-m2",
name:"Apple MacBook Air M2 – 8GB RAM",
category:"Laptops",
tags:["Apple","MacBook"],
price:135000,
oldPrice:150000,
rating:4.9,
reviews:120,
images:["https://images.unsplash.com/photo-1517336714731-489689fd1ca8"]
},
{
id:3,
slug:"iphone-15-pro",
name:"Apple iPhone 15 Pro – 128GB",
category:"Smartphones",
tags:["Apple","iPhone"],
price:145000,
oldPrice:165000,
rating:4.9,
reviews:300,
images:["https://images.unsplash.com/photo-1695048133142-1a20484d2569"]
},
{
id:4,
slug:"samsung-s24-ultra",
name:"Samsung Galaxy S24 Ultra",
category:"Smartphones",
tags:["Samsung","Galaxy"],
price:155000,
oldPrice:175000,
rating:4.8,
reviews:200,
images:["https://images.unsplash.com/photo-1610945415295-d9bbf067e59c"]
},
{
id:5,
slug:"sony-wh1000xm5",
name:"Sony WH-1000XM5 Noise Cancelling Headphones",
category:"Headphones",
tags:["Sony","Wireless"],
price:45000,
oldPrice:52000,
rating:4.7,
reviews:128,
images:["https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb"]
},
{
id:6,
slug:"canon-eos-r50",
name:"Canon EOS R50 Mirrorless Camera",
category:"Cameras",
tags:["Canon","Mirrorless"],
price:85000,
oldPrice:95000,
rating:4.7,
reviews:80,
images:["https://images.unsplash.com/photo-1502920917128-1aa500764cbd"]
}
];


/* =====================================================
   STATE
===================================================== */

let cart = JSON.parse(localStorage.getItem("cart")) || [];


/* =====================================================
   UTILITIES
===================================================== */

function saveCart(){
localStorage.setItem("cart",JSON.stringify(cart));
}

function showToast(message){

let toast=document.getElementById("toast");

if(!toast){

toast=document.createElement("div");
toast.id="toast";

toast.style.cssText=`
position:fixed;
bottom:90px;
right:20px;
background:#1A4D2E;
color:white;
padding:12px 20px;
border-radius:6px;
opacity:0;
transition:.3s;
z-index:999;
`;

document.body.appendChild(toast);
}

toast.innerText=message;
toast.style.opacity="1";

setTimeout(()=>{
toast.style.opacity="0";
},2000);

}

function renderRating(rating,reviews){

let stars="";

for(let i=1;i<=5;i++){

if(i<=Math.floor(rating)) stars+=`<i class="fas fa-star"></i>`;
else stars+=`<i class="far fa-star"></i>`;

}

return `<div class="product-rating">${stars} <span>(${reviews})</span></div>`;

}


/* =====================================================
   PRODUCT RENDERING
===================================================== */

const bestSellersGrid=document.getElementById("bestSellersGrid");

function renderProductCard(product){

const discount=product.oldPrice
?Math.round(((product.oldPrice-product.price)/product.oldPrice)*100)
:0;

return `
<div class="product-card">

${discount>0?`<div class="discount-badge">-${discount}%</div>`:""}

<a href="products/${product.slug}.html">
<div class="product-image">
<img src="${product.images[0]}" alt="${product.name}" loading="lazy">
</div>
</a>

<div class="product-tags">${product.tags.join(", ")}</div>

<div class="product-title">${product.name}</div>

${renderRating(product.rating,product.reviews)}

<div class="product-price">KSh ${product.price.toLocaleString()}</div>

<button class="btn-primary add-to-cart" data-id="${product.id}">
<i class="fas fa-shopping-cart"></i> Add
</button>

</div>
`;

}

function renderProducts(list){

if(!bestSellersGrid) return;

bestSellersGrid.innerHTML=list.map(renderProductCard).join("");

}


/* =====================================================
   CART
===================================================== */

function updateCartUI(){

const count=cart.reduce((a,b)=>a+b.quantity,0);
const total=cart.reduce((a,b)=>a+(b.price*b.quantity),0);

const cartCount=document.getElementById("cartCount");
const cartTotal=document.getElementById("cartTotal");
const sidebarTotal=document.getElementById("cartSidebarTotal");

if(cartCount) cartCount.innerText=count;
if(cartTotal) cartTotal.innerText=`KSh ${total.toLocaleString()}`;
if(sidebarTotal) sidebarTotal.innerText=`Total: KSh ${total.toLocaleString()}`;

renderCartItems();

}

function renderCartItems(){

const container=document.getElementById("cartItems");
if(!container) return;

if(cart.length===0){

container.innerHTML=`<p style="text-align:center;color:var(--text-light)">Your cart is empty.</p>`;
return;

}

container.innerHTML=cart.map(item=>`

<div class="cart-item">

<img src="${item.image}" alt="${item.name}">

<div class="cart-item-details">

<div class="cart-item-title">${item.name}</div>

<div class="cart-item-price">
KSh ${item.price.toLocaleString()} × ${item.quantity}
</div>

<span class="cart-item-remove" data-id="${item.id}">
Remove
</span>

</div>

</div>

`).join("");

}

function addToCart(product,qty=1){

const existing=cart.find(i=>i.id===product.id);

if(existing){
existing.quantity+=qty;
}
else{

cart.push({
id:product.id,
name:product.name,
price:product.price,
image:product.images[0],
quantity:qty
});

}

saveCart();
updateCartUI();
showToast("Added to cart");

}

function removeFromCart(productId){

cart=cart.filter(i=>i.id!==productId);

saveCart();
updateCartUI();
showToast("Item removed");

}


/* =====================================================
   SEARCH
===================================================== */

const searchInput=document.getElementById("searchInput");
const searchBtn=document.getElementById("searchBtn");

function searchProducts(){

const term=searchInput.value.trim().toLowerCase();

if(term===""){
renderProducts(products);
return;
}

const filtered=products.filter(p=>
p.name.toLowerCase().includes(term)||
p.category.toLowerCase().includes(term)||
p.tags.some(tag=>tag.toLowerCase().includes(term))
);

if(filtered.length===0){

bestSellersGrid.innerHTML=`
<p style="padding:40px;text-align:center;color:var(--text-light)">
No products found for "<strong>${term}</strong>"
</p>`;

return;

}

renderProducts(filtered);

}

if(searchBtn) searchBtn.addEventListener("click",searchProducts);

if(searchInput){

searchInput.addEventListener("keydown",(e)=>{
if(e.key==="Enter") searchProducts();
});

searchInput.addEventListener("input",()=>{

const term=searchInput.value.toLowerCase();

const filtered=products.filter(p=>
p.name.toLowerCase().includes(term)||
p.tags.some(tag=>tag.toLowerCase().includes(term))
);

renderProducts(filtered);

});

}


/* =====================================================
   CATEGORY FILTER
===================================================== */

const categoryFilter=document.getElementById("categoryFilter");

if(categoryFilter){

categoryFilter.addEventListener("change",(e)=>{

const cat=e.target.value;

if(cat==="all") renderProducts(products);
else renderProducts(products.filter(p=>p.category===cat));

});

}


/* =====================================================
   SWIPERS
===================================================== */

function initTrendingSwiper(){

const wrapper=document.getElementById("trendingSwiperWrapper");
if(!wrapper) return;

wrapper.innerHTML=products.slice(0,6).map(p=>`

<div class="swiper-slide">

<a href="products/${p.slug}.html">

<img src="${p.images[0]}" alt="${p.name}">

<div class="product-title">${p.name}</div>

<div class="product-price">
KSh ${p.price.toLocaleString()}
</div>

</a>

</div>

`).join("");

new Swiper(".trending-swiper",{

slidesPerView:2,
spaceBetween:14,
loop:true,
grabCursor:true,

pagination:{
el:".trending-swiper .swiper-pagination",
clickable:true
},

autoplay:{
delay:3500,
disableOnInteraction:false
},

breakpoints:{
640:{slidesPerView:3},
900:{slidesPerView:4},
1200:{slidesPerView:5}
}

});

}

function initDealsSwiper(){

new Swiper(".deals-swiper",{

slidesPerView:1,
loop:true,

autoplay:{
delay:4000
},

pagination:{
el:".deals-swiper .swiper-pagination",
clickable:true
}

});

}


/* =====================================================
   EVENTS
===================================================== */

document.addEventListener("click",(e)=>{

const addBtn=e.target.closest(".add-to-cart");

if(addBtn){

const id=addBtn.dataset.id;
const product=products.find(p=>p.id==id);

if(product) addToCart(product);

}

if(e.target.classList.contains("cart-item-remove")){

const id=parseInt(e.target.dataset.id);
removeFromCart(id);

}

});


/* =====================================================
   CART SIDEBAR
===================================================== */

const cartPreview=document.getElementById("cartPreview");
const cartSidebar=document.getElementById("cartSidebar");
const cartClose=document.getElementById("cartClose");
const overlay=document.getElementById("overlay");

function openCart(){

cartSidebar.classList.add("open");
overlay.classList.add("show");
document.body.style.overflow="hidden";

}

function closeCart(){

cartSidebar.classList.remove("open");
overlay.classList.remove("show");
document.body.style.overflow="";

}

if(cartPreview) cartPreview.addEventListener("click",openCart);
if(cartClose) cartClose.addEventListener("click",closeCart);
if(overlay) overlay.addEventListener("click",closeCart);


/* =====================================================
   INIT
===================================================== */

renderProducts(products);

initTrendingSwiper();
initDealsSwiper();

updateCartUI();