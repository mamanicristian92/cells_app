import { StyleSheet, Text, View, ScrollView } from 'react-native';

const CellButtonView = ({name}) => {
    return (
        <View style={styles.cellbuttonview}>
            <Text>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cellbuttonview: {
        //flexDirection: "column",
        //flex: 1,
        //height: '15%',
        //width: '100%',
        //backgroundColor: '#fff',
        //marginTop: Constants.statusBarHeight,
        
        //justifyContent: "center",
        //alignItems: "center",
        //alignContent: "center",
        //flexWrap: 'wrap',
    }
})

export default CellButtonView