import  React, { forwardRef, LegacyRef } from "react";
import { TextInputProps, TouchableOpacityProps } from "react-native";
import { Text, View, TextInput, StyleSheet,TouchableOpacity } from "react-native";
import { MaterialIcons, FontAwesome, Octicons } from "@expo/vector-icons";
import {style} from "./style";
import { themas } from "../../global/themes";



export function  Botao(props: TouchableOpacityProps & { titulo?: string, texto?: string}) {

const {titulo, texto}= props;


return(
<>

<View>

{titulo?<Text       style={{color:themas.cores.azulNoite}}>{titulo || ""}</Text>
:null}

<TouchableOpacity style={style.btn} {...props}>

{ texto? <Text>{texto || ""}</Text>
:null}
</TouchableOpacity>


</View>


</>




)}