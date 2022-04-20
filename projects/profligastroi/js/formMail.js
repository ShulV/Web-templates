function textTrim(text) {
  return text.replace(/\s+/g, ' ').trim();
}


document.getElementById("sendMail").addEventListener('click', () => {

  let name = textTrim(document.getElementById("formName").value);
  let phone = textTrim(document.getElementById("formPhone").value);
  let email = textTrim(document.getElementById("formEmail").value);
  let message = textTrim(document.getElementById("formMessage").value);

  let error = false;
  document.getElementById("formNameLabel").innerHTML = "&nbsp;";
  document.getElementById("formPhoneLabel").innerHTML = "&nbsp;";
  document.getElementById("formEmailLabel").innerHTML = "&nbsp;";
  document.getElementById("formMessageLabel").innerHTML = "&nbsp;";
  if (name == "") {
    document.getElementById("formNameLabel").textContent = "Вы не заполнили поле";
    error = true;
  }
  if (phone == "") {
    document.getElementById("formPhoneLabel").textContent = "Вы не заполнили поле";
    error = true;
  }
  if (email == "") {
    document.getElementById("formEmailLabel").textContent = "Вы не заполнили поле";
    error = true;
  }
  if (message == "") {
    document.getElementById("formMessageLabel").textContent = "Вы не заполнили поле";
    error = true;
  }

  if (error) return;

  $.ajax({
    url: 'ajax/mail.php',
    type: 'POST',
    cache: false,
    data: {'name':name, 'email': email, 'phone':phone, 'message':message},
    dataType: 'html',
    beforeSend: () => {
      $("#sendMail").prop("disabled", true);
    },
    success: (data) => {
      if (!data) {
        console.log("Письмо не отправлено")
      }
      else {
        $("#mailForm").trigger("reset");
      }
      $("#sendMail").prop("disabled", false);
    }
  })
})
