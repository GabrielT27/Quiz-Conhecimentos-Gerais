   // Monta o quiz no HTML
        const quizForm = document.getElementById('quizForm');
        perguntas.forEach((pergunta, i) => {
            const divQ = document.createElement('div');
            divQ.className = 'question';
            divQ.textContent = pergunta.texto;
            quizForm.appendChild(divQ);

            const divO = document.createElement('div');
            divO.className = 'options';
            pergunta.opcoes.forEach((op, j) => {
                const letra = op[0];
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = 'q' + i;
                input.value = letra;
                input.id = 'q' + i + letra;

                const label = document.createElement('label');
                label.htmlFor = input.id;
                label.textContent = op;

                divO.appendChild(input);
                divO.appendChild(label);
                divO.appendChild(document.createElement('br'));
            });
            quizForm.appendChild(divO);
        });

        document.getElementById('corrigirBtn').onclick = function(e) {
            e.preventDefault();
            let acertos = 0;
            let respostasUsuario = [];
            for (let i = 0; i < perguntas.length; i++) {
                const marcada = document.querySelector('input[name="q'+i+'"]:checked');
                const resposta = marcada ? marcada.value : "-";
                respostasUsuario.push(resposta);
                if (resposta === perguntas[i].resposta) acertos++;
            }
            document.getElementById('result').innerHTML = `<strong>Você acertou ${acertos} de ${perguntas.length} perguntas.</strong>`;
            // Mostra o gabarito
            let gab = "<strong>Gabarito:</strong><br>";
            for (let i = 0; i < perguntas.length; i++) {
                gab += (i+1) + ": " + perguntas[i].resposta + " (Sua resposta: " + respostasUsuario[i] + ")<br>";
            }
            document.getElementById('gabarito').innerHTML = gab;
        };
    