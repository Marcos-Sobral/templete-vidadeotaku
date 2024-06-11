
    function Adicionar_item(){
        let formulario = document.getElementById("criar_lista");
        let formData = new FormData(formulario);
        let item_Nome = formData.get("listas_nome");
        let item_Status = formData.get("listas_status");
        let item_Formato = formData.get("listas_formato");
        let item_capa = formData.get("listas_capa");
        let item_descricao = formData.get("listas_descricao");
        
        let lista = document.getElementById("table_myLists");

        let tr = document.createElement("tr");

        tr.innerHTML =
            `
                <td>${item_Nome}</td>
                <td>${item_Status}</td>
                <td>${item_Formato}</td>
                <td>${item_capa}</td>
                <td>${item_descricao}</td>
                <td>
                    <button onclick="atualizar_produto(this)" type="button" class="btn btn-primary">Editar</button>
                    <button onclick="deletar_produto(this)" type="button" class="btn btn-danger">Deletar</button>
                </td>
            `;

        lista.appendChild(tr);

        formulario.reset();
    }

    function atualizar_produto(button) {
        let row = button.closest("tr");
        editIndex = Array.from(row.parentNode.children).indexOf(row);

        document.getElementById("listas_nome_input").value = row.cells[0].innerText;
        document.getElementById("listas_status_input").value = row.cells[1].innerText;
        document.getElementById("listas_formato_input").value = row.cells[2].innerText;
        document.getElementById("listas_capa_input").value = row.cells[3].innerText;
        document.getElementById("listas_descricao_input").value = row.cells[4].innerText;

        document.getElementById("saveButton").innerText = "Atualizar";
        formulario.reset();
    }

    function deletar_produto(button) {
        let linha = button.closest("tr");
        linha.remove();
    }

