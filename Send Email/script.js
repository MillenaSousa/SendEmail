function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        telefone: document.getElementById("telefone").value,
    };

    const serviceID = "service_m1p4mxc";
    const templateID = "template_34o58jh";

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                document.getElementById("telefone").value = "";
                console.log(res);
                alert("Your message sent successfully!!");

            })
        .catch((err) => console.log(err));
}      