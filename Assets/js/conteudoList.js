
    function Adicionar_conteudo(){
        let formulario = document.getElementById("Adicionar_conteudo");
        let formData = new FormData(formulario);
        let item_Nome = formData.get("conteudo_nome");
        let item_Status = formData.get("conteudo_status");
        let item_Formato = formData.get("conteudo_formato");
        let item_descricao = formData.get("conteudo_descricao");
        let item_reacao = formData.get("conteudo_reacao");
        let item_genero = formData.get("conteudo_genero");
        let item_link = formData.get("conteudo_link");
        
        // Obter o arquivo de imagem e criar uma URL para exibição
        let item_capa = formData.get("conteudo_capa");
        let imgURL = URL.createObjectURL(item_capa);

        let lista = document.getElementById("table_Conteudo");

        let tr = document.createElement("tr");

        tr.innerHTML =
            `
                <td><img src="${imgURL}" alt="Capa" style="width: 100px; height: auto;"></td>
                <td>${item_Nome}</td>
                <td>${item_Status}</td>
                <td>${item_Formato}</td>
                <td>${item_descricao}</td>
                <td>${item_reacao}</td>
                <td>${item_genero}</td>
                <td>${item_link}</td>
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

        document.getElementById("conteudo_nome_input").value = row.cells[0].innerText;
        document.getElementById("conteudo_status_input").value = row.cells[1].innerText;
        document.getElementById("conteudo_formato_input").value = row.cells[2].innerText;
        document.getElementById("conteudo_capa_input").value = row.cells[3].innerText;
        document.getElementById("conteudo_descricao_input").value = row.cells[4].innerText;
        document.getElementById("conteudo_genero_input").value = row.cells[5].innerText;
        document.getElementById("conteudo_reacao_input").value = row.cells[6].innerText;
        document.getElementById("conteudo_link_input").value = row.cells[7].innerText;


        document.getElementById("saveButton").innerText = "Atualizar";
        formulario.reset();
    }

    function deletar_produto(button) {
        let linha = button.closest("tr");
        linha.remove();
    }

