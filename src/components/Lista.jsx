import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


function Lista({ data }) {
    const [userData, setUserData] = useState(data)


    function carregaIcone(likeada) {
        return likeada ? require('../img/likeada.png') : require('../img/like.png')
    }

    function mostrarLikes() {
        let { likers } = userData;
        if (likers <= 0) {
            return;
        }
        return (
            <Text style={styles.likes}>{likers} {likers > 1 ? 'curtidas' : 'curtida'}</Text>
        )

    }

    function like() {
        if (userData.likeada === true) {
            setUserData({ ...userData, likeada: false, likers: userData.likers - 1 })
        } else {
            setUserData({ ...userData, likeada: true, likers: userData.likers + 1 })
        }
    }

    return (
        <View style={styles.areaFeed}>

            <View style={styles.viewPerfil}>
                <Image source={{ uri: userData.imgperfil }} style={styles.fotoPerfil}></Image>
                <Text style={styles.nomeUsuario}>{userData.nome}</Text>
            </View>
            <Image
                resizeMode='cover'
                style={styles.fotoPublicacao}
                source={{ uri: userData.imgPublicacao }}
            />
            <View style={styles.areaBtn}>
                <TouchableOpacity onPress={like}>
                    <Image
                        source={carregaIcone(userData.likeada)}
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
            {mostrarLikes()}
            <View style={styles.viewRodape}>
                <Text style={styles.nomeRodape}>{userData.nome}</Text>
                <Text style={styles.descRodape}>{userData.descricao}</Text>
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
        color: '#010101'
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
    }, likes: {
        fontWeight: 'bold',
        marginLeft: 5
    }
})


export default Lista;