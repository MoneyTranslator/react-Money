import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView, SafeAreaView } from "react-native";
import { style } from "../styles/style";
import React from 'react';
import { useFonts } from 'expo-font';
import { Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Link, router, useRouter } from 'expo-router';
import { Botao } from '../components/botao';
import { themas } from '../global/themes';

export default function App() {


const router= useRouter();



    function voltar(){
     
            router.back();
     
    }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themas.cores.claro }}>
      <ScrollView contentContainerStyle={{ padding: 20, alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontFamily: 'Poppins_700Bold', textAlign: 'center', marginBottom: 10 }}>
  Como utilizar o aplicativo?
</Text>
<Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 20 }}>
  O aplicativo está dividido em três áreas principais. A seguir, explicamos como cada uma funciona:
</Text>

<Image source={require("../imgs/exp1.jpg")} style={{ width: '90%', height: 200, resizeMode: 'contain', marginBottom: 10 }} />
<Text style={{ fontSize: 14, textAlign: 'center', marginBottom: 20 }}>
  📍 <Text style={{ fontWeight: 'bold' }}>Dinheiro Total</Text>: Nesta seção, você poderá informar o valor total disponível. A partir disso, o aplicativo calculará automaticamente metas personalizadas para você.
</Text>

<Image source={require("../imgs/exp2.jpg")} style={{ width: '90%', height: 200, resizeMode: 'contain', marginBottom: 10 }} />
<Text style={{ fontSize: 14, textAlign: 'center', marginBottom: 20 }}>
  📝 <Text style={{ fontWeight: 'bold' }}>Adicionar Gastos</Text>: Aqui, você poderá registrar um gasto informando seu nome e valor. O sistema calculará automaticamente a porcentagem correspondente em relação ao seu saldo total.
</Text>

<Image source={require("../imgs/exp3.jpg")} style={{ width: '90%', height: 200, resizeMode: 'contain', marginBottom: 10 }} />
<Text style={{ fontSize: 14, textAlign: 'center', marginBottom: 20 }}>
  💬 <Text style={{ fontWeight: 'bold' }}>Exemplo de Gasto</Text>: Por exemplo, ao registrar uma conta de luz, basta classificá-la como "necessidade", informar o nome e o valor correspondente.
</Text>

<Image source={require("../imgs/exp4.jpg")} style={{ width: '90%', height: 200, resizeMode: 'contain', marginBottom: 10 }} />
<Text style={{ fontSize: 14, textAlign: 'center', marginBottom: 20 }}>
  ⚙️ <Text style={{ fontWeight: 'bold' }}>Histórico de Gastos</Text>: Esta seção exibe todos os seus registros anteriores, com informações detalhadas sobre data e horário (ano, mês, dia e hora) em que cada gasto foi realizado.
</Text>


<Botao onPress={voltar} texto='Voltar'>  </Botao>      
</ScrollView>
    </SafeAreaView>
  );
}
