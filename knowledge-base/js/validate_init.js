
new JustValidate(".form-1", {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 10
    },
    email: {
      required: true,
      email: true
    },
    tel: {
      required: true,
      function: (name,value) => {
        const selector = document.querySelector("input[type='tel']");
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      }
    },
    submitHandler: function (form, values, ajax) {

      ajax({
        url: 'https://just-validate-api.herokuapp.com/submit',
        method: 'POST',
        data: values,
        async: true,
        callback: function (response) {
          console.log(response)
        }
      });
    },
  }
});
