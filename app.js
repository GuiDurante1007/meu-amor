       alert('Boas vindas ao jogo do número secreto');
        //parseint tira as casas decimais do Math.random
        let numeroSecreto = Math.floor(Math.random() * 100  + 1);
        console.log(numeroSecreto);
        let chute;
        let tentativas = 1;

        //enquanto o chute for diferente do numerosecreto, continua
        while(true){
            chute = Number(prompt('escolha um numero entre 1 e 100'));
        // se chute for igual ao número secreto
        if (chute == numeroSecreto) {
            break;
        } else {
            if(chute > numeroSecreto){
                alert(`o numero secreto é menor que ${chute}`);
            }
                else{
                    alert(`o numero secreto é maior que ${chute}`);
                }
                tentativas++;
            }
        }       

        let pluralsingular = tentativas > 1 ? 'tentativas' : 'tentativa';
         alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${pluralsingular}`);
       // if(tentativas > 1){
        // alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
        //   }
        //   else{
         //    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
        //   }
