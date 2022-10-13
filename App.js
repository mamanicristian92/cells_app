import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import MyCells from './src/components/MyCells.jsx';
import Main from './src/components/Main.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='default'
      />
      <Main>
      </Main>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#EACACA',
    marginTop: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: 'center',
  },
});
