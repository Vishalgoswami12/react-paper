import React from "react"
import SwaCard from "../../swa-components/Card/SwaCard";
import { View,StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Text } from "react-native-paper";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import SwaLeaderCard from "../../swa-components/Card/SwaLeaderCard";

function LeaderBoardCard(){
    return(
        <View>
            <SwaCard
            backgroundColor="#D9EDFF"
            borderRadius={10}
            width={328}
            title="Nicolas Pooran"
            titleStyle={styles.title}
            />
            <FontAwesome style={styles.icon} name="circle" size={28} color="#008FFF" />
            <Text style={styles.iconText} >4</Text>
            <View style={styles.container}>
                <Text style={styles.textCol}>3</Text>
                {/* <AntDesign style={styles.antIcon} name="caretdown" size={70} color="red" /> */}
            </View>
            <AntDesign style={styles.antIcon} name="caretdown" size={14} color="red" />
            <AntDesign style={styles.downicon} name="download" size={16} color="#193DAD" />
            <Entypo style={styles.dot} name="dots-three-vertical" size={15} color="#193DAD" />
            <Text style={styles.textaver}>110/120</Text>
            <SwaLeaderCard/>
        </View>
    )
}
const styles = StyleSheet.create({
title:{
    fontWeight:550,
    position:"absolute",
    left:20
},
icon:{
    position:"absolute",
    top:25,
    left:15,
},
textCol:{
color:"red"
},
iconText:{
    position:"absolute",
    top:24,
    left:22,
    color:"white"
},
container:{
    position:"absolute",
    left:210,
    top:24,
    justifyContent:"space-between"
},
antIcon:{
    position:"absolute",
    left:222,
    top:25
},
downicon:{
    left:258,
    bottom:65
},
dot:{
    left:299,
    bottom:80
},
textaver:{
    color:"grey",
    bottom:70,
    left:45
}
})
export default LeaderBoardCard;