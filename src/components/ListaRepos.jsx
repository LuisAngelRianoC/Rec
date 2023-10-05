import React from "react";
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native'
import Repositorio from "../data/Repositorio";

const numColumns = 3;

const ListaRepos = () => {
    return (
        <FlatList
            data={Repositorio}
            renderItem={({ item: repo }) => (
                <View key={repo.id} style={styles.element}>
                    <Image source={repo.imagen} style={styles.elementImage} />
                </View>
            )}
            keyExtractor={(repo) => repo.id}
            numColumns={numColumns}
            style={styles.content} />
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

export default ListaRepos