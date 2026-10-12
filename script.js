
const form = document.getElementById("registrationForm");
const successMessage = document.getElementById("successMessage");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const togglePassword = document.getElementById("togglePassword");

function showError(field, message) {
    document.getElementById(field.id + "Error").textContent = message;
    field.classList.add("error-input");
}


function clearError(field) {
    document.getElementById(field.id + "Error").textContent = "";
    field.classList.remove("error-input");
}


function checkRequired(field) {
    if (field.value.trim() === "") {
        showError(field, field.dataset.error);
        return false;
    }

    clearError(field);
    return true;
}


function clearAllErrors() {
    clearError(document.getElementById("studentId"));
    clearError(document.getElementById("fullName"));
    clearError(document.getElementById("email"));
    clearError(document.getElementById("phone"));
    clearError(document.getElementById("dob"));
    clearError(document.getElementById("gender"));
    clearError(document.getElementById("program"));
    clearError(document.getElementById("yearLevel"));
    clearError(password);
    clearError(confirmPassword);
    clearError(document.getElementById("address"));

    document.getElementById("agreementError").textContent = "";
    document.getElementById("agreement").classList.remove("error-input");
}


form.addEventListener("submit", function(event) {
    
    event.preventDefault();

    clearAllErrors();
    successMessage.textContent = "";

    let isValid = true;

    const studentId = document.getElementById("studentId");
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const dob = document.getElementById("dob");
    const gender = document.getElementById("gender");
    const program = document.getElementById("program");
    const yearLevel = document.getElementById("yearLevel");
    const address = document.getElementById("address");
    const agreement = document.getElementById("agreement");

    if (!checkRequired(studentId)) {
        isValid = false;
    } else {
        studentId.value = studentId.value.trim();
    }

    if (!checkRequired(fullName)) {
        isValid = false;
    } else {
        fullName.value = fullName.value.trim();
    }

    if (!checkRequired(email)) {
        isValid = false;
    } else {
        email.value = email.value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value)) {
            showError(email, email.dataset.error);
            isValid = false;
        }
    }

    if (!checkRequired(phone)) {
        isValid = false;
    } else {
        phone.value = phone.value.trim();

    
        const phonePattern = /^(09\d{9}|\+639\d{9})$/;

        if (!phonePattern.test(phone.value)) {
            showError(phone, phone.dataset.error);
            isValid = false;
        }
    }

    if (!checkRequired(dob)) {
        isValid = false;
    }

    
    if (!checkRequired(gender)) {
        isValid = false;
    }

    if (!checkRequired(program)) {
        isValid = false;
    }

    if (!checkRequired(yearLevel)) {
        isValid = false;
    }

  
    if (!checkRequired(password)) {
        isValid = false;
    } else if (password.value.length < 8) {
        showError(password, password.dataset.error);
        isValid = false;
    }

    
    if (!checkRequired(confirmPassword)) {
        isValid = false;
    } else if (password.value !== confirmPassword.value) {
        showError(confirmPassword, confirmPassword.dataset.error);
        isValid = false;
    }

    if (!checkRequired(address)) {
        isValid = false;
    } else {
        address.value = address.value.trim();
    }

   
    if (!agreement.checked) {
        document.getElementById("agreementError").textContent =
            "Please confirm that your information is correct.";
        agreement.classList.add("error-input");
        isValid = false;
    } else {
        document.getElementById("agreementError").textContent = "";
        agreement.classList.remove("error-input");
    }

 
    if (isValid) {
        
        const fieldLabel = fullName.dataset.label;

        successMessage.textContent =
            "Registration validated successfully for " +
            fullName.value + "!";

        
        clearAllErrors();
    }
});

togglePassword.addEventListener("click", function() {
    togglePassword.classList.toggle("active");

    if (password.type === "password") {
        password.setAttribute("type", "text");
        confirmPassword.setAttribute("type", "text");
        togglePassword.textContent = "Hide Passwords";
        togglePassword.dataset.status = "shown";
    } else {
        password.setAttribute("type", "password");
        confirmPassword.setAttribute("type", "password");
        togglePassword.textContent = "Show Passwords";
        togglePassword.dataset.status = "hidden";
    }
});

form.addEventListener("reset", function() {
    clearAllErrors();
    successMessage.textContent = "";

    password.setAttribute("type", "password");
    confirmPassword.setAttribute("type", "password");

    togglePassword.classList.remove("active");
    togglePassword.textContent = "Show Passwords";
    togglePassword.dataset.status = "hidden";
});
