import { StyleSheet } from "react-native";
import { Dimensions, StatusBar } from 'react-native';
import { themas } from "../../global/themes";



export const style=StyleSheet.create({


btn:{

borderWidth: 1,
borderColor: "black",
width: Dimensions.get("window").width *0.1,
borderRadius: 40,
alignItems: "center",
justifyContent: "center",

}


})