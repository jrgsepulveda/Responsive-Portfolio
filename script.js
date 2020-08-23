$( document ).ready(function() {
  $(function() {
    $('.animation').click(function(e) {
        e.preventDefault();
        var destination = this.href;
        $('body').fadeOut(2000, function() {
            window.location = destination;
        });
    });
    return false;
  });



  $(document).on('click', '.imgLink1', function(event){ 
    event.preventDefault(); 
    var url = $(".imgLink1").attr('href'); 
    window.open(url, '_blank');
  });

  $(document).on('click', '.imgLink2', function(event){ 
    event.preventDefault(); 
    var url = $(".imgLink2").attr('href'); 
    window.open(url, '_blank');
  });

  $(document).on('click', '.imgLink3', function(event){ 
    event.preventDefault(); 
    var url = $(".imgLink3").attr('href'); 
    window.open(url, '_blank');
  });    
   
});


