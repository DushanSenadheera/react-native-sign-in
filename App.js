import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/63/77/36/63773689c5405621be6336d5e91b5b61.jpg' }}
          style={{ width: 350, height: 350 }}
        />
        <Text style={styles.Text} >Sign In</Text>
        <View style={styles.input}>
          <TextInput style={styles.TextInput} placeholder='Email' />
          <TextInput secureTextEntry='true' style={styles.TextInput} placeholder='Password' />
          <TouchableOpacity style={styles.btn}>
            <Text style={{ color: 'white', fontWeight: '600', textAlign: 'center' }}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ paddingTop: 150, textAlign: 'center' }}>Don't You Have an Acoount?{'\n'}<Text style={{ fontWeight: 'bold', color: 'yellow' }} >Register</Text> From Here</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
  },
  TextInput: {
    padding: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    margin: 10,
    width: 300
  },
  Text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  btn: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 6,
    width: 250,
    marginTop: 50,
  },
  input: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
