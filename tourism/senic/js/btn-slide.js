  $(function(){
    $('#bs-navbar').click(function(){
      $(this).css('height', $(this).outerHeight()).animate({
        'height': "1px"
      }, 300,  function(){
        $(this).removeClass('in');
      });
    });
  });
