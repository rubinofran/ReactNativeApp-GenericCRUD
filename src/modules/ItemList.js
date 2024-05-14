import { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';

// Components
import Navbar from "../components/Navbar";
import Item from "../components/Item";

// Services
import itemService from "../services/items";

function ItemList() {

    const [testItems, setTestItems] = useState([])
    const [visualChanges, setVisualChanges] = useState(false)

    const updateItem = (id, newText, newNumber) => {
        itemService.updateItem(id, newText, newNumber)
        setVisualChanges(!visualChanges)
        console.log(`Item ${id} updated`)
    }

    const deleteItem = (id) => {
        itemService.deleteItem(id)
        setVisualChanges(!visualChanges)
        console.log(`Item ${id} deleted`)
    }

    useEffect(() => {
        console.log('Getting list view')
        async function fetchData() {
            setTestItems(itemService.getItems)
        }
        fetchData()
    }, [visualChanges]); // when the variable changes, the list is updated

    return (
        <View style={styles.listContainer}>
            <Navbar />
            <Text style={styles.listText}>LIST</Text>
            <ScrollView style={styles.scrollView}>
                {testItems.map((data, auxKey) => {
                    return (
                        <Item 
                            key={auxKey} 
                            data={data} 
                            updateItem={updateItem} 
                            deleteItem={deleteItem} 
                        />
                    )
                })}
	  	  	</ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        backgroundColor: 'lightgreen',
    },
    listText: {
        textAlign: 'center',
        color: 'orange',
        fontSize: 30,
        marginVertical: 30,
    },
    scrollView: {
        backgroundColor: 'black',
        borderRadius: 20,
        marginHorizontal: 10,
        marginBottom: 60,
    },
});

export default ItemList;