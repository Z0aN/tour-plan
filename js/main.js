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
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  var closeModalOverlay = $(".modal__overlay");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  closeModalOverlay.on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
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
          minlength: "The name shouldn`t be shorter than 2 letters",
        },
        phone: {
          required: "Write your phone",
          minlength: "Enter an existing number",
        },
        email: {
          required: "Write your email",
        },
        subscribeEmail: {
          required: "Write your email",
        },
      },
    });
  });
  $(".phone-validate").mask("+7 (000) 000-00-00");
  document.querySelector(".map").addEventListener("mouseenter", () => {
    var googleMap = document.getElementById("map");
    if ($("#map__frame").length == 0) {
      googleMap.insertAdjacentHTML(
        "afterbegin",
        "<iframe id='map__frame' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6432.963282028898!2d43.322375785530056!3d38.44343979437115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4012771c021d3025%3A0x3ca87d16df84400c!2sDoubleTree%20by%20Hilton%20Hotel%20Van!5e0!3m2!1sru!2sru!4v1596639920303!5m2!1sru!2sru' frameborder='0' style='border: 0;' allowfullscreen='' aria-hidden='false' class='map__frame' tabindex='0' ></iframe>"
      );
    }
  });
  $(document).ready(function () {
    $(".hover").on("touchstart touchend", function (e) {
      e.preventDefault();
      $(this).toggleClass("hover_effect");
    });
  });
});
