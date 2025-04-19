document.addEventListener('DOMContentLoaded', () => {
    const categoryLinks = document.querySelectorAll('.category-link');
    const categorySections = document.querySelectorAll('.category-section');

    if (!categoryLinks.length || !categorySections.length) {
        console.error('Category links or sections not found!');
        return;
    }

    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active class from all links
            categoryLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');

            // Hide all sections
            categorySections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the selected category section
            const category = link.getAttribute('data-category');
            const sectionToShow = document.getElementById(category);
            if (sectionToShow) {
                sectionToShow.style.display = 'block';
                console.log(`Showing category: ${category}`);
            } else {
                console.error(`Section not found for category: ${category}`);
            }
        });
    });
});