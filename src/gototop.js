// 点击图片回到顶部
document.querySelector('.gotop').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 平滑滚动
  });
});