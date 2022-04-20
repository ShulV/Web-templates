let form = document.getElementById("form");
let inputName = document.getElementById("name");
let inputTel = document.getElementById("tel");

// input mask

let im = new Inputmask("+7 (999) 999-99-99");
im.mask(inputTel);

//validate


const validation = new JustValidate(".contacts-container__form", {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 10,
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
    },
    errorFieldCssClass: 'is-invalid',
    errorFieldStyle: {
      border: '1px solid #D11616',
    },
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
      color: '#D11616',
      textDecoration: 'underlined',
    },

  });

  validation.addField('#name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Недопустимый формат',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Недопустимый формат',
    },
    {
      rule: 'required',
      errorMessage: 'Обязательно для заполнения',
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Обязательно для заполнения',
    },
  ]);