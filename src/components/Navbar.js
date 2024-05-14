import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import { Link } from "react-router-native";

function Navbar() {
    return (
        <View style={styles.navContainer}>
            <Link to='/' style={styles.btn}>
                <Text style={styles.btnText}>MENU</Text>
            </Link>
            <Pressable style={styles.btn} onPress={() => Alert.alert('In maintenance')}>
                <Text style={styles.btnText}>OTHER</Text>
            </Pressable>
            <Pressable style={styles.btn} onPress={() => Alert.alert('In maintenance')}>
                <Text style={styles.btnText}>OTHER</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    navContainer: {
        borderTopColor: 'black',
        borderTopWidth: 2,
        backgroundColor: 'lightgrey',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
    btn: {
        alignItems: 'center',
        backgroundColor: 'green',
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    btnText: {
        color: 'darkgray',
        backgroundColor: 'white',
        fontSize: 20,
    },
})

export default Navbar;