 // ---------- LAPTOP PRODUCT DATA (only laptops) ----------
    const laptops = [
      {
        id: 1,
        name: "Lenovo ThinkPad Yoga 390 Core i5 8GB RAM 256GB SSD 13.3″ Display",
        category: "Laptops",
        tags: ["Laptops", "Lenovo", "256GB SSD", "8GB RAM", "Touchscreen"],
        price: 25000,
        oldPrice: 30000,
        stock: "In stock",
        images: [
          "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop"
        ],
        breadcrumb: "Home / Laptops / Lenovo",
        specs: [
          { feat: "CPU", spec: "Intel Core i5-8265U (1.6–3.9 GHz)" },
          { feat: "RAM", spec: "8 GB DDR4" },
          { feat: "Storage", spec: "256 GB PCIe NVMe SSD" },
          { feat: "Display", spec: "13.3″ FHD IPS touchscreen" },
          { feat: "Battery", spec: "45 Wh, Rapid Charge" }
        ],
        delivery: "Estimated delivery 1-2 days • 6 months warranty",
        description: "Versatile 2-in-1 laptop with powerful performance and durable build."
      },
      {
        id: 2,
        name: "HP ProBook 430 G6 Core I5 8th Gen 8GB 256GB SSD 13.3 Inch",
        category: "Laptops",
        tags: ["HP", "Laptops", "Business"],
        price: 21000,
        oldPrice: 25000,
        stock: "In stock",
        images: ["https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Laptops / HP",
        specs: [
          { feat: "CPU", spec: "Intel Core i5-8265U" },
          { feat: "RAM", spec: "8 GB" },
          { feat: "Storage", spec: "256 GB SSD" },
          { feat: "Display", spec: "13.3″ HD" }
        ],
        delivery: "1-2 days • 6 months warranty",
        description: "Reliable business laptop with solid performance."
      },
      {
        id: 3,
        name: "HP EliteBook 1040 G3 Intel Core i7 8GB 256GB",
        category: "Laptops",
        tags: ["HP", "Laptops", "Premium"],
        price: 22000,
        images: ["https://images.unsplash.com/photo-1587614295999-6d9a7f3d6b4f?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Laptops / HP",
        specs: [
          { feat: "CPU", spec: "Intel Core i7" },
          { feat: "RAM", spec: "8 GB" },
          { feat: "Storage", spec: "256 GB SSD" }
        ],
        delivery: "1-2 days",
        description: "Ultrabook with premium build."
      },
      {
        id: 4,
        name: "HP EliteBook 840 G5 Intel Core i7 8GB 256GB 14′ FHD",
        category: "Laptops",
        tags: ["HP", "Laptops", "Business"],
        price: 29000,
        images: ["https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Laptops / HP",
        specs: [
          { feat: "CPU", spec: "Intel Core i7" },
          { feat: "RAM", spec: "8 GB" },
          { feat: "Storage", spec: "256 GB SSD" },
          { feat: "Display", spec: "14″ FHD" }
        ],
        delivery: "1-2 days",
        description: "Powerful business laptop."
      },
      {
        id: 5,
        name: "Lenovo ThinkPad X1 Carbon 7th Gen i5 8GB 256GB",
        category: "Laptops",
        tags: ["Lenovo", "Laptops", "Ultrabook"],
        price: 28000,
        images: ["https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Laptops / Lenovo",
        specs: [
          { feat: "CPU", spec: "Intel Core i5" },
          { feat: "RAM", spec: "8 GB" },
          { feat: "Storage", spec: "256 GB SSD" },
          { feat: "Weight", spec: "1.13 kg" }
        ],
        delivery: "1-2 days",
        description: "Lightweight carbon-fiber laptop."
      },
      {
        id: 6,
        name: "Dell XPS 13 9310 Intel Core i7 16GB 512GB",
        category: "Laptops",
        tags: ["Dell", "Laptops", "Premium"],
        price: 115000,
        images: ["https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Laptops / Dell",
        specs: [
          { feat: "CPU", spec: "Intel Core i7-1165G7" },
          { feat: "RAM", spec: "16 GB LPDDR4x" },
          { feat: "Storage", spec: "512 GB SSD" },
          { feat: "Display", spec: "13.4″ 4K UHD+" }
        ],
        delivery: "1-2 days",
        description: "Top-of-the-line ultrabook."
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

    // Populate laptops grid
    const laptopsGrid = document.getElementById('laptopsGrid');
    function renderLaptops(productsArray) {
      laptopsGrid.innerHTML = productsArray.map(renderProductCard).join('');
    }
    renderLaptops(laptops);

    // Sort functionality
    document.getElementById('sortFilter').addEventListener('change', (e) => {
      let sorted = [...laptops];
      const val = e.target.value;
      if (val === 'priceLow') sorted.sort((a,b) => a.price - b.price);
      else if (val === 'priceHigh') sorted.sort((a,b) => b.price - a.price);
      else if (val === 'name') sorted.sort((a,b) => a.name.localeCompare(b.name));
      renderLaptops(sorted);
    });

    // Search functionality (within laptops)
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

    // Trending swiper (first 6 laptops)
    const trendingWrapper = document.getElementById('trendingSwiperWrapper');
    trendingWrapper.innerHTML = laptops.slice(0,6).map(p => `
      <div class="swiper-slide">${renderProductCard(p)}</div>
    `).join('');

    // Modal functionality (same as index)
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    let currentProduct = null;

    function openModal(productId) {
      const product = laptops.find(p => p.id == productId);
      if (!product) return;
      currentProduct = product;
      document.getElementById('modalBreadcrumb').innerText = product.breadcrumb || 'Home / Laptops';
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
      // Related laptops (same category, exclude current)
      const related = laptops.filter(p => p.id != productId && p.category === product.category).slice(0,4);
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