// Script para o site Donuts Tia

document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
    
    menuIcon.addEventListener('click', function() {
        this.classList.toggle('open');
        menu.classList.toggle('open');
    });
    
    // Fechar menu ao clicar em um link
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuIcon.classList.remove('open');
            menu.classList.remove('open');
        });
    });
    
    // Header scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Filtro de produtos
    const filterBtns = document.querySelectorAll('.filter-btn');
    const produtoItems = document.querySelectorAll('.produto-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover classe active de todos os botões
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            produtoItems.forEach(item => {
                if (filter === 'todos') {
                    item.style.display = 'block';
                } else if (item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Slider de depoimentos
    const depoimentos = document.querySelectorAll('.depoimento-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    
    function showSlide(n) {
        // Remover classe active de todos os slides e dots
        depoimentos.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Mostrar slide atual
        depoimentos[n].classList.add('active');
        dots[n].classList.add('active');
        currentSlide = n;
    }
    
    // Próximo slide
    function nextSlide() {
        if (currentSlide >= depoimentos.length - 1) {
            showSlide(0);
        } else {
            showSlide(currentSlide + 1);
        }
    }
    
    // Slide anterior
    function prevSlide() {
        if (currentSlide <= 0) {
            showSlide(depoimentos.length - 1);
        } else {
            showSlide(currentSlide - 1);
        }
    }
    
    // Event listeners para os botões
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Event listeners para os dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showSlide(index);
        });
    });
    
    // Auto slide a cada 5 segundos
    setInterval(nextSlide, 5000);
    
    // Animação de scroll suave para links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animação de elementos ao scroll
    const animateElements = document.querySelectorAll('.section-header, .sobre-content, .produto-item, .depoimento-content, .contato-content');
    
    function checkScroll() {
        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Inicializar estilos para animação
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Verificar posição inicial
    checkScroll();
    
    // Verificar ao scroll
    window.addEventListener('scroll', checkScroll);
});
