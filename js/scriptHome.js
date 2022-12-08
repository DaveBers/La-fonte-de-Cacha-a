var itens_carrosel = document.querySelectorAll('.carousel-item')

for (i of itens_carrosel) {
    const link = i.children[1].children[1].href
    i.onclick = function() {
        document.location = link
    }
}
