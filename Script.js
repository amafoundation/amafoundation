<script>
    // Highlight active nav link
    const links = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
}
});

    // Modal: open
    function openModal() {
    const modal = document.getElementById('registrationModal');
    if (modal) modal.style.display = 'flex';
}

    // Modal: close
    function closeModal() {
    const modal = document.getElementById('registrationModal');
    if (modal) modal.style.display = 'none';
}

    // Open the Rules Modal
    function openRules() {
    const modal = document.getElementById('ruleModal');
    if (modal) modal.style.display = 'flex';
}

    // Close the Rules Modal
    function closeRules() {
    const modal = document.getElementById('ruleModal');
    if (modal) modal.style.display = 'none';
}

    // Close modals when clicking outside of them
    window.addEventListener('click', function(event) {
    const registrationModal = document.getElementById('registrationModal');
    const ruleModal = document.getElementById('ruleModal');

    if (event.target === registrationModal) {
    registrationModal.style.display = 'none';
}

    if (event.target === ruleModal) {
    ruleModal.style.display = 'none';
}
});

    // Form validation
    window.addEventListener('DOMContentLoaded', function () {
    const modalForm = document.querySelector('.modal-form');
    if (modalForm) {
    modalForm.addEventListener('submit', function (event) {
    const firstName = document.getElementById('player-first-name')?.value.trim();
    const lastName = document.querySelector('input[name="player-last-name"]')?.value.trim();
    const email = document.getElementById('player-email')?.value.trim();
    const signature = document.getElementById('signature')?.value.trim();
    const acceptRules = document.getElementById('accept-rules')?.checked;

    if (!firstName || !lastName || !email || !signature) {
    event.preventDefault();
    alert('Please fill out all required fields marked with an asterisk (*)');
} else if (acceptRules === false) {
    event.preventDefault();
    alert('You must agree to the tournament rules to proceed.');
} else {
    alert('Form submitted successfully!');
}
});
    // Open the Rules Modal
    function openRules() {
    const modal = document.getElementById('ruleModal');
    if (modal) modal.style.display = 'flex';
}

// Close the Rules Modal
    function closeRules() {
    const modal = document.getElementById('ruleModal');
    if (modal) modal.style.display = 'none';
}

// Close modal when clicking outside
    window.addEventListener('click', function(event) {
    const modal = document.getElementById('ruleModal');
    if (event.target === modal) {
    modal.style.display = 'none';
}

    function openModal() {
    const modal = document.getElementById('registrationModal');
    if (modal) modal.style.display = 'flex'; // Display the modal as a flexbox (centered)
}

    function closeModal() {
    const modal = document.getElementById('registrationModal');
    if (modal) modal.style.display = 'none'; // Hide the modal
}

// Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
    const modal = document.getElementById('registrationModal');
    if (event.target === modal) {
    modal.style.display = 'none';
}
});
</script>