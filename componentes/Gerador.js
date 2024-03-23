import React, {useState} from 'react';
import {StyleSheet, TouchableHighlight, Dimensions, Text, Button} from 'react-native';
import {BotaoPequeno, BotaoDefault} from './Botao';

export default RNG => {

    const [pontos, setPontos] = useState(-1);
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(9);
    const [aleatorio, setAleatorio] = useState(Math.floor(Math.random() * (max-min)+min));

    const attPontua = () => setPontos(pontos + 1);
    const attMin = () => setMin(min * 10);
    const attMax = () => setMax(max * 10 + 9);
    const aleatoriza = () => setAleatorio(Math.floor(Math.random() * (max-min)+min));

    let fazTudo = () => {
    if (pontos <= 15) {
        attMin()
        attMax()
    }
    aleatoriza()
    attPontua()
    }

    if(pontos < 0) {
    return (
    <>
        <Button
        title = "INICIAR"
        onPress = {fazTudo}
        color = 'black'
        />
    </>
    )
    }

    else
    return(
    <>
        <Text style = {{fontSize: 25}}> Máximo {max} </Text>
        <Text style = {{fontSize: 25}}> Mínimo {min}</Text>
        <Text style = {{fontSize: 25}}> Aleatório {aleatorio} </Text>
        <Text style = {{fontSize: 25}}> Pontuação {pontos} </Text>

        <Button
        title = "Ok"
        onPress = {fazTudo}
        color = 'black'
        />
    </>
    )
}