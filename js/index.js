function sendMail () {
    var params = {
      name: document.getElementById("name").value,
      surname: document.getElementById ("surname"),
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    
    const serviceID = "service_w6wgf5v";
    const templateID = "template_ycck1ta";
  
    emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value ="";
      document.getElementById("email").value ="";
      document.getElementById ("surname").value="";
      document.getElementById("message").value ="";
      console.log(res);
      alert("Il tuo messaggio è stato inviato correttamente");
    })
    .catch((err) => console.log(err));
  }