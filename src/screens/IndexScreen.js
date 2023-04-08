import React, { useContext, useEffect } from "react";
import { Button, FlatList, ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
// import BlogContext from "../context/BlogContext";
import { Context } from "../context/BlogContext";
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";


const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost, getBlogPosts } = useContext(Context)

    useEffect(() => {
        getBlogPosts()

        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts()
        })

        return()=>{
            listener.remove()
        }
    }, [state])

    return (
        <View>
            {/* <Button title="Add post" onPress={addBlogPost} /> */}
            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title}-{item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather style={styles.icon} name="trash" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>

    )
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate(('Create'))}>
                <Feather style={styles.icon} name="plus" size={40} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        // paddingHorizontal: 10,
        marginHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 30,
    }

})

export default IndexScreen