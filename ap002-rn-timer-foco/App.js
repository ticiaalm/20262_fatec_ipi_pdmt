import { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [segundos, setSegundos] = useState(25 * 60)
  const [rodando, setRodando] = useState(false)

  useEffect(() => {
    if (!rodando) {
      return
    }

    const id = setInterval(() => {
      setSegundos(s => s - 1)
    }, 1000)

    return () => clearInterval(id)
  }, [rodando])

  const minutos = Math.floor(segundos / 60)
  const segs = segundos % 60

  return (
    <View style={styles.container}>
      <Text style={styles.tempo}>
        {String(minutos).padStart(2, '0')}:{String(segs).padStart(2, '0')}
      </Text>

      <Pressable
        style={styles.botao}
        onPress={() => setRodando(r => !r)}>
        <Text style={styles.texto}>
          {rodando ? 'Pausar' : 'Iniciar'}
        </Text>
      </Pressable>

      <Pressable
        style={styles.botaoReiniciar}
        onPress={() => {
          setRodando(false)
          setSegundos(25 * 60)
        }}>
        <Text style={styles.texto}>
          Reiniciar
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempo: {
    fontSize: 72,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  botao: {
    backgroundColor: '#087EA4',
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 10,
  },
  botaoReiniciar: {
    backgroundColor: '#7308a4',
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 10,
    marginTop: 15,
  },
  texto: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  }
});