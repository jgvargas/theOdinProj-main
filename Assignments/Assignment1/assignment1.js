const passwordField = document.getElementById('password')
const confirmPasswordField = document.getElementById('conf_password')
let errorLabel = document.getElementById('error-pass')

let password, confirmPassword = ''

passwordField.addEventListener('input', (e)=> {
    console.log(e.target.value)
    password = e.target.value

    checkPasswordsMatch()
})

confirmPasswordField.addEventListener('input', (e)=> {
    console.log(e.target.value)
    confirmPassword = e.target.value

    checkPasswordsMatch()
})

function checkPasswordsMatch() {
    if(password !== confirmPassword) {
        errorLabel.textContent = "* Passwords do not match"
    }
    else {
        errorLabel.textContent = ""
    }
}