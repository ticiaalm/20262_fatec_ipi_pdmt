// todo hook tem o nome começando com "use"
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react'; // devolve um vetor de duas posições: a varíavel de estado e a função

export default function App() {
  // let numero = 1
  const [numero, setNumero] = useState(1)
  const incrementar = () => setNumero(numero + 1)
  return (
    <View style={styles.container}>
      <Text>{numero}</Text>
      <Button
        onPress={incrementar}
        title='OK' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
