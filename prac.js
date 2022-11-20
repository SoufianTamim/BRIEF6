const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const gender = document.getElementById("gender");
const group = document.getElementById("group");
const clubs = document.getElementById("clubs")[0].selectedOptions;

 function checkR(array, jee) {
   array.forEach((rd) => {
     if (rd.checked === true) {
       console.log(jee);
       console.log("troo");
       jee[0] = true;
       return jee;
     }
   });
 }


form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateInputs = () => {
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const genderValue = gender.value;
  const groupValue = group.value;
  // const clubsValue = clubs.value;

  //======================= REGEX FORMS =============================//
  let myRegex = /^[a-zA-Z-\s]+$/;
  let phoneRe = /([+])?(212)?0[5-7]\d{8}/g;
  let emailRe =
    /([a-z])+\.?([a-z])+\.?([a-z])+?([0-9]?)@(gmail|hotmail|yahoo|ofppt).(com|org|net|ma)/g;
  //======================= first name validaton =============================//

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
  //======================= first name validaton =============================//
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
  //======================= phone Validation =============================//
  if (phoneValue === "") {
    setError(phone, "phone number is required , cannot be empty ");
  } else if (phoneValue.length > 14) {
    setError(phone, "phone number is too long");
  } else if (phoneRe.test(phoneValue) === false) {
    setError(phone, "phone number is invalid");
  } else {
    setSuccess(phone);
  }
  //======================= email Validation =============================//
  if (emailValue === "") {
    setError(email, "email is required , cannot be empty ");
  } else if (emailValue.length > 50) {
    setError(email, "email is too long");
  } else if (emailRe.test(emailValue) === false) {
    setError(email, "email is invalid");
  } else {
    setSuccess(email);
  }
  //======================= gender Validation =============================//









  const genderCase = [false];

  checkR(genderValue, gender);

  if (genderValue === false) {
    setError(gender, "Please you have to choose your gender");
  } else {
    setSuccess(gender);
  }

  //======================= group Validation =============================//
  const groupC = [false];

  checkR(group, groupC);

  if (groupC[0] === false) {
    setError("Please you have to choose your group");
  }

  //======================= group Validation =============================//

  if (clubsValue.length === 0) {
    setError(clubs, "you have to select at least one item in clubs , can't be empty ");
  } else if (clubsValue.length > 3) {
    setError(clubs, "you have selected too many choices max is 3 ");
  } else {
    setSuccess(clubs);
  }




};
