//seleciona todos os links do menu
const navLinks = document.querySelectorAll('nav ul li .web-link');
//selciona todas as seções da página
const sections = document.querySelectorAll('main section');

//função para remover a classe active de todos os links
function removeActive() {
    navLinks.forEach(link => link.parentElement.classList.remove('active'));
}

//adiciona evento de clique nos links
navLinks.forEach(link => link.addEventListener('click', () =>{
    removeActive();
    this.parentElement.classList.add('active');
}));

//atualiza a classe active conforme a seção visível
window.addEventListener('scroll', () => {
    //variável que guarda o 'id' da seção atual
    let currentSection = '';

    sections.forEach(section => {
        //variável que  pega a altura da seção atual e a subtrai pela altura da barra de  navegação
        const sectionTop = section.offsetTop - 76;

        //pega o 'id' da seção atual
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }

        //adiciona a classe active ao link correspondente à seção atual
        navLinks.forEach(link => {
            link.parentElement.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`){
                link.parentElement.classList.add('active');
            }
        });
    });
});