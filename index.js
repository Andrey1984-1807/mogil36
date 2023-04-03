$(document).ready(function () {
  //E-mail Ajax Send
  $("form").submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize(),
    }).done(function () {
      alert("Cпасибо за обращение!");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});

$(".open-popup").click(function (e) {
  e.preventDefault();
  $(".popup-bg").fadeIn(800);
  $("html").addClass("no-scroll");
});

$(".close-popup").click(function () {
  $(".popup-bg").fadeOut(800);
  $("html").removeClass("no-scroll");
});

// const form = document.querySelector("#form");
// const name1 = document.querySelector("#name");
// const email11 = document.querySelector("#email1");
// const phone1 = document.querySelector("#phone");
// const message = document.querySelector("#message1");
// form.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   if (!name1.value) {
//     alert("Поле имя не заполнено");
//     return;
//   }

//   if (!email11.value) {
//     alert("Поле email не заполнено");
//     return;
//   }
//   if (!phone1.value) {
//     alert("Поле телефон не заполнено");
//     return;
//   }
//   if (!message.value) {
//     alert("Поле сообщение не заполнено");
//     return;
//   }

//   this.submit();
// });
// const form = document.querySelector("#form");
// const name1 = document.querySelector("#name");
// const email11 = document.querySelector("#email1");
// const phone1 = document.querySelector("#phone");
// const message = document.querySelector("#message1");
// form.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   if (!name1.value) {
//     alert("Поле имя не заполнено");
//     return;
//   }

//   if (!email11.value) {
//     alert("Поле email не заполнено");
//     return;
//   }
//   if (!phone1.value) {
//     alert("Поле телефон не заполнено");
//     return;
//   }
//   if (!message.value) {
//     alert("Поле сообщение не заполнено");
//     return;
//   }

//   this.submit();
// });
