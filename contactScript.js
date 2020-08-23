$(document).ready(function(){
    
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
    
    $("form").on("submit", (event)=>{
        //event.preventDefault();
        sendEmail();
        
        
  }) 
    
    const sendEmail=()=>{
        setTimeout(() =>{
            let name = $("#personsName").val();
            let email = $("#email").val();
            let message = $("#message").val();
            window.open("mailto:jsepulvewd@gmail.com?subject=Web%20Development&body=Name: " + name+ "%0D%0D Email: " + email + "%0D%0D" + message)
        })
    }
})