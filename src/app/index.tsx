import { StatusBar } from 'expo-status-bar';
import { Text, View,Image,TextInput,TouchableOpacity,Alert,ActivityIndicator, SafeAreaView,Keyboard } from "react-native";
import {style} from "../styles/style"
import {Link} from "expo-router";
import {Input} from "../components/input/index";
import { useState, useRef } from 'react';
import {useRouter, useFocusEffect} from 'expo-router';
import { useFonts } from 'expo-font';
import { Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function App() {
var router= useRouter();

const [nome,setNome]= useState("");
const [senha,setSenha]= useState("");
const [logo,setLogo]= useState(require("../imgs/gato2.gif"));


const [fontsLoaded] = useFonts({
  'Poppins_700Bold': Poppins_700Bold,
});

function fazer(){

if (nome!= "" && senha != ""){
if (nome== "Certo" && senha== "4"){

router.push({

pathname: "/principal",
params: {nome: nome, senha: senha, logado: "true"},


})


}else{

    Alert.alert("Nome ou senha está incorreto");
}

}else {
  Alert.alert("insira nome de usuario e senha")
}
}


  return (
    <> 
  <View style={style.topo}>

<Text>Bem Vindo ao money translator</Text>
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
<Text>Logar</Text>


</TouchableOpacity>

      <StatusBar style="auto" />

      </View>


      <View style={style.baixo}>

      <Link href="/principal" asChild>
  <TouchableOpacity>
    <Image source={require("../imgs/logo.png")} style={style.logo} />
  </TouchableOpacity>
</Link>

      </View>
    </>
  );
}

