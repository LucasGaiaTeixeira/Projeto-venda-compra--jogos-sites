function mudarTexto(novoTexto) {
    document.getElementById("texto-alteravel").innerText = novoTexto;
    document.getElementById("dropdown-menu").style.display = "none"; // Fecha o menu
}

document.getElementById("menu-btn").addEventListener("click", function() {
    let menu = document.getElementById("dropdown-menu");
    menu.style.display = menu.style.display === "none" ? "block" : "none"; // Alterna visibilidade
});
