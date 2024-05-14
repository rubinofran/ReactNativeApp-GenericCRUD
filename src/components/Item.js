import { useState } from "react";
import { StyleSheet, View, Text, Button, Alert, Modal } from 'react-native';

// Components
import UpdateModal from "../components/UpdateModal";

function Item({ data, updateItem, deleteItem }) {

    const [modalVisible, setModalVisible] = useState(false);

    const handleDelete = () => {
        console.log(`Trying to delete item ${data.id}`)
        Alert.alert(
            'Delete item?',                                                    // Alert title
            `Text: ${data.text}\nNumber: ${data.number}`,                      // Alert message
            [
                { text: 'CANCEL', onPress: () => console.log('Not deleted') }, // CANCEL alert button  
                { text: 'OK', onPress: () => deleteItem(data.id) }             // OK alert button
            ]
        )
    }

    return (
        <View style={styles.itemContainer}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <UpdateModal 
                    data={data}
                    modalVisible={modalVisible} 
                    setModalVisible={setModalVisible}
                    updateItem={updateItem}
                />
            </Modal>
            {/* <Text style={styles.itemText}>ID: {data.id}</Text> */}
            <Text style={styles.itemText}>Text: {data.text}</Text>
            <Text style={styles.itemText}>Number: {data.number}</Text>
            <View style={styles.buttonContainer}>
                <Button title="delete" color="red" onPress={handleDelete}/>
                <Button title="update" color="green" onPress={() => setModalVisible(true)}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: 'blue',
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginTop: 20,
        marginHorizontal: 20,
    },
    itemText: {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 20,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});

export default Item;