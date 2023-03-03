import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  function soma() {
    const resultado = parseFloat(num1) + parseFloat(num2);
    alert('O resultado da soma é:' + resultado);
  }
  function subtracao() {
    const resultado = parseFloat(num1) - parseFloat(num2);
    alert('O resultado da subtração é:' + resultado);
  }
  function divisao() {
    const resultado = parseFloat(num1) / parseFloat(num2);
    alert('O resultado da divisão é:' + resultado);
  }
  function multiplicacao() {
    const resultado = parseFloat(num1) * parseFloat(num2);
    alert('O resultado da multiplicação é:' + resultado);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite um número"
        onChangeText={(num1) => setNum1(num1)}
      />
      <TextInput
        style={styles.input1}
        keyboardType="numeric"
        placeholder="Digite um número"
        onChangeText={(num2) => setNum2(num2)}
      />
      <TouchableOpacity style={styles.btn} onPress={soma}>
        <Text style={styles.titulobtn}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn1} onPress={subtracao}>
        <Text style={styles.titulobtn}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn2} onPress={divisao}>
        <Text style={styles.titulobtn}>/</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn3} onPress={multiplicacao}>
        <Text style={styles.titulobtn}>*</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    bottom: 25,
  },
  titulo: {
    display: 'inline-block',
    width: 320,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    height: 100,
    top: 150,
    left: 30,
  },
  input: {
    display: 'inline-block',
    backgroundColor: '#696969',
    borderRadius: 10,
    width: 120,
    height: 60,
    textAlign: 'center',
    left: 50,
    top: 200,
  },
  input1: {
   display: 'inline-block',
    backgroundColor: '#696969',
    borderRadius: 10,
    width: 120,
    height: 60,
    textAlign: 'center',
    left: 200,
    top: 140,
  },
  btn: {
    display: 'inline-block',
    backgroundColor: '#ffaa33',
    width: 40,
    height: 60,
    textAlign: 'center',
    top: 200,
    left: 50,
  },
  btn1: {
    display: 'inline-block',
    backgroundColor: '#ffaa33',
    width: 40,
    height: 60,
    left: 125,
    bottom: 60,
    textAlign: 'center',
    top: 140,
  },
  btn2: {
    display: 'inline-block',
    backgroundColor: '#ffaa33',
    width: 40,
    height: 60,
    left: 200,
    bottom: 120,
    textAlign: 'center',
    top: 80,
  },
  btn3: {
    display: 'inline-block',
    backgroundColor: '#ffaa33',
    width: 40,
    height: 60,
    left: 280,
    bottom: 180,
    textAlign: 'center',
    top: 20,
  },
  titulobtn: {
    fontSize: 40,
    color: '#fff',
    textAlign: 'center',
  },
});
