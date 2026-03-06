    // ---------- CAMERA PRODUCT DATA ----------
    const cameras = [
      {
        id: 301,
        name: "Canon EOS R50 Mirrorless Camera with 18-45mm Lens",
        category: "Cameras",
        tags: ["Canon", "Mirrorless", "4K", "Vlogging", "24.2MP"],
        price: 89999,
        oldPrice: 99999,
        stock: "In stock",
        images: [
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop"
        ],
        breadcrumb: "Home / Cameras / Canon",
        specs: [
          { feat: "Sensor", spec: "24.2MP APS-C CMOS" },
          { feat: "Processor", spec: "DIGIC X" },
          { feat: "Video", spec: "4K 30p, 1080p 120p" },
          { feat: "AF System", spec: "Dual Pixel CMOS AF II" },
          { feat: "Screen", spec: "3.0″ Vari-angle Touchscreen" }
        ],
        delivery: "1-2 days • 1 year warranty",
        description: "Compact, lightweight mirrorless camera perfect for vlogging and content creation."
      },
      {
        id: 302,
        name: "Sony ZV-E10 Vlogging Camera with 16-50mm Lens",
        category: "Cameras",
        tags: ["Sony", "Mirrorless", "Vlogging", "4K", "24.2MP"],
        price: 79999,
        oldPrice: 89999,
        stock: "In stock",
        images: ["https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Cameras / Sony",
        specs: [
          { feat: "Sensor", spec: "24.2MP APS-C CMOS" },
          { feat: "Video", spec: "4K 30p, 1080p 120p" },
          { feat: "AF System", spec: "Real-time Eye AF" },
          { feat: "Screen", spec: "3.0″ Vari-angle Touchscreen" },
          { feat: "Microphone", spec: "Built-in directional 3-capsule" }
        ],
        delivery: "1-2 days",
        description: "Designed specifically for vloggers with product showcase mode and background defocus."
      },
      {
        id: 303,
        name: "Nikon D7500 DSLR Camera with 18-140mm Lens",
        category: "Cameras",
        tags: ["Nikon", "DSLR", "4K", "20.9MP"],
        price: 119999,
        oldPrice: 134999,
        stock: "In stock",
        images: ["https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Cameras / Nikon",
        specs: [
          { feat: "Sensor", spec: "20.9MP DX-format CMOS" },
          { feat: "Processor", spec: "EXPEED 5" },
          { feat: "Video", spec: "4K 30p" },
          { feat: "AF System", spec: "51-point AF" },
          { feat: "Continuous Shooting", spec: "8 fps" }
        ],
        delivery: "1-2 days",
        description: "Versatile DSLR with excellent image quality and rugged build."
      },
      {
        id: 304,
        name: "GoPro Hero 12 Black Action Camera",
        category: "Cameras",
        tags: ["GoPro", "Action Camera", "5.3K", "Waterproof"],
        price: 54999,
        oldPrice: 62999,
        stock: "In stock",
        images: ["https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Cameras / GoPro",
        specs: [
          { feat: "Video", spec: "5.3K 60p, 4K 120p" },
          { feat: "Photo", spec: "27MP" },
          { feat: "Stabilization", spec: "HyperSmooth 6.0" },
          { feat: "Waterproof", spec: "10m" },
          { feat: "Front Screen", spec: "Yes" }
        ],
        delivery: "1-2 days",
        description: "The most advanced GoPro yet with exceptional stabilization and image quality."
      },
      {
        id: 305,
        name: "Fujifilm X-T30 II Mirrorless Camera with 18-55mm Lens",
        category: "Cameras",
        tags: ["Fujifilm", "Mirrorless", "26.1MP", "4K"],
        price: 104999,
        oldPrice: 114999,
        stock: "In stock",
        images: ["https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Cameras / Fujifilm",
        specs: [
          { feat: "Sensor", spec: "26.1MP X-Trans CMOS 4" },
          { feat: "Processor", spec: "X-Processor 4" },
          { feat: "Video", spec: "4K 30p" },
          { feat: "AF System", spec: "425-point hybrid AF" },
          { feat: "Film Simulations", spec: "18 modes" }
        ],
        delivery: "1-2 days",
        description: "Compact mirrorless with classic design and outstanding color science."
      },
      {
        id: 306,
        name: "Panasonic Lumix G100 Vlogging Camera with 12-32mm Lens",
        category: "Cameras",
        tags: ["Panasonic", "Mirrorless", "Vlogging", "4K"],
        price: 59999,
        oldPrice: 69999,
        stock: "In stock",
        images: ["https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Cameras / Panasonic",
        specs: [
          { feat: "Sensor", spec: "20.3MP Micro Four Thirds" },
          { feat: "Video", spec: "4K 30p" },
          { feat: "Audio", spec: "Nokia OZO Audio" },
          { feat: "Screen", spec: "3.0″ Vari-angle" }
        ],
        delivery: "1-2 days",
        description: "Designed for vloggers with professional audio and easy smartphone connectivity."
      },
      {
        id: 307,
        name: "Instax Mini 11 Instant Camera",
        category: "Cameras",
        tags: ["Fujifilm", "Instant", "Analog"],
        price: 8999,
        oldPrice: 10999,
        stock: "In stock",
        images: ["https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Cameras / Fujifilm",
        specs: [
          { feat: "Film", spec: "Instax Mini" },
          { feat: "Lens", spec: "60mm f/12.7" },
          { feat: "Exposure", spec: "Automatic" },
          { feat: "Selfie Mode", spec: "Yes (close-up lens)" }
        ],
        delivery: "1-2 days",
        description: "Fun and easy instant camera for parties and memories."
      },
      {
        id: 308,
        name: "DJI Osmo Pocket 3 Creator Combo",
        category: "Cameras",
        tags: ["DJI", "Gimbal", "4K", "Vlogging"],
        price: 69999,
        oldPrice: 79999,
        stock: "In stock",
        images: ["https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Cameras / DJI",
        specs: [
          { feat: "Sensor", spec: "1-inch CMOS" },
          { feat: "Video", spec: "4K 120p" },
          { feat: "Stabilization", spec: "3-axis mechanical" },
          { feat: "Screen", spec: "2.0″ rotatable touchscreen" },
          { feat: "Tracking", spec: "ActiveTrack 6.0" }
        ],
        delivery: "1-2 days",
        description: "All-in-one pocket gimbal camera for smooth, cinematic footage."
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

    // Populate cameras grid
    const camerasGrid = document.getElementById('camerasGrid');
    function renderCameras(productsArray) {
      camerasGrid.innerHTML = productsArray.map(renderProductCard).join('');
    }
    renderCameras(cameras);

    // Sort functionality
    document.getElementById('sortFilter').addEventListener('change', (e) => {
      let sorted = [...cameras];
      const val = e.target.value;
      if (val === 'priceLow') sorted.sort((a,b) => a.price - b.price);
      else if (val === 'priceHigh') sorted.sort((a,b) => b.price - a.price);
      else if (val === 'name') sorted.sort((a,b) => a.name.localeCompare(b.name));
      renderCameras(sorted);
    });

    // Search functionality (within cameras)
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

    // Trending swiper (first 6 cameras)
    const trendingWrapper = document.getElementById('trendingSwiperWrapper');
    trendingWrapper.innerHTML = cameras.slice(0,6).map(p => `
      <div class="swiper-slide">${renderProductCard(p)}</div>
    `).join('');

    // Modal functionality
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    let currentProduct = null;

    function openModal(productId) {
      const product = cameras.find(p => p.id == productId);
      if (!product) return;
      currentProduct = product;
      document.getElementById('modalBreadcrumb').innerText = product.breadcrumb || 'Home / Cameras';
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
      // Related cameras (same category, exclude current)
      const related = cameras.filter(p => p.id != productId && p.category === product.category).slice(0,4);
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
    