document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent event from bubbling up to window
            const dropdownContent = this.querySelector('.dropdown-content');
            dropdownContent.classList.toggle('show');
        });
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown a')) {
            dropdowns.forEach(dropdown => {
                const dropdownContent = dropdown.querySelector('.dropdown-content');
                if (dropdownContent.classList.contains('show')) {
                    dropdownContent.classList.remove('show');
                }
            });
        }
    });
});
