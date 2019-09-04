$(document).ready(function(e){
  $("#netlify-contact-form").submit(function(e) {
    e.preventDefault();
    var $form = $(this);
    console.log($form);
    // $.post($form.attr("action"), $form.serialize()).then(function() {
    //   alert("Thank you!");
    // });
  });
});

