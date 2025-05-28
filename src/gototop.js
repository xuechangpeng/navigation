window.addEventListener('scroll', function () {
    const gotop = document.querySelector('.gotop');
  
    // 当页面滚动超过 300px 时显示按钮
    if (window.scrollY > 300) {
      gotop.style.display = 'block';
    } else {
      gotop.style.display = 'none';
    }
  });
  
  // 点击图片回到顶部
  document.querySelector('.gotop').addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 平滑滚动
    });
  });