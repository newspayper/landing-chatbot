$('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  })
;

// Display dimmer when hovering element with '.screen' class

$('.screen')
  .dimmer({
    on: 'hover'
  })
;

// Dimmmer Button opening m.me Messenger link

$('.messenger-link').click(function() {
	window.open("http://m.me/newspayper.fr");
});


