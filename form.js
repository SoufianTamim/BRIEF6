function empty(value) {
  if (value.length > 0) {
    return false;
  }
  return true;
}

function checkradio(array, bool) {
  array.forEach((ele) => {
    if (ele.checked === true) {
      bool[0] = true;
      console.log(bool);
      return bool;
    }
  });
}

const errors = [];

submit.onclick = function (ev) {
  console.log("clicked");
  alertbox.style.display = "none";
  alertbox.innerHTML = "";
  errors.length = 0;

  let first_name = document.getElementsByName("firstname")[0].value;
  let last_name = document.getElementById("last_name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let gender = document.getElementById("gender").value;
  //   let group = document.getElementById("group").value; // =========I should give the html element an Id=== //
  //   let clubs = document.getElementById("clubs").value;

  // let phone = "0677846064"
  // let phoneRe = /0[5-7]/g;
  // console.log(phone.match(phoneRe));

  // let emailRe = /([a-z])\w+.?([a-z])\w+.?([a-z])\w+?([0-9]?)@(gmail|hotmail|yahoo|ofppt).(com|org|net|ma)/g;

  let myRegex = /^[a-zA-Z-\s]+$/;

  ev.preventDefault();
  if (first_name.length === 0) {
    errors.push("the firstname is required , can't be empty ");
  } else if (first_name.length > 15) {
    errors.push("the max length for the firstname is 15 ");
  } else if (myRegex.test(first_name) === -1) {
    errors.push("the first name can't contain numbers");
  }

  if (errors.length > 0) {
    for (let i = 0; i < errors.length; i++) {
      alertbox.style.display = "block";
      alertbox.innerHTML += "<strong> error ! </strong>" + errors[i] + "<br>";
    }
  }
};
