// ---------- HEADPHONE PRODUCT DATA ----------
const headphones = [
  {
    id: 201,
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    category: "Headphones",
    brand: "sony",
    tags: ["Sony", "Noise Cancelling", "Wireless", "Bluetooth", "Over-Ear"],
    price: 45000,
    oldPrice: 52000,
    stock: "In stock",
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&h=400&fit=crop"
    ],
    breadcrumb: "Home / Headphones / Sony",
    specs: [
      { feat: "Type", spec: "Over-Ear, Wireless" },
      { feat: "Noise Cancelling", spec: "Yes (Auto NC Optimizer)" },
      { feat: "Battery Life", spec: "30 hours" },
      { feat: "Charging", spec: "USB-C, fast charge (3h in 3min)" },
      { feat: "Connectivity", spec: "Bluetooth 5.2, multipoint" },
      { feat: "Weight", spec: "250g" }
    ],
    delivery: "1-2 days • 1 year warranty",
    description: "Industry-leading noise cancellation with exceptional sound quality and smart features.",
    rating: 4.7,
    reviews: 128
  },
  {
    id: 202,
    name: "Apple AirPods Pro (2nd Generation) with MagSafe",
    category: "Headphones",
    brand: "apple",
    tags: ["Apple", "AirPods", "True Wireless", "Noise Cancelling"],
    price: 35999,
    oldPrice: 39999,
    stock: "In stock",
    images: ["https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=600&h=400&fit=crop"],
    breadcrumb: "Home / Headphones / Apple",
    specs: [
      { feat: "Type", spec: "In-Ear, True Wireless" },
      { feat: "Noise Cancelling", spec: "Yes (Adaptive ANC)" },
      { feat: "Battery Life", spec: "6h (30h with case)" },
      { feat: "Chip", spec: "H2" },
      { feat: "Sweat Resistance", spec: "IPX4" }
    ],
    delivery: "1-2 days",
    description: "The next generation of AirPods Pro with improved noise cancellation and sound quality.",
    rating: 4.8,
    reviews: 256
  },
  {
    id: 203,
    name: "Bose QuietComfort Ultra Headphones",
    category: "Headphones",
    brand: "bose",
    tags: ["Bose", "Noise Cancelling", "Wireless", "Over-Ear", "Immersive Audio"],
    price: 52000,
    oldPrice: 58999,
    stock: "In stock",
    images: ["https://images.unsplash.com/photo-1621886305197-6e2c9f4f6b1c?w=600&h=400&fit=crop"],
    breadcrumb: "Home / Headphones / Bose",
    specs: [
      { feat: "Type", spec: "Over-Ear, Wireless" },
      { feat: "Noise Cancelling", spec: "Yes (CustomTune)" },
      { feat: "Battery Life", spec: "24 hours" },
      { feat: "Audio", spec: "Immersive Audio with head tracking" },
      { feat: "Charging", spec: "USB-C" }
    ],
    delivery: "1-2 days",
    description: "The ultimate listening experience with Bose immersive audio and world-class noise cancellation.",
    rating: 4.9,
    reviews: 87
  },
  {
    id: 204,
    name: "JBL Tune 510BT Wireless On-Ear Headphones",
    category: "Headphones",
    brand: "jbl",
    tags: ["JBL", "Wireless", "On-Ear", "Bass"],
    price: 6999,
    oldPrice: 8999,
    stock: "In stock",
    images: ["https://images.unsplash.com/photo-1585298723682-7115561c51b7?w=600&h=400&fit=crop"],
    breadcrumb: "Home / Headphones / JBL",
    specs: [
      { feat: "Type", spec: "On-Ear, Wireless" },
      { feat: "Battery Life", spec: "40 hours" },
      { feat: "Charging", spec: "USB-C, quick charge (5min = 4h)" },
      { feat: "Connectivity", spec: "Bluetooth 5.0, multipoint" },
      { feat: "Weight", spec: "160g" }
    ],
    delivery: "1-2 days",
    description: "Lightweight, comfortable on-ear headphones with JBL Pure Bass sound.",
    rating: 4.3,
    reviews: 312
  },
  {
    id: 205,
    name: "Samsung Galaxy Buds2 Pro",
    category: "Headphones",
    brand: "samsung",
    tags: ["Samsung", "True Wireless", "Noise Cancelling", "AKG"],
    price: 22999,
    oldPrice: 27999,
    stock: "In stock",
    images: ["https://images.unsplash.com/photo-1618414074989-b2c6c3c9c6f6?w=600&h=400&fit=crop"],
    breadcrumb: "Home / Headphones / Samsung",
    specs: [
      { feat: "Type", spec: "In-Ear, True Wireless" },
      { feat: "Noise Cancelling", spec: "Yes (ANC)" },
      { feat: "Battery Life", spec: "5h (18h with case)" },
      { feat: "Audio", spec: "24-bit Hi-Fi, 360 Audio" },
      { feat: "Water Resistance", spec: "IPX7" }
    ],
    delivery: "1-2 days",
    description: "Premium sound with intelligent ANC and seamless Samsung ecosystem integration.",
    rating: 4.6,
    reviews: 94
  },
  {
    id: 206,
    name: "Beats Studio Pro Wireless Headphones",
    category: "Headphones",
    brand: "beats",
    tags: ["Beats", "Wireless", "Noise Cancelling", "Over-Ear"],
    price: 38999,
    oldPrice: 42999,
    stock: "In stock",
    images: ["https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&h=400&fit=crop"],
    breadcrumb: "Home / Headphones / Beats",
    specs: [
      { feat: "Type", spec: "Over-Ear, Wireless" },
      { feat: "Noise Cancelling", spec: "Yes" },
      { feat: "Battery Life", spec: "40 hours" },
      { feat: "Chip", spec: "Apple W1" },
      { feat: "Charging", spec: "USB-C, fast fuel" }
    ],
    delivery: "1-2 days",
    description: "Studio-quality sound with dynamic range and noise cancelling.",
    rating: 4.4,
    reviews: 76
  },
  {
    id: 207,
    name: "Sennheiser HD 450BT Wireless Headphones",
    category: "Headphones",
    brand: "sennheiser",
    tags: ["Sennheiser", "Wireless", "Noise Cancelling", "Over-Ear"],
    price: 19999,
    oldPrice: 24999,
    stock: "In stock",
    images: ["https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop"],
    breadcrumb: "Home / Headphones / Sennheiser",
    specs: [
      { feat: "Type", spec: "Over-Ear, Wireless" },
      { feat: "Noise Cancelling", spec: "Yes (ANC)" },
      { feat: "Battery Life", spec: "30 hours" },
      { feat: "Codecs", spec: "AAC, aptX Low Latency" },
      { feat: "Weight", spec: "238g" }
    ],
    delivery: "1-2 days",
    description: "Exceptional sound quality with active noise cancellation and aptX support.",
    rating: 4.5,
    reviews: 143
  },
  {
    id: 208,
    name: "Soundcore by Anker Life Q20 Hybrid ANC Headphones",
    category: "Headphones",
    brand: "anker",
    tags: ["Anker", "Soundcore", "Budget", "Noise Cancelling"],
    price: 7999,
    oldPrice: 9999,
    stock: "In stock",
    images: ["https://images.unsplash.com/photo-1585298723682-7115561c51b7?w=600&h=400&fit=crop"],
    breadcrumb: "Home / Headphones / Anker",
    specs: [
      { feat: "Type", spec: "Over-Ear, Wireless" },
      { feat: "Noise Cancelling", spec: "Yes (Hybrid ANC)" },
      { feat: "Battery Life", spec: "40 hours" },
      { feat: "Driver", spec: "40mm dynamic" },
      { feat: "Weight", spec: "260g" }
    ],
    delivery: "1-2 days",
    description: "Affordable hybrid active noise cancellation with impressive battery life.",
    rating: 4.2,
    reviews: 201
  }
];

// Helper to render product card with all premium features
function renderProductCard(product) {
  const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(product.rating)) stars.push('<i class="fas fa-star"></i>');
    else if (i === Math.ceil(product.rating) && product.rating % 1 !== 0) stars.push('<i class="fas fa-star-half-alt"></i>');
    else stars.push('<i class="far fa-star"></i>');
  }
  return `
    <div class="product-card" data-id="${product.id}">
      ${discount > 0 ? `<div class="discount-badge">-${discount}%</div>` : ''}
      <div class="product-actions">
        <button><i class="far fa-heart"></i></button>
        <button><i class="far fa-eye"></i></button>
        <button><i class="fas fa-shopping-cart"></i></button>
      </div>
      <div class="product-image"><img src="${product.images[0]}" alt="${product.name}"></div>
      <div class="product-tags">${product.tags.slice(0, 3).join(', ')}</div>
      <div class="product-title">${product.name}</div>
      <div class="product-rating">
        ${stars.join(' ')} <span>(${product.reviews})</span>
      </div>
      <div class="product-price">KSh ${product.price.toLocaleString()}.00</div>
    </div>
  `;
}

// Populate headphones grid
const headphonesGrid = document.getElementById('headphonesGrid');
function renderHeadphones(productsArray) {
  headphonesGrid.innerHTML = productsArray.map(renderProductCard).join('');
}
renderHeadphones(headphones);

// Sort functionality
document.getElementById('sortFilter').addEventListener('change', (e) => {
  let sorted = [...headphones];
  const val = e.target.value;
  if (val === 'priceLow') sorted.sort((a,b) => a.price - b.price);
  else if (val === 'priceHigh') sorted.sort((a,b) => b.price - a.price);
  else if (val === 'name') sorted.sort((a,b) => a.name.localeCompare(b.name));
  renderHeadphones(sorted);
});

// Search functionality
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
function filterHeadphones() {
  const term = searchInput.value.toLowerCase();
  const filtered = headphones.filter(p => 
    p.name.toLowerCase().includes(term) || 
    p.tags.some(t => t.toLowerCase().includes(term))
  );
  renderHeadphones(filtered);
}
searchBtn.addEventListener('click', filterHeadphones);
searchInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') filterHeadphones(); });

// Brand filter from dropdown
document.querySelectorAll('.dropdown-menu a, .mobile-dropdown-menu a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const brand = link.dataset.brand;
    if (brand) {
      const filtered = headphones.filter(p => p.brand === brand);
      renderHeadphones(filtered);
    }
  });
});

// Reset to all headphones when clicking "Headphones" main link
document.querySelectorAll('.dropdown-toggle[href="headphones.html"], .mobile-dropdown-toggle[href="headphones.html"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    renderHeadphones(headphones);
  });
});

// Trending swiper (first 6 headphones)
const trendingWrapper = document.getElementById('trendingSwiperWrapper');
trendingWrapper.innerHTML = headphones.slice(0,6).map(p => `
  <div class="swiper-slide">${renderProductCard(p)}</div>
`).join('');

// Modal functionality
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
let currentProduct = null;

function openModal(productId) {
  const product = headphones.find(p => p.id == productId);
  if (!product) return;
  currentProduct = product;
  document.getElementById('modalBreadcrumb').innerText = product.breadcrumb || 'Home / Headphones';
  document.getElementById('modalMainImg').innerHTML = `<img src="${product.images[0]}" alt="">`;
  let thumbs = '';
  product.images.forEach((img, idx) => {
    thumbs += `<div class="modal-thumb ${idx===0?'active':''}" onclick="document.getElementById('modalMainImg').innerHTML='<img src=\\''+img+'\\'>'"><img src="${img}" alt=""></div>`;
  });
  document.getElementById('modalThumbnails').innerHTML = thumbs;
  document.getElementById('modalTitle').innerText = product.name;
  document.getElementById('modalTags').innerText = product.tags.join(', ');
  document.getElementById('modalStock').innerText = product.stock || 'In stock';
  document.getElementById('modalPrice').innerText = `KSh ${product.price.toLocaleString()}.00`;
  let specRows = '';
  product.specs.forEach(s => {
    specRows += `<tr><td>${s.feat}</td><td>${s.spec}</td></tr>`;
  });
  document.getElementById('modalSpecs').innerHTML = specRows;
  document.getElementById('modalDelivery').innerText = product.delivery || 'Estimated delivery 1-2 days';
  document.getElementById('tabDetails').innerHTML = `<p>${product.description || 'No details available.'}</p>`;
  document.getElementById('tabReviews').innerHTML = '<p>No reviews yet.</p>';
  // Related headphones (same category, exclude current)
  const related = headphones.filter(p => p.id != productId && p.category === product.category).slice(0,4);
  document.getElementById('relatedGrid').innerHTML = related.map(r => `
    <div class="related-card" onclick="openModal(${r.id})">
      <img src="${r.images[0]}" style="height:100px; width:100%; object-fit:cover;">
      <p style="font-weight:600; font-size:0.9rem;">${r.name.substring(0,30)}...</p>
      <p style="color:var(--primary);">KSh ${r.price.toLocaleString()}</p>
    </div>
  `).join('');
  modalOverlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

document.addEventListener('click', (e) => {
  const card = e.target.closest('.product-card');
  if (card) openModal(card.dataset.id);
});

modalClose.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
  document.body.style.overflow = 'auto';
});
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

// Quantity buttons
document.getElementById('incrQty').addEventListener('click', () => {
  let q = parseInt(document.getElementById('quantity').value);
  document.getElementById('quantity').value = q + 1;
});
document.getElementById('decrQty').addEventListener('click', () => {
  let q = parseInt(document.getElementById('quantity').value);
  if (q > 1) document.getElementById('quantity').value = q - 1;
});

// WhatsApp order
document.getElementById('whatsappModal').addEventListener('click', () => {
  if (!currentProduct) return;
  const msg = `Hello, I'm interested in: ${currentProduct.name} (KSh ${currentProduct.price})`;
  window.open(`https://wa.me/254723562484?text=${encodeURIComponent(msg)}`, '_blank');
});

// Add to cart
document.getElementById('addToCartModal').addEventListener('click', () => {
  alert('Added to cart! (Backend integration coming)');
});

// Tabs
document.querySelectorAll('.tab-header').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab-header').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tabDetails').style.display = tab.dataset.tab === 'details' ? 'block' : 'none';
    document.getElementById('tabReviews').style.display = tab.dataset.tab === 'reviews' ? 'block' : 'none';
  });
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  if (mobileMenu.style.display === 'flex') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'flex';
  }
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) mobileMenu.style.display = 'none';
});

// Mobile dropdown toggle
document.querySelector('.mobile-dropdown-toggle')?.addEventListener('click', (e) => {
  e.preventDefault();
  const parent = e.currentTarget.closest('.mobile-dropdown');
  parent.classList.toggle('open');
});

// Swipers
new Swiper('.deals-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: { delay: 4000 },
  pagination: { el: '.swiper-pagination', clickable: true }
});
new Swiper('.trending-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: { el: '.swiper-pagination', clickable: true },
  breakpoints: {
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 4 }
  }
});

// Floating WhatsApp button already in HTML