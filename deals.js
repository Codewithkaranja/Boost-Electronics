 // ---------- DEALS PRODUCT DATA (aggregated from all categories) ----------
    const deals = [
      // Laptops on sale
      {
        id: 1,
        name: "Lenovo ThinkPad Yoga 390 Core i5 8GB RAM 256GB SSD 13.3″ Display",
        category: "Laptops",
        tags: ["Laptops", "Lenovo", "256GB SSD", "8GB RAM"],
        price: 25000,
        oldPrice: 30000,
        stock: "In stock",
        images: ["https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Laptops / Lenovo",
        specs: [
          { feat: "CPU", spec: "Intel Core i5-8265U" },
          { feat: "RAM", spec: "8 GB" },
          { feat: "Storage", spec: "256 GB SSD" }
        ],
        delivery: "1-2 days • 6 months warranty",
        description: "Versatile 2-in-1 laptop with powerful performance."
      },
      {
        id: 2,
        name: "HP ProBook 430 G6 Core I5 8th Gen 8GB 256GB SSD",
        category: "Laptops",
        tags: ["HP", "Laptops"],
        price: 21000,
        oldPrice: 25000,
        stock: "In stock",
        images: ["https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Laptops / HP",
        specs: [
          { feat: "CPU", spec: "Intel Core i5" },
          { feat: "RAM", spec: "8 GB" },
          { feat: "Storage", spec: "256 GB SSD" }
        ],
        delivery: "1-2 days",
        description: "Reliable business laptop."
      },
      // Smartphones on sale
      {
        id: 101,
        name: "Apple iPhone 15 Pro 256GB – Natural Titanium",
        category: "Smartphones",
        tags: ["Apple", "iPhone", "256GB"],
        price: 159999,
        oldPrice: 174999,
        stock: "In stock",
        images: ["https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Smartphones / Apple",
        specs: [
          { feat: "Display", spec: "6.1″ Super Retina XDR" },
          { feat: "Chip", spec: "A17 Pro" },
          { feat: "Storage", spec: "256 GB" }
        ],
        delivery: "1-2 days",
        description: "The most pro iPhone yet."
      },
      {
        id: 102,
        name: "Samsung Galaxy S24 Ultra 512GB – Titanium Black",
        category: "Smartphones",
        tags: ["Samsung", "512GB", "5G"],
        price: 179999,
        oldPrice: 194999,
        stock: "In stock",
        images: ["https://images.unsplash.com/photo-1707055177911-9c4b3a4b3b4b?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Smartphones / Samsung",
        specs: [
          { feat: "Display", spec: "6.8″ Dynamic AMOLED" },
          { feat: "Chip", spec: "Snapdragon 8 Gen 3" },
          { feat: "Storage", spec: "512 GB" }
        ],
        delivery: "1-2 days",
        description: "The ultimate Android experience."
      },
      // Headphones on sale
      {
        id: 201,
        name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
        category: "Headphones",
        tags: ["Sony", "Noise Cancelling"],
        price: 45000,
        oldPrice: 52000,
        stock: "In stock",
        images: ["https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Headphones / Sony",
        specs: [
          { feat: "Type", spec: "Over-Ear" },
          { feat: "Battery", spec: "30 hours" }
        ],
        delivery: "1-2 days",
        description: "Industry-leading noise cancellation."
      },
      {
        id: 202,
        name: "Apple AirPods Pro (2nd Generation)",
        category: "Headphones",
        tags: ["Apple", "AirPods", "Wireless"],
        price: 35999,
        oldPrice: 39999,
        stock: "In stock",
        images: ["https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Headphones / Apple",
        specs: [
          { feat: "Type", spec: "True Wireless" },
          { feat: "Battery", spec: "6h" }
        ],
        delivery: "1-2 days",
        description: "The next generation of AirPods Pro."
      },
      // Cameras on sale
      {
        id: 301,
        name: "Canon EOS R50 Mirrorless Camera with 18-45mm Lens",
        category: "Cameras",
        tags: ["Canon", "Mirrorless", "4K"],
        price: 89999,
        oldPrice: 99999,
        stock: "In stock",
        images: ["https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Cameras / Canon",
        specs: [
          { feat: "Sensor", spec: "24.2MP APS-C" },
          { feat: "Video", spec: "4K" }
        ],
        delivery: "1-2 days",
        description: "Perfect for vlogging."
      },
      {
        id: 302,
        name: "Sony ZV-E10 Vlogging Camera with 16-50mm Lens",
        category: "Cameras",
        tags: ["Sony", "Vlogging", "4K"],
        price: 79999,
        oldPrice: 89999,
        stock: "In stock",
        images: ["https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Cameras / Sony",
        specs: [
          { feat: "Sensor", spec: "24.2MP APS-C" },
          { feat: "Video", spec: "4K" }
        ],
        delivery: "1-2 days",
        description: "Designed for vloggers."
      },
      {
        id: 303,
        name: "GoPro Hero 12 Black Action Camera",
        category: "Cameras",
        tags: ["GoPro", "Action Camera", "5.3K"],
        price: 54999,
        oldPrice: 62999,
        stock: "In stock",
        images: ["https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=600&h=400&fit=crop"],
        breadcrumb: "Home / Cameras / GoPro",
        specs: [
          { feat: "Video", spec: "5.3K" },
          { feat: "Stabilization", spec: "HyperSmooth 6.0" }
        ],
        delivery: "1-2 days",
        description: "The most advanced GoPro yet."
      }
    ];

    // Helper to calculate discount percentage
    function getDiscountPercent(oldPrice, newPrice) {
      return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
    }

    // Helper to render product card (with discount flag)
    function renderProductCard(product) {
      const discount = product.oldPrice ? getDiscountPercent(product.oldPrice, product.price) : 0;
      return `
        <div class="product-card" data-id="${product.id}">
          ${discount > 0 ? `<div class="discount-flag">-${discount}%</div>` : ''}
          <div class="product-image"><img src="${product.images[0]}" alt="${product.name}"></div>
          <div class="product-tags">${product.tags.join(', ')}</div>
          <div class="product-title">${product.name}</div>
          <div class="product-category">${product.category}</div>
          <div class="product-price">
            <span class="current-price">KSh ${product.price.toLocaleString()}</span>
            ${product.oldPrice ? `<span class="old-price">KSh ${product.oldPrice.toLocaleString()}</span>` : ''}
          </div>
        </div>
      `;
    }

    // Populate deals grid
    const dealsGrid = document.getElementById('dealsGrid');
    function renderDeals(productsArray) {
      dealsGrid.innerHTML = productsArray.map(renderProductCard).join('');
    }
    renderDeals(deals);

    // Featured deals swiper (first 4 deals)
    const featuredWrapper = document.getElementById('featuredDealsWrapper');
    featuredWrapper.innerHTML = deals.slice(0,4).map(p => {
      const discount = getDiscountPercent(p.oldPrice, p.price);
      return `
        <div class="swiper-slide">
          <div class="deal-slide">
            <span class="discount-badge">-${discount}%</span>
            <h3>${p.name.substring(0,40)}...</h3>
            <div>
              <span class="old-price">KSh ${p.oldPrice.toLocaleString()}</span>
              <span class="new-price">KSh ${p.price.toLocaleString()}</span>
            </div>
            <button class="btn" onclick="openModal(${p.id})">Shop Now</button>
          </div>
        </div>
      `;
    }).join('');

    // Sort functionality
    document.getElementById('sortFilter').addEventListener('change', (e) => {
      let sorted = [...deals];
      const val = e.target.value;
      if (val === 'priceLow') sorted.sort((a,b) => a.price - b.price);
      else if (val === 'priceHigh') sorted.sort((a,b) => b.price - a.price);
      else if (val === 'discount') sorted.sort((a,b) => {
        const discA = getDiscountPercent(a.oldPrice, a.price);
        const discB = getDiscountPercent(b.oldPrice, b.price);
        return discB - discA;
      });
      renderDeals(sorted);
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    function filterDeals() {
      const term = searchInput.value.toLowerCase();
      const filtered = deals.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.tags.some(t => t.toLowerCase().includes(term))
      );
      renderDeals(filtered);
    }
    searchBtn.addEventListener('click', filterDeals);
    searchInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') filterDeals(); });

    // Modal functionality
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    let currentProduct = null;

    window.openModal = function(productId) {
      const product = deals.find(p => p.id == productId);
      if (!product) return;
      currentProduct = product;
      const discount = product.oldPrice ? getDiscountPercent(product.oldPrice, product.price) : 0;

      document.getElementById('modalBreadcrumb').innerText = product.breadcrumb || 'Home / Deals';
      document.getElementById('modalMainImg').innerHTML = `<img src="${product.images[0]}" alt="">`;
      let thumbs = '';
      product.images.forEach((img, idx) => {
        thumbs += `<div class="modal-thumb ${idx===0?'active':''}" onclick="document.getElementById('modalMainImg').innerHTML='<img src=\\''+img+'\\'>'"><img src="${img}" alt=""></div>`;
      });
      document.getElementById('modalThumbnails').innerHTML = thumbs;
      document.getElementById('modalTitle').innerText = product.name;
      document.getElementById('modalTags').innerText = product.tags.join(', ');
      document.getElementById('modalStock').innerText = product.stock || 'In stock';
      document.getElementById('modalCurrentPrice').innerText = `KSh ${product.price.toLocaleString()}`;
      document.getElementById('modalOldPrice').innerHTML = product.oldPrice ? `KSh ${product.oldPrice.toLocaleString()}` : '';
      document.getElementById('modalDiscountBadge').innerHTML = product.oldPrice ? `-${discount}%` : '';
      
      let specRows = '';
      product.specs.forEach(s => {
        specRows += `<tr><td>${s.feat}</td><td>${s.spec}</td></tr>`;
      });
      document.getElementById('modalSpecs').innerHTML = specRows;
      document.getElementById('modalDelivery').innerText = product.delivery || 'Estimated delivery 1-2 days';
      document.getElementById('tabDetails').innerHTML = `<p>${product.description || 'No details available.'}</p>`;
      document.getElementById('tabReviews').innerHTML = '<p>No reviews yet.</p>';
      
      // Related products (exclude current, any 4)
      const related = deals.filter(p => p.id != productId).slice(0,4);
      document.getElementById('relatedGrid').innerHTML = related.map(r => `
        <div class="related-card" onclick="openModal(${r.id})">
          <img src="${r.images[0]}" style="height:100px; width:100%; object-fit:cover;">
          <p style="font-weight:600; font-size:0.9rem;">${r.name.substring(0,30)}...</p>
          <p style="color:var(--primary);">KSh ${r.price.toLocaleString()}</p>
        </div>
      `).join('');
      
      modalOverlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
    };

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
      pagination: { el: '.swiper-pagination', clickable: true },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });

    // Countdown timer (ends in 2 days from now)
    function startCountdown() {
      const countdownDate = new Date();
      countdownDate.setDate(countdownDate.getDate() + 2); // 2 days from now
      countdownDate.setHours(23, 59, 59, 999); // end of day

      function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days.toString().padStart(2, '0');
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');

        if (distance < 0) {
          clearInterval(interval);
          document.getElementById('countdown').innerHTML = "<span>EXPIRED</span>";
        }
      }
      updateCountdown();
      const interval = setInterval(updateCountdown, 1000);
    }
    startCountdown();