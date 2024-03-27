import React, {useState} from 'react';
import {StyleSheet, TouchableHighlight, Dimensions, Text, Button, TextInput} from 'react-native';
import {BotaoPequeno, BotaoDefault} from './Botao';

export default RNG => {

//States usados
    const [auxTimer, setAuxTimer] = useState(RNG.timer);
    const [tela, setTela] = useState(0);
    const [palpite, setPalpite] = useState(0);
    const [flag, setFlag] = useState(0);
    const [pontos, setPontos] = useState(-1);
    const [min, setMin] = useState(100);
    const [max, setMax] = useState(999);
    const [aleatorio, setAleatorio] = useState(Math.floor(Math.random() * (max-min)+min));

//Funções usadas
    const attPontua = () => setPontos(pontos + 1);
    const attMin = () => setMin(min * 10);
    const attMax = () => setMax(max * 10 + 9);
    const aleatoriza = () => setAleatorio(Math.floor(Math.random() * (max-min)+min));

//Metodo sugerido para nao terem valores vazios
    const handleTextChange = (palpite) => {
        palpite.trim() !== "" && !isNaN(palpite) ? setPalpite(parseInt(palpite)) : setPalpite(0);
    };

//Adiciona todos os valores para ser aleatorizado
    let fazTudo = () => {
    //Limita a quantidade de números na tela
    if (pontos <= 10) {
        attMin()
        attMax()
    }
    aleatoriza()
    attPontua()
//muda a tela e poe um cronometro pra voltar
    setTela(0)
    setTimeout(() => {
        setTela(1)
    }, parseInt(auxTimer));
    }

//Função para atualizar o cronometro
    let ajustaTempo = () => {
        setAuxTimer(parseInt(RNG.timer))
    }

//Variavel que faz a verificação do valor colocado pelo usuário
    let verifica = () => {
        if (parseInt(palpite) == aleatorio) {
            console.warn('Acertou!!!');
            fazTudo()
        }
        else {
            console.warn('Errou!!!');
            setFlag(1)
        }
    }


//Para caso de inicialização
    if(pontos < 0) {
    return (
    <>
        <Button
        title = "     Iniciar     "
        onPress = {fazTudo}
        color = 'black'
        />
    </>
    )
    }

//Para os demais casos
    else if (pontos >= 0 && flag == 0) {
    //Ocasião que mostra o numero gerado
        if (tela == 0) {
            return (
            <>
                <Text style = {{fontSize: 35, fontWeight: 'bold'}}>{aleatorio}</Text>
            </>
            )
        }

    //Ocasião que pede o numero
        else {
            return(
            <>
                <TextInput
                style = {styles.input}
                placeholder="Digite o número lido"
                onChangeText = {handleTextChange}
                value={palpite.toString()}
                />

                <Button
                title = "Confirma"
                onPress = {verifica}
                color = 'black'
                />

                <Text style = {{fontSize: 25}}> {'\n\n'} Pontuação {pontos} </Text>
            </>
            )
        }

    }

//Quando o usuário errar
    else {
    return (
    <>
        <Text style = {{fontSize: 25, fontWeight: 'bold'}}> Você perdeu!!{'\n'}</Text>
        <Text style = {{fontSize: 25}}> Sequência correta: {aleatorio}</Text>
        <Text style = {{fontSize: 25}}> Sua resposta: {palpite}{'\n'}</Text>
        <Text style = {{fontSize: 25}}> Pontuação: {pontos} </Text>
    </>
    )
    }
}

//Formatação caixa de texto
const styles = StyleSheet.create({
  input: {
    fontSize: 25,
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});