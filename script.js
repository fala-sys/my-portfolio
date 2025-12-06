emailjs.init("-M22SQk1jiieG2uVR"); 

document.getElementById("contact-form").addEventListener("submit", sendMail);

function sendMail(event){
  event.preventDefault();

  let params = {
    user_name : document.getElementById("user_name").value,
    user_email : document.getElementById("user_email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value,
  }

  emailjs.send("service_u03254b", "template_3f5d7h7", params)
    .then(() => {
      alert("Email has been sent!!");
      document.getElementById("contact-form").reset();
    })
    .catch((err) => {
      alert("Failed to send email. Error: " + JSON.stringify(err));
    });
}
