function validacao(){
    let nome = document.getElementById("i_nome");
    let sobrenome = document.getElementById("i_idade");
    let data = document.getElementById("i_email");
    let senha = document.getElementById("i_senha");
    let con_senha = document.getElementById("i_senhaCon");

    estilo_input(nome, "#f45656", "#808080");
    estilo_input(sobrenome, "#f45656", "#808080");
    estilo_input(data, "#f45656", "#808080");
    estilo_input(senha, "#f45656", "#808080");
    estilo_input(con_senha, "#f45656", "#808080");
}

function estilo_input(input, cor_1, cor_2){
    if(!input.checkValidity()){
        return input.style.border = `3px solid ${cor_1}`;
    }else{
        return input.style.border = `1px solid ${cor_2}`;
    }
}