tsParticles.load("tsparticles", {
    fullScreen: { enable: true }, // cover entire body
    fpsLimit: 60,
    particles: {
        number: { value: 80, density: { enable: true, area: 800 } },
        color: { value: "#4F46E5" },
        shape: { type: "circle" },
        opacity: { value: 0.3 },
        size: { value: 3, random: { enable: true, minimumValue: 1 } },
        move: { enable: true, speed: 1, direction: "none", random: false, straight: false, outModes: "out" },
        links: { enable: true, distance: 150, color: "#4F46E5", opacity: 0.2, width: 1 }
    },
    interactivity: {
        events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" }
        },
        modes: { repulse: { distance: 100 }, push: { quantity: 4 } }
    },
    detectRetina: true
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("ul li a");

    function updateActiveLink() {
        let currentSectionId = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            const span = link.querySelector("span");

            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("text-primary");
                link.classList.remove("text-text-soft");
                span.classList.remove("hidden");
            } else {
                link.classList.remove("text-primary");
                link.classList.add("text-text-soft");
                span.classList.add("hidden");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();
});
