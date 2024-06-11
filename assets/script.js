document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
            themeToggle.textContent = 'Modo Claro';
        } else {
            themeToggle.textContent = 'Modo Escuro';
        }
    });

    // Set the initial theme based on user preference or default to light mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark');
        themeToggle.textContent = 'Modo Claro';
    }
});



const tamFonte = document.getElementById('conf-fonte');
const fonte = document.getElementById('fonte');

tamFonte.addEventListener('click', function(){
    console.log('inicio');

    if(tamFonte.classList.contains('fonte-mexer')){
        console.log('testeIf');
        tamFonte.classList.remove('fonte-mexer');
        tamFonte.innerHTML += `   
    <div class="fonte-mexer">
        <button id="aumentar" class="btn-fonte btn">+</button>
        <button id="diminuir" class="btn-fonte btn">-</button>
    </div>
    `
    document.getElementById('aumentar').addEventListener('click', function(){
        console.log('teste botao+');
        changeFontSize(1)}
        );
    document.getElementById('diminuir').addEventListener('click', function(){
        console.log('teste botao-');
        changeFontSize(-1)
    }
    );
    }else{
        console.log('testeElse')
        tamFonte.classList.add('fonte-mexer');
        tamFonte.innerHTML = `
        <div id="fonte" class="fonte">aA
                </div>
    `};

function changeFontSize(step){
    var fontSize = parseFloat(getComputedStyle(document.body).fontSize);
    var newFontSize = fontSize + step;
    document.body.style.fontSize = newFontSize + 'px';
}
});

// Adiciona um evento de mudança ao elemento com o id 'color-filter'
document.getElementById('color-filter').addEventListener('change', function() {
    // atribui o valor da propriedade value do elemento atual à variável filterClass.
    const filterClass = this.value; /*váriavel constante*/

    // Seleciona todas as imagens com a classe 'filter-image'
    const images = document.querySelectorAll('.filter-image');

    // Para cada imagem selecionada... método de array que executa uma função para cada elemento do array.
    images.forEach(img => {
        // Remove todas as classes existentes da imagem, exceto 'filter-image'
        img.className = 'filter-image'; // Reset the class

        // Se a classe selecionada não for 'default' (ou seja, uma opção de filtro foi selecionada)...
        if (filterClass !== 'default') {
            // Adiciona a classe selecionada à imagem
            img.classList.add(filterClass);
        }
    });
});