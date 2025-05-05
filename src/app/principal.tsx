import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, TouchableOpacity, Alert, Image,ScrollView } from "react-native";
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
  const [cor, setCor] = useState(themas.cores.claro);
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
  const [dinheiroTotal, setdinheiroTotal] = useState(0);
  const[necessidadesTotais,setnecessidadesTotais]= useState(0);
const[desejostotal,setDesejostotal]= useState(0);
const[investimentoTotal,setInvestimentoTotal]= useState(0);
const [pontos,setPontos]= useState(0);
const [histGastos,sethistGastos]= useState("");
const objN= necessidadesTotais - necessidade;
const objD= desejostotal - desejos;
const objI= investimentoTotal- investimento;
const [nomeGasto,setNomegasto]= useState("");
const dataAtual = new Date();
const dia = dataAtual.getDate(); 
const mes = dataAtual.getMonth() + 1; 
const ano = dataAtual.getFullYear(); 
const hora = dataAtual.getHours(); 
const minutos = dataAtual.getMinutes(); 



useEffect(() => {
  async function carregarDados() {
    const valorSalvo = await AsyncStorage.getItem('dinheiro');
    const dividaSalva = await AsyncStorage.getItem('divida');
    const necessidadeSalva = await AsyncStorage.getItem('necessidade');
    const investimentoSalvo = await AsyncStorage.getItem('investimento');
    const desejosSalvos = await AsyncStorage.getItem('desejos');
    const historicoSalvo = await AsyncStorage.getItem('histgasto');
    const dinheiroTotalSalvo = await AsyncStorage.getItem('dinheiroTotal');
    const pontosSalvos= await AsyncStorage.getItem('pontos')

    if (dinheiroTotalSalvo !== null) {
      const total = Number(dinheiroTotalSalvo);
      setdinheiroTotal(total);
      setnecessidadesTotais((total * 50) / 100);
      setDesejostotal((total * 30) / 100);
      setInvestimentoTotal((total * 20) / 100);
    }

    if (valorSalvo !== null) setDinheiro(Number(valorSalvo));
    if (dividaSalva !== null) setDividas(Number(dividaSalva));
    if (necessidadeSalva !== null) setNecessidade(Number(necessidadeSalva));
    if (investimentoSalvo !== null) setInvestimento(Number(investimentoSalvo));
    if (desejosSalvos !== null) setDesejos(Number(desejosSalvos));
    if (historicoSalvo !== null) sethistGastos(historicoSalvo);
  }

  async function carregarTema() {
    const temaSalvo = await AsyncStorage.getItem('tema');
    if (temaSalvo === '🐈') {
      setCor(themas.cores.claro);
      setEstado('🐈');
    } else {
      setCor(themas.cores.preto);
      setEstado('🐈‍⬛');
    }
  }

  async function carregarPontos() {
    const pontosSalvos = await AsyncStorage.getItem('pontos');
    setPontos(Number(pontosSalvos) || 0);
  }

  carregarPontos();


  carregarDados();
  carregarTema();
}, []);

  useEffect(() => {
  }, [dinheiro]);

  async function trocar() {
    const novoEstado = troca ? '🐈' : '🐈‍⬛';
    const novaCor = troca ? themas.cores.claro : themas.cores.preto;
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

  async function Objetivo(){


   const objN= necessidadesTotais - necessidade;
   const objD= desejostotal - desejos;
   const objI= investimentoTotal- investimento
   if (necessidade <= necessidadesTotais * 0.6) {
    let pontosGanhos = 0;

    // Necessidades — gastar até 60% = bom
    if (necessidade <= necessidadesTotais * 0.6) {
      pontosGanhos += 10;
    } else if (necessidade <= necessidadesTotais) {
      pontosGanhos += 5;
    } else {
      pontosGanhos -= 5; // gastou demais
    }
  
    // Desejos — quanto menos, melhor
    if (desejos <= desejostotal * 0.4) {
      pontosGanhos += 10;
    } else if (desejos <= desejostotal) {
      pontosGanhos += 3;
    } else {
      pontosGanhos -= 5;
    }
  
    // Investimentos — quanto mais investe, mais pontos
    const porcentInvest = investimento / investimentoTotal;
    if (porcentInvest >= 1.0) {
      pontosGanhos += 15;
    } else if (porcentInvest >= 0.7) {
      pontosGanhos += 8;
    } else if (porcentInvest >= 0.5) {
      pontosGanhos += 4;
    }
  
    setPontos(prev => prev + pontosGanhos);
    await AsyncStorage.setItem('pontos', pontos.toString());
  }
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

        Objetivo();
        const somoTotal = investimento + desejos + necessidade;
    }
  
  }
  async function somar() {
    if (quantia > (dinheiroTotal / 0.4)) {
      const confirmado = await perguntarConfirmacao();
      if (!confirmado) return;
    }
  
    let novaEntrada;
    switch (gastos) {
      case 'Necessidade':
        const novaNecessidade = necessidade + quantia;
        setNecessidade(novaNecessidade);
        await AsyncStorage.setItem('necessidade', novaNecessidade.toString());
  
        novaEntrada = nomeGasto + "(necessidade): " + quantia;
        const novoHistGastosN = histGastos + novaEntrada +"R$ " + dia + "/" + mes + "/"+ ano+ " " + hora + ":" + minutos+ "\n"+ "\n";
        sethistGastos(novoHistGastosN);
        await AsyncStorage.setItem('histgasto', novoHistGastosN); // Salvando o novo histórico
  
        break;
  
      case 'Desejos':
        const novoDesejos = desejos + quantia;
        setDesejos(novoDesejos);
        await AsyncStorage.setItem('desejos', novoDesejos.toString());
  
        novaEntrada = nomeGasto + "(desejos): " + quantia;
        const novoHistGastosD = histGastos + novaEntrada +"R$ " + dia + "/" + mes + "/"+ ano+ " " + hora + ":" + minutos+ "\n" + "\n";
        sethistGastos(novoHistGastosD);
        await AsyncStorage.setItem('histgasto', novoHistGastosD);
  
        break;
  
      case 'Investimento':
        const novoInvestimento = investimento + quantia;
        setInvestimento(novoInvestimento);
        await AsyncStorage.setItem('investimento', novoInvestimento.toString());
  
        novaEntrada = nomeGasto + "(investimento): " + quantia;
        const novoHistGastosI = histGastos + novaEntrada +"R$ " + dia + "/" + mes + "/"+ ano+ " " + hora + ":" + minutos+ "\n"+ "\n";
        sethistGastos(novoHistGastosI);
        await AsyncStorage.setItem('histgasto', novoHistGastosI);
  
        break;
  
      default:
        Alert.alert("Selecione um tipo de gasto.");
        return;
    }
  
    setDinheiro(dinheiro + quantia);
    await AsyncStorage.setItem('dinheiro', (dinheiro + quantia).toString());
  
    Objetivo();
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
    Objetivo()
    Alert.alert("Reset feito", "Todos os valores foram zerados.");
  }


  async function apagar(){
    
sethistGastos("");
await AsyncStorage.setItem('histgasto', "");


  }

  async function porDinheiro(){

setdinheiroTotal(dinheiroTotal);
await AsyncStorage.setItem('dinheiroTotal', dinheiroTotal.toString())

setnecessidadesTotais(dinheiroTotal/100 *50);
setDesejostotal((dinheiroTotal/100) *30);
setInvestimentoTotal((dinheiroTotal/100) *20);

  }
  




  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: cor }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Topo */}
        <View style={[style.topo, { backgroundColor: cor }]}>
          <StatusBar style="auto" />
          <View style={style.row}>
            <View>
              <Text style={style.txt}>Bem-vindo, {params.nome}</Text>
              <Text style={style.txt}>Pontos: {pontos}</Text>
            </View>
            <Image source={require('../imgs/logo.png')} style={{ width: 50, height: 50 }} />
            <TouchableOpacity onPress={trocar}>
              <Text style={style.txt}>Trocar Bg: {estado}</Text>
            </TouchableOpacity>
          </View>
        </View>
  
        {/* Área do Dinheiro Total */}
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <View style={style.principal}>
            <Text style={style.bigtxt}>Dinheiro:</Text>
            <Text style={{ ...style.dinheiro, color: themas.cores.verdeEsmeralda }}>
              {dinheiroTotal} R$
            </Text>
  
            <Text style={[style.txtBlack, {fontSize: 20}]}>Objetivo para a necessidade: {necessidadesTotais}</Text>
            <Text style={[style.txtBlack, {fontSize: 20}]}>Objetivo para o investimento: {investimentoTotal}</Text>
            <Text style={[style.txtBlack, {fontSize: 20}]}>Objetivo para os desejos: {desejostotal}</Text>
  
            <Input
              value={String(dinheiroTotal)}
              keyboardType="numeric"
              onChangeText={(e) => setdinheiroTotal(Number(e) || 0)}
            />
            <Botao texto="Setar dinheiro" onPress={porDinheiro} style={style.btn} />
          </View>
        </View>
  
        {/* Adicionar Gastos */}
        <View style={[style.baixo, { alignItems: 'center' }]}>
          <View style={style.modificar}>
            <Input
              nome="Nome do gasto:"
              value={nomeGasto}
              onChangeText={(e) => setNomegasto(e)}
            />
  
            <Input
              nome={`Quantia: ${quantia}`}
              value={String(quantia)}
              onChangeText={(e) => setQuantia(Number(e) || 0)}
              keyboardType="numeric"
            />
  
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
              <Botao titulo="Mais" texto="+" onPress={somar} style={style.btn2} />
              <Botao titulo="Apagar Historico" texto="Apagar" onPress={apagar} style={style.btn2} />
              <Botao titulo="Resetar Gastos" texto="Resetar" onPress={resetarTudo} style={style.btn2}/>
            </View>
  
              
            <Text style={[style.label, { color: themas.cores.pretoFonte }]}>Escolha um tipo de gasto:</Text>
            <Picker
              style={{ width: '80%', height: 50 , fontSize: 20}}
              selectedValue={gastos}
              onValueChange={(itemValue) => setGastos(itemValue)}
            >

              <Picker.Item label="Selecione..." value="" />
              <Picker.Item label="Necessidade" value="Necessidade" />
              <Picker.Item label="Desejos" value="Desejos" />
              <Picker.Item label="Investimento" value="Investimento" />
            </Picker>

            <Text style={[style.txtBlack, {fontSize: 15}]}>Necessidade: {necessidade} | Pode gastar: {objN}</Text>
            <Text style={[style.txtBlack, {fontSize: 15}]}>Desejos: {desejos} | Pode gastar: {objD}</Text>
            <Text style={[style.txtBlack, {fontSize: 15}]}>Investimento: {investimento} | Pode gastar: {objI}</Text>
            <Text style={[style.txtBlack, {fontSize: 15}]}>Total gasto: {investimento + desejos + necessidade}</Text>
          </View>
        </View>
  
        {/* Histórico de Gastos */}
        <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Histórico de Gastos</Text>
          <View style={style.gastos}>
            <Text>{histGastos}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
  
  
}