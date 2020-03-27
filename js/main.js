// document.addEventListener("DOMContentLoaded", function(event) { 
//   const modal = document.querySelector('.modal');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//   const closeBtn = document.querySelector('.modal__close');
//   const switchModal = () => {
//     modal.classList.toggle('modal--visible');
//   }
//   modalBtn.forEach(element => {
//     element.addEventListener('click', switchModal);
//   });
  
//   closeBtn.addEventListener('click', switchModal);

// });

$(document).ready(function () {
  var modal = $('.modal'),
    modalBtn = $('[data-toggle="modal"]'),
    closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)

  new WOW().init();


  // Валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required:true,
        minlength: 2,
        maxlength: 15
      },
      modalCheckbox: {
        required:true,
      },
      footerCheckbox: {
        required:true,
      },
      userPhone: "required",
      // правило-объект(блок)
      userEmail: {
        required: true,
        email: true
      }
    }, //сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух символов",
        maxlength: "Имя не более 15 символов"
      },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      },
      modalCheckbox: {
        required:"Подтвердите согласие на обработку данных"
      },
    },
  });

  // Валидация формы
  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required:true,
        minlength: 2,
        maxlength: 15
      },
      userQuestion: {
        required:true,
        minlength: 10
      },
      footerCheckbox: {
        required:true,
      },
      userPhone: "required",
      
    }, //сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух символов",
        maxlength: "Имя не более 15 символов"
      },
      userQuestion: {
        required: "Заполните поле",
        minlength: "Задайте вопрос корректно"
      },
      userPhone: "Заполните поле",
      footerCheckbox: {
        required:"Подтвердите согласие на обработку данных"
      },
    },
  });

  // Валидация формы
  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required:true,
        minlength: 2,
        maxlength: 15
      },
      controlCheckbox: {
        required:true,
      },
      userPhone: "required",
      
    }, //сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух символов",
        maxlength: "Имя не более 15 символов"
      },
      userPhone: "Заполните поле",
      controlCheckbox: {
        required:"Подтвердите согласие на обработку данных"
      },
    },
  });


  // маска для номера телефона

  $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7 (___) __-__-___"});

});


// messages: {
//   userName: {
//     required: "Имя обязательно",
//     minlength: "Имя не короче двух букв"
//   },
//   userPhone: "Телефон обязателен",
//   userEmail: {
//     required: "Обязательно укажите email",
//     email: "Введите в формате: name@domain.com"
//   }
// }


