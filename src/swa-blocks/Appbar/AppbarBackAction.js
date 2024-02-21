import React from "react"
import { View,StyleSheet} from "react-native";
import SwaAppBar from "../../swa-components/Appbar/SwaAppbar";
import { Text } from "react-native-paper";

const AppbarBackAction = () => {
return (
    <View>
        <SwaAppBar
         backgroundColor="white"
         backAction={true}
         title="Header"
         dark={true}
         backActionAccessibilityLabel="Go Back"
         backActionColor="black"
        >
            <Text variant="titleLarge" style={styles.text}>Header</Text>
        </SwaAppBar>
    </View>
)
}
const styles = StyleSheet.create({

})

export default AppbarBackAction;