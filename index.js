/**
 * Boost Electronics – Homepage
 * Matches the structure of category pages.
 */

'use strict';

// ---------- PRODUCT DATA (mix of best sellers from all categories) ----------
const products = [
  // Laptops
  {
    id: 1,
    name: "Dell XPS 13 Plus – Intel Core i7, 16GB RAM, 512GB SSD",
    category: "Laptops",
    brand: "dell",
    tags: ["Dell", "XPS", "Ultrabook"],
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
      { feat: "Display", spec: "13.4-inch 4K+" }
    ],
    delivery: "1-2 days • 2 year warranty",
    description: "The Dell XPS 13 Plus combines sleek design with powerful performance.",
    rating: 4.8,
    reviews: 94
  },
  {
    id: 2,
    name: "Apple MacBook Air 13 M2 – 8GB RAM, 256GB SSD",
    category: "Laptops",
    brand: "apple",
    tags: ["Apple", "MacBook", "M2"],
    price: 135000,
    oldPrice: 150000,
    stock: "In stock",
    images: ["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop"],
    breadcrumb: "Home / Laptops / Apple",
    specs: [
      { feat: "Processor", spec: "Apple M2" },
      { feat: "RAM", spec: "8GB" },
      { feat: "Storage", spec: "256GB" },
      { feat: "Display", spec: "13.6-inch Liquid Retina" }
    ],
    delivery: "1-2 days",
    description: "Incredible performance and battery life.",
    rating: 4.9,
    reviews: 312
  },
  // Smartphones
  {
    id: 3,
    name: "Apple iPhone 15 Pro – 128GB, Titanium",
    category: "Smartphones",
    brand: "apple",
    tags: ["Apple", "iPhone", "5G"],
    price: 145000,
    oldPrice: 165000,
    stock: "In stock",
    images: ["https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=400&fit=crop"],
    breadcrumb: "Home / Smartphones / Apple",
    specs: [
      { feat: "Display", spec: "6.1-inch Super Retina XDR" },
      { feat: "Processor", spec: "A17 Pro" },
      { feat: "Camera", spec: "48MP + 12MP + 12MP" },
      { feat: "Battery", spec: "Up to 23 hours" }
    ],
    delivery: "1-2 days",
    description: "The most powerful iPhone ever.",
    rating: 4.9,
    reviews: 312
  },
  {
    id: 4,
    name: "Samsung Galaxy S24 Ultra – 256GB, Titanium",
    category: "Smartphones",
    brand: "samsung",
    tags: ["Samsung", "Galaxy", "5G"],
    price: 155000,
    oldPrice: 175000,
    stock: "In stock",
    images: ["https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&h=400&fit=crop"],
    breadcrumb: "Home / Smartphones / Samsung",
    specs: [
      { feat: "Display", spec: "6.8-inch Dynamic AMOLED" },
      { feat: "Processor", spec: "Snapdragon 8 Gen 3" },
      { feat: "Camera", spec: "200MP" },
      { feat: "S Pen", spec: "Included" }
    ],
    delivery: "1-2 days",
    description: "The ultimate Android flagship.",
    rating: 4.8,
    reviews: 256
  },
  // Headphones
  {
    id: 5,
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    category: "Headphones",
    brand: "sony",
    tags: ["Sony", "Noise Cancelling", "Wireless"],
    price: 45000,
    oldPrice: 52000,
    stock: "In stock",
    images: ["https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&h=400&fit=crop"],
    breadcrumb: "Home / Headphones / Sony",
    specs: [
      { feat: "Type", spec: "Over-Ear, Wireless" },
      { feat: "Noise Cancelling", spec: "Yes" },
      { feat: "Battery Life", spec: "30 hours" }
    ],
    delivery: "1-2 days",
    description: "Industry-leading noise cancellation.",
    rating: 4.7,
    reviews: 128
  },
  {
    id: 6,
    name: "Apple AirPods Pro (2nd Gen) with MagSafe",
    category: "Headphones",
    brand: "apple",
    tags: ["Apple", "AirPods", "True Wireless"],
    price: 35999,
    oldPrice: 39999,
    stock: "In stock",
    images: ["https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=600&h=400&fit=crop"],
    breadcrumb: "Home / Headphones / Apple",
    specs: [
      { feat: "Type", spec: "In-Ear" },
      { feat: "Noise Cancelling", spec: "Yes" },
      { feat: "Battery", spec: "6h" }
    ],
    delivery: "1-2 days",
    description: "Superior sound and active noise cancellation.",
    rating: 4.8,
    reviews: 256
  },
  // Cameras
  {
    id: 7,
    name: "Canon EOS R50 Mirrorless Camera with 18-45mm Lens",
    category: "Cameras",
    brand: "canon",
    tags: ["Canon", "Mirrorless", "24.2MP"],
    price: 85000,
    oldPrice: 95000,
    stock: "In stock",
    images: ["https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=400&fit=crop"],
    breadcrumb: "Home / Cameras / Canon",
    specs: [
      { feat: "Sensor", spec: "24.2MP APS-C" },
      { feat: "Video", spec: "4K 30p" },
      { feat: "Lens", spec: "18-45mm kit" }
    ],
    delivery: "1-2 days",
    description: "Perfect starter mirrorless camera.",
    rating: 4.7,
    reviews: 84
  },
  {
    id: 8,
    name: "Sony A7 IV Full-Frame Mirrorless Camera Body",
    category: "Cameras",
    brand: "sony",
    tags: ["Sony", "Full-Frame", "33MP"],
    price: 245000,
    oldPrice: 280000,
    stock: "In stock",
    images: ["https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop"],
    breadcrumb: "Home / Cameras / Sony",
    specs: [
      { feat: "Sensor", spec: "33MP Full-Frame" },
      { feat: "Video", spec: "4K 60p" },
      { feat: "IBIS", spec: "5-axis" }
    ],
    delivery: "1-2 days",
    description: "Versatile full-frame hybrid camera.",
    rating: 4.9,
    reviews: 126
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
const bestSellersGrid = document.getElementById('bestSellersGrid');
function renderProducts(productsArray) {
  bestSellersGrid.innerHTML = productsArray.map(renderProductCard).join('');
}
renderProducts(products); // initial all

// ---------- CATEGORY FILTER ----------
document.getElementById('categoryFilter').addEventListener('change', (e) => {
  const category = e.target.value;
  if (category === 'all') {
    renderProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    renderProducts(filtered);
  }
});

// ---------- SEARCH (if user searches from header) ----------
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
function filterProducts() {
  const term = searchInput.value.toLowerCase();
  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(term) || 
    p.tags.some(t => t.toLowerCase().includes(term))
  );
  renderProducts(filtered);
}
searchBtn.addEventListener('click', filterProducts);
searchInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') filterProducts(); });

// All Categories reset
document.getElementById('allCategoriesBtn').addEventListener('click', () => {
  renderProducts(products);
  searchInput.value = '';
  document.getElementById('categoryFilter').value = 'all';
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

// ---------- DESKTOP DROPDOWN (click toggles) ----------
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault(); // prevent navigation
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
  trendingWrapper.innerHTML = products.slice(0, 6).map(p => `
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
  const product = products.find(p => p.id == productId);
  if (!product) return;
  currentProduct = product;

  document.getElementById('modalBreadcrumb').innerText = product.breadcrumb || 'Home / Product';
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

  const related = products.filter(p => p.id != productId && p.category === product.category).slice(0, 6);
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
      const product = products.find(p => p.id == id);
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
document.querySelectorAll('.mobile-dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const parent = toggle.closest('.mobile-dropdown');
    parent.classList.toggle('open');
  });
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