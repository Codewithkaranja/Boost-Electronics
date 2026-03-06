// ---------- SMARTPHONE PRODUCT DATA ----------
    const smartphones = [
      {
        id: 101,
        name: "Apple iPhone 15 Pro 256GB – Natural Titanium",
        category: "Smartphones",
        tags: ["Apple", "iPhone", "5G", "256GB", "A17 Pro"],
        price: 159999,
        oldPrice: 174999,
        stock: "In stock",
        images: [
          "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1695048132920-7d8a3a0c6b6a?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1695048133021-4c5c2b8a5f5a?w=600&h=400&fit=crop"
        ],
        breadcrumb: "Home / Smartphones / Apple",
        specs: [
          { feat: "Display", spec: "6.1″ Super Retina XDR, ProMotion 120Hz" },
          { feat: "Chip", spec: "A17 Pro (3nm)" },
          { feat: "RAM", spec: "8 GB" },
          { feat: "Storage", spec: "256 GB NVMe" },
          { feat: "Camera", spec: "48MP Main + 12MP Ultra Wide + 12MP Telephoto" },
          { feat: "Battery", spec: "Up to 23h video playback" }
        ],
        delivery: "1-2 days • 1 year warranty",
        description: "The most pro iPhone yet, with a titanium design and groundbreaking A17 Pro chip."
      },
      {
        id: 102,
        name: "Samsung Galaxy S24 Ultra 512GB – Titanium Black",
        category: "Smartphones",
        tags: ["Samsung", "Android", "5G", "512GB", "S Pen"],
        price: 179999,
        oldPrice: 194999,
        stock: "In stock",
        images: ["https://images.unsplash.com/photo-1707055177911-9c4b3a4b3b4b?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Smartphones / Samsung",
        specs: [
          { feat: "Display", spec: "6.8″ Dynamic AMOLED 2X, 120Hz" },
          { feat: "Chip", spec: "Snapdragon 8 Gen 3" },
          { feat: "RAM", spec: "12 GB" },
          { feat: "Storage", spec: "512 GB UFS 4.0" },
          { feat: "Camera", spec: "200MP Main + 12MP Ultra Wide + 50MP Telephoto" },
          { feat: "Battery", spec: "5000 mAh" }
        ],
        delivery: "1-2 days • 1 year warranty",
        description: "The ultimate Android experience with built-in S Pen and AI features."
      },
      {
        id: 103,
        name: "Google Pixel 8 Pro 128GB – Obsidian",
        category: "Smartphones",
        tags: ["Google", "Pixel", "AI", "128GB"],
        price: 119999,
        oldPrice: 134999,
        stock: "In stock",
        images: ["https://images.unsplash.com/photo-1705496185743-9f1f2b6b0f0f?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Smartphones / Google",
        specs: [
          { feat: "Display", spec: "6.7″ LTPO OLED, 120Hz" },
          { feat: "Chip", spec: "Google Tensor G3" },
          { feat: "RAM", spec: "12 GB" },
          { feat: "Storage", spec: "128 GB UFS 3.1" },
          { feat: "Camera", spec: "50MP Main + 48MP Ultra Wide + 48MP Telephoto" }
        ],
        delivery: "1-2 days",
        description: "The Pixel 8 Pro is the most powerful Pixel yet, with advanced AI and camera capabilities."
      },
      {
        id: 104,
        name: "Xiaomi 14 Ultra 512GB – Black",
        category: "Smartphones",
        tags: ["Xiaomi", "Android", "Leica", "512GB"],
        price: 139999,
        oldPrice: 154999,
        stock: "In stock",
        images: ["https://images.unsplash.com/photo-1707055177911-9c4b3a4b3b4b?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Smartphones / Xiaomi",
        specs: [
          { feat: "Display", spec: "6.73″ AMOLED, 120Hz" },
          { feat: "Chip", spec: "Snapdragon 8 Gen 3" },
          { feat: "RAM", spec: "16 GB" },
          { feat: "Storage", spec: "512 GB UFS 4.0" },
          { feat: "Camera", spec: "50MP Quad Leica system" }
        ],
        delivery: "1-2 days",
        description: "Professional camera system co-engineered with Leica."
      },
      {
        id: 105,
        name: "Samsung Galaxy Z Fold5 512GB – Icy Blue",
        category: "Smartphones",
        tags: ["Samsung", "Foldable", "5G", "512GB"],
        price: 219999,
        oldPrice: 239999,
        stock: "In stock",
        images: ["https://images.unsplash.com/photo-1707055177911-9c4b3a4b3b4b?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Smartphones / Samsung",
        specs: [
          { feat: "Display", spec: "7.6″ Dynamic AMOLED 2X (inner), 6.2″ (cover)" },
          { feat: "Chip", spec: "Snapdragon 8 Gen 2" },
          { feat: "RAM", spec: "12 GB" },
          { feat: "Storage", spec: "512 GB" },
          { feat: "Battery", spec: "4400 mAh" }
        ],
        delivery: "1-2 days",
        description: "The ultimate multitasking device with a massive foldable screen."
      },
      {
        id: 106,
        name: "iPhone 13 128GB – Midnight",
        category: "Smartphones",
        tags: ["Apple", "iPhone", "128GB"],
        price: 89999,
        oldPrice: 104999,
        stock: "In stock",
        images: ["https://images.unsplash.com/photo-1664474536192-0d59e8f3d5e4?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Smartphones / Apple",
        specs: [
          { feat: "Display", spec: "6.1″ Super Retina XDR" },
          { feat: "Chip", spec: "A15 Bionic" },
          { feat: "RAM", spec: "4 GB" },
          { feat: "Storage", spec: "128 GB" }
        ],
        delivery: "1-2 days",
        description: "Still a powerful choice with great camera and battery life."
      },
      {
        id: 107,
        name: "Tecno Camon 20 Pro 5G 256GB – Dark Blue",
        category: "Smartphones",
        tags: ["Tecno", "Android", "5G", "256GB"],
        price: 42999,
        oldPrice: 49999,
        stock: "In stock",
        images: ["https://images.unsplash.com/photo-1707055177911-9c4b3a4b3b4b?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Smartphones / Tecno",
        specs: [
          { feat: "Display", spec: "6.67″ AMOLED, 120Hz" },
          { feat: "Chip", spec: "MediaTek Dimensity 8050" },
          { feat: "RAM", spec: "8 GB" },
          { feat: "Storage", spec: "256 GB" },
          { feat: "Camera", spec: "64MP Main" }
        ],
        delivery: "1-2 days",
        description: "Affordable 5G with impressive camera and fast charging."
      },
      {
        id: 108,
        name: "Infinix Note 30 128GB – Glacier White",
        category: "Smartphones",
        tags: ["Infinix", "Android", "128GB"],
        price: 24999,
        oldPrice: 29999,
        stock: "In stock",
        images: ["https://images.unsplash.com/photo-1707055177911-9c4b3a4b3b4b?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Smartphones / Infinix",
        specs: [
          { feat: "Display", spec: "6.78″ IPS, 120Hz" },
          { feat: "Chip", spec: "MediaTek Helio G99" },
          { feat: "RAM", spec: "8 GB" },
          { feat: "Storage", spec: "128 GB" }
        ],
        delivery: "1-2 days",
        description: "Great budget phone with large display and long battery life."
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

    // Populate smartphones grid
    const smartphonesGrid = document.getElementById('smartphonesGrid');
    function renderSmartphones(productsArray) {
      smartphonesGrid.innerHTML = productsArray.map(renderProductCard).join('');
    }
    renderSmartphones(smartphones);

    // Sort functionality
    document.getElementById('sortFilter').addEventListener('change', (e) => {
      let sorted = [...smartphones];
      const val = e.target.value;
      if (val === 'priceLow') sorted.sort((a,b) => a.price - b.price);
      else if (val === 'priceHigh') sorted.sort((a,b) => b.price - a.price);
      else if (val === 'name') sorted.sort((a,b) => a.name.localeCompare(b.name));
      renderSmartphones(sorted);
    });

    // Search functionality (within smartphones)
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    function filterSmartphones() {
      const term = searchInput.value.toLowerCase();
      const filtered = smartphones.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.tags.some(t => t.toLowerCase().includes(term))
      );
      renderSmartphones(filtered);
    }
    searchBtn.addEventListener('click', filterSmartphones);
    searchInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') filterSmartphones(); });

    // Trending swiper (first 6 smartphones)
    const trendingWrapper = document.getElementById('trendingSwiperWrapper');
    trendingWrapper.innerHTML = smartphones.slice(0,6).map(p => `
      <div class="swiper-slide">${renderProductCard(p)}</div>
    `).join('');

    // Modal functionality
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    let currentProduct = null;

    function openModal(productId) {
      const product = smartphones.find(p => p.id == productId);
      if (!product) return;
      currentProduct = product;
      document.getElementById('modalBreadcrumb').innerText = product.breadcrumb || 'Home / Smartphones';
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
      // Related smartphones (same category, exclude current)
      const related = smartphones.filter(p => p.id != productId && p.category === product.category).slice(0,4);
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
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 }
      }
    });