function setupScroll() {
    const allSections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav a');

    let currentIndex = 0;

    const observer = new IntersectionObserver((sections) => {
        sections.forEach(section => {
            if (section.isIntersecting && section.intersectionRatio > 0.2) {


                const newIndex = Array.from(allSections).indexOf(section.target);

                if (newIndex !== currentIndex) {
                    updateNavItem(newIndex);
                    currentIndex = newIndex;

                }
            }
        });
    }, {
        root: null,
        threshold: 0.5,
        rootMargin: "0px"
    });

    allSections.forEach(section => {
        observer.observe(section);
    });

    function updateNavItem(activeIndex) {
        navItems.forEach((link, index) => {
            if (link.classList.contains('current')) {
                link.classList.remove('current');
                link.classList.add('out-of-view');
            }

            if (index === activeIndex) {
                link.classList.remove('out-of-view');
                link.classList.add('current');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setupScroll();
});