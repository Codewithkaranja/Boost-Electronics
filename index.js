// ---------- PRODUCT DATA (rich, detailed) ----------
    const products = [
      {
        id: 1,
        name: "Lenovo ThinkPad Yoga 390 Core i5 8GB RAM 256GB SSD 13.3″ Display",
        category: "Laptops",
        tags: ["Laptops", "Lenovo Laptops", "256GB SSD", "8GB RAM"],
        price: 25000,
        oldPrice: 30000,
        stock: "In stock",
        images: [
          "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop"
        ],
        breadcrumb: "Home / Laptops / Lenovo Laptops",
        specs: [
          { feat: "CPU", spec: "Intel Core i5-8265U (1.6–3.9 GHz)" },
          { feat: "RAM", spec: "8 GB DDR4-2400" },
          { feat: "Storage", spec: "256 GB PCIe NVMe SSD" },
          { feat: "Display", spec: "13.3″ FHD IPS touchscreen" },
          { feat: "Battery", spec: "45 Wh, Rapid Charge" }
        ],
        delivery: "Estimated delivery 1-2 days • 6 months warranty",
        description: "The Lenovo ThinkPad Yoga 390 is a versatile 2-in-1 laptop with powerful performance and a durable build.",
        reviews: []
      },
      {
        id: 2,
        name: "HP ProBook 430 G6 Core I5 8th Gen 8GB 256GB SSD 13.3 Inch Laptop",
        category: "Laptops",
        tags: ["Hp Laptops", "Laptops"],
        price: 21000,
        oldPrice: 25000,
        stock: "In stock",
        images: ["https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Laptops / HP Laptops",
        specs: [
          { feat: "CPU", spec: "Intel Core i5-8265U" },
          { feat: "RAM", spec: "8 GB" },
          { feat: "Storage", spec: "256 GB SSD" }
        ],
        delivery: "1-2 days • 6 months warranty",
        description: "Reliable business laptop with solid performance."
      },
      {
        id: 3,
        name: "HP EliteBook 1040 G3 Intel Core i7 8GB 256GB",
        category: "Laptops",
        tags: ["Hp Laptops", "Laptops"],
        price: 22000,
        images: ["https://images.unsplash.com/photo-1587614295999-6d9a7f3d6b4f?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Laptops / HP",
        specs: [
          { feat: "CPU", spec: "Intel Core i7" },
          { feat: "RAM", spec: "8 GB" },
          { feat: "Storage", spec: "256 GB" }
        ],
        delivery: "1-2 days"
      },
      {
        id: 4,
        name: "HP EliteBook 840 G5 Intel Core i7 8GB 256GB 14′ FHD",
        category: "Laptops",
        tags: ["Hp Laptops", "Laptops"],
        price: 29000,
        images: ["https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Laptops / HP",
        specs: [
          { feat: "CPU", spec: "Intel Core i7" },
          { feat: "RAM", spec: "8 GB" },
          { feat: "Storage", spec: "256 GB SSD" }
        ],
        delivery: "1-2 days"
      },
      {
        id: 5,
        name: "iPhone 14 Pro 128GB",
        category: "Smartphones",
        tags: ["Apple", "iPhone"],
        price: 129000,
        images: ["https://images.unsplash.com/photo-1664474536192-0d59e8f3d5e4?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Smartphones / Apple",
        specs: [
          { feat: "Display", spec: "6.1″ Super Retina XDR" },
          { feat: "Chip", spec: "A16 Bionic" },
          { feat: "Storage", spec: "128 GB" }
        ],
        delivery: "1-2 days"
      },
      {
        id: 6,
        name: "Sony WH-1000XM5 Headphones",
        category: "Audio",
        tags: ["Headphones", "Sony"],
        price: 32000,
        images: ["https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Audio / Headphones",
        specs: [
          { feat: "Noise Cancelling", spec: "Yes" },
          { feat: "Battery", spec: "30 hours" }
        ],
        delivery: "1-2 days"
      }
    ];

    // Helper to render product card
    function renderProductCard(product) {
      return `
        <div class="product-card" data-id="${product.id}">
          <div class="product-image"><img src="${product.images[0]}" alt="${product.name}"></div>
          <div class="product-tags">${product.tags.join(', ')}</div>
          <div class="product-title">${product.name}</div>
          <div class="product-category">${product.category}</div>
          <div class="product-price">KSh ${product.price.toLocaleString()}.00</div>
        </div>
      `;
    }

    // Populate best sellers grid
    const bestGrid = document.getElementById('bestSellersGrid');
    function renderBestSellers(filterCategory = 'all') {
      let filtered = products;
      if (filterCategory !== 'all') {
        filtered = products.filter(p => p.category === filterCategory);
      }
      bestGrid.innerHTML = filtered.map(renderProductCard).join('');
    }
    renderBestSellers();

    // Populate trending swiper
    const trendingWrapper = document.getElementById('trendingSwiperWrapper');
    trendingWrapper.innerHTML = products.map(p => `
      <div class="swiper-slide">${renderProductCard(p)}</div>
    `).join('');

    // Category filter
    document.getElementById('categoryFilter').addEventListener('change', (e) => {
      renderBestSellers(e.target.value);
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    function filterProducts() {
      const term = searchInput.value.toLowerCase();
      const filtered = products.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.tags.some(t => t.toLowerCase().includes(term)) ||
        p.category.toLowerCase().includes(term)
      );
      bestGrid.innerHTML = filtered.map(renderProductCard).join('');
    }
    searchBtn.addEventListener('click', filterProducts);
    searchInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') filterProducts(); });

    // Modal functionality
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    let currentProduct = null;

    function openModal(productId) {
      const product = products.find(p => p.id == productId);
      if (!product) return;
      currentProduct = product;
      document.getElementById('modalBreadcrumb').innerText = product.breadcrumb || 'Home / Products';
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
      // Related products (exclude current)
      const related = products.filter(p => p.id != productId && p.category === product.category).slice(0,4);
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

    document.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', () => openModal(card.dataset.id));
    });

    // Listen for dynamically added cards
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

    // Add to cart (alert for now)
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

    // Swiper initialization
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
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 }
      }
    });