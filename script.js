const alunos = [
    { nome: 'Letícia Gonçalves', presente: false },
    { nome: 'Giovanni Albino', presente: false },
    { nome: 'Isabella Caramigo', presente: false },
    { nome: 'Matheus Pereira da Silva', presente: false },
    { nome: 'Pedro Kohn', presente: false },
    { nome: 'Noemi Benedito', presente: false },
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

    doc.setFontSize(20);
    doc.text('Lista de Alunos', 10, 10);
    doc.setFontSize(12);
    
    //filtra alunos presentes e ausentes
    const presentes = alunos.filter(aluno => aluno.presente);
    const ausentes = alunos.filter(aluno => !aluno.presente);

    //adiciona alunos presentes
    doc.text('Presentes:', 10, 20);
    presentes.forEach((aluno, index) => {
        doc.text(`${index + 1}. ${aluno.nome}`, 10, 30 + (index * 10));
    });

    //adiciona alunos ausentes, ajustando a posição corretamente
    const posicaoAusentes = 30 + (presentes.length * 10) + 10; // 10 de espaçamento
    doc.text('Ausentes:', 10, posicaoAusentes);
    ausentes.forEach((aluno, index) => {
        doc.text(`${index + 1}. ${aluno.nome}`, 10, posicaoAusentes + 10 + (index * 10));
    });

    //salva o PDF
    doc.save('lista_de_alunos.pdf');

    alert(`Alunos Presentes: ${presentes.length}\nAlunos Ausentes: ${ausentes.length}`);
}

window.onload = renderizarAlunos;