$( document ).ready(function() {
    
  //  let img1 = $(".imgLink1").attr("href")
  //  let img2 = $(".imgLink2").attr("href")
  //  let img3 = $(".imgLink3").attr("href")

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


