import React, { Component } from "react"
import { View, Text, TextInput, StyleSheet, Image } from "react-native"

export default class CursoReactNative extends Component {

  constructor (props) {
    super(props)
    this.state = {texto1: 'Texto 1',texto2: 'Texto 2'}

    this.escrever = this.escrever.bind(this)
  }

  mudarVogais(t) {
    let novoTexto = t.toLowerCase()

    novoTexto = novoTexto.replace(/(a|á|à|â|ã|ä|e|è|é|ê|ë|i|í|ì|ï|o|ó|ò|õ|ö|u|ù|ú|ü)/g, 'i')

    return novoTexto
  }

  escrever(t) {
    let s = this.state

    s.texto1 = t
    s.texto2 = this.mudarVogais(t)

    this.setState(s)
  }

  render() {
  
    return (
      <View style={style.body}>
        <View>
          <Text style={style.titulo}>Criador de Mimimi</Text>
        </View>
        <View style={style.inputArea}>
          <TextInput style={style.input} placeholder='Digite o seu mimimi' onChangeText={this.escrever} />
        </View>
        <View style={style.area}>
          <Text style={[style.texto, style.texto1]} >{this.state.texto1.toUpperCase()}</Text>
          <Image source={require('./images/mimimi.jpg')} style={style.guri} />
          <Text style={[style.texto, style.texto2]} >{this.state.texto2.toUpperCase()}</Text>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  body: {
    backgroundColor: '#999999',
    paddingTop: 30,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 30,
    color: '#FFFFFF'
  },
  input: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    height: 40,
    color: '#000000'
  },
  inputArea: {
    alignSelf: "stretch"
  },
  area: {
    width: 300,
    height: 300,
    marginTop: 10
  },
  guri: {
    zIndex: 0,
    width: 300,
    height: 300,
    marginTop: -70
  },
  texto: {
    fontSize: 25,
    color: '#FFFFFF',
    padding: 10,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    textAlign: "center",
    height: 70
  },
  texto1: {
    zIndex: 1
  },
  texto2: {
    zIndex: 1,
    marginTop: -70
  },
})