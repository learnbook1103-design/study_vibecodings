document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Prevent default action for anchor tags
            if (this.tagName === 'A') {
                const href = this.getAttribute('href');
                // If the link is internal, prevent default and show alert
                if (href && href !== '#' && !href.startsWith('http')) {
                    event.preventDefault();
                    window.location.href = href;
                } else if (href === '#') {
                    event.preventDefault();
                }
            } else {
                // For other buttons, do nothing
            }
        });
    });
});