$(document).ready(function () {
  var hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
  var reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [25.8251858, -80.23779831],
      zoom: 10,
    });
    myMap.behaviors.disable("scrollZoom");
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      //... отключаем перетаскивание карты
      myMap.behaviors.disable("drag");
    }
  }

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
    $("#phone").mask("+7 (000) 000-00-00");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  // Закрытие окна на Esc
  $(document).on("keydown", function (event) {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    if (event.keyCode == 27) {
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
    }
  });
  // Обработка форм
  $(".form").each(function () {
    $(this).validate({
      messages: {
        name: {
          required: "Write your name",
          minlength: jQuery.validator.format(
            "At least {0} characters required!"
          ),
        },
        phone: {
          required: "Write your phone",
        },
      },
    });
  });
  $(".phone-validate").mask("+7 (000) 000-00-00");
});
