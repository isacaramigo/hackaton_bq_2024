const alunos = [
    { ra: '12345JALMT', nome: 'Letícia Gonçalves', presente: false },
    { ra: '67891JALMT', nome: 'Giovanni Albino', presente: false },
    { ra: '17845JALMT', nome: 'Isabella Caramigo', presente: false },
    { ra: '69891JALMT', nome: 'Matheus Pereira da Silva', presente: false },
    { ra: '14591JALMT', nome: 'Pedro Kohn', presente: false },
    { ra: '78421JALMT', nome: 'Noemi Benedito', presente: false },
];
function renderizarAlunos() {
    const lista = document.getElementById('lista-alunos');
    lista.innerHTML = '';  //limpa a lista antes de renderizar

    alunos.forEach((aluno, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" class="checkbox-aluno" onchange="atualizarPresenca(${index}, this)" ${aluno.presente ? 'checked' : ''}>
            ${aluno.nome}
        `;
        lista.appendChild(li);
    });
}

//função para atualizar a presença do aluno
function atualizarPresenca(index, checkbox) {
    alunos[index].presente = checkbox.checked;
}

//função para selecionar todos os alunos
function selecionarTodos(checkbox) {
    const checkboxes = document.querySelectorAll('.checkbox-aluno');
    checkboxes.forEach(cb => {
        cb.checked = checkbox.checked;
        atualizarPresenca(Array.from(checkboxes).indexOf(cb), cb);
    });
}

//função para confirmar presença
function confirmarPresenca() {
    alunos.forEach(aluno => {
        console.log(`${aluno.nome} - ${aluno.presente ? 'Presente' : 'Ausente'}`);
    });

    gerarPDF()
}

function gerarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleDateString()
    const horaFormatada = dataAtual.toLocaleTimeString()


    //add título
    doc.setFontSize(20);
    doc.text('Lista de Alunos', 10, 10);
    doc.setFontSize(12);
    doc.text(`Data: ${dataFormatada}`, 167, 5);
    doc.text(`Horário: ${horaFormatada}`, 167, 10);
    
    //cabeçalho da tabela
    doc.text('RA', 10, 20);
    doc.text('Nome', 50, 20);
    doc.text('Situação', 110, 20);

    doc.line(10, 22, 200, 22); //linha na posição do cabeçalho

    let y = 25; //posição inicial para a primeira linha
    alunos.forEach(aluno => {
        doc.text(aluno.ra, 10, y);
        doc.text(aluno.nome, 50, y);
        doc.text(aluno.presente ? 'Presente' : 'Ausente', 110, y);
        y += 10; //incrementa a posição para a próxima linha
    });

    doc.save('lista_de_alunos.pdf');
    const presentes = alunos.filter(aluno => aluno.presente).length;
    const ausentes = alunos.length - presentes;
    alert(`Alunos Presentes: ${presentes}\nAlunos Ausentes: ${ausentes}`);
}

window.onload = renderizarAlunos;