// toolkitPrestacaoImovel.js

// Função para calcular a prestação do financiamento imobiliário
function calcularFinanciamento(valorImovel, valorEntrada, taxaJurosAnual, prazoAnos, tipoFinanciamento) {
    let valorFinanciado = valorImovel - valorEntrada;
    let taxaJurosMensal = taxaJurosAnual / 12 / 100;
    let prazoMeses = prazoAnos * 12;
    let prestacao;

    if (tipoFinanciamento === 'SAC') {
        let amortizacao = valorFinanciado / prazoMeses;
        let prestacoes = [];
        for (let i = 0; i < prazoMeses; i++) {
            let juros = (valorFinanciado - (i * amortizacao)) * taxaJurosMensal;
            prestacao = amortizacao + juros;
            prestacoes.push({
                mes: i + 1,
                prestacao: prestacao.toFixed(2),
                amortizacao: amortizacao.toFixed(2),
                juros: juros.toFixed(2),
                saldoDevedor: (valorFinanciado - (i * amortizacao)).toFixed(2)
            });
        }
        return prestacoes;
    } else if (tipoFinanciamento === 'Price') {
        prestacao = (valorFinanciado * taxaJurosMensal) / (1 - Math.pow(1 + taxaJurosMensal, -prazoMeses));
        let prestacoes = [];
        for (let i = 0; i < prazoMeses; i++) {
            let juros = (valorFinanciado - ((prestacao - (valorFinanciado * taxaJurosMensal)) * i)) * taxaJurosMensal;
            let amortizacao = prestacao - juros;
            prestacoes.push({
                mes: i + 1,
                prestacao: prestacao.toFixed(2),
                amortizacao: amortizacao.toFixed(2),
                juros: juros.toFixed(2),
                saldoDevedor: (valorFinanciado - ((prestacao - juros) * (i + 1))).toFixed(2)
            });
        }
        return prestacoes;
    }
}

// Exemplo de uso da função de cálculo
let valorImovel = 300000;
let valorEntrada = 60000;
let taxaJurosAnual = 6.5;
let prazoAnos = 30;
let tipoFinanciamento = 'Price'; // ou 'SAC'

let prestacoes = calcularFinanciamento(valorImovel, valorEntrada, taxaJurosAnual, prazoAnos, tipoFinanciamento);
console.log(prestacoes);

// Função para exibir checklist de documentação necessária
function mostrarChecklistDocumentacao() {
    let checklistPessoaFisica = [
        "RG e CPF",
        "Comprovante de estado civil",
        "Comprovante de residência",
        "Comprovante de renda (holerites, declaração de imposto de renda)",
        "Certidão de nascimento ou casamento"
    ];

    let checklistPessoaJuridica = [
        "Contrato social",
        "CNPJ",
        "Documentos dos sócios",
        "Certidões negativas de débito"
    ];

    document.getElementById('checklistPessoaFisica').innerHTML = checklistPessoaFisica.map(item => `<li>${item}</li>`).join('');
    document.getElementById('checklistPessoaJuridica').innerHTML = checklistPessoaJuridica.map(item => `<li>${item}</li>`).join('');
}

// Função para exibir guia de planejamento financeiro
function mostrarGuiaPlanejamentoFinanceiro() {
    let orcamentoMensal = {
        rendaFamiliar: "Renda familiar total",
        despesasFixas: ["Aluguel", "Contas de serviços", "Alimentação"],
        despesasVariaveis: ["Lazer", "Transporte"],
        poupancaInvestimentos: "Poupança e investimentos",
        reservaEmergencia: "Reserva de emergência"
    };

    let dicasEconomia = [
        "Redução de despesas não essenciais",
        "Comparação de taxas de juros entre diferentes instituições financeiras",
        "Importância de manter um bom score de crédito"
    ];

    document.getElementById('orcamentoMensal').innerHTML = `
        <p>Renda Familiar: ${orcamentoMensal.rendaFamiliar}</p>
        <p>Despesas Fixas: ${orcamentoMensal.despesasFixas.join(', ')}</p>
        <p>Despesas Variáveis: ${orcamentoMensal.despesasVariaveis.join(', ')}</p>
        <p>Poupança e Investimentos: ${orcamentoMensal.poupancaInvestimentos}</p>
        <p>Reserva de Emergência: ${orcamentoMensal.reservaEmergencia}</p>
    `;
    document.getElementById('dicasEconomia').innerHTML = dicasEconomia.map(item => `<li>${item}</li>`).join('');
}

// Função para exibir informações sobre tipos de financiamento
function mostrarTiposFinanciamento() {
    let sfh = {
        descricao: "SFH (Sistema Financeiro de Habitação)",
        detalhes: [
            "Limite de valor do imóvel",
            "Utilização do FGTS",
            "Taxas de juros reduzidas"
        ]
    };

    let sfi = {
        descricao: "SFI (Sistema de Financiamento Imobiliário)",
        detalhes: [
            "Sem limite de valor do imóvel",
            "Condições de crédito mais flexíveis",
            "Taxas de juros geralmente mais altas"
        ]
    };

    document.getElementById('sfh').innerHTML = `<h4>${sfh.descricao}</h4><ul>${sfh.detalhes.map(item => `<li>${item}</li>`).join('')}</ul>`;
    document.getElementById('sfi').innerHTML = `<h4>${sfi.descricao}</h4><ul>${sfi.detalhes.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

// Função para exibir guias do processo de compra
function mostrarGuiaProcessoCompra() {
    let passosCompra = [
        "Escolha do imóvel",
        "Negociação e proposta",
        "Avaliação do imóvel",
        "Análise de crédito e aprovação do financiamento",
        "Assinatura do contrato de compra e venda",
        "Registro do imóvel em cartório",
        "Entrega das chaves"
    ];

    let dicasVisita = [
        "Verificação do estado de conservação",
        "Análise da infraestrutura da região (transportes, escolas, serviços)",
        "Verificação da documentação do imóvel (matrícula atualizada, certidões negativas)"
    ];

    document.getElementById('passosCompra').innerHTML = passosCompra.map(item => `<li>${item}</li>`).join('');
    document.getElementById('dicasVisita').innerHTML = dicasVisita.map(item => `<li>${item}</li>`).join('');
}

// Função para exibir perguntas frequentes
function mostrarFAQs() {
    let faqsFinanciamento = [
        "Qual é a diferença entre amortização e juros?",
        "O que fazer em caso de dificuldade para pagar as prestações?",
        "Como utilizar o FGTS para abatimento do saldo devedor?"
    ];

    let faqsImovel = [
        "Como avaliar se o preço pedido pelo imóvel está justo?",
        "Quais são os custos adicionais na compra de um imóvel (ITBI, escritura, registro)?"
    ];

    document.getElementById('faqsFinanciamento').innerHTML = faqsFinanciamento.map(item => `<li>${item}</li>`).join('');
    document.getElementById('faqsImovel').innerHTML = faqsImovel.map(item => `<li>${item}</li>`).join('');
}

// Função para exibir planilha de acompanhamento das prestações
function mostrarPlanilhaAcompanhamento(prestacoes) {
    let tbody = document.getElementById('tabelaPrestacoes').querySelector('tbody');
    tbody.innerHTML = prestacoes.map(p => `
        <tr>
            <td>${p.mes}</td>
            <td>${p.prestacao}</td>
            <td>${p.amortizacao}</td>
            <td>${p.juros}</td>
            <td>${p.saldoDevedor}</td>
        </tr>
    `).join('');
}

// Função para exibir recursos online e ferramentas adicionais
function mostrarRecursosOnline() {
    let recursos = [
        "Simuladores de financiamento de diferentes bancos",
        "Calculadoras de ITBI e custos de cartório",
        "Sites de consulta de crédito (Serasa, SPC)"
    ];

    document.getElementById('recursosOnline').innerHTML = recursos.map(item => `<li>${item}</li>`).join('');
}

// Função para exibir contatos de consultoria
function mostrarContatosConsultoria() {
    let contatos = [
        "Lista de contatos de corretores de imóveis",
        "Indicações de advogados especializados em direito imobiliário",
        "Consultores financeiros"
    ];

    document.getElementById('contatosConsultoria').innerHTML = contatos.map(item => `<li>${item}</li>`).join('');
}

// Adicionar evento ao formulário de calculadora
document.getElementById('formCalculadora').addEventListener('submit', function(e) {
    e.preventDefault();
    let valorImovel = parseFloat(document.getElementById('valorImovel').value);
    let valorEntrada = parseFloat(document.getElementById('valorEntrada').value);
    let taxaJuros = parseFloat(document.getElementById('taxaJuros').value);
    let prazo = parseInt(document.getElementById('prazo').value);
    let tipoFinanciamento = document.getElementById('tipoFinanciamento').value;
    
    let prestacoes = calcularFinanciamento(valorImovel, valorEntrada, taxaJuros, prazo, tipoFinanciamento);
    mostrarPlanilhaAcompanhamento(prestacoes);
});

// Inicializar dados na página
mostrarChecklistDocumentacao();
mostrarGuiaPlanejamentoFinanceiro();
mostrarTiposFinanciamento();
mostrarGuiaProcessoCompra();
mostrarFAQs();
mostrarRecursosOnline();
mostrarContatosConsultoria();
