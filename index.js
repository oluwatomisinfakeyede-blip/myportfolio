// ================= MOBILE MENU TOGGLE =================

const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

if (menuBtn && navMenu) {

    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close the mobile menu automatically when a nav link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

}


// ================= PORTFOLIO FILTER =================

const filterButtons = document.querySelectorAll('.filter');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {

    button.addEventListener('click', () => {

        // Update active button state
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        portfolioItems.forEach(item => {

            const category = item.getAttribute('data-category');

            if (filterValue === 'all' || category === filterValue) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }

        });

    });

});