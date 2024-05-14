import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, TextInput, Alert } from 'react-native';

// Components
import Navbar from "../components/Navbar";

// Services
import itemService from "../services/items";

// Constants
import { maxTextLength, maxNumberLength } from '../constants';

function Form() {

    const [text, setText] = useState('');
    const [number, setNumber] = useState('');

  	const handleCreate = () => {
		console.log('Trying to create item')
		if(text === '' || number === '') {
			console.log('Empty fields validation')
			Alert.alert('Some fields are empty')
		} else {
			Alert.alert(
				'Do you want to create item?',                                     // Alert title
				`Text: ${text}\nNumber: ${number}`,                                // Alert message
				[
					{ text: 'CANCEL', onPress: () => console.log('Not created') }, // CANCEL alert button
					{
						text: 'OK',                                                // OK alert button  
						onPress: () => {                               
							console.log('Item created')
							itemService.createItem(text, number)
							setText('')
							setNumber('')
						}
					}
				]
			)
		}
	}

	useEffect(() => {
		console.log('Getting form view')
		async function fetchData() {
			//
		}
		fetchData()
	}, []);

  	return (
		<View style={styles.formContainer}>
			<Navbar />
			<Text style={styles.formText}>FORM</Text>
			<TextInput
				style={styles.input}
				onChangeText={setText}
				value={text}
				placeholder="TEXT"
				maxLength={maxTextLength}
			/>
			<TextInput
				style={styles.input}
				onChangeText={setNumber}
				value={number}
				placeholder="NUMBER"
				keyboardType="numeric"
				maxLength={maxNumberLength}
			/>
			<Pressable style={styles.btn} onPress={handleCreate}>
				<Text style={styles.btnText}>CREATE</Text>
			</Pressable>
		</View>
  	);
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        backgroundColor: 'yellow',
    },
    formText: {
		textAlign: 'center',
		color: 'green',
		fontSize: 30,
		marginTop: 30,
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
    btn: {
		alignItems: 'center',
		backgroundColor: 'green',
		borderColor: 'red',
		borderWidth: 2,
		borderRadius: 10,
		paddingVertical: 5,
		paddingHorizontal: 10,
		marginTop: 30,
		marginHorizontal: 60,
    },
    btnText: {
        color: 'darkgray',
        backgroundColor: 'white',
        fontSize: 30,
    },
});

export default Form;