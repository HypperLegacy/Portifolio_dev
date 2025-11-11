// Dados do portfólio
const portfolioData = {
    name: "João Pedro Santana",
    role: "Designer & Developer",
    tagline: "Criando experiências digitais memoráveis",
    about: "Sou João Pedro Santana, tenho 17 anos e curso o 2º ano do Ensino Médio e Técnico em Informática no COTEMIG.\n\nAtuo como estagiário de suporte técnico na BHM Diesel Ltda e sou certificado pela Cisco em áreas como Cibersegurança, IoT, IA Moderna e Hardware.\n\nApaixonado por tecnologia e desenvolvimento web, trabalho com HTML, CSS, JavaScript, C# e MySQL, buscando sempre unir criatividade, eficiência e propósito em cada projeto que crio. ",
    email: "azevedosantanaj@gmail.com",
    phone: "+55 (77) 99916-9857",
    location: "Belo Horizonte, Brasil",
    
    skills: [
        { name: "HTML", level: 75 },
        { name: "C#", level: 80 },
        { name: "MySQL", level: 70 },
        { name: "CSS", level: 70 },
        { name: "Javascript", level: 50 }
    ],
    
    projects: [
        {
            id: 1,
            title: "Racha Style",
            description: "Site e-commerce de produtos colecionáveis de automóveis",
            image: "https://images.unsplash.com/photo-1693159682660-c125e71844d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzYyNzA0MzcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
            tags: ["HTML", "CSS", "Figma"],
            url: "https://hypperlegacy.github.io/Racha_Style/"
        },
        {
            id: 2,
            title: "Forms_mask",
            description: "Formulário com mascára automática para implementação em página de contato",
            image: "logo-forms_mask.png",
            tags: ["Javascript", "HTML", "CSS"],
            url: "https://hypperlegacy.github.io/Forms_mask/"
        }
    ],
    
    experience: [
        { year: "Set 2025 - Atual", role: "Suporte Técnico", company: "BHM Diesel Limitada" },
    ],
    
    social: {
        github: "https://github.com/HypperLegacy",
        linkedin: "https://www.linkedin.com/in/jo%C3%A3o-pedro-de-azevedo-santana-3820a2350/",
        Instagram: "https://www.instagram.com/jotape.as/?next=%2F",
    }
};

// Função para popular o conteúdo dinâmico
function populateContent() {
    document.getElementById('hero-name').textContent = portfolioData.name;
    document.getElementById('hero-role').textContent = portfolioData.role;
    document.getElementById('hero-tagline').textContent = portfolioData.tagline;
    document.getElementById('about-text').textContent = portfolioData.about;
    const contactInfo = document.getElementById('contact-info');
    contactInfo.innerHTML = `
        <div class="contact-info"><div class="dot"></div><span style="color: var(--color-gray)">${portfolioData.email}</span></div>
        <div class="contact-info"><div class="dot"></div><span style="color: var(--color-gray)">${portfolioData.phone}</span></div>
        <div class="contact-info"><div class="dot"></div><span style="color: var(--color-gray)">${portfolioData.location}</span></div>
    `;
    const experienceTimeline = document.getElementById('experience-timeline');
    experienceTimeline.innerHTML = portfolioData.experience.map(exp => `
        <div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-year">${exp.year}</div><div class="timeline-role">${exp.role}</div><div class="timeline-company">${exp.company}</div></div>
    `).join('');
    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = portfolioData.skills.map((skill, i) => `
        <div class="skill-item"><div class="skill-header"><span class="skill-name">${skill.name}</span><span class="skill-percentage">${skill.level}%</span></div><div class="skill-bar"><div class="skill-progress" data-level="${skill.level}" style="--skill-width: ${skill.level}%; animation-delay: ${i * 0.1}s;"></div></div></div>
    `).join('');
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = portfolioData.projects.map((project, i) => `
        <div class="project-card" data-url="${project.url}" style="animation-delay: ${i * 0.1}s; cursor: pointer;"><div class="project-image"><img src="${project.image}" alt="${project.title}"></div><div class="project-content"><h3 class="project-title">${project.title}</h3><p class="project-description">${project.description}</p><div class="project-tags">${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}</div></div></div>
    `).join('');
    document.querySelectorAll('.project-card').forEach(card => {
        const url = card.getAttribute('data-url');
        if (url) { card.addEventListener('click', () => window.open(url, '_blank')); }
    });
    const socialLinks = document.getElementById('social-links');
    socialLinks.innerHTML = Object.entries(portfolioData.social).map(([platform, url], i) => `<a href="${url}" class="social-link float" style="animation-delay: ${i * 0.1}s;">${platform[0].toUpperCase()}</a>`).join('');
    document.getElementById('footer-text').textContent = `© 2025 ${portfolioData.name}. Todos os direitos reservados.`;
    const footerLinks = document.getElementById('footer-links');
    footerLinks.innerHTML = Object.entries(portfolioData.social).map(([platform, url]) => `<a href="${url}" class="footer-link">${platform}</a>`).join('');
}

function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    if (!cursor) return;
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
}

function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) return;
    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

function initMobileMenu() {
    const toggle = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');
    if (!toggle || !menu) return;
    toggle.addEventListener('click', () => { menu.classList.toggle('active'); });
    const links = menu.querySelectorAll('a');
    links.forEach(link => { link.addEventListener('click', () => { menu.classList.remove('active'); }); });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        });
    });
}

function initSkillAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach((bar) => { bar.classList.add('animate'); });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) { observer.observe(skillsSection); }
}

function initProjectAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) { entry.target.classList.add('animate'); observer.unobserve(entry.target); }
        });
    }, { threshold: 0.1 });
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => observer.observe(card));
}

// Inicializar EmailJS
(function() {
    emailjs.init("LociyipQE0Q_2YS6G");
})();

// Contact Form
function initContactForm() {
    const form = document.querySelector('#contact-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('.form-submit');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
        const templateParams = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
            subject: form.subject.value,
            time: new Date().toLocaleString()
        };
        emailjs.send("service_amw6tp8", "template_9p0i2fs", templateParams)
            .then((response) => {
                console.log('Email enviado com sucesso!', response.status, response.text);
                alert('✅ Mensagem enviada com sucesso! Entrarei em contato em breve.');
                form.reset();
            })
            .catch((error) => {
                console.error('Erro ao enviar email:', error);
                alert('❌ Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato diretamente pelo email.');
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            });
    });
}

function initActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-link');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.clientHeight;
            if (sectionTop <= 150 && sectionTop + sectionHeight > 150) { current = section.getAttribute('id'); }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) { link.classList.add('active'); }
        });
    });
}

function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.checked = true;
    }
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateContent();
    initCustomCursor();
    initScrollProgress();
    initMobileMenu();
    initSmoothScroll();
    initSkillAnimations();
    initProjectAnimations();
    initContactForm();
    initActiveSection();
    initThemeToggle();
});

document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
});
