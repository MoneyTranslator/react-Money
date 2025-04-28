import { StyleSheet } from "react-native";
import { Dimensions, StatusBar } from 'react-native';
import { themas } from "../global/themes";



export const style=StyleSheet.create({


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

    baixo:{
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
        height: 100,
        width: '100%',
marginTop: 20,

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

btn:{

borderWidth: 2,
borderRadius:40,
width: "25%",
alignItems: "center",
justifyContent:"center",
backgroundColor: themas.cores.azul,
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