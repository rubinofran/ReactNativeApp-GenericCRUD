import { useEffect, useContext } from "react";

import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native"; 

// Components
import Navbar from "../components/Navbar";

// Context
import { MyContext } from "../context/index";

const MenuOpt = ({ children, to }) => {
    return (
        <Link to={to} style={styles.btn}>
            <Text style={styles.btnText}>{children}</Text>
        </Link>
    );
}

function Menu() {

    const { myContext/* , setMyContext */ } = useContext(MyContext) // Unused set

    useEffect(() => {
		console.log('Getting menu view')
		async function fetchData() {
			//
		}
		fetchData()
	}, []);

    return (
        <View style={styles.menuContainer}>
            <Navbar />
            <Text style={styles.menuText}>MENU</Text>
            <MenuOpt to='/item-list'>LIST</MenuOpt>
            <MenuOpt to='/form'>FORM</MenuOpt>
            <Text style={styles.menuText}>{myContext.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    menuContainer: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    menuText: {
        textAlign: 'center',
        color: 'green',
        fontSize: 30,
        marginTop: 30,
    },
    btn: {
        alignItems: 'center',
        backgroundColor: 'gray',
        borderColor: 'blue',
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
})

export default Menu;