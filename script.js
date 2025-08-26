// Navegación móvil
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efecto de scroll en la navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Animaciones de entrada al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Aplicar animaciones a elementos
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .skill-item, .value-item, .hobby-item');
    
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Animación de las barras de habilidades
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
};

// Ejecutar animación de habilidades cuando la sección sea visible
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Efecto de hover en las tarjetas de proyectos
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Función para actualizar la fecha del footer
const updateFooterDate = () => {
    const footerText = document.querySelector('.footer-text');
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.innerHTML = `© ${currentYear} Isabel Varas. Todos los derechos reservados.`;
    }
};

// Actualizar fecha al cargar la página
updateFooterDate();

// Efecto de hover en los iconos de habilidades
document.querySelectorAll('.skill-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2) rotate(10deg)';
        this.style.color = 'var(--fucsia)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
        this.style.color = 'var(--rosado-dark)';
    });
});

// Función para hacer el portafolio más interactivo
const enhanceInteractivity = () => {
    // Efecto de hover en las tarjetas de valores
    document.querySelectorAll('.value-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(45deg, var(--rosado), var(--malva))';
            this.style.color = 'var(--black)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.background = 'var(--white)';
            this.style.color = 'var(--black)';
        });
    });
    
    // Efecto de hover en los hobbies
    document.querySelectorAll('.hobby-item').forEach(hobby => {
        hobby.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(45deg, var(--fucsia), var(--malva-dark))';
            this.style.color = 'var(--white)';
        });
        
        hobby.addEventListener('mouseleave', function() {
            this.style.background = 'var(--white)';
            this.style.color = 'var(--black)';
        });
    });
};

// Ejecutar mejoras de interactividad
enhanceInteractivity();

console.log('🚀 Portafolio de Isabel Varas cargado exitosamente!');
console.log('✨ Todas las funcionalidades están activas');
console.log('🎨 Paleta de colores vibrante aplicada');
console.log('📱 Diseño responsive implementado');
console.log('🎭 Animaciones y transiciones activas');
