// ====================== KHỞI TẠO ======================
// Đợi HTML tải xong mới chạy JavaScript
document.addEventListener('DOMContentLoaded', function() {
  
  // ====================== 1. MENU MOBILE ======================
  // Lấy nút menu mobile
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  // Khi click vào nút menu
  if (mobileToggle) {
    mobileToggle.addEventListener('click', function() {
      // Thêm/xóa class 'open' để hiện/ẩn menu
      mainNav.classList.toggle('open');
    });
  }
  
  // ====================== 2. FILTER SẢN PHẨM ======================
  // Lấy tất cả các nút filter
  const filterButtons = document.querySelectorAll('.filters button');
  // Lấy tất cả sản phẩm (dùng chung cho cả filter và search)
  const productCards = document.querySelectorAll('.product-card');
  
  // Lặp qua từng nút filter
  filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Xóa class 'active' khỏi tất cả nút
      filterButtons.forEach(function(btn) {
        btn.classList.remove('active');
      });
      
      // Thêm class 'active' vào nút được click
      this.classList.add('active');
      
      // Lấy text của nút (Tất cả, Dây cung, Kềm, Phụ kiện)
      const filterValue = this.textContent.trim();
      
      // Lặp qua từng sản phẩm
      productCards.forEach(function(card) {
        const productTitle = card.querySelector('.title');
        if (productTitle) {
          const titleText = productTitle.textContent;
          
          // Nếu là "Tất cả" thì hiện tất cả sản phẩm
          if (filterValue === 'Tất cả') {
            card.style.display = 'block';
          } 
          // Nếu tên sản phẩm chứa từ khóa filter thì hiện, ngược lại ẩn
          else if (titleText.includes(filterValue)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });
  
  // ====================== 3. TÌM KIẾM SẢN PHẨM ======================
  const searchInput = document.querySelector('.search-input');
  const searchBtn = document.querySelector('.search-btn');
  
  // Hàm tìm kiếm
  function performSearch() {
    if (!searchInput) return;
    
    const searchValue = searchInput.value.toLowerCase().trim();
    
    // Nếu có sản phẩm trên trang hiện tại
    if (productCards.length > 0) {
      productCards.forEach(function(card) {
        const productTitle = card.querySelector('.title');
        if (productTitle) {
          const titleText = productTitle.textContent.toLowerCase();
          
          // Nếu ô tìm kiếm trống hoặc tên sản phẩm chứa từ khóa thì hiện
          if (searchValue === '' || titleText.includes(searchValue)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        }
      });
    } else {
      // Nếu không có sản phẩm trên trang này, chuyển đến trang sản phẩm với từ khóa
      if (searchValue) {
        window.location.href = 'san-pham.html?search=' + encodeURIComponent(searchValue);
      } else {
        window.location.href = 'san-pham.html';
      }
    }
  }
  
  // Tìm khi click nút Tìm
  if (searchBtn) {
    searchBtn.addEventListener('click', function(e) {
      e.preventDefault();
      performSearch();
    });
  }
  
  // Tìm khi nhấn Enter trong ô tìm kiếm
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        performSearch();
      }
    });
  }
  
  // Tìm kiếm từ URL parameter (nếu có)
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get('search');
  if (searchParam && searchInput) {
    searchInput.value = searchParam;
    performSearch();
  }
  
  // ====================== 4. THÊM VÀO GIỎ HÀNG ======================
  // Lấy tất cả nút "Thêm vào giỏ"
  const addToCartButtons = document.querySelectorAll('.btn-primary');
  const cartCount = document.querySelector('.cart-count');
  let cartItemCount = 3; // Số lượng ban đầu trong giỏ
  
  // Lặp qua từng nút "Thêm vào giỏ"
  addToCartButtons.forEach(function(button) {
    // Chỉ xử lý nút trong product-card (không phải nút tìm kiếm)
    if (button.closest('.product-card')) {
      button.addEventListener('click', function(e) {
        e.preventDefault(); // Ngăn link chuyển trang
        
        // Tăng số lượng giỏ hàng
        cartItemCount++;
        cartCount.textContent = cartItemCount;
        
        // Lấy tên sản phẩm
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('.title').textContent;
        
        // Hiển thị thông báo (cơ bản)
        alert('Đã thêm "' + productName + '" vào giỏ hàng!');
        
        // Hiệu ứng animation cho giỏ hàng
        cartCount.style.transform = 'scale(1.3)';
        setTimeout(function() {
          cartCount.style.transform = 'scale(1)';
        }, 200);
      });
    }
  });
  
  // ====================== 5. DROPDOWN MENU (Danh mục) ======================
  const hasDropdown = document.querySelectorAll('.has-dropdown');
  
  // Xử lý dropdown cho mobile
  hasDropdown.forEach(function(dropdownItem) {
    const dropdown = dropdownItem.querySelector('.dropdown');
    const link = dropdownItem.querySelector('a');
    
    if (dropdown && link) {
      // Trên mobile: click để mở/đóng
      if (window.innerWidth <= 800) {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const isOpen = dropdownItem.classList.contains('active');
          
          // Đóng tất cả dropdown khác
          hasDropdown.forEach(function(item) {
            item.classList.remove('active');
          });
          
          // Mở/đóng dropdown hiện tại
          if (!isOpen) {
            dropdownItem.classList.add('active');
          }
        });
      }
      
      // Đóng dropdown khi click ra ngoài (desktop)
      if (window.innerWidth > 800) {
        document.addEventListener('click', function(e) {
          if (!dropdownItem.contains(e.target)) {
            dropdownItem.classList.remove('active');
          }
        });
      }
    }
  });
  
  // ====================== 6. HIỆU ỨNG SCROLL CHO HEADER ======================
  const siteHeader = document.querySelector('.site-header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    // Thêm shadow khi scroll xuống
    if (currentScroll > 50) {
      siteHeader.style.boxShadow = '0 4px 12px rgba(16,16,16,0.1)';
    } else {
      siteHeader.style.boxShadow = '0 2px 8px rgba(16,16,16,0.06)';
    }
    
    lastScroll = currentScroll;
  });
  
  // ====================== 7. CẬP NHẬT NĂM TỰ ĐỘNG ======================
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  // ====================== 8. HIỆU ỨNG HOVER CHO SẢN PHẨM ======================
  productCards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
  });
  
});

// ====================== GHI CHÚ CHO NGƯỜI MỚI HỌC ======================
/*
 * CÁC KHÁI NIỆM CƠ BẢN:
 * 
 * 1. document.addEventListener('DOMContentLoaded') - Đợi HTML tải xong
 * 2. document.querySelector() - Tìm 1 phần tử HTML
 * 3. document.querySelectorAll() - Tìm tất cả phần tử
 * 4. addEventListener() - Lắng nghe sự kiện (click, hover, etc.)
 * 5. classList.add/remove/toggle() - Thêm/xóa class CSS
 * 6. textContent - Lấy/đặt nội dung text
 * 7. style.display - Hiện/ẩn phần tử
 * 8. preventDefault() - Ngăn hành vi mặc định (như chuyển trang)
 */

