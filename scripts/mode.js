//selciona o ícone do modo
const svgMode = document.getElementById('svg-mode');
//variáveil reutilizável para acessar as variáveis CSS
const root = document.documentElement;

//função do modo escuro
function setDarkmode(){
    svgMode.innerHTML = 
            `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-moon-fill" id="svg-mode" viewBox="0 0 16 16">
                <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z"/>
                <path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.5 5.5 0 0 1 1.055.209A3.6 3.6 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.58 3.58 0 0 1-2.241.634q.244.477.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z"/>
            </svg>`;
        root.style.setProperty('--bg-color', '#121212');
        root.style.setProperty('--text-color', '#fff');
        root.style.setProperty('--gray-color', '#383838ff');
        localStorage.setItem('mode', 'dark');
}


//função do modo claro
function setLightMode(){
    svgMode.innerHTML = 
            `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-sun-fill" id="svg-mode" viewBox="0 0 16 16"  role="button" tabindex="0">
                <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z"/>
                <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708zm1.734 3.374a2 2 0 1 1 3.296 2.198q.3.423.516.898a3 3 0 1 0-4.84-3.225q.529.017 1.028.129m4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377M14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>
            </svg>`;
        root.style.setProperty('--bg-color', '#fff');
        root.style.setProperty('--text-color', '#000');
        root.style.setProperty('--gray-color', '#f3f3f3');
        localStorage.setItem('mode', 'light');
}


//seleciona o botão de alternância do modo  e adiciona o evento de clique
document.getElementById('toggleMode').addEventListener('click', () => {
    const currentBg = getComputedStyle(root).getPropertyValue('--bg-color').trim();
    const currentText = getComputedStyle(root).getPropertyValue('--text-color').trim();

    if(currentBg === '#fff' && currentText === '#000'){
        setDarkmode();
    }else{
        setLightMode();
    }
})

//salvando a preferência do usuário no armazenamento local
window.addEventListener('DOMContentLoaded', () => {
    const mode = localStorage.getItem('mode');
    if(mode === 'dark'){
        setDarkmode();
    }else{
        setLightMode();
    }
});
