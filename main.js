document.addEventListener('DOMContentLoaded', () => {
    const chlist = document.querySelectorAll(".btn");
    chlist.forEach(ch => {
        ch.classList.add('buttonbg');
        ch.addEventListener('click', (event) => {
            event.preventDefault();
            const highlighted = document.querySelector('.highlight');
            if (highlighted) {
                highlighted.classList.remove('highlight');
                highlighted.classList.add('buttonbg');
            }
            ch.classList.remove('buttonbg');
            ch.classList.add('highlight');
        });
    });

    // Sign in and sign up button toggling
    const signupButton = document.getElementById("signUp");
    const signinButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signupButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signinButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });

    // Toggle password visibility
    const togglePassword = (toggleButtonId, passwordFieldId, iconId) => {
        const toggleButton = document.getElementById(toggleButtonId);
        const passwordField = document.getElementById(passwordFieldId);
        const icon = document.getElementById(iconId);
      
        toggleButton.addEventListener('click', () => {
          const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
          passwordField.setAttribute('type', type);
          icon.classList.toggle('fa-eye');
          icon.classList.toggle('fa-eye-slash');
        });
      };
      
      togglePassword('toggleSignUpPassword', 'signUpPassword', 'toggleSignUpIcon');
      togglePassword('toggleConfirmPassword', 'confirmPassword', 'toggleConfirmIcon');
      togglePassword('toggleSignInPassword', 'signInPassword', 'toggleSignInIcon');
    // Form validation and error handling
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const forgform = document.getElementById('forgotPasswordForm')

    const displayError = (elementId, message) => {
        const errorElement = document.getElementById(elementId);
        errorElement.style.display = 'block';
        errorElement.innerHTML = `<p>${message}</p>`;
        errorElement.classList.remove('fade-out');

        // Set a timer to hide the error after a few seconds
        setTimeout(() => {
            errorElement.classList.add('fade-out');
            // Remove the error element from the DOM after the fade-out animation completes
            setTimeout(() => {
                errorElement.style.display = 'none';
                errorElement.classList.remove('fade-out');
            }, 500); // 500ms to match the animation duration
        }, 5000); // 5 seconds

        // Ensure only one error message is visible at a time
        const errorBoxes = document.querySelectorAll('.error-box');
        errorBoxes.forEach(box => {
            if (box.id !== elementId) {
                box.style.display = 'none';
            }
        });
    };

    const clearError = (elementId) => {
        const errorElement = document.getElementById(elementId);
        errorElement.style.display = 'none';
        errorElement.innerHTML = '';
    };

    signInForm.addEventListener('submit', (event) => {
        const selectedProfile = document.querySelector('.signInBtn.highlight');
        if (!selectedProfile) {
            event.preventDefault();
            displayError('signInError', 'Please select Student or Educator.');
        } else {
            clearError('signInError');
        }
    });

    forgform.addEventListener('submit', (event) => {
        const selectedProfile = document.querySelector('.forgBtn.highlight');
        if (!selectedProfile) {
            event.preventDefault();
            displayError('forgError', 'Please select Student or Educator.');
        } else {
            clearError('forgError');
        }
    });

    signUpForm.addEventListener('submit', (event) => {
        const selectedProfile = document.querySelector('.signUpBtn.highlight');
        const password = document.getElementById('signUpPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (!selectedProfile) {
            event.preventDefault();
            displayError('signUpError', 'Please select Student or Educator.');
        } else {
            clearError('signUpError');
        }

        if (password !== confirmPassword) {
            event.preventDefault();
            displayError('confirmPasswordError', 'Passwords do not match.');
        } else {
            clearError('confirmPasswordError');
        }
    });

    // Modal functionality for terms and conditions
    const termsLink = document.querySelector('.terms');
    const modal = document.getElementById('termsModal');
    const closeModal = document.querySelector('.close-btn');

    termsLink.addEventListener('click', (event) => {
        event.preventDefault();
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    //Modal for forgot password
    const forgLink = document.querySelector('.forgot');
    const moda = document.getElementById('forgotPasswordModal');
    const closeModa = document.getElementById('closeForgotPasswordModal');
    forgLink.addEventListener('click', (event) => {
        event.preventDefault();
        moda.style.display = 'block';
    });

    closeModa.addEventListener('click', () => {
        moda.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == moda) {
            moda.style.display = 'none';
        }
    });
});