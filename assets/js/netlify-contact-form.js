var success = '<div class="message success">'
  +'<div>'
  +'<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" class="svg-inline--fa fa-check-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">'
  +'<use xlink:href="#success"></use>'
  +'</svg></div><div>Thanks for your interest. Someone will get back to you soon.</div>'
  +'</div>';

$(document).ready(function(e){
  $("#netlify-contact-form").submit(function(e) {
    e.preventDefault();
    var $form = $(this);
    console.log($form);
    $.post($form.attr("action"), $form.serialize()).then(function(data) {
      $form.fadeOut(400,function(){
        $form.before(success);
      });
    },function(){
      $form.prepend("error");
    });
  });
});

