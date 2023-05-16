

    var form = document.getElementById('formulario')
    var corpoAgenda = document.querySelector('.corpoTabela')
    var resetaAgenda = document.querySelector('.reset')
    var linhas = '';
    var nomes = []
    var numeros = []
    
    function adicionaLinha(){
        var inputNome = document.querySelector('.Nome').value;
        var inputNumero = parseInt(document.querySelector('.Telefone').value);
    
        nomes.push(inputNome);
        numeros.push(inputNumero);
    
        var linha = '<tr class="itemNovo">';
        linha += `<td>${inputNome}`;
        linha += `<td>${inputNumero}`;
    
        linhas += linha;
    }
    
    function atualizaTabela(){
        corpoAgenda.innerHTML = linhas
    }
    
    form.addEventListener('submit', function(e){
        e.preventDefault();
        adicionaLinha();
        atualizaTabela();
    })

