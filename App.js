import { useState, useMemo } from "react";
import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";

// Context
import { MyContext } from "./src/context";

// Router
import Router from "./src/routes/index";

export default function App() {

    const [myContext, setMyContext] = useState({ text: "context text", visible: true });
	const myContextProvider = useMemo(
		() => ({ myContext, setMyContext }),
		[myContext, setMyContext]
	);

    return (
        <View style={styles.appContainer}>
            <MyContext.Provider value={myContextProvider}>
                <Router />
            </MyContext.Provider>
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
