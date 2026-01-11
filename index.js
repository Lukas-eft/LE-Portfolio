
// Data Definitions
const stack = [
    { name: "HTML", slug: "html5" },
    { name: "CSS", slug: "css" }, 
    { name: "JS", slug: "javascript" },
    { name: "NEXT.JS", slug: "nextdotjs" },
    { name: "TS", slug: "typescript" },
    { name: "NODE.JS", slug: "nodedotjs" },
    { name: "SUPABASE", slug: "supabase" },
    { name: "GIT", slug: "git" },
    { name: "REACT", slug: "react" },
    { name: "EXPRESS.JS", slug: "express" },
    { name: "TAILWIND", slug: "tailwindcss" },
    { name: "MONGODB", slug: "mongodb" },
    { name: "POSTGRESQL", slug: "postgresql" },
    { name: "DOCKER", slug: "docker" },
    { name: "LINUX", slug: "linux" }
];

const projects = [
    { 
        id: 1, 
        title: "LE-Tools", 
        description: "A collection of high-performance utilities and productivity tools for modern developers.", 
        tags: ["React", "TS", "Tailwind"], 
        link: "https://7ukasx.github.io/LE-Studio/",
        repo: "https://github.com/7ukasx/LE-Studio",
        image: "image.png" 
    },
    { 
        id: 2, 
        title: "LE-Tracker", 
        description: "A comprehensive finance tracking tool designed for managing expenses with precision.", 
        tags: ["React", "TS", "Tailwind"], 
        link: "https://7ukasx.github.io/LE-Tracker/",
        repo: "https://github.com/7ukasx/LE-Tracker",
        image: "image2.png" 
    },
    { 
        id: 3, 
        title: "Quote Generator", 
        description: "A random quote generator with a clean UI and automated fetching algorithm.", 
        tags: ["Random", "Algorithm", "API"], 
        link: "https://7ukasx.github.io/Quote-generator/",
        repo: "https://github.com/7ukasx/Quote-generator",
        image: "image3.png" 
    },
    { 
        id: 4, 
        title: "Secure Encryption", 
        description: "A lightweight engine for secure data transmission in web applications using AES256.", 
        tags: ["HTML", "AES256", "JS"], 
        link: "https://7ukasx.github.io/Secure-encryption/",
        repo: "https://github.com/7ukasx/Secure-encryption",
        image: "image4.png" 
    },
    { 
        id: 5, 
        title: "Coming Soon", 
        description: "Innovative engineering project currently in the rapid development phase.", 
        tags: ["X", "X", "X"], 
        link: "https://github.com/7ukasx", 
        repo: "https://github.com/7ukasx",
        image: "image5.png" 
    },
    { 
        id: 6, 
        title: "Coming Soon", 
        description: "Stealth mode project focused on high-performance infrastructure.", 
        tags: ["X", "X", "X"], 
        link: "https://github.com/7ukasx", 
        repo: "https://github.com/7ukasx",
        image: "image5.png" 
    }
];

const socials = [
    { name: 'GitHub', href: 'https://github.com/7ukasx', icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>` },
    { name: 'StackOverflow', href: 'https://stackoverflow.com/users/22421715/7ukasx', icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.95zm2.981-4.801l7.99 7.105 1.439-1.616-7.99-7.103-1.439 1.614zM15.213 0l-1.898 1.05 5.56 10.019 1.898-1.05L15.213 0z"/></svg>` },
    { name: 'Mail', href: 'mailto:contact@7ukasx.dev', icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z"/></svg>` }
];

// Initialize DOM
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderMarquee();
    renderProjects();
    renderSocials();
    initScrollSpy();
    initModals();
    initRevealObserver();
    document.getElementById('year').textContent = new Date().getFullYear();
});

// Theme Logic
function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    const updateIcons = (isDark) => {
        if (isDark) {
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        } else {
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
    };

    toggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        updateIcons(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        renderMarquee();
        renderProjects();
    });

    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        updateIcons(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateIcons(false);
    }
}

// Renderers
function renderMarquee() {
    const container = document.getElementById('marquee-content');
    if (!container) return;
    const items = [...stack, ...stack, ...stack];
    const isDark = document.documentElement.classList.contains('dark');
    const color = isDark ? 'fff' : '000';

    container.innerHTML = items.map((item) => `
        <div class="mx-6 sm:mx-12 md:mx-20 flex items-center gap-4 sm:gap-6 group">
            <div class="w-6 h-6 sm:w-12 sm:h-12 flex items-center justify-center opacity-30 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                <img src="https://cdn.simpleicons.org/${item.slug}/${color}" 
                     alt="${item.name}" 
                     class="w-full h-full object-contain">
            </div>
            <span class="text-xl sm:text-5xl font-black uppercase tracking-tighter text-black/20 dark:text-white/20 group-hover:text-black dark:group-hover:text-white transition-all duration-700 cursor-default">${item.name}</span>
        </div>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById('projects-grid');
    if (!container) return;
    
    container.innerHTML = projects.map((p, i) => `
        <div class="group block reveal delay-${(i % 3 + 1) * 100}">
            <div class="relative w-full aspect-video bg-white/10 dark:bg-black/5 rounded-2xl overflow-hidden mb-6 sm:mb-8 border border-white/5 dark:border-black/10 p-2 sm:p-4 transition-all duration-500 group-hover:border-white/20 group-hover:shadow-2xl">
                <div class="w-full h-full rounded-xl overflow-hidden shadow-inner relative bg-neutral-900">
                    <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110">
                    <div class="absolute inset-0 bg-black/40 opacity-40 group-hover:opacity-0 transition-opacity"></div>
                    
                    <div class="absolute inset-0 flex items-center justify-center gap-2 sm:gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        <button onclick="openPreview('${p.link}')" class="bg-white text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-[8px] sm:text-[9px] font-black uppercase tracking-widest shadow-2xl hover:scale-110 transition-transform">Preview</button>
                        <a href="${p.repo}" target="_blank" class="bg-black text-white border border-white/20 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-[8px] sm:text-[9px] font-black uppercase tracking-widest shadow-2xl hover:scale-110 transition-transform">Repo</a>
                    </div>
                </div>
            </div>
            <div class="px-2">
                <div class="flex items-center justify-between mb-3 sm:mb-4">
                     <h3 class="text-lg sm:text-xl font-black text-white dark:text-black tracking-tighter uppercase leading-none transition-colors duration-500">${p.title}</h3>
                     <span class="text-[6px] sm:text-[7px] font-black uppercase tracking-widest text-white/30 dark:text-black/30 border border-white/10 dark:border-black/10 px-2 py-0.5 transition-colors duration-500">${p.tags[0]}</span>
                </div>
                <p class="text-white/50 dark:text-black/50 text-[9px] sm:text-[10px] font-medium uppercase tracking-widest leading-relaxed line-clamp-2 transition-colors duration-500">
                    ${p.description}
                </p>
            </div>
        </div>
    `).join('');
}

function renderSocials() {
    const container = document.getElementById('social-links');
    if (!container) return;
    
    container.innerHTML = socials.map(s => `
        <a href="${s.href}" target="_blank" aria-label="${s.name}" class="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-black/10 dark:border-white/10 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500 group shadow-sm">
            <div class="group-hover:scale-110 transition-transform">${s.icon}</div>
        </a>
    `).join('');
}

// Live Preview Logic
window.openPreview = (url) => {
    const modal = document.getElementById('preview-modal');
    const iframe = document.getElementById('preview-iframe');
    const urlText = document.getElementById('preview-url-text');
    const loader = document.getElementById('preview-loader');
    const fallback = document.getElementById('preview-fallback');
    const externalLink = document.getElementById('preview-external-link');

    if (!modal || !iframe) return;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    urlText.textContent = url;
    loader.classList.remove('opacity-0');
    loader.classList.add('opacity-100');
    loader.classList.remove('hidden');
    fallback.classList.add('hidden');
    iframe.classList.remove('hidden');
    iframe.src = url;

    externalLink.href = url;

    const checkTimeout = setTimeout(() => {
        if (url.includes('github.com') && !url.includes('github.io')) {
            showFallback();
        }
    }, 2500);

    iframe.onload = () => {
        clearTimeout(checkTimeout);
        loader.classList.add('opacity-0');
        setTimeout(() => loader.classList.add('hidden'), 500);
    };

    function showFallback() {
        iframe.classList.add('hidden');
        loader.classList.add('hidden');
        fallback.classList.remove('hidden');
    }
};

function initModals() {
    const modals = [
        { id: 'contact-modal', openBtn: '.open-contact-btn' },
        { id: 'preview-modal' }
    ];

    modals.forEach(m => {
        const el = document.getElementById(m.id);
        if (!el) return;
        const closeBtns = el.querySelectorAll('.close-modal-btn, .modal-overlay');
        
        closeBtns.forEach(btn => btn.addEventListener('click', () => {
            el.classList.remove('active');
            document.body.style.overflow = '';
            if (m.id === 'preview-modal') document.getElementById('preview-iframe').src = '';
        }));

        if (m.openBtn) {
            document.querySelectorAll(m.openBtn).forEach(b => b.addEventListener('click', () => {
                el.classList.add('active');
                document.body.style.overflow = 'hidden';
            }));
        }
    });

    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            if (!btn) return;
            btn.innerHTML = 'Sending...';
            setTimeout(() => {
                const modalContent = document.getElementById('modal-content');
                if (modalContent) {
                  modalContent.innerHTML = `
                      <div class="text-center py-16 sm:py-20 animate-reveal">
                          <h2 class="text-3xl sm:text-4xl font-black uppercase mb-4 text-black dark:text-white">Success</h2>
                          <p class="text-[9px] sm:text-[10px] tracking-widest text-gray-500 uppercase">Message transmitted.</p>
                          <button onclick="location.reload()" class="mt-10 sm:mt-12 px-10 sm:px-12 py-4 sm:py-5 bg-black dark:bg-white text-white dark:text-black font-black uppercase text-[9px] sm:text-[10px]">Close</button>
                      </div>
                  `;
                }
            }, 1500);
        });
    }
}

function initScrollSpy() {
    const pill = document.getElementById('nav-pill');
    const sections = ['home', 'about', 'skills', 'projects'];
    
    const update = () => {
        let current = 'home';
        sections.forEach(s => {
            const el = document.getElementById(s);
            if (el && window.scrollY >= (el.offsetTop - 300)) current = s;
        });

        const activeItem = document.querySelector(`.nav-item[data-section="${current}"]`);
        if (activeItem && pill) {
            pill.style.opacity = '1';
            pill.style.left = `${activeItem.offsetLeft}px`;
            pill.style.width = `${activeItem.offsetWidth}px`;
            
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.toggle('text-white', item === activeItem);
                item.classList.toggle('dark:text-black', item === activeItem);
                item.classList.toggle('text-gray-400', item !== activeItem);
            });
        }
    };

    window.addEventListener('scroll', update);
    window.addEventListener('resize', update);
    update();
}

function initRevealObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
