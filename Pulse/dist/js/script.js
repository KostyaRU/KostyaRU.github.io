$(document).ready(function() {

  var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    controls: false,
    nav: false
  });
  document.querySelector('.carousel__slick_left').addEventListener('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.carousel__slick_right').addEventListener('click', function () {
    slider.goTo('next');
  });
  

  $(function() {
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
  });

  function toggleSlide (item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__catalog').eq(i).toggleClass('catalog-item__catalog_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    });
  }
  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  // Modal
  $('[data-modal=consaltation]').on('click', function(){
    $('.overlay, #consaltation').fadeIn();
  });

  $('.modal__close').on('click', function(){
    $('.overlay, #consaltation, #order, #thanks').fadeOut();
  });

  $('.button_price').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn();
    });
  });

  function validateForm(form) {
    $(form).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Это поле обязательно для ввода",
        phone: "Это поле обязательно для ввода",
        email: {
          required: "Это поле обязательно для ввода",
          email: "Введите ваш email в форате: name@domain.com"
        }
      }
    });
  };
  validateForm('#consaltation form');
  validateForm('#consultation-form');
  validateForm('#order form');

  $(function($){
    $('input[name=phone]').mask("+7 (999) 999-99-99");
  });

 $('form').submit(function(e) {
  e.preventDefault();
  $.ajax({
    tyoe: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function() {
    $(this).find('input').val("");

    $('form').trigger('reset');
  });
  return false;
 });

});