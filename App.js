import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import Router from "./src/routes/index";

export default function App() {
    return (
        <View style={styles.appContainer}>
            <Router />
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: 'gray',
        marginTop: Constants.statusBarHeight
    },
});
