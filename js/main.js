const elHeader = document.querySelector('.site-header')
   const elNavBtn = elHeader.querySelector('.js-header-btn')

   elNavBtn.addEventListener('click', function() {
      elHeader.classList.toggle('site-header__nav--open')
   })