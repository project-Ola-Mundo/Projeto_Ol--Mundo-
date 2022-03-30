
function validation() {

    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let tel = document.getElementById("tel");
    let msg = document.getElementById("mensagem");

    let sty1 = "2px solid var(--orange)";
    let sty2 = "1px solid rgba(102, 102, 102, 0.849)";

    style_border(nome, sty1, sty2);
    style_border(email, sty1, sty2);
    style_border(tel, sty1, sty2);
    style_border(msg, sty1, sty2);
}

function style_border(input, style1, style2) {

    if (!input.checkValidity()) {
        input.style.border = style1;
        return input.style.border;
    }

    if (input.checkValidity()) {
        input.style.border = style2;
        return input.style.border;
    }
}