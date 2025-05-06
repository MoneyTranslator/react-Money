import  React, { forwardRef, LegacyRef } from "react";
import { TextInputProps } from "react-native";
import { Text, View, TextInput, StyleSheet,TouchableOpacity } from "react-native";
import { MaterialIcons, FontAwesome, Octicons } from "@expo/vector-icons";
import {style} from "../../styles/style";




export function  Input(props: TextInputProps & { nome?: string }) {

    const {
        nome
    } = props;

    
    return(
      <>
      
      {nome ? <Text style={style.titulo}>{nome}</Text> : null}

<TextInput style={[style.txtinpt]} {...props} />


      
      
      
      
      </>
    )

}