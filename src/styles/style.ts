import { StyleSheet, Dimensions, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { themas } from "../global/themes";

const { width, height } = Dimensions.get('window');

export const style = StyleSheet.create({
  dintitulo: {
    fontSize: RFValue(28),
    color: themas.cores.preto,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Montserrat-Bold',
  },

  dinheiro: {
    fontSize: RFValue(20),
    fontWeight: '600',
    fontFamily: 'Montserrat-Regular',
  },

  cimao: {
    height: StatusBar.currentHeight,
  },

  topo: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themas.cores.cinzaTransparente,
    padding: 16,
    width: '100%',
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 2,
  },

  txtBlack: {
    color: themas.cores.pretoFonte,
    fontSize: 20,
  },

  txtAzul: {
    color: themas.cores.azulNoite,
  },

  meio: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themas.cores.claro,
    padding: 16,
    width: '100%',
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
  },

  principal: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: themas.cores.azul,
    width: "90%",
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: themas.cores.cinzaTransparente,
  },

  escolha: {
    height: 50,
    width: '100%',
    backgroundColor: themas.cores.azul,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
    fontFamily: 'Montserrat-Medium',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },

  txt: {
    color: themas.cores.azulNoite,
    fontSize: RFValue(18),
    fontWeight: 'bold',
    fontFamily: 'Montserrat-SemiBold',
  },

  label: {
    marginBottom: 8,
    fontSize: RFValue(16),
    fontFamily: 'Montserrat-Regular',
  },

  picker: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },

  baixo: {
    alignItems: 'center',
    paddingTop: 20,
    width: '100%',
    flex: 1,
  },

  gastos: {
    borderWidth: 1.5,
    borderColor: themas.cores.azul,
    width: "90%",
    padding: 10,
    borderRadius: 12,
    backgroundColor: themas.cores.cinzaTransparente,
    marginBottom: 16,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },

  modificar: {
    borderWidth: 1.5,
    borderColor: themas.cores.azul,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    width: '90%',
    borderRadius: 12,
    backgroundColor: themas.cores.cinzaTransparente,
  },

  txtinpt: {
    height: height * 0.06,
    width: width * 0.85,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    fontSize: RFValue(16),
    marginBottom: 10,
    color: themas.cores.preto,
    fontFamily: 'Roboto-Regular',
    textAlign: "center",
justifyContent: "center",
alignItems: "center",
  },

  btn2:{

borderWidth: 2,
borderRadius: 10,
borderColor: themas.cores.azulNoite,
textAlign: "center",
justifyContent: "center",
alignItems: "center",
backgroundColor: themas.cores.azul,

  },

  bigtxt: {
    fontSize: RFValue(28),
    fontWeight: 'bold',
    color: themas.cores.pretoFonte,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  images: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginTop: 10,
  },

titulo: {
  fontSize: RFValue(32),
  fontWeight: "bold",
  textAlign: "center",
  marginVertical: 20,
  color: themas.cores.pretoFonte,
  fontFamily: "Montserrat-Bold",
  justifyContent: "center",
  alignItems: "center",
},

  btn: {
    borderWidth: 2,
    borderColor: themas.cores.azul,
    borderRadius: 50,
    width: Dimensions.get('window').width * 0.8,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: themas.cores.verde,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    fontFamily: 'Montserrat-Medium',
  },

  logo: {
    width: width * 0.3,
    height: width * 0.3,
    resizeMode: 'contain',
  },

  butoes: {
    flexDirection: "row",
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 10,
  },

  img: {
    width: height * 0.2,
    height: height * 0.2,
    resizeMode: 'cover',
    borderRadius: 10,
  }
});
