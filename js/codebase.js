function scrollToSection(id) {
    const element = document.getElementById(id);
    let offset = element.getBoundingClientRect().top + window.scrollY - 58;
    if (!lessThan800) {
        offset -= 71;
    }
    window.scrollTo({top: offset, behavior: "smooth"});
}

function watchMediaChange(query) {
    lessThan800 = !!query.matches;
}

let lastKnownScroll = 0;
let lessThan800 = false;
const queries = window.matchMedia("(max-width: 800px)");

queries.addEventListener("change", watchMediaChange);
document.addEventListener('scroll', () => {
    if (window.scrollY > lastKnownScroll && window.scrollY > 130) {
        document.getElementsByTagName('header')[0].classList.add('reduce');
    } else {
        document.getElementsByTagName('header')[0].classList.remove('reduce');
    }
    lastKnownScroll = window.scrollY;
});

watchMediaChange(queries);