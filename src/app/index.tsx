import { StatusBar } from 'expo-status-bar';
import { Text, View,Image,TextInput,TouchableOpacity,Alert,ActivityIndicator, SafeAreaView,Keyboard, ScrollView } from "react-native";
import {style} from "../styles/style"
import {Link, useLocalSearchParams} from "expo-router";
import {Input} from "../components/input/index";
import React, { useEffect, useState } from 'react';
import {useRouter, useFocusEffect} from 'expo-router';
import { useFonts } from 'expo-font';
import { Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Botao } from '../components/botao';
import { themas } from '../global/themes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [nomecerto, setNomecerto] = useState("");
  const [senhacerta, setSenhacerta] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const nomeSalvo = await AsyncStorage.getItem('nome');
      const senhaSalva = await AsyncStorage.getItem('senha');

      if (nomeSalvo && senhaSalva) {
        setNomecerto(nomeSalvo);
        setSenhacerta(senhaSalva);
      }
    };

    fetchData();
  }, []);

  var router= useRouter();

const [nome,setNome]= useState("");
const [senha,setSenha]= useState("");
const [logo,setLogo]= useState(require("../imgs/gato2.gif"));
const [estadoBtn, setEstado]= useState<string | JSX.Element>("Logar");




const params = useLocalSearchParams();
 

const [fontsLoaded] = useFonts({
  'Poppins_700Bold': Poppins_700Bold,
});

function fazer(){

if (params.nome!= "" && params.senha != ""){
if (nome== nomecerto && senhacerta){
setEstado(<ActivityIndicator />);

  setTimeout(() => {
    Alert.alert("Logado");

    router.push({

      pathname: "/principal",
      params: {nome: nome, senha: senha, logado: "true"},
      
      
      })

  }, 2000);



}else{

    Alert.alert("Nome ou senha está incorreto");
}

}else {
  Alert.alert("insira nome de usuario e senha")
}
}


function criar(){

router.push({

pathname: "/criar",

})

}

  return (
    <> 
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

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
 onBlur={() => { setLogo(require("../imgs/gato2.gif")); }}></Input>

<TouchableOpacity onPress={()=> fazer()} style={style.btn}>
<Text>{estadoBtn}</Text>

</TouchableOpacity>

      <StatusBar style="auto" />
      <Text >{"\n"}</Text>
<Botao texto='Ainda não tenho login' onPress={criar}  style={{
    backgroundColor: "#4F46E5",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    alignItems: "center",
    marginTop: 16,
  }}></Botao>
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

