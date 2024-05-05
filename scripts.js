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

