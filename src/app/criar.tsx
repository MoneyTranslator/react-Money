import { StatusBar } from 'expo-status-bar';
import { Text, View,Image,TextInput,TouchableOpacity,Alert,ActivityIndicator, SafeAreaView,Keyboard, ScrollView } from "react-native";
import {style} from "../styles/style"
import {Link, useLocalSearchParams} from "expo-router";
import {Input} from "../components/input/index";
import React, { useEffect, useState } from 'react';
import {useRouter, useFocusEffect} from 'expo-router';
import { useFonts } from 'expo-font';
import { Poppins_700Bold } from '@expo-google-fonts/poppins';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
   
  


    var router= useRouter();

const [nome,setNome]= useState("");
const [senha,setSenha]= useState("");
const [logo,setLogo]= useState(require("../imgs/gato3.gif"));
const [estadoBtn, setEstado]= useState<string | JSX.Element>("Logar");
  const params = useLocalSearchParams();

 




    async function fazer(){

if (nome!= "" && senha != ""){

setEstado(<ActivityIndicator />);
await AsyncStorage.setItem('senha', senha);

await AsyncStorage.setItem('nome', nome);
  setTimeout(() => {
    Alert.alert("Conta criada");

    router.push({

      pathname: "",
      params: {nome: nome, senha: senha},
      
      
      })

  }, 2000);





}else {
  Alert.alert("insira nome de usuario e senha para criar a conta")
}

}


  return (
    <> 
              <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

  <View style={style.topo}>

<Text>Crie sua conta</Text>
</View>



<View style={style.meio}> 
        <Image source={logo} style={style.img}></Image>
 
<Input nome="Nome" value={nome} onChangeText={(e)=>setNome(e)} placeholder='insira seu nome'
 onFocus={() => setLogo(require("../imgs/digito.png"))}  
 onBlur={() => { setLogo(require("../imgs/gato2.gif"))}}
></Input>


<Input nome="Senha" value={senha} onChangeText={(e)=>setSenha(e)} 
placeholder='insira sua senha'
onFocus={() => setLogo(require("../imgs/digito.png"))}  
 onBlur={() => { setLogo(require("../imgs/gato2.gif")); Keyboard.dismiss(); }}></Input>

<TouchableOpacity onPress={()=> fazer()} style={style.btn}>
<Text>{estadoBtn}</Text>

</TouchableOpacity>

      <StatusBar style="auto" />

      </View>


      <View style={style.baixo}>

  <TouchableOpacity>
    <Image source={require("../imgs/logo.png")} style={style.logo} />
  </TouchableOpacity>

      </View>
      </ScrollView>
    </>
  );
}

