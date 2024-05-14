import { useState } from "react";
import { StyleSheet, View, Text, Button, Alert, TextInput } from 'react-native';

// Constants
import { maxTextLength, maxNumberLength } from '../constants';

function UpdateModal({ data, modalVisible, setModalVisible, updateItem }) {

    const [newText, setNewText] = useState(data.text);
    const [newNumber, setNewNumber] = useState(data.number);

    const handleUpdate = () => {
        console.log(`Trying to update item ${data.id}`)
        if(newText === '' || newNumber === '') {
			console.log('Empty fields validation')
			Alert.alert('Some fields are empty')
		} else {
            Alert.alert(
                'Update item?',                                                                     // Alert title
                `Text: ${newText}\nOld: ${data.text}\n\nNumber: ${newNumber}\nOld: ${data.number}`, // Alert message
                [
                    { text: 'CANCEL', onPress: () => console.log('Not updated') },                  // CANCEL alert button  
                    {                                                                               // OK alert button 
                        text: 'OK', 
                        onPress: () => {
                            setModalVisible(!modalVisible)
                            updateItem(data.id, newText, newNumber)
                        }
                    }                     
                ]
            )
        }   
    }

    return (
        <View style={styles.modalContainer}>
            <Text style={styles.modalText}>UPDATE MODAL</Text>
            <TextInput
				style={styles.input}
				onChangeText={setNewText}
				value={newText}
				placeholder="NEW TEXT"
				maxLength={maxTextLength}
			/>
            <TextInput
				style={styles.input}
				onChangeText={setNewNumber}
				value={newNumber}
				placeholder="NEW NUMBER"
				keyboardType="numeric"
				maxLength={maxNumberLength}
			/>
            <View style={styles.buttonContainer}>
                <Button title="Cancel" color="lightblue" onPress={() => setModalVisible(!modalVisible)}/>
                <Button title="Update" color="pink" onPress={handleUpdate}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'yellow',
    },
    modalText: {
        textAlign: 'center',
        color: 'orange',
        fontSize: 30,
        marginVertical: 30,
    },
    input: {
		backgroundColor: 'white',
		borderColor: 'blue',
		borderWidth: 2,
		borderRadius: 10,
		paddingVertical: 5,
		paddingHorizontal: 10,
		marginTop: 30,
		marginHorizontal: 20,
		fontSize: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
    }
})

export default UpdateModal;