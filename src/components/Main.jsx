import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import MyCells from './MyCells.jsx';

const Main = () => {
    return (
    <View style={styles.container}>
        <View>
            <Text>Mis Celulas</Text>
        </View>
        <MyCells></MyCells>
    </View>
    )
    
}  

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        //height: '100%',
        //width: '100%',
        //backgroundColor: '#EACACA',
        //marginTop: Constants.statusBarHeight,
        
        //justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        //flexWrap: 'wrap',
    }
})

  export default Main