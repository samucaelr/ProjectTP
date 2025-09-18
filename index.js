document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('header .links a');
    var secoes = document.querySelectorAll('main section');

    // Adiciona a classe 'active' ao primeiro link por padrão
    // Isso garante que o link de Hernandarias já esteja destacado ao carregar a página
    links[0].classList.add('active');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            var idAlvo = link.getAttribute('href');
            var secaoAlvo = document.querySelector(idAlvo);

            // 1. Remove a classe 'active' de todos os links
            links.forEach(function(l) {
                l.classList.remove('active');
            });
            
            // 2. Adiciona a classe 'active' ao link que foi clicado
            link.classList.add('active');

            // 3. Esconde todas as seções com a animação
            secoes.forEach(function(secao) {
                secao.classList.add('escondido');
            });
            
            // Força o navegador a redesenhar para que a transição funcione
            void secaoAlvo.offsetWidth;

            // 4. Mostra a seção alvo com a animação
            secaoAlvo.classList.remove('escondido');
        });
    });
});
