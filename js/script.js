document.addEventListener('DOMContentLoaded', function() {
    const zoomButtons = document.querySelectorAll('.zoom-btn');
    
    zoomButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const card = this.closest('.zoom-card');
            const img = card.querySelector('img');
            const action = this.getAttribute('data-action');
            
            let currentWidth = img.width;
            let newWidth;
            
            if (action === 'in') {
                newWidth = currentWidth * 1.2;
                if (newWidth > 500) newWidth = 500;
            } else {
                newWidth = currentWidth * 0.8;
                if (newWidth < 100) newWidth = 100;
            }
            
            img.style.width = newWidth + 'px';
            img.style.height = 'auto';
        });
    });
});
