import React, { useEffect, useState } from "react";
import { View, FlatList, Image, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { ALERT_TYPE, AlertNotificationRoot, Dialog } from 'react-native-alert-notification';

const numColumns = 3;
const getImageById = (id) => imagePaths[id] || null;

const imagePaths = {
    1: require('../../assets/img/ka.jpg'),
    2: require('../../assets/img/ki.jpg'),
    3: require('../../assets/img/mizu.png'),
    4: require('../../assets/img/tsuchi.png'),
    5: require('../../assets/img/kaze.jpg'),
    6: require('../../assets/img/hana.jpg'),
    8: require('../../assets/img/neko.jpg'),
    9: require('../../assets/img/inu.png'),
    10: require('../../assets/img/tori.png'),
    11: require('../../assets/img/umi.jpg'),
    12: require('../../assets/img/yama.png'),
    13: require('../../assets/img/ie.jpg'),
    14: require('../../assets/img/nihon.jpg'),
    15: require('../../assets/img/hito.jpg'),
    16: require('../../assets/img/watashi.jpg'),
    17: require('../../assets/img/anata.gif'),
    18: require('../../assets/img/sakura.png'),
    19: require('../../assets/img/sora.jpg'),
    20: require('../../assets/img/kumo.jpg'),
    21: require('../../assets/img/tsuki.jpg'),
    22: require('../../assets/img/taiyo.png'),
    23: require('../../assets/img/ame.jpg'),
    24: require('../../assets/img/yuki.png'),
    25: require('../../assets/img/hoshi.jpg'),
    26: require('../../assets/img/kawa.jpg'),
    27: require('../../assets/img/mori.png'),
    28: require('../../assets/img/hai.jpg'),
    29: require('../../assets/img/hanabi.jpg'),
    30: require('../../assets/img/kazan.jpg'),
};

const ListaRepos = () => {
    const [repos, setRepos] = useState([]); 

    useEffect(() => {
        fetch('https://6524e533ea560a22a4ea3977.mockapi.io/Kanjis')
            .then(response => response.json())
            .then(data => setRepos(data))
            .catch(error => console.error('Error al obtener datos de la API:', error));
    }, []);

    const showKanjiDetails = (repo) => {
        Dialog.show({
            type: ALERT_TYPE.WARNING,
            title: repo.simbolo,
            textBody: 'Este kanji se lee como: ' + '"' + repo.romanji + '"' + ' y significa: ' + '"' + repo.sig + '"',
            button: 'Cerrar',
        });

    };

    return (
        <AlertNotificationRoot>
            <FlatList
                data={repos} 
                renderItem={({ item: repo }) => (
                    <TouchableNativeFeedback
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        onPress={() => showKanjiDetails(repo)}>
                        <View key={repo.id} style={styles.element}>
                            <Image source={getImageById(repo.id)} style={styles.elementImage} />
                        </View>
                    </TouchableNativeFeedback>
                )}
                keyExtractor={(repo) => repo.id.toString()} 
                numColumns={numColumns}
                style={styles.content} />
        </AlertNotificationRoot>
    )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    element: {
        backgroundColor: '#082051',
        width: 110,
        height: 90,
        aspectRatio: 1,
        margin: 10,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    elementImage: {
        width: '100%',
        height: '100%',
    },
});

export default ListaRepos;
