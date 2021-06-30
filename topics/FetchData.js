import React, { useEffect, useState } from 'react';
import { SafeAreaView, ActivityIndicator, FlatList, Text, View, StyleSheet, StatusBar, ScrollView, Button,Image } from 'react-native';
import Header from './Header';
import { Appbar } from 'react-native-paper';
export default FetchData = () => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: 50,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    };
    onPressButton = () => {
        alert('You clicked the button!')
    }


    useEffect(() => {
        fetch('https://www.freetogame.com/api/games?sort-by=alphabetical')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (

        <ScrollView>
            <View style={{ flex: 1, padding: 24 }}>
                {isLoading ? <ActivityIndicator /> : (

                    <SafeAreaView style={styles.container}>
                        <Appbar style={styles.bottom}>
                            <Appbar.Content title=" DATA" />

                        </Appbar>

                        <FlatList
                            data={data}
                            
                            renderItem={({ item }) =>

                                <Text style={styles.item}
                                
                                >{item.title}, Year:{item.release_date},
                                <Image 
                source={{
                    uri: item.thumbnail
                  }}
                style={{
                   width:50,
                   height:50,
                    borderWidth:2,
                    borderColor:'#d35647',
                    resizeMode:'strecth',
                    justifyContent: 'left',
                    margin:5
                }}
            />
                                </Text>

                                
                                



                            }
                            

                            ItemSeparatorComponent={this.renderSeparator}

                        />
                    </SafeAreaView>

                )}
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    }
});