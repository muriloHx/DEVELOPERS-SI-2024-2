fetch('./api/my-api.js')
    .then(response => response.json())
    .then(data => {
            const apiKey1 = data.apiID;
            const apiKey2 = data.processID;
            const apiKey3 = data.templateID;
    })
    .catch(error => console.error('Erro ao acessar as API keys:', error));

(function() {
    emailjs.init(apiKey1);
})();
emailjs.debug = true;

function toggleTipOutro() {
    const select = document.getElementById('tipFest');
    const outroFesta = document.getElementById('outroFesta');

    if (select.value === 'another') {
        outroFesta.style.display = 'table-row';
    } else {
        outroFesta.style.display = 'none';
    }
}

function preferido(){
        let preferenciaOrcamento = document.getElementById('zaporemail').value;
        let campoEmail = document.getElementById('emailCli');
        let campoTelefone = document.getElementById('tellWhats');
    
        if (preferenciaOrcamento === 'orcEmail') {
            campoEmail.placeholder = "email@email.com (Obrigatório)";
            campoTelefone.placeholder = "(00)90000-0000";
    
        } else if (preferenciaOrcamento === 'zapCell') {
            campoTelefone.placeholder = "(00)90000-0000 (Obrigatório)";
            campoEmail.placeholder = "email@email.com";
        }
}


function verifCamps(event) {
    event.preventDefault();

    let nomeComp = document.getElementById('nomeComp').value.trim();
    let preferenciaOrcamento = document.getElementById('zaporemail').value;
    let email = document.getElementById('emailCli').value.trim();
    let telefone = document.getElementById('tellWhats').value.trim();
    let tipoEvento = document.getElementById('tipFest').value;
    let dataEvento = document.getElementById('dataevento').value;

    if (nomeComp === "" || tipoEvento === "" || dataEvento === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    if (preferenciaOrcamento === 'orcEmail' && email === "") {
        alert("Por favor, preencha o campo de email.");
        return;
    }

    if (preferenciaOrcamento === 'zapCell' && telefone === "") {
        alert("Por favor, preencha o campo de telefone.");
        return;
    }

    enviarFormulario();
}

function enviarFormulario(nomeComp, preferenciaOrcamento, email, telefone, tipoEvento, dataEvento) {
    let templateParams = {
        nome: nomeComp,
        orcamento_preferencia: preferenciaOrcamento === 'orcEmail' ? 'Email' : 'WhatsApp',
        email_cliente: email,
        telefone_cliente: telefone,
        tipo_evento: tipoEvento,
        data_evento: dataEvento
    };

    emailjs.send(apiKey2, apiKey3, templateParams)
        .then(function(response) {
            alert("Formulário enviado com sucesso!");
            console.log("SUCCESS!", response.status, response.text);
        }, function(error) {
            alert("Ocorreu um erro ao enviar o formulário. Tente novamente.");
            console.log("FAILED...", error);
        });
}