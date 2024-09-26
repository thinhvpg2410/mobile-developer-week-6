import React, {useEffect, useState} from 'react';
import {View, Image, Button, Text, StyleSheet, FlatList, ScrollView} from "react-native";
import {log} from "expo/build/devtools/logger";

const ChatWithShop = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setData(json))
    }, []);


    const Item = ({title, shop, image}) => (
        <View style={styles.itemContainer}>
            <Image source={{uri: image}} style={styles.image}/>
            <View style={styles.infoContainer}>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}>{title}</Text>
                <Text
                    style={{
                        color: '#555',
                    }}>Shop: {shop}</Text>
            </View>
            <Button title="Chat" onPress={() => {
            }} color="#FF0000"/>
        </View>


    )
    return (

        <ScrollView style={{
            flex: 1,
        }}>
            <View style={{padding: 10}}>
                <Text
                    style={{
                        color: "#aaa"
                    }}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chat với shop!</Text>
            </View>
            <View style={{padding: 10}}>
                <FlatList
                    data={data}
                    renderItem={
                        ({item}) =>
                            <Item title={item.title}
                                  shop={item.category}
                                  image={item.image}/>}/>
            </View>

        </ScrollView>
    );
};

export default ChatWithShop;

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {width: 0, height: 2},
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 5,
        resizeMode: 'contain',
    },
    infoContainer: {
        flex: 1,
        marginLeft: 10,
    },

})