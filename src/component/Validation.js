const Validation = (values) => {
    let errors = {};

    const hardCodeValues = {
        username: "jay",
        email: "jay@gmail.com",
        password: "Jaya@1234"
    }

    if (!values.username) {
        errors.username = "Name is required"
    } else if (values.username != hardCodeValues.username) {
        errors.username = "Name is invalid"
    }
    if (!values.email) {
        errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid"
    } else if (values.email != hardCodeValues.email) {
        errors.email = "Email is invalid"
    }
    if (!values.password) {
        errors.password = "Password is required"
    } else if (values.password.length < 8) {
        errors.password = "Password Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"}
        else if(values.password != hardCodeValues.password){
            errors.password = "Password is invalid"
        }
    // } else if ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})") {
    //     errors.password = "Wrong Password!! please enter the vaild password"
    // }
    return errors;
}

export default Validation;
