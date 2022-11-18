function empty(value) {
  if (value.length > 0) {
    return false;
  }
  return true;
}

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


const errors = [];

alertbox.style.display = "none";
alertbox.innerHTML = "";


submit.onclick = function (ev) {
  errors.length = 0;
  ev.preventDefault();

  let firstname = document.getElementsByName("firstname")[0].value;
  let lastname = document.getElementsByName("lastname")[0].value;
  let email = document.getElementsByName("email")[0].value;
  let phone = document.getElementsByName("phone")[0].value;
  let gender = document.getElementsByName("gender");
  let group = document.getElementsByName("group");
  let clubs = document.getElementsByName("clubs")[0].selectedOptions;

  //======================= first name validaton =============================//
  let myRegex = /^[a-zA-Z-\s]+$/;

  if (firstname.length === 0) {
    errors.push("firstname is required , cannot be empty ");
  } else if (firstname.length > 15) {
    errors.push(
      "first name is too long, it should be less than 15 characters "
    );
  } else if (myRegex.test(firstname) === false) {
    errors.push("first name cannot contain numbers");
  }

  //======================= last name validaton =============================//

  if (lastname.length === 0) {
    errors.push("last name is required , cannot be empty ");
  } else if (lastname.length > 15) {
    errors.push("last name is too long, it should be less than 15 characters ");
  } else if (myRegex.test(lastname) === false) {
    errors.push("last  name cannot contain numbers");
  }

  //======================= phone Validation =============================//
  let phoneRe = /([+])?(212)?0[5-7]\d{8}/g;

  if (phone.length === 0) {
    errors.push("phone number is required , cannot be empty ");
  } else if (phoneRe.test(phone) === false) {
    errors.push("phone number is invalid");
  } else if (phone.length > 14) {
    errors.push("phone number is too long");
  }

  //======================= email Validation =============================//

  let emailRe =
    /([a-z])\w+.?([a-z])\w+.?([a-z])\w+?([0-9]?)@(gmail|hotmail|yahoo|ofppt).(com|org|net|ma)/g;

  if (email.length === 0) {
    errors.push("email is required , cannot be empty ");
  } else if (email.length > 50) {
    errors.push("email is too long");
  } else if (emailRe.test(email) === false) {
    errors.push("email is invalid");
  }

  //======================= gender Validation =============================//

  const genderC = [false];

  checkR(gender, genderC);

  if (genderC[0] === false) {
    errors.push("Please you have to choose your gender");
  }

  //======================= group Validation =============================//
  const groupC = [false];

  checkR(group, groupC);

  if (groupC[0] === false) {
    errors.push("Please you have to choose your group");
  }

  //======================= group Validation =============================//

  if (clubs.length === 0) {
    errors.push(
      "you have to select at least one item in clubs , can't be empty "
    );
  } else if (clubs.length > 3) {
    errors.push("you have selected too many choices max is 3 ");
  }

  //======================= Errors =============================//
  if (errors.length > 0) {
    for (let i = 0; i < errors.length; i++) {
      alertbox.style.display = "block";
      alertbox.innerHTML += "<strong> ERROR! </strong>" + errors[i] + "<br>";
    }
  }
};
