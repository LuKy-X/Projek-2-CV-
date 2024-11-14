particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": ["#00ffff", "#ff00ff", "#ffff00", "#ff4500", "#00ff00"]
        },
        "shape": {
            "type": "polygon",
            "polygon": {
                "nb_sides": 6
            },
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },

        "size": {
            "value": 4,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 3,
                "size_min": 0.3,
                "sync": false
            }
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
            }
        }

    }
});

// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate')
        }
        // if want to use animation that repeats on scroll this
        else {
            sec.classList.remove('show-animate')
        }
    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when cilick navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

document.getElementById('toggle-button').onclick = function() {
    const biodataContainer = document.getElementById('biodata-pertama');
    const biodataAdditional = document.getElementById('biodata-kedua');
    
    if (biodataContainer.style.display === 'none') {
        biodataContainer.style.display = 'grid';
        biodataAdditional.style.display = 'grid';
        this.textContent = 'Read Less';
    } else {
        biodataContainer.style.display = 'none';
        biodataAdditional.style.display = 'none';
        this.textContent = 'Read More';
    }
};

