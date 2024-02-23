import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './components/HelloWorld';
import UserName from './components/UserName';
import Counter from './components/Counter';
export default function App() {
  return (
    <View style={styles.container}>
      <HelloWorld/>
      <UserName/>
      <Counter/>
      <StatusBar style="auto" />
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