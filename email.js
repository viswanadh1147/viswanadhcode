
function validateEmail(email, password,age,gender,country) {
    if (email.includes("@")) {
        if (password.length >= 8) {
            alert("EMAIL password IS VALID");
            let lowercasepattern = /[a-z]/g;
            let uppercasepattern = /[A-Z]/g;
            let lowerresult = password.match(lowercasepattern);
            let upperresult = password.match(uppercasepattern);

            if (lowerresult != null && upperresult != null) {
                localStorage.setItem("email", email);
                localStorage.setItem("password",password);
                window.location.href = "user.html";
                return false;
            }
            else {
                alert("email valid password invalid");
            }

        }
        else if (password.length >= 8) {
            alert("EMAIL IS NOT VALID password valid");
            isValidEmail = false
        }


        else {
            alert("both are invalid");
        }
    }
    
}