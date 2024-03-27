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

              <Text style = {{fontSize: 25, fontWeight: 'bold'}}>Dificuldade fácil{'\n'}</Text>

              <Gerador timer = "10000"/>

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

              <Text style = {{fontSize: 25, fontWeight: 'bold'}}>Dificuldade médio{'\n'}</Text>

              <Gerador timer = "7000"/>

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

              <Text style = {{fontSize: 25, fontWeight: 'bold'}}>Dificuldade difícil{'\n'}</Text>

              <Gerador timer = "5000"/>

              <Text> {'\n'} </Text>

              <BotaoPequeno
                label = "Voltar"
                onClick = {()=>setOpt(0)}
              />

            </View>
        )
    }

//Opção que mostra as regras
    if (opt == 4) {
        return (
        <View style={styles.container}>
              <Text style = {styles.text}>Regras</Text>
              <Text style = {{fontSize: 20, marginBottom: 20}}>Aparecerá um número na tela!!</Text>
              <Text style = {{fontSize: 20, marginBottom: 5}}>O objetivo é lembrar e colocar o</Text>
              <Text style = {{fontSize: 20, marginBottom: 5}}>número que apareceu no espaço!{'\n'}</Text>
              <Text style = {{fontSize: 20, marginBottom: 5}}>Tempo de cada dificuldade:</Text>
              <Text style = {{fontSize: 20, fontWeight: 'bold'}}>Fácil: 10s</Text>
              <Text style = {{fontSize: 20,fontWeight: 'bold'}}>Médio: 7s</Text>
              <Text style = {{fontSize: 20,fontWeight: 'bold'}}>Difícil: 5s{'\n'}</Text>
              <BotaoPequeno
                label = "Voltar"
                onClick = {()=>setOpt(0)}
              />
        </View>

        )

    }
}

//Styles de componentes
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
