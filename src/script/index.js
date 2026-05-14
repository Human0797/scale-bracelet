// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('login-modal');
    const loginBtn = document.querySelector('.login');
    const closeBtn = document.querySelector('.close');
    const signupLink = document.querySelector('.signup-modal');

    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.classList.add('active');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.classList.remove('active');
        });
    }

    if (signupLink) {
        signupLink.addEventListener('click', function(e) {
            e.preventDefault();
            // For now, just close the modal. Could open signup modal later.
            modal.classList.remove('active');
            alert('Signup functionality coming soon!');
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Handle form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would handle login logic
            alert('Login functionality to be implemented!');
            modal.classList.remove('active');
        });
    }
});
