import React, {useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {BotaoDefault, BotaoPequeno} from './componentes/Botao';
import Gerador from './componentes/Gerador';

export default function App() {
    const [opt, setOpt] = useState(0);
    const [aux, setAux] = useState(0);

//menu de seleção de dificuldade
    if (opt == 0) {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Jogo da Memória</Text>
          <StatusBar style="auto" />

          <BotaoDefault
             label = "Fácil"
             onClick = {()=> setOpt(1)}
          />

          <BotaoDefault
            label = "Médio"
            onClick = {()=> setOpt(2)}
          />

          <BotaoDefault
            label = "Difícil"
            onClick = {()=> setOpt(3)}
          />

          <Text>{'\n\n'}</Text>

          <BotaoPequeno
            label = "Regras"
            onClick = {()=> setOpt(4)}
          />

        </View>
    );
    }

//modo fácil
    if (opt == 1) {
        return (
            <View style={styles.container}>

              <Text style = {{fontSize: 35, fontWeight: 'bold'}}>Dificuldade fácil{'\n'}</Text>

              <Gerador timer = "10"/>

              <Text> {'\n'} </Text>

              <BotaoPequeno
                label = "Voltar"
                onClick = {()=>setOpt(0)}
              />
            </View>
        )
    }

//modo médio
    if (opt == 2) {
        return (
            <View style={styles.container}>

              <Text style = {{fontSize: 35, fontWeight: 'bold'}}>Dificuldade médio{'\n'}</Text>

              <Gerador timer = "7"/>

              <Text> {'\n'} </Text>

              <BotaoPequeno
                label = "Voltar"
                onClick = {()=>setOpt(0)}
              />

            </View>
        )
    }

//modo difícil
    if (opt == 3) {
        return (
            <View style={styles.container}>

              <Text style = {{fontSize: 35, fontWeight: 'bold'}}>Dificuldade fácil{'\n'}</Text>

              <Gerador timer = "4"/>

              <Text> {'\n'} </Text>

              <BotaoPequeno
                label = "Voltar"
                onClick = {()=>setOpt(0)}
              />

            </View>
        )
    }

    if (opt == 4) {
        return (
        <View>
              <Text style = {styles.text}>Dificuldade fácil{'\n'}</Text>
              <Text style = {styles.paragraph}>lorem ipsum dolor siamet</Text>
        </View>

        )

    }
}


const styles = StyleSheet.create({
    text: {
    fontSize: 50,
    marginBottom: 30,
    fontWeight: 'bold',
    color: 'black'
  },

    paragraph: {
    fontSize: 20,
    marginBottom: 30,
    color: 'black'
    },

  container: {
    flex: 1,
    backgroundColor: '#f7ffdb' ,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
