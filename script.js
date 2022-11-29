
// ============================ create variables =================================================== //
const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const clubs = document.getElementById("clubs").selectedOptions;
// ============================ event listner adding ====================================== //
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});
// ============================ set Errors function=================================================== //
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};
// ============================ set Success function ================================================== //
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};
// ============================ onblur Functions ================================================== //
firstname.onblur = () =>{
  const firstnameValue = firstname.value.trim();
  if (firstnameValue === "") {
    setError(firstname, "First Name is required");
  } else if (firstnameValue.length > 15) {
    setError(
      firstname,
      "first name is too long, it should be less than 15 characters "
    );
  } else if (myRegex.test(firstnameValue) === false) {
    setError(firstname, "first  name cannot contain numbers");
  } else {
    setSuccess(firstname);
  }
}
lastname.onblur = () =>{
  const lastnameValue = lastname.value.trim();
  if (lastnameValue === "") {
    setError(lastname, "last name is required , cannot be empty ");
  } else if (lastnameValue.length > 15) {
    setError(
      lastname,
      "last name is too long, it should be less than 15 characters "
    );
  } else if (myRegex.test(lastnameValue) === false) {
    setError(lastname, "last  name cannot contain numbers");
  } else {
    setSuccess(lastname);
  }
}
phone.onblur = () =>{
  const phoneValue = phone.value.trim();
  let phoneRe = /^([+])?(212)?0[5-7]\d{8}$/g;
  if (phoneValue === "") {
    setError(phone, "phone number is required , cannot be empty ");
  } else if (phoneValue.length > 14) {
    setError(phone, "phone number is too long");
  } else if (phoneRe.test(phoneValue) === false) {
    setError(phone, "phone number is invalid");
  } else {
    setSuccess(phone);
  }
}
email.onblur = () => {
  const emailValue = email.value.trim();
  let emailRe =/^([aA-zZ])+\.?([aA-zZ])+\.?([a-z])+?([0-9]?)@(gmail|hotmail|yahoo|ofppt).(com|org|net|ma)$/g;
  if (emailValue === "") {
    setError(email, "email is required , cannot be empty ");
  } else if (emailValue.length > 50) {
    setError(email, "email is too long");
  } else if (emailRe.test(emailValue) === false) {
    setError(email, "email is invalid");
  } else {
    setSuccess(email);
  }
}
//======================= REGEX FORMS =============================//
let myRegex = /^[a-zA-Z-\s]+$/;
let phoneRe = /([+])?(212)?0[5-7]\d{8}$/g;
let emailRe =
  /([a-z])+\.?([a-z])+\.?([a-z])+?([0-9]?)@(gmail|hotmail|yahoo|ofppt).(com|org|net|ma)/g;
// ================================== onclick function =============================================== //
const validateInputs = () => {
  // ======================= variables Values  ======================//
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  var gen = document.getElementsByName('gender');
  var gro = document.getElementsByName('group');

  const arr = [];
  //======================= first name validaton ====================//
  if (firstnameValue === "") {
    setError(firstname, "First Name is required");
    arr.push(false)
  } else if (firstnameValue.length > 15) {
    setError(
      firstname,
      "first name is too long, it should be less than 15 characters "
    );
    arr.push(false)
  } else if (myRegex.test(firstnameValue) === false) {
    setError(firstname, "first  name cannot contain numbers");
    arr.push(false)

  } else {
    setSuccess(firstname);
  }
  //======================= first name validaton =========================//
  if (lastnameValue === "") {
    setError(lastname, "last name is required , cannot be empty ");
    arr.push(false)
  } else if (lastnameValue.length > 15) {
    setError(
      lastname,
      "last name is too long, it should be less than 15 characters "
    );
    arr.push(false)
  } else if (myRegex.test(lastnameValue) === false) {
    setError(lastname, "last  name cannot contain numbers");
    arr.push(false)
  } else {
    setSuccess(lastname);
  }
  //======================= phone Validation =============================//
  if (phoneValue === "") {
    setError(phone, "phone number is required , cannot be empty ");
    arr.push(false)
  } else if (phoneValue.length > 14) {
    setError(phone, "phone number is too long");
    arr.push(false)
  } else if (phoneRe.test(phoneValue) === false) {
    setError(phone, "phone number is invalid");
    arr.push(false)
  } else {
    setSuccess(phone);
  }
  //======================= email Validation =============================//
  if (emailValue === "") {
    setError(email, "email is required , cannot be empty ");
    arr.push(false)
  } else if (emailValue.length > 50) {
    setError(email, "email is too long");
    arr.push(false)
  } else if (emailRe.test(emailValue) === false) {
    setError(email, "email is invalid");
    arr.push(false)
  } else {
    setSuccess(email);
  }
  //======================= group Validation =============================//
  if (gen[0].checked == false && gen[1].checked == false) {
    document.querySelector('.error-gender').innerHTML = "Please you have to choose your gender"
    arr.push(false)

  }
  if (clubs.length === 0) {
    document.querySelector('.error-clubs').innerHTML = "you have to select at least one item in clubs , can't be empty ";
    arr.push(false)

  } else if (clubs.length > 3) {
    document.querySelector('.error-clubs').innerHTML = "you have selected too many choices max is 3 ";
    arr.push(false)

  }
  if (gro[0].checked == false && gro[1].checked == false && gro[2].checked == false && gro[3].checked == false && gro[4].checked == false) {
    document.querySelector('.error-group').innerHTML = "Please you have to choose your group"
    arr.push(false)
  }

  
  if (arr.length === 0) {
    document.getElementById('form').submit();
  }
};
