function passwordShow() {
    let password = document.querySelector("#password");
    if(password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }

    let confirmPassword = document.querySelector("#confirmPassword");
    if(confirmPassword.type === "password") {
        confirmPassword.type = "text";
    } else {
        confirmPassword.type = "password";
    }
}

function check() {
    let passwordValue = document.getElementById("password").value;
    let lengthCounter = document.querySelector(".count");
    lengthCounter.textContent =  "Length: " + passwordValue.length;

    if (passwordValue.length >= 5) {
        document.querySelector(".check1").style.color = "green";
    } else {
        document.querySelector("check1").style.color = "red";
    }

    if (passwordValue.length <= 10) {
        document.querySelector(".check2").style.color = "green";
    } else {
        document.querySelector(".check2").style.color = "red";
    }

    if (passwordValue.match(/[0-9]/i)) {
        document.querySelector(".check3").style.color = "green";
    } else {
        document.querySelector(".check3").style.color = "red";
    }

    if (passwordValue.match(/[^A-Za-z0-9-' ']/i)) {
        document.querySelector(".check4").style.color = "green";
    } else {
        document.querySelector(".check4").style.color = "red";
    }

    if (passwordValue.match(" ")) {
        document.querySelector(".check5").style.color = "red";
    } else {
        document.querySelector(".check5").style.color = "green";
    }
}

