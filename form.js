function empty(value) {
  if (value.length > 0) {
    return false;
  }
  return true;
}

// function checkR(radio, group) {
//   radio.forEach((rd) => {
//     if (rd.checked === true) {
//       group[0] = true;
//       return group;
//     }
//   });
// }

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

submit.onclick = function (ev) {
  // alertbox.style.display = "none";
  // alertbox.innerHTML = "";
  errors.length = 0;
  ev.preventDefault();
  
  let firstname = document.getElementsByName("firstname")[0].value;
  let lastname = document.getElementsByName("lastname")[0].value;
  let email = document.getElementsByName("email")[0];
  let phone = document.getElementsByName("phone")[0];
  let gender = document.getElementsByName("gender");
  let group = document.getElementsByName("group")[0].selectedOptions;
  // let clubs = document.getElementsByName("clubs")[0].selectedOptions;



  //   let clubs = document.getElementById("clubs").value;


  // let phone = "0677846064"
  // let phoneRe = /0[5-7]/g;

  // console.log(phone.match(phoneRe));

  // let emailRe = /([a-z])\w+.?([a-z])\w+.?([a-z])\w+?([0-9]?)@(gmail|hotmail|yahoo|ofppt).(com|org|net|ma)/g;


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

  //======================= gender Validation =============================//

  const genderC = [false];

  checkR(gender, genderC);

  if (genderC[0] === false) {
    errors.push("Please you have to choose your gender");
  }


  //======================= group Validation =============================//




  // const groupCase = [false];

  // checkR(group, groupCase);

  // if (groupCase[0] === false) {
  //   errors.push("you must choose your group");
  // }





  //======================= Errors =============================//
  if (errors.length > 0) {
    for (let i = 0; i < errors.length; i++) {
      alertbox.style.display = "block";
      alertbox.innerHTML += "<strong> ERROR! </strong>" + errors[i] + "<br>";
    }
  }
};
