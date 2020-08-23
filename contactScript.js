$(document).ready(function(){
    
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