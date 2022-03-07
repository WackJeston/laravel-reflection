const companyPage = document.querySelector('.company-container');
if (companyPage){

  const addEmployeeSection = document.querySelector('.new-employee-section');
  const inputContainer = document.querySelector('.input-container');
  const emFirstName = document.querySelector('#employee-firstname');
  const emLastName = document.querySelector('#employee-lastname');
  const emEmail = document.querySelector('#employee-email');
  const emPhone = document.querySelector('#employee-phone');
  const emCompany = document.querySelector('#employee-company');
  const emSubmit = document.querySelector('#employee-submit');
  const emClose = document.querySelector('#employee-close');
  const completionNotification = document.querySelector('.completion-notification')
  const completionX = document.querySelector('#close-notification')
  const emailValidator = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


  let adCounter = false;
  let adFirstNameCounter = false;
  let adLastNameCounter = false;
  let adEmailCounter = false;
  let adPhoneCounter = false;
  let adCompanyCounter = false;

  // Click Activation
  emSubmit.addEventListener("click", function(event){
    if (adCounter == false){
      event.preventDefault();
      inputsAppear();
    } else {
      firstNameValidation();
      lastNameValidation();
      emailValidation();
      phoneValidation();
      companyValidation();

      if (adFirstNameCounter == false
        || adLastNameCounter == false
        || adEmailCounter == false
        || adPhoneCounter == false
        || adCompanyCounter == false){
        event.preventDefault();
      } else {
        inputsDisappear();
        completionNotification.style.display = "flex";
      }
    }
  })

  // Close Form Event
  emClose.addEventListener("click", function(){
    inputsDisappear();
  })

  // Close Message Event
  completionX.addEventListener("click", function(e){
    e.currentTarget.parentNode.style.display = "none";
  })

  // Inputs Appearing
  function inputsAppear(){
    inputContainer.style.display = "flex";
    inputContainer.style.animation = "add-em-appear 500ms forwards";
    adCounter = true;
  }

  // Inputs Disappearing
  function inputsDisappear(){
    inputContainer.style.animation = "add-em-disappear 500ms forwards";
    setTimeout(function(){
      inputContainer.style.display = "none";
    },500)
    adCounter = false;
  }

  // VALIDATION FUNTIONS
  // First Name Validation
  function firstNameValidation(){
    if (emFirstName.value == ""){
      emFirstName.style.border = "1px solid red";
      adFirstNameCounter = false;
    } else {
      emFirstName.style.border = "1px solid rgba(133, 158, 189, 1)";
      adFirstNameCounter = true;
    }
  }

  // Last Name Validation
  function lastNameValidation(){
    if (emLastName.value == ""){
      emLastName.style.border = "1px solid red";
      adLastNameCounter = false;
    } else {
      emLastName.style.border = "1px solid rgba(133, 158, 189, 1)";
      adLastNameCounter = true;
    }
  }

  // Email Validation
  function emailValidation(){
    if (emEmail.value == "" || emailValidator.test(emEmail.value) == false){
      emEmail.style.border = "1px solid red";
      adEmailCounter = false;
    } else {
      emEmail.style.border = "1px solid rgba(133, 158, 189, 1)";
      adEmailCounter = true;
    }
  }

  // Phone Validation
  function phoneValidation(){
    if (emPhone.value == ""){
      emPhone.style.border = "1px solid red";
      adPhoneCounter = false;
    } else {
      emPhone.style.border = "1px solid rgba(133, 158, 189, 1)";
      adPhoneCounter = true;
    }
  }

  // Company Validation
  function companyValidation(){
    if (emCompany.value == ""){
      emCompany.style.border = "1px solid red";
      adCompanyCounter = false;
    } else {
      emCompany.style.border = "1px solid rgba(133, 158, 189, 1)";
      adCompanyCounter = true;
    }
  }
}
