function textTrim(text) {
  return text.replace(/\s+/g, ' ').trim();
}


document.getElementById("mob_sendMail").addEventListener('click', () => {

  let name = textTrim(document.getElementById("mob_formName").value);
  let phone = textTrim(document.getElementById("mob_formPhone").value);
  let email = textTrim(document.getElementById("mob_formEmail").value);
  let message = textTrim(document.getElementById("mob_formMessage").value);

  let error = false;
  document.getElementById("nameStar").classList.remove("orange-color");
  document.getElementById("phoneStar").classList.remove("orange-color");
  document.getElementById("emailStar").classList.remove("orange-color");
  document.getElementById("msgStar").classList.remove("orange-color");
  if (name == "") {
    document.getElementById("nameStar").classList.add("orange-color");
    error = true;
  }
  if (phone == "") {
    document.getElementById("phoneStar").classList.add("orange-color");
    error = true;
  }
  if (email == "") {
    document.getElementById("emailStar").classList.add("orange-color");
    error = true;
  }
  if (message == "") {
    document.getElementById("msgStar").classList.add("orange-color");
    error = true;
  }

  if (error) return;

  console.log("СКРИПТ РАБОТАЕТ");

  $.ajax({
    url: 'ajax/mail.php',
    type: 'POST',
    cache: false,
    data: {'name':name, 'email': email, 'phone':phone, 'message':message},
    dataType: 'html',
    beforeSend: () => {
      $("#mob_sendMail").prop("disabled", true);
      console.log("Нажата кнопка отправить");
    },
    success: (data) => {
      if (!data) {
        console.log("Письмо не отправлено: " + String(data));
      }
      else {
        console.log("Письмо отправлено: " + String(data));
        $("#mob_mailForm").trigger("reset");
      }
      $("#mob_sendMail").prop("disabled", false);
    }
  })
})
