function toggleMenu() {
    const dropdown = document.getElementById("myDropdown");
    if (dropdown) {
        dropdown.classList.toggle("show");
    }
}

window.addEventListener('click', function(event) {
    const menuDropdown = document.querySelector('.dropdown-menu');
    const btn = document.querySelector('.menu-btn');

    if (menuDropdown && menuDropdown.classList.contains('show')) {
        if (!btn.contains(event.target) && !menuDropdown.contains(event.target)) {
            menuDropdown.classList.remove('show'); 
        }
    }
});

function trocarAba(abaEscolhida) {
    const btnPedido = document.getElementById('btn-pedido');
    const btnAnuncios = document.getElementById('btn-anuncios');
    const conteudoPedido = document.getElementById('conteudo-pedido');
    const conteudoAnuncios = document.getElementById('conteudo-anuncios');

    btnPedido.classList.remove('ativo');
    btnAnuncios.classList.remove('ativo');
    
    conteudoPedido.style.display = 'none';
    conteudoAnuncios.style.display = 'none';

    if (abaEscolhida === 'pedido') {
        btnPedido.classList.add('ativo');
        conteudoPedido.style.display = 'block';
    } else if (abaEscolhida === 'anuncios') {
        btnAnuncios.classList.add('ativo');
        conteudoAnuncios.style.display = 'grid'; 
    }
}

//sistema de filtro

document.addEventListener('DOMContentLoaded', () => {
    // Pega o campo de seleção e a área onde ficam os anúncios
    const selectSort = document.getElementById('sort');
    const gridProdutos = document.getElementById('conteudo-anuncios');
    
    // Ouve toda vez que você mudar a opção no select
    selectSort.addEventListener('change', function() {
        // Pega todos os cards de produto que existem na tela e transforma numa lista organizável
        const cards = Array.from(gridProdutos.getElementsByClassName('card-produto'));
        const criterio = this.value; // "distancia", "menor-preco" ou "maior-preco"

        cards.sort((a, b) => {
            // ORDENAR POR DISTÂNCIA
            if (criterio === 'distancia') {
                // Pega o texto (ex: "Arthur Alvim - 1.0 km"), corta no traço e extrai só o número
                const textoA = a.querySelector('.localizacao').innerText;
                const textoB = b.querySelector('.localizacao').innerText;
                
                const distA = parseFloat(textoA.split('-')[1].replace('km', '').trim());
                const distB = parseFloat(textoB.split('-')[1].replace('km', '').trim());
                
                return distA - distB; // Ordem crescente (mais perto primeiro)
            } 
            // ORDENAR POR PREÇO
            else if (criterio === 'menor-preco' || criterio === 'maior-preco') {
                // Função rápida para limpar o texto "R$: 80,00 / hora" e transformar no número 80.00
                const limpaPreco = (card) => {
                    let textoPreco = card.querySelector('.preco-destaque').innerText;
                    textoPreco = textoPreco.replace('R$:', '').replace('/ hora', '').replace(',', '.').trim();
                    return parseFloat(textoPreco);
                };

                const precoA = limpaPreco(a);
                const precoB = limpaPreco(b);

                if (criterio === 'menor-preco') {
                    return precoA - precoB; // Ordem crescente (mais barato primeiro)
                } else {
                    return precoB - precoA; // Ordem decrescente (mais caro primeiro)
                }
            }
        });

        // Apaga a ordem velha e devolve os cards ordenados pro HTML
        cards.forEach(card => gridProdutos.appendChild(card));
    });
});