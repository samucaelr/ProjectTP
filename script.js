document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('header .links a');
    var secoes = document.querySelectorAll('main section');

    // Define a classe do body inicial
    document.body.classList.add('tema-her');
    
    // Destaque o primeiro link ao carregar a página
    document.querySelector('a[href="#her"]').classList.add('active');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            var idAlvo = link.getAttribute('href');
            var secaoAlvo = document.querySelector(idAlvo);

            // Remove a classe 'active' de todos os links
            links.forEach(function(l) {
                l.classList.remove('active');
            });
            
            // Adiciona a classe 'active' ao link que foi clicado
            link.classList.add('active');

            // 1. Remove as classes de tema existentes do body
            document.body.classList.remove('tema-her', 'tema-cde', 'tema-foz');

            // 2. Adiciona a nova classe de tema ao body
            var tema = 'tema-' + idAlvo.substring(1);
            document.body.classList.add(tema);

            // Adiciona a classe 'escondido' a todas as seções
            secoes.forEach(function(secao) {
                secao.classList.add('escondido');
            });
            
            // Força o navegador a redesenhar para que a transição funcione
            void secaoAlvo.offsetWidth;

            // Remove a classe 'escondido' da seção alvo para mostrá-la
            secaoAlvo.classList.remove('escondido');
        });
    });
});
