import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, TouchableOpacity, Alert } from "react-native";
import { style } from "../styles/style";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from 'react';
import { themas } from "../global/themes";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Botao } from "../components/botao/index";
import { Input } from "../components/input/index";
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [cor, setCor] = useState(themas.cores.transparente);
  const [troca, setTroca] = useState(true);
  const [estado, setEstado] = useState("🐈");
  const [dinheiro, setDinheiro] = useState(0);
  const [dinheiroCor, setDinheiroCor] = useState("black");
  const [dividas, setDividas] = useState(0);
  const [dividaCor, setDividaCor] = useState(themas.cores.preto);
  const [quantia, setQuantia] = useState(0);
  const [gastos, setGastos] = useState('');
  const [necessidade, setNecessidade] = useState(0);
  const [desejos, setDesejos] = useState(0);
  const [investimento, setInvestimento] = useState(0);
const[dinheiroTotal,setdinheiroTotal]= useState(1000);
const[necessidadesTotais,setnecessidadesTotais]= useState(0);
const[desejostotal,setDesejostotal]= useState(0);
const[investimentoTotal,setInvestimentoTotal]= useState(0);

 useEffect(() => {
    async function carregarDados() {
      const valorSalvo = await AsyncStorage.getItem('dinheiro');
      const dividaSalva = await AsyncStorage.getItem('divida');
      const necessidadeSalva = await AsyncStorage.getItem('necessidade');
      const investimentoSalvo = await AsyncStorage.getItem('investimento');
      const desejosSalvos = await AsyncStorage.getItem('desejos');


setnecessidadesTotais((dinheiroTotal/100) *50);
setDesejostotal((dinheiroTotal/100) *30);
setInvestimentoTotal((dinheiroTotal/100) *20);


      if (valorSalvo !== null) setDinheiro(Number(valorSalvo));
      if (dividaSalva !== null) setDividas(Number(dividaSalva));
      if (necessidadeSalva !== null) setNecessidade(Number(necessidadeSalva));
      if (investimentoSalvo !== null) setInvestimento(Number(investimentoSalvo));
      if (desejosSalvos !== null) setDesejos(Number(desejosSalvos));
    }

    async function carregarTema() {
      const temaSalvo = await AsyncStorage.getItem('tema');
      if (temaSalvo === '🐈') {
        setCor(themas.cores.transparente);
        setEstado('🐈');
      } else {
        setCor(themas.cores.preto);
        setEstado('🐈‍⬛');
      }
    }

    carregarDados();
    carregarTema();
  }, []);

  useEffect(() => {
    corMoney();
  }, [dinheiro]);

  async function trocar() {
    const novoEstado = troca ? '🐈' : '🐈‍⬛';
    const novaCor = troca ? themas.cores.transparente : themas.cores.preto;
    setEstado(novoEstado);
    setCor(novaCor);
    await AsyncStorage.setItem('tema', novoEstado);
    setTroca(!troca);
  }


  function perguntarConfirmacao() {
    return new Promise((resolve) => {
      Alert.alert(
        "Confirmar gasto",
        "Deseja realmente subtrair essa quantia?",
        [
          { text: "Cancelar", onPress: () => resolve(false), style: "cancel" },
          { text: "Sim", onPress: () => resolve(true) }
        ],
        { cancelable: false }
      );
    });
  }

  async function diminuir() {

  
    switch (gastos) {
      case 'Necessidade':
        if (necessidade > 0) {
          const novaNecessidade = necessidade - quantia;
          setNecessidade(novaNecessidade);
          await AsyncStorage.setItem('necessidade', novaNecessidade.toString());
        } else {
          Alert.alert("Saldo insuficiente na categoria Necessidade.");
        }
        break;
  
      case 'Desejos':
        if (desejos > 0) {
          const novoDesejos = desejos - quantia;
          setDesejos(novoDesejos);
          await AsyncStorage.setItem('desejos', novoDesejos.toString());
        } else {
          Alert.alert("Saldo insuficiente na categoria Desejos.");
        }
        break;
  
      case 'Investimento':
        if (investimento > 0) {
          const novoInvestimento = investimento - quantia;
          setInvestimento(novoInvestimento);
          await AsyncStorage.setItem('investimento', novoInvestimento.toString());
        } else {
          Alert.alert("Saldo insuficiente na categoria Investimento.");
        }
        break;
  
      default:
        Alert.alert("Selecione um tipo de gasto.");
        return;
    }
  
    corMoney();
  }
  async function somar() {

    if (quantia> (dinheiroTotal/40)){
      const confirmado = await perguntarConfirmacao();
      if (!confirmado) return;
      
      }
    
  
    switch (gastos) {
      case 'Necessidade':

     
        const novaNecessidade = necessidade + quantia;
        setNecessidade(novaNecessidade);
        await AsyncStorage.setItem('necessidade', novaNecessidade.toString());
      

      
        break;

      case 'Desejos':
        const novoDesejos = desejos + quantia;
        setDesejos(novoDesejos);
        await AsyncStorage.setItem('desejos', novoDesejos.toString());
        break;

      case 'Investimento':
        const novoInvestimento = investimento + quantia;
        setInvestimento(novoInvestimento);
        await AsyncStorage.setItem('investimento', novoInvestimento.toString());
        break;

      default:
        Alert.alert("Selecione um tipo de gasto.");
        return;
    }

    setDinheiro(dinheiro + quantia);
    await AsyncStorage.setItem('dinheiro', (dinheiro + quantia).toString());

    corMoney();
  }

  async function resetarTudo() {
    setDinheiro(0);
    setDividas(0);
    setNecessidade(0);
    setDesejos(0);
    setInvestimento(0);
    await AsyncStorage.multiSet([
      ['dinheiro', '0'],
      ['divida', '0'],
      ['necessidade', '0'],
      ['desejos', '0'],
      ['investimento', '0']
    ]);
    corMoney();
    Alert.alert("Reset feito", "Todos os valores foram zerados.");
  }

  function corMoney() {
    if (dinheiro >= 200) {
      setDinheiroCor("yellow");
    } else if (dinheiro >= 100) {
      setDinheiroCor("green");
    } else {
      setDinheiroCor("red");
    }

    setDividaCor(dividas !== 0 ? themas.cores.vermelho : themas.cores.preto);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: cor }}>
      <View style={[style.topo, { backgroundColor: cor }]}>
        <StatusBar style="auto" />
        <Text>Bem vindo {params.nome}</Text>

        <TouchableOpacity onPress={trocar}>
          <Text style={style.txt}>Trocar Bg: {estado}</Text>
        </TouchableOpacity>

        <View style={style.butoes}>
          <Link href=""><Text>Voltar</Text></Link>
        </View>

        <Text style={style.dintitulo}>Dinheiro:</Text>
        <Text style={{ ...style.dinheiro, color: dinheiroCor }}>{dinheiroTotal} R$</Text>


<Text>{"Objetivo para a necessidade:"+necessidadesTotais}</Text>
<Text>{"Objetivo para a investimento:"+investimentoTotal}</Text>
<Text>{"Objetivo para a desejos:"+desejostotal}</Text>

      </View>

      <View style={style.baixo}>
        <Input
          nome={`quantia: ${quantia}`}
          value={String(quantia)}
          onChangeText={(e) => setQuantia(Number(e) || 0)}
          keyboardType="numeric"
        />

        <Botao titulo="Menos" texto="-" onPress={diminuir} />
        <Botao titulo="Mais" texto="+" onPress={somar} />
       

        <View>
          <Text style={style.label}>Escolha um tipo de gasto:</Text>

          <Picker
            selectedValue={gastos}
            onValueChange={(itemValue) => setGastos(itemValue)}
          >
            <Picker.Item label="Selecione..." value="" />
            <Picker.Item label="Necessidade" value="Necessidade" />
            <Picker.Item label="Desejos" value="Desejos" />
            <Picker.Item label="Investimento" value="Investimento" />
          </Picker>

        </View>

        <Text>{"necessidade:"+necessidade + " quantia que pode gastar: " + (necessidadesTotais - necessidade)}</Text>
        <Text>{"desejos:"+desejos + " quantia que pode gastar: " + (desejostotal - desejos)}</Text>
        <Text>{"investimento:"+investimento + " quantia que pode gastar: " + (investimentoTotal - investimento)}</Text>
      </View>
    </SafeAreaView>
  );
}
