/**
 * Boost Electronics – Laptops Page
 * Adapted from headphones.js – same features, laptop data.
 */

'use strict';

// ---------- PRODUCT DATA ----------
const laptops = [
  {
    id: 301,
    name: "Dell XPS 13 Plus (2024) – Intel Core i7, 16GB RAM, 512GB SSD",
    category: "Laptops",
    brand: "dell",
    tags: ["Dell", "XPS", "Ultrabook", "Intel Core i7"],
    price: 185000,
    oldPrice: 210000,
    stock: "In stock",
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=400&fit=crop"
    ],
    breadcrumb: "Home / Laptops / Dell",
    specs: [
      { feat: "Processor", spec: "Intel Core i7-1360P" },
      { feat: "RAM", spec: "16GB LPDDR5" },
      { feat: "Storage", spec: "512GB NVMe SSD" },
      { feat: "Display", spec: "13.4-inch 4K+ Touch" },
      { feat: "Battery", spec: "Up to 12 hours" }
    ],
    delivery: "1-2 days • 2 year warranty",
    description: "The Dell XPS 13 Plus combines a sleek design with powerful performance.",
    rating: 4.8,
    reviews: 94
  },
  {
    id: 302,
    name: "HP Spectre x360 14 – Intel Core i5, 8GB RAM, 256GB SSD",
    category: "Laptops",
    brand: "hp",
    tags: ["HP", "Spectre", "Convertible", "Intel Core i5"],
    price: 125000,
    oldPrice: 145000,
    stock: "In stock",
    images: ["https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop"],
    breadcrumb: "Home / Laptops / HP",
    specs: [
      { feat: "Processor", spec: "Intel Core i5-1335U" },
      { feat: "RAM", spec: "8GB LPDDR4x" },
      { feat: "Storage", spec: "256GB NVMe SSD" },
      { feat: "Display", spec: "14-inch OLED Touch" },
      { feat: "Battery", spec: "Up to 10 hours" }
    ],
    delivery: "1-2 days",
    description: "Versatile 2-in-1 laptop with stunning OLED display.",
    rating: 4.6,
    reviews: 76
  },
  {
    id: 303,
    name: "Lenovo ThinkPad X1 Carbon Gen 11 – Intel Core i7, 16GB RAM, 512GB SSD",
    category: "Laptops",
    brand: "lenovo",
    tags: ["Lenovo", "ThinkPad", "Business", "Intel Core i7"],
    price: 210000,
    oldPrice: 240000,
    stock: "In stock",
    images: ["https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop"],
    breadcrumb: "Home / Laptops / Lenovo",
    specs: [
      { feat: "Processor", spec: "Intel Core i7-1365U" },
      { feat: "RAM", spec: "16GB LPDDR5" },
      { feat: "Storage", spec: "512GB NVMe SSD" },
      { feat: "Display", spec: "14-inch WUXGA IPS" },
      { feat: "Weight", spec: "1.12 kg" }
    ],
    delivery: "1-2 days",
    description: "Ultra-light business laptop with legendary keyboard.",
    rating: 4.9,
    reviews: 62
  },
  {
    id: 304,
    name: "Apple MacBook Air 13 M2 – 8GB RAM, 256GB SSD",
    category: "Laptops",
    brand: "apple",
    tags: ["Apple", "MacBook", "M2", "Ultrabook"],
    price: 135000,
    oldPrice: 150000,
    stock: "In stock",
    images: ["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop"],
    breadcrumb: "Home / Laptops / Apple",
    specs: [
      { feat: "Processor", spec: "Apple M2 (8-core)" },
      { feat: "RAM", spec: "8GB Unified" },
      { feat: "Storage", spec: "256GB SSD" },
      { feat: "Display", spec: "13.6-inch Liquid Retina" },
      { feat: "Battery", spec: "Up to 18 hours" }
    ],
    delivery: "1-2 days",
    description: "Incredible performance and battery life in a fanless design.",
    rating: 4.9,
    reviews: 312
  },
  {
    id: 305,
    name: "ASUS ROG Zephyrus G14 – AMD Ryzen 9, RTX 4060, 16GB RAM, 1TB SSD",
    category: "Laptops",
    brand: "asus",
    tags: ["ASUS", "ROG", "Gaming", "Ryzen 9", "RTX 4060"],
    price: 220000,
    oldPrice: 260000,
    stock: "In stock",
    images: ["https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop"],
    breadcrumb: "Home / Laptops / ASUS",
    specs: [
      { feat: "Processor", spec: "AMD Ryzen 9 7940HS" },
      { feat: "Graphics", spec: "NVIDIA RTX 4060 8GB" },
      { feat: "RAM", spec: "16GB DDR5" },
      { feat: "Storage", spec: "1TB NVMe SSD" },
      { feat: "Display", spec: "14-inch QHD+ 165Hz" }
    ],
    delivery: "1-2 days",
    description: "Compact gaming powerhouse with excellent performance.",
    rating: 4.7,
    reviews: 88
  },
  {
    id: 306,
    name: "Acer Swift 3 – Intel Core i5, 8GB RAM, 512GB SSD",
    category: "Laptops",
    brand: "acer",
    tags: ["Acer", "Swift", "Budget", "Intel Core i5"],
    price: 75000,
    oldPrice: 90000,
    stock: "In stock",
    images: ["https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop"],
    breadcrumb: "Home / Laptops / Acer",
    specs: [
      { feat: "Processor", spec: "Intel Core i5-1235U" },
      { feat: "RAM", spec: "8GB DDR4" },
      { feat: "Storage", spec: "512GB NVMe SSD" },
      { feat: "Display", spec: "14-inch Full HD IPS" },
      { feat: "Weight", spec: "1.4 kg" }
    ],
    delivery: "1-2 days",
    description: "Affordable everyday laptop with solid performance.",
    rating: 4.3,
    reviews: 204
  },
  {
    id: 307,
    name: "MSI Stealth 16 Studio – Intel Core i9, RTX 4080, 32GB RAM, 2TB SSD",
    category: "Laptops",
    brand: "msi",
    tags: ["MSI", "Stealth", "Gaming", "Intel Core i9", "RTX 4080"],
    price: 380000,
    oldPrice: 420000,
    stock: "In stock",
    images: ["https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop"],
    breadcrumb: "Home / Laptops / MSI",
    specs: [
      { feat: "Processor", spec: "Intel Core i9-13900H" },
      { feat: "Graphics", spec: "NVIDIA RTX 4080 12GB" },
      { feat: "RAM", spec: "32GB DDR5" },
      { feat: "Storage", spec: "2TB NVMe SSD" },
      { feat: "Display", spec: "16-inch 4K OLED 120Hz" }
    ],
    delivery: "1-2 days",
    description: "Ultra-slim laptop with desktop-class graphics.",
    rating: 4.9,
    reviews: 34
  },
  {
    id: 308,
    name: "Razer Blade 15 – Intel Core i7, RTX 4070, 16GB RAM, 1TB SSD",
    category: "Laptops",
    brand: "razer",
    tags: ["Razer", "Blade", "Gaming", "Intel Core i7", "RTX 4070"],
    price: 295000,
    oldPrice: 330000,
    stock: "In stock",
    images: ["https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop"],
    breadcrumb: "Home / Laptops / Razer",
    specs: [
      { feat: "Processor", spec: "Intel Core i7-13800H" },
      { feat: "Graphics", spec: "NVIDIA RTX 4070 8GB" },
      { feat: "RAM", spec: "16GB DDR5" },
      { feat: "Storage", spec: "1TB NVMe SSD" },
      { feat: "Display", spec: "15.6-inch QHD 240Hz" }
    ],
    delivery: "1-2 days",
    description: "Premium gaming laptop with CNC aluminium chassis.",
    rating: 4.8,
    reviews: 56
  }
];

// ---------- GLOBAL VARIABLES ----------
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentProduct = null;
let modalSwiper = null;

// ---------- HELPER FUNCTIONS ----------
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 90px;
      right: 20px;
      background: var(--primary, #1A4D2E);
      color: white;
      padding: 12px 20px;
      border-radius: 6px;
      opacity: 0;
      transition: opacity 0.3s;
      z-index: 999;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = '1';
  setTimeout(() => {
    toast.style.opacity = '0';
  }, 2000);
}

function renderRating(rating, reviews) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) stars += '<i class="fas fa-star"></i>';
    else if (i === Math.ceil(rating) && rating % 1 !== 0) stars += '<i class="fas fa-star-half-alt"></i>';
    else stars += '<i class="far fa-star"></i>';
  }
  return `<div class="product-rating">${stars} <span>(${reviews})</span></div>`;
}

function renderProductCard(product) {
  const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;
  return `
    <div class="product-card" data-id="${product.id}">
      ${discount > 0 ? `<div class="discount-badge">-${discount}%</div>` : ''}
      <div class="product-actions">
        <button class="wishlist-btn" aria-label="Add to wishlist"><i class="far fa-heart"></i></button>
        <button class="quickview-btn" aria-label="Quick view"><i class="far fa-eye"></i></button>
        <button class="add-to-cart-card" aria-label="Add to cart"><i class="fas fa-shopping-cart"></i></button>
      </div>
      <div class="product-image"><img src="${product.images[0]}" alt="${product.name}" loading="lazy"></div>
      <div class="product-tags">${product.tags.slice(0, 2).join(', ')}</div>
      <div class="product-title">${product.name}</div>
      ${renderRating(product.rating, product.reviews)}
      <div class="product-price">KSh ${product.price.toLocaleString()}</div>
    </div>
  `;
}

// ---------- CART FUNCTIONS ----------
function updateCartUI() {
  const count = cart.reduce((acc, item) => acc + item.quantity, 0);
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  document.getElementById('cartCount').innerText = count;
  document.getElementById('cartTotal').innerText = `KSh ${total.toLocaleString()}`;
  document.getElementById('sidebarTotal').innerText = `KSh ${total.toLocaleString()}`;

  const cartItemsDiv = document.getElementById('cartItems');
  if (!cartItemsDiv) return;
  cartItemsDiv.innerHTML = '';
  cart.forEach(item => {
    cartItemsDiv.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-details">
          <div class="cart-item-title">${item.name.substring(0, 30)}...</div>
          <div class="cart-item-price">KSh ${item.price.toLocaleString()} x ${item.quantity}</div>
          <div class="cart-item-remove" data-id="${item.id}">Remove</div>
        </div>
      </div>
    `;
  });

  document.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(e.target.dataset.id);
      cart = cart.filter(item => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartUI();
      showToast('Item removed from cart');
    });
  });
}

function addToCart(product, quantity = 1) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: quantity
    });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
  showToast('Added to cart');
}

// ---------- GRID RENDERING ----------
const laptopsGrid = document.getElementById('laptopsGrid');
function renderLaptops(productsArray) {
  laptopsGrid.innerHTML = productsArray.map(renderProductCard).join('');
}
renderLaptops(laptops);

// ---------- FILTER & SORT ----------
document.getElementById('sortFilter').addEventListener('change', (e) => {
  let sorted = [...laptops];
  const val = e.target.value;
  if (val === 'priceLow') sorted.sort((a,b) => a.price - b.price);
  else if (val === 'priceHigh') sorted.sort((a,b) => b.price - a.price);
  else if (val === 'name') sorted.sort((a,b) => a.name.localeCompare(b.name));
  renderLaptops(sorted);
});

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
function filterLaptops() {
  const term = searchInput.value.toLowerCase();
  const filtered = laptops.filter(p => 
    p.name.toLowerCase().includes(term) || 
    p.tags.some(t => t.toLowerCase().includes(term))
  );
  renderLaptops(filtered);
}
searchBtn.addEventListener('click', filterLaptops);
searchInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') filterLaptops(); });

document.getElementById('allCategoriesBtn').addEventListener('click', () => {
  renderLaptops(laptops);
  searchInput.value = '';
});

// ---------- SHOP CATEGORIES DROPDOWN ----------
const shopToggle = document.getElementById('shopCategoriesToggle');
const categoriesDropdown = document.getElementById('categoriesDropdown');
shopToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  categoriesDropdown.classList.toggle('show');
});
document.addEventListener('click', (e) => {
  if (!shopToggle.contains(e.target) && !categoriesDropdown.contains(e.target)) {
    categoriesDropdown.classList.remove('show');
  }
});

// Category/Brand filter
document.querySelectorAll('.categories-grid a, .dropdown-menu a, .mobile-dropdown-menu a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const brand = link.dataset.brand;
    const category = link.dataset.category;
    if (brand) {
      const filtered = laptops.filter(p => p.brand === brand);
      renderLaptops(filtered);
    } else if (category) {
      const filtered = laptops.filter(p => p.category.toLowerCase() === category.toLowerCase() || p.brand === category);
      renderLaptops(filtered);
    }
    categoriesDropdown.classList.remove('show');
  });
});

// "Laptops" main link resets
document.querySelectorAll('.dropdown-toggle[href="laptops.html"], .mobile-dropdown-toggle[href="laptops.html"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    renderLaptops(laptops);
  });
});

// ---------- DESKTOP DROPDOWN (click toggles) ----------
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const dropdown = toggle.closest('.dropdown');
    dropdown.classList.toggle('active');
    document.querySelectorAll('.dropdown.active').forEach(d => {
      if (d !== dropdown) d.classList.remove('active');
    });
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown.active').forEach(d => d.classList.remove('active'));
  }
});

// ---------- TRENDING SWIPER ----------
const trendingWrapper = document.getElementById('trendingSwiperWrapper');
if (trendingWrapper) {
  trendingWrapper.innerHTML = laptops.slice(0, 6).map(p => `
    <div class="swiper-slide">${renderProductCard(p)}</div>
  `).join('');
  new Swiper('.trending-swiper', {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    pagination: { el: '.trending-swiper .swiper-pagination', clickable: true },
    breakpoints: {
      640: { slidesPerView: 3 },
      1024: { slidesPerView: 5 }
    }
  });
}

// ---------- MODAL ----------
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

function openModal(productId) {
  const product = laptops.find(p => p.id == productId);
  if (!product) return;
  currentProduct = product;

  document.getElementById('modalBreadcrumb').innerText = product.breadcrumb || 'Home / Laptops';
  document.getElementById('modalTitle').innerText = product.name;
  document.getElementById('modalTags').innerText = product.tags.join(', ');
  document.getElementById('modalStock').innerText = product.stock || 'In stock';
  document.getElementById('modalPrice').innerText = `KSh ${product.price.toLocaleString()}`;

  let specRows = '';
  product.specs.forEach(s => {
    specRows += `<tr><td>${s.feat}</td><td>${s.spec}</td></tr>`;
  });
  document.getElementById('modalSpecs').innerHTML = specRows;
  document.getElementById('modalDelivery').innerText = product.delivery || '1-2 days';

  const swiperWrapper = document.getElementById('modalSwiperWrapper');
  swiperWrapper.innerHTML = product.images.map(img => `
    <div class="swiper-slide">
      <div class="swiper-zoom-container">
        <img src="${img}" alt="${product.name}">
      </div>
    </div>
  `).join('');

  const related = laptops.filter(p => p.id != productId && p.category === product.category).slice(0, 6);
  document.getElementById('relatedGrid').innerHTML = related.map(r => `
    <div class="related-card" onclick="openModal(${r.id})">
      <img src="${r.images[0]}" alt="${r.name}">
      <h5>${r.name.substring(0,25)}...</h5>
      <p>KSh ${r.price.toLocaleString()}</p>
    </div>
  `).join('');

  // Show modal
  modalOverlay.style.display = 'flex';
  document.body.classList.add('modal-open');

  // Small delay to ensure modal is fully visible before Swiper init
  setTimeout(() => {
    if (modalSwiper) modalSwiper.destroy();
    modalSwiper = new Swiper('.modal-swiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      pagination: { el: '.swiper-pagination', clickable: true },
      loop: product.images.length > 1,
      zoom: true,
    });
  }, 100);

  document.addEventListener('keydown', handleModalKeyDown);
}

function closeModal() {
  modalOverlay.style.display = 'none';
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', handleModalKeyDown);
}

function handleModalKeyDown(e) {
  if (e.key === 'Escape') closeModal();
}

// Click on card (but not action buttons)
document.addEventListener('click', (e) => {
  if (e.target.closest('.add-to-cart-card') || e.target.closest('.wishlist-btn') || e.target.closest('.quickview-btn')) {
    return;
  }
  const card = e.target.closest('.product-card');
  if (card) {
    e.preventDefault();
    openModal(card.dataset.id);
  }
});

// Quick view button
document.addEventListener('click', (e) => {
  if (e.target.closest('.quickview-btn')) {
    e.preventDefault();
    const card = e.target.closest('.product-card');
    if (card) openModal(card.dataset.id);
  }
});

modalClose.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

// ---------- ADD TO CART FROM CARD ----------
document.addEventListener('click', (e) => {
  if (e.target.closest('.add-to-cart-card')) {
    e.preventDefault();
    e.stopPropagation();
    const card = e.target.closest('.product-card');
    if (card) {
      const id = card.dataset.id;
      const product = laptops.find(p => p.id == id);
      addToCart(product, 1);
    }
  }
});

// Wishlist button demo
document.addEventListener('click', (e) => {
  if (e.target.closest('.wishlist-btn')) {
    e.preventDefault();
    e.stopPropagation();
    showToast('Added to wishlist (demo)');
  }
});

// ---------- MODAL QUANTITY & ACTIONS ----------
document.getElementById('incrQty').addEventListener('click', () => {
  let q = parseInt(document.getElementById('quantity').value);
  document.getElementById('quantity').value = q + 1;
});
document.getElementById('decrQty').addEventListener('click', () => {
  let q = parseInt(document.getElementById('quantity').value);
  if (q > 1) document.getElementById('quantity').value = q - 1;
});

document.getElementById('addToCartModal').addEventListener('click', () => {
  if (!currentProduct) return;
  const qty = parseInt(document.getElementById('quantity').value);
  addToCart(currentProduct, qty);
  closeModal();
});

document.getElementById('whatsappModal').addEventListener('click', () => {
  if (!currentProduct) return;
  const msg = `Hello, I'm interested in: ${currentProduct.name} (KSh ${currentProduct.price})`;
  window.open(`https://wa.me/254723562484?text=${encodeURIComponent(msg)}`, '_blank');
});

document.getElementById('wishlistModal').addEventListener('click', () => {
  showToast('Added to wishlist (demo)');
});

// ---------- MOBILE MENU ----------
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) mobileMenu.style.display = 'none';
});

// Mobile dropdown
document.querySelector('.mobile-dropdown-toggle')?.addEventListener('click', (e) => {
  e.preventDefault();
  const parent = e.currentTarget.closest('.mobile-dropdown');
  parent.classList.toggle('open');
});

// ---------- CART SIDEBAR ----------
const cartPreview = document.getElementById('cartPreview');
const cartSidebar = document.getElementById('cartSidebar');
const cartClose = document.getElementById('cartClose');
const overlay = document.getElementById('overlay');

cartPreview.addEventListener('click', () => {
  cartSidebar.classList.add('open');
  overlay.classList.add('show');
});

cartClose.addEventListener('click', () => {
  cartSidebar.classList.remove('open');
  overlay.classList.remove('show');
});

overlay.addEventListener('click', () => {
  cartSidebar.classList.remove('open');
  overlay.classList.remove('show');
});

document.getElementById('checkoutBtn').addEventListener('click', () => {
  showToast('Proceeding to checkout (demo)');
});

// ---------- STICKY HEADER SHADOW ----------
window.addEventListener('scroll', () => {
  const header = document.querySelector('.main-header');
  header.style.boxShadow = window.scrollY > 50 ? '0 5px 15px rgba(0,0,0,0.08)' : 'none';
});

// ---------- FLOATING WHATSAPP ----------
document.querySelector('.whatsapp-float').addEventListener('click', (e) => {
  e.preventDefault();
  const message = "Hello, I'm interested in your products";
  window.open(`https://wa.me/254723562484?text=${encodeURIComponent(message)}`, '_blank');
});

// ---------- DEALS SWIPER ----------
new Swiper('.deals-swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: { delay: 4000 },
  pagination: { el: '.deals-swiper .swiper-pagination', clickable: true }
});

// ---------- INIT CART ----------
updateCartUI();