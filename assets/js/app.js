$(document).ready(function() {
  $('#appWeb').hide();
  $("#splash").fadeIn(5000).fadeOut(2000, showSite);
  $('.modal').modal();
  $('select').material_select();

  function showSite(){
    $('#appWeb').show();
  }

/* no funciona menú de banderas si lo mando desde jQuery
var cont = $('#appWeb');
  //evento en botón para que aparezca formulario
  $('#btnsign').click(function() {
    $('#principal').hide();
    cont.html('<section id="registrationform" class="center-align">' +
      '<h3>Sing In</h3>' +
      '<p>Join now for free ride credit</p>' +
      '<form class="col s12">' +
      '<div class="row">' +
        '<div class="input-field col s6 m6 l6">' +
          '<select class="flags">' +
              '<option value="0" disabled selected>Choose</option>' +
              '<option value="chile" data-icon="assets/img/chile_flags.png" class="left circle">CH</option>' +
              '<option value="mexico" data-icon="assets/img/mexico_flags.png" class="left circle">MX</option>' +
              '<option value="peru" data-icon="assets/img/peru_flags.png" class="left circle">PE</option>' +
            '</select>' +
          '</div>' +
          '<div class="input-field col s6 m6 l6">' +
            '<input id="number" type="number" class="validate">' +
            '<label for="enterednumber">Your number</label>' +
          '</div>' +
        '</div>' +
        '</form>' +
        '<p>We will send a text to verify your phone</p>' +
        '<a id="continue" class="btn disabled">Next</a> <span id="numero-aleatorio"></span>' +
      '</section>');

  }); */

  //evento en botón para que aparezca formulario
  $('#btnsign').click(function() {
    $('#principal').hide();
    $('#registrationform').css('display','block');

    $('.flags').on('change', function() {
      var countrySelected = $('.flags').val();
    });

  $('#number').keyup(function() {
    var phoneNumber = $('#number').val();
    if (phoneNumber.length === 10) {
      $('#continue').removeClass("disabled");
      $('#continue').addClass("purple accent-3");
    }
    if (phoneNumber.length > 10) {
      $('#continue').addClass("disabled");
    }
  });

  $('#continue').click(function() {
    randomNumber(1, 100);
  });

    function randomNumber(min, max) {
      var num = Math.round(Math.random() * (max - min) + min);
      $('#numero-aleatorio').text('Tu código es: LAB'+num);
    }

  });

});
