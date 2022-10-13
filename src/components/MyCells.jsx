import { StyleSheet,Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
//import { Button, TouchableOpacity } from 'react-native-web';
import CellButtonView from './CellButtonView.jsx';

const names = [
    {
        name:'emaus'
    },
    {
        name:'peniel'
    },
    {
        name:'peniel'
    },
    {
        name:'peniel'
    },
    {
        name:'peniel'
    },
    {
        name:'emaus'
    },
    {
        name:'peniel'
    },
    {
        name:'peniel'
    },
    {
        name:'peniel'
    },
    {
        name:'peniel'
    },
];


const MyCells = () => {
    const buttonClickedHandler = () => {
        //console.log('You have been clicked a button!');
        // do something
    };
    const renderCell = ({ item }) => (
        <CellButtonView name={item.name} />
    );
    return (
        <View style={styles.stylemycells}>
            <FlatList
                data={names}
                renderItem= {renderCell}
            />
            <View>
            <TouchableOpacity
                //onPress={buttonClickedHandler}
                style={styles.addCellRoundButton}>
                <Text style = {{color: 'white', fontSize: 30}}>+</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    stylemycells: {
        //flexDirection: "column",
        flex: 1,
        //height: '50%',
        width: '100%',
        backgroundColor: '#4bb',
        //marginTop: Constants.statusBarHeight,
        
        //justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        //flexWrap: 'wrap',
    },
    addCellRoundButton: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        //padding: 10,
        borderRadius: 25,
        backgroundColor: 'orange',
    }
})

export default MyCells