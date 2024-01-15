import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


function Lista({ data }) {
    const [userData, setUserData] = useState(null)


    return (
        <View style={styles.areaFeed}>

            <View style={styles.viewPerfil}>
                <Image source={{ uri: data.imgperfil }} style={styles.fotoPerfil}></Image>
                <Text style={styles.nomeUsuario}>{data.nome}</Text>
            </View>
            <Image
                resizeMode='cover'
                style={styles.fotoPublicacao}
                source={{ uri: data.imgPublicacao }}
            />
            <View style={styles.areaBtn}>
                <TouchableOpacity>
                    <Image
                        source={require('../img/like.png')}
                        style={styles.iconeLike}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../img/send.png')}
                        style={styles.iconeLike}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.viewRodape}>
                <Text style={styles.nomeRodape}>{data.nome}</Text>
                <Text style={styles.descRodape}>{data.descricao}</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    areaFeed: {

    },
    nomeUsuario: {
        fontSize: 22,
        textAlign: 'left',
        color: '#000'
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    fotoPublicacao: {
        flex: 1,
        height: 400,
        alignItems: 'center'
    },
    viewPerfil: {
        flexDirection: 'row',
        flex: 1,
        gap: 4,
        alignItems: 'center',
        padding: 8
    }, areaBtn: {
        flexDirection: 'row',
        gap: 8,
        padding: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
    }, iconeLike: {
        height: 33,
        width: 33,
    },
    viewRodape: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingLeft: 5
    },
    descRodape: {
        fontSize: 15,
        color: '#000'
    },
    nomeRodape: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})


export default Lista;