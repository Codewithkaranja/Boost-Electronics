/**
 * Boost Electronics – Cameras Page
 * Matches headphones/laptops/smartphones structure.
 */

'use strict';

// ---------- PRODUCT DATA ----------
const cameras = [
  {
    id: 501,
    name: "Canon EOS R50 Mirrorless Camera with 18-45mm Lens",
    category: "Cameras",
    brand: "canon",
    tags: ["Canon", "Mirrorless", "24.2MP", "4K Video"],
    price: 85000,
    oldPrice: 95000,
    stock: "In stock",
    images: [
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=400&fit=crop"
    ],
    breadcrumb: "Home / Cameras / Canon",
    specs: [
      { feat: "Sensor", spec: "24.2MP APS-C CMOS" },
      { feat: "Video", spec: "4K 30p" },
      { feat: "Autofocus", spec: "Dual Pixel CMOS AF II" },
      { feat: "LCD", spec: "3.0-inch Vari-angle" },
      { feat: "Weight", spec: "375g" }
    ],
    delivery: "1-2 days • 1 year warranty",
    description: "Compact mirrorless camera perfect for content creators.",
    rating: 4.7,
    reviews: 84
  },
  {
    id: 502,
    name: "Nikon Z fc Mirrorless Camera with 16-50mm Lens",
    category: "Cameras",
    brand: "nikon",
    tags: ["Nikon", "Mirrorless", "20.9MP", "Retro"],
    price: 95000,
    oldPrice: 110000,
    stock: "In stock",
    images: ["https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop"],
    breadcrumb: "Home / Cameras / Nikon",
    specs: [
      { feat: "Sensor", spec: "20.9MP APS-C CMOS" },
      { feat: "Video", spec: "4K 30p" },
      { feat: "Viewfinder", spec: "2.36M-dot OLED" },
      { feat: "LCD", spec: "3.0-inch Vari-angle" },
      { feat: "Design", spec: "Retro style" }
    ],
    delivery: "1-2 days",
    description: "Stylish mirrorless camera with classic design.",
    rating: 4.8,
    reviews: 62
  },
  {
    id: 503,
    name: "Sony A7 IV Full-Frame Mirrorless Camera Body",
    category: "Cameras",
    brand: "sony",
    tags: ["Sony", "Full-Frame", "33MP", "4K Video"],
    price: 245000,
    oldPrice: 280000,
    stock: "In stock",
    images: ["https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop"],
    breadcrumb: "Home / Cameras / Sony",
    specs: [
      { feat: "Sensor", spec: "33MP Full-Frame CMOS" },
      { feat: "Video", spec: "4K 60p" },
      { feat: "Autofocus", spec: "759-point phase-detect" },
      { feat: "IBIS", spec: "5-axis stabilization" },
      { feat: "LCD", spec: "3.0-inch Vari-angle" }
    ],
    delivery: "1-2 days",
    description: "Versatile full-frame hybrid camera for photo and video.",
    rating: 4.9,
    reviews: 126
  },
  {
    id: 504,
    name: "Fujifilm X-T5 Mirrorless Camera Body",
    category: "Cameras",
    brand: "fujifilm",
    tags: ["Fujifilm", "Mirrorless", "40MP", "Film Simulation"],
    price: 195000,
    oldPrice: 220000,
    stock: "In stock",
    images: ["https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop"],
    breadcrumb: "Home / Cameras / Fujifilm",
    specs: [
      { feat: "Sensor", spec: "40MP APS-C X-Trans CMOS" },
      { feat: "Video", spec: "6.2K 30p" },
      { feat: "IBIS", spec: "5-axis" },
      { feat: "Film Sims", spec: "19 modes" },
      { feat: "LCD", spec: "3.0-inch Vari-angle" }
    ],
    delivery: "1-2 days",
    description: "High-resolution camera with classic controls.",
    rating: 4.9,
    reviews: 73
  },
  {
    id: 505,
    name: "Panasonic Lumix GH6 Mirrorless Camera Body",
    category: "Cameras",
    brand: "panasonic",
    tags: ["Panasonic", "Micro Four Thirds", "Video", "25.2MP"],
    price: 175000,
    oldPrice: 200000,
    stock: "In stock",
    images: ["https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop"],
    breadcrumb: "Home / Cameras / Panasonic",
    specs: [
      { feat: "Sensor", spec: "25.2MP Micro Four Thirds" },
      { feat: "Video", spec: "5.7K 60p" },
      { feat: "IBIS", spec: "7.5-stop" },
      { feat: "LCD", spec: "3.0-inch Vari-angle" },
      { feat: "Cooling", spec: "Fan for unlimited recording" }
    ],
    delivery: "1-2 days",
    description: "Video-focused camera with professional features.",
    rating: 4.7,
    reviews: 58
  },
  {
    id: 506,
    name: "GoPro Hero 12 Black Action Camera",
    category: "Cameras",
    brand: "gopro",
    tags: ["GoPro", "Action", "5.3K Video", "Waterproof"],
    price: 45000,
    oldPrice: 55000,
    stock: "In stock",
    images: ["https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop"],
    breadcrumb: "Home / Cameras / GoPro",
    specs: [
      { feat: "Video", spec: "5.3K 60p" },
      { feat: "Photo", spec: "27MP" },
      { feat: "Stabilization", spec: "HyperSmooth 6.0" },
      { feat: "Waterproof", spec: "10m" },
      { feat: "Battery", spec: "Enduro" }
    ],
    delivery: "1-2 days",
    description: "The ultimate action camera for adventures.",
    rating: 4.8,
    reviews: 312
  },
  {
    id: 507,
    name: "Leica Q3 Compact Full-Frame Camera",
    category: "Cameras",
    brand: "leica",
    tags: ["Leica", "Full-Frame", "60MP", "Fixed Lens"],
    price: 650000,
    oldPrice: 720000,
    stock: "In stock",
    images: ["https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop"],
    breadcrumb: "Home / Cameras / Leica",
    specs: [
      { feat: "Sensor", spec: "60MP Full-Frame CMOS" },
      { feat: "Lens", spec: "28mm f/1.7 Summilux" },
      { feat: "Video", spec: "8K 30p" },
      { feat: "LCD", spec: "3.0-inch Tilting" },
      { feat: "EVF", spec: "5.76M-dot OLED" }
    ],
    delivery: "1-2 days",
    description: "Premium compact camera with exceptional optics.",
    rating: 5.0,
    reviews: 27
  },
  {
    id: 508,
    name: "Canon EOS 2000D DSLR with 18-55mm Lens",
    category: "Cameras",
    brand: "canon",
    tags: ["Canon", "DSLR", "24.1MP", "Beginner"],
    price: 55000,
    oldPrice: 65000,
    stock: "In stock",
    images: ["https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=400&fit=crop"],
    breadcrumb: "Home / Cameras / Canon",
    specs: [
      { feat: "Sensor", spec: "24.1MP APS-C CMOS" },
      { feat: "Video", spec: "Full HD 30p" },
      { feat: "LCD", spec: "3.0-inch Fixed" },
      { feat: "Lens", spec: "EF-S 18-55mm f/3.5-5.6" },
      { feat: "Connectivity", spec: "Wi-Fi" }
    ],
    delivery: "1-2 days",
    description: "Entry-level DSLR perfect for learning photography.",
    rating: 4.5,
    reviews: 210
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
const camerasGrid = document.getElementById('camerasGrid');
function renderCameras(productsArray) {
  camerasGrid.innerHTML = productsArray.map(renderProductCard).join('');
}
renderCameras(cameras);

// ---------- FILTER & SORT ----------
document.getElementById('sortFilter').addEventListener('change', (e) => {
  let sorted = [...cameras];
  const val = e.target.value;
  if (val === 'priceLow') sorted.sort((a,b) => a.price - b.price);
  else if (val === 'priceHigh') sorted.sort((a,b) => b.price - a.price);
  else if (val === 'name') sorted.sort((a,b) => a.name.localeCompare(b.name));
  renderCameras(sorted);
});

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
function filterCameras() {
  const term = searchInput.value.toLowerCase();
  const filtered = cameras.filter(p => 
    p.name.toLowerCase().includes(term) || 
    p.tags.some(t => t.toLowerCase().includes(term))
  );
  renderCameras(filtered);
}
searchBtn.addEventListener('click', filterCameras);
searchInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') filterCameras(); });

document.getElementById('allCategoriesBtn').addEventListener('click', () => {
  renderCameras(cameras);
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
      const filtered = cameras.filter(p => p.brand === brand);
      renderCameras(filtered);
    } else if (category) {
      const filtered = cameras.filter(p => p.category.toLowerCase() === category.toLowerCase() || p.brand === category);
      renderCameras(filtered);
    }
    categoriesDropdown.classList.remove('show');
  });
});

// "Cameras" main link resets
document.querySelectorAll('.dropdown-toggle[href="cameras.html"], .mobile-dropdown-toggle[href="cameras.html"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    renderCameras(cameras);
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
  trendingWrapper.innerHTML = cameras.slice(0, 6).map(p => `
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
  const product = cameras.find(p => p.id == productId);
  if (!product) return;
  currentProduct = product;

  document.getElementById('modalBreadcrumb').innerText = product.breadcrumb || 'Home / Cameras';
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

  const related = cameras.filter(p => p.id != productId && p.category === product.category).slice(0, 6);
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
      const product = cameras.find(p => p.id == id);
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