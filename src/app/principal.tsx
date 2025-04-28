import { StatusBar } from 'expo-status-bar';
import { Text, View,Image,TextInput,TouchableOpacity,Alert,ActivityIndicator, SafeAreaView} from "react-native";
import {style} from "../styles/style"
import {Input} from "../components/input/index";
import {Link, useLocalSearchParams, useRouter} from "expo-router";
import { useEffect, useState } from 'react';
import {themas} from "../global/themes";
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
// import {useAsyncStorage} from '@react-native-async-storage/async-storage';


export default function App() {



   var router= useRouter();
const params= useLocalSearchParams()
    const nome= params;
const [cor,SetCor]= useState(themas.cores.transparente)
const [troca,setTroca]= useState(true);
const [estado,setEstado]= useState("🐈");
const [dinheiro,setDinheiro]= useState(0);

useEffect(() => {
  async function carregarDinheiro() {
    const valorSalvo = await AsyncStorage.getItem('dinheiro');
    if (valorSalvo !== null) {
      setDinheiro(Number(valorSalvo));
    } else {
      setDinheiro(500); 
    }
  }


  async function carregartema(){

    let temaSalvo= await AsyncStorage.getItem('tema');
setDinheiro(Number(temaSalvo) || 1);

if (temaSalvo== '🐈'){

  SetCor(themas.cores.transparente);
  setEstado("🐈");
}else {

  
SetCor(themas.cores.preto);
setEstado("🐈‍⬛")
}


  }
  carregartema();
  carregarDinheiro();
}, []);

async function salvarVars(){ 


await AsyncStorage.setItem('dinheiro', '500');

}



useEffect( ()=>{ 
if (params.logado==null){

// router.navigate("");

}
},[params]);
var a= 1;

async function trocar(){


if (troca){
SetCor(themas.cores.transparente);
setEstado("🐈")
await AsyncStorage.setItem('tema', "🐈");
const novodinheiro = dinheiro - 10;
setDinheiro(novodinheiro);
await AsyncStorage.setItem('dinheiro', novodinheiro.toString());


}else {

SetCor(themas.cores.preto);
setEstado("🐈‍⬛")
await AsyncStorage.setItem('tema', "🐈‍⬛");

const novodinheiro = dinheiro + 10;
setDinheiro(novodinheiro);
await AsyncStorage.setItem('dinheiro', novodinheiro.toString());
}
setTroca(!troca);

}

  return (
    <SafeAreaView style={{ flex: 1 }}>
<View> 
    <View style={[style.topo, {backgroundColor: cor}]}>
      
      <Text>Deu certo</Text>
      <StatusBar style="auto" />

<Text>Bem vindo {params.nome}</Text>


<Text>Trocar Bg</Text>

<TouchableOpacity onPress={(e)=> trocar()}> 
<Text>{estado}</Text>  

</TouchableOpacity> 

<View style={style.butoes}>



<Link href=""><Text>Voltar</Text></Link>
</View>


<Text>Dinheiro total: {dinheiro} R$</Text>
      </View>


</View>
</SafeAreaView>
  );
}

