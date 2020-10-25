export default function contactFrom(form) {


    const email = form.elements["email"];

    let error_text = null;
    form.addEventListener('submit', onSubmit);

    function validateEmail(val) {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return val.match(mailformat)
    }

    function showError(el, text) {
        el.parentNode.classList.add("error");
        el.parentNode.querySelector('.error-text').innerHTML = text;
    }

    function hideError(el) {
        el.parentNode.classList.remove("error");
        el.parentNode.querySelector('.error-text').innerHTML = "";
    }

    function submit() {

    }

    function onSubmit(e) {
        e.preventDefault();

        if (!email.value) {
            error_text = 'Field is required';
        } else {
            if (!validateEmail(email.value)) {
                error_text = 'Woops, make sure it\'s an email';
            } else {
                error_text = null
            }
        }

        if (error_text) {
            showError(email, error_text)
        } else {
            hideError(email);
            // TODO submit
        }
    }


}


