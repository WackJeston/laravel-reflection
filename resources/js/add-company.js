const dashboard = document.querySelector('.dashboard-container');
if (dashboard){

  const addCompSection = document.querySelector('.new-comp-section');
  const inputContainer = document.querySelector('.input-container');
  const compName = document.querySelector('#comp-name');
  const compEmail = document.querySelector('#comp-email');
  const compWebsite = document.querySelector('#comp-website');
  const compLogo = document.querySelector('#comp-logo');
  const compLogoTick = document.querySelector('.fa-check');
  const compSubmit = document.querySelector('#comp-submit');
  const compClose = document.querySelector('#comp-close');
  const completionNotification = document.querySelector('.completion-notification')
  const completionX = document.querySelector('#close-notification')
  const emailValidator = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


  let adCounter = false;
  let adNameCounter = false;
  let adEmailCounter = false;
  let adWebsiteCounter = false;
  let adLogoCounter = false;

  // Click Activation
  compSubmit.addEventListener("click", function(event){
    if (adCounter == false){
      event.preventDefault();
      inputsAppear();
    } else {
      nameValidation();
      emailValidation();
      websiteValidation();

      if (adNameCounter == false || adEmailCounter == false || adWebsiteCounter == false){
        event.preventDefault();
      } else {
        inputsDisappear();
        completionNotification.style.display = "flex";
      }
    }
  });

  // Close Form Event
  compClose.addEventListener("click", function(){
    inputsDisappear();
  })

  // Close Message Event
  // if (isset(addCompSection)) {
  //   completionX.addEventListener("click", function(e){
  //     e.currentTarget.parentNode.style.display = "none";
  //   })
  // }
  completionX.addEventListener("click", function(e){
    e.currentTarget.parentNode.style.display = "none";
  })

  // Inputs Appearing
  function inputsAppear(){
    inputContainer.style.display = "flex";
    inputContainer.style.animation = "add-comp-appear 500ms forwards";
    adCounter = true;
  }

  // Inputs Disappearing
  function inputsDisappear(){
    inputContainer.style.animation = "add-comp-disappear 500ms forwards";
    setTimeout(function(){
      inputContainer.style.display = "none";
    },500)
    adCounter = false;
  }

  // VALIDATION FUNTIONS
  // Name Validation
  function nameValidation(){
    if (compName.value == ""){
      compName.style.border = "1px solid red";
      adNameCounter = false;
    } else {
      compName.style.border = "1px solid rgba(133, 158, 189, 1)";
      adNameCounter = true;
    }
  }

  // Email Validation
  function emailValidation(){
    if (compEmail.value == "" || emailValidator.test(compEmail.value) == false){
      compEmail.style.border = "1px solid red";
      adEmailCounter = false;
    } else {
      compEmail.style.border = "1px solid rgba(133, 158, 189, 1)";
      adEmailCounter = true;
    }
  }

  // Website Validation
  function websiteValidation(){
    if (compWebsite.value == ""){
      compWebsite.style.border = "1px solid red";
      adWebsiteCounter = false;
    } else {
      compWebsite.style.border = "1px solid rgba(133, 158, 189, 1)";
      adWebsiteCounter = true;
    }
  }

  // // Logo Validation
  // function logoValidation(){
  //   if (compLogo.files.length == 0){
  //     compLogo.style.border = "1px solid red";
  //     compLogoTick.style.display = "none";
  //     adLogoCounter = false;
  //   } else {
  //     compLogo.style.border = "1px solid rgba(133, 158, 189, 1)";
  //     compLogoTick.style.display = "flex";
  //     adLogoCounter = true;
  //   }
  // }
}
