import { StyleSheet } from "react-native";
import { Dimensions, StatusBar } from 'react-native';
import { themas } from "../global/themes";
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';



export const style=StyleSheet.create({
    dintitulo:{

fontSize: 30,
color: themas.cores.preto,

    },

    dinheiro:{

fontSize: 20,



    },

    cimao:{
height: StatusBar.currentHeight,
    },

    topo:{
alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.cores.cinzaTransparente,
        height: 'auto',
        width: '100%',
        borderWidth: 1,
        borderRadius: "5%",
        marginBottom: 20,
  
    },

    meio:{
        alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: themas.cores.transparente,
                height: 'auto',
                width: '100%',
                borderWidth: 1,
                borderRadius: "5%",
                marginBottom: 20,
            },

    txt:{

        color: themas.cores.bonito,
        fontSize: 10,
        fontWeight: 'bold',
    },

    label: { marginBottom: 10, fontSize: 16 },
    picker: { height: 50, width: '100%', borderWidth: 1, borderRadius: 40,},

    baixo: {
        alignItems: 'center',
        paddingTop: 20,
        width: '100%',
        flex: 1, 
      },


    txtinpt:{

        height: Dimensions.get('window').height * 0.1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius : 40,
        borderWidth: 2,
        borderColor: 'black',
        marginBottom:10,
        
            },

            bigtxt:{

                fontSize: 30,
                fontWeight: 'bold',
                color: themas.cores.bonito,
                fontFamily: "sans-serif",
                textAlign: 'center',
                marginTop: 20,
                marginBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',

            },

images:{

backgroundColor: 'red',


    alignItems:'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    

},


titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: themas.cores.bonito, 
    textAlign: "center",
    marginVertical: 20,
    textShadowColor: themas.cores.preto,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    fontFamily: "Poppins_700Bold",
},


btn: {
    borderWidth: 2,
    borderColor: themas.cores.azul, // define a cor da borda para combinar
    borderRadius: 50,
    width: "60%", // mais largo para dar presença
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: themas.cores.azul,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8, // sombra no Android
  },
  
logo:{

width: Dimensions.get("window").width *0.3,
height: Dimensions.get("window").width *0.3,


},
butoes:{
flex:1,
flexDirection: "row",
},

            img:{

                width: Dimensions.get('window').height *0.1,
               height: Dimensions.get('window').height *0.1,


            }

})