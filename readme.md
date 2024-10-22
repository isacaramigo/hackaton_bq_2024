# Projeto de Chamada de Alunos

Este é um projeto simples de gerenciamento de chamada de alunos, desenvolvido em HTML, CSS e JavaScript. O objetivo principal é facilitar o registro de presença em sala de aula, permitindo que os professores marquem a presença de seus alunos de forma prática e organizada.

## Contribuidores

 - Isabella Caramigo;
 - [@omaatheus](https://github.com/omaatheus); 
 - Noemi Benedito;
 - Pedro Kohn;
 - Giovanni Albino;
 - Letícia Gonçalves.

## Funcionalidades

- **Lista de Alunos:** O sistema apresenta uma lista de alunos que podem ser gerenciados pelo professor.
- **Marcação de Presença:** Cada aluno possui uma checkbox que permite ao professor marcar se ele está presente ou ausente.
- **Selecionar Todos:** O professor pode selecionar ou desmarcar todos os alunos de uma só vez, facilitando a confirmação de presença.
- **Geração de PDF com Tabela:** Ao final da chamada, o sistema gera um PDF contendo uma tabela com as colunas:
  - **RA:** Registro Acadêmico do aluno.
  - **Nome:** Nome completo do aluno.
  - **Situação:** Informa se o aluno está "Presente" ou "Ausente".
  Essa tabela facilita o registro e a consulta posterior da presença dos alunos.
- **Informações em Tempo Real:** Após a geração do PDF, uma janela de alerta informa a quantidade de alunos presentes e ausentes.

## Tecnologias Utilizadas

- **HTML/CSS:** Para a estrutura e estilização da interface do usuário.
- **JavaScript:** Para a lógica do aplicativo, incluindo a manipulação da lista de alunos e a geração do PDF.
- **jsPDF:** Biblioteca utilizada para a criação de arquivos PDF a partir da lista de alunos.

## Como Usar

1. Clone o repositório em sua máquina local.
2. Abra o arquivo `index.html` em um navegador web.
3. Adicione alunos ao vetor no código ou modifique a lista conforme necessário.
4. Marque a presença dos alunos usando as checkboxes.
5. Clique no botão "Confirmar Presença" para criar um arquivo com a lista de alunos presentes e ausentes.
