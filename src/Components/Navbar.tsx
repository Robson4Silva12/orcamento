export function Navbar() {
    return (
        <nav>
            <div>
                <h1>NavBar</h1>
            </div>
      </nav>
    );
}

// // Definindo o tipo para a despesa
// interface Despesa {
//     id: number;
//     nome: string;
//     valor: number;
//     data: string;
//     categoria: string;
// }

// // Array de despesas
// let despesas: Despesa[] = [];

// // Função para carregar despesas do localStorage
// function carregarDespesas(): void {
//     const despesasSalvas = localStorage.getItem("despesas");
//     if (despesasSalvas) {
//         despesas = JSON.parse(despesasSalvas) as Despesa[]; // Carrega as despesas salvas
//         atualizarInterface();
//     }
// }

// // Função para salvar despesas no localStorage
// function salvarDespesas(): void {
//     localStorage.setItem("despesas", JSON.stringify(despesas));
// }

// // Função para atualizar a interface (exibir as despesas)
// function atualizarInterface(): void {
//     const listaDespesas = document.getElementById("lista-despesas") as HTMLUListElement;
//     listaDespesas.innerHTML = ""; // Limpa a lista antes de adicionar as despesas atualizadas
    
//     despesas.forEach((despesa) => {
//         const item = document.createElement("li");
//         item.textContent = `${despesa.nome} - R$${despesa.valor.toFixed(2)} - ${despesa.categoria} - ${despesa.data}`;
//         listaDespesas.appendChild(item);
//     });
// }

// // Captura o evento de submissão do formulário
// document.getElementById("form-despesa")?.addEventListener("submit", function(e: Event) {
//     e.preventDefault();
    
//     const nome = (document.getElementById("nome-despesa") as HTMLInputElement).value;
//     const valor = parseFloat((document.getElementById("valor-despesa") as HTMLInputElement).value);
//     const data = (document.getElementById("data-despesa") as HTMLInputElement).value;
//     const categoria = (document.getElementById("categoria-despesa") as HTMLSelectElement).value;

//     // Criar nova despesa
//     const novaDespesa: Despesa = {
//         id: Date.now(), // Um ID único gerado com base na data/hora
//         nome,
//         valor,
//         data,
//         categoria
//     };

//     // Adicionar a despesa ao array
//     despesas.push(novaDespesa);

//     // Salvar no localStorage
//     salvarDespesas();

//     // Atualizar a interface com a nova despesa
//     atualizarInterface();

//     // Limpar o formulário
//     (document.getElementById("form-despesa") as HTMLFormElement).reset();
// });

// // Carregar despesas salvas ao iniciar o sistema
// carregarDespesas();