import React, { useContext } from "react";
import { Button, FlatList, ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
// import BlogContext from "../context/BlogContext";
import { Context } from "../context/BlogContext";
import {Feather} from '@expo/vector-icons'


const IndexScreen = () => {
    const { state, addBlogPost } = useContext(Context)
    return (
        <View>
            <Button title="Add post" onPress={addBlogPost} />
            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return <View>
                        <Text>{item.title}</Text>
                        
                    </View>
                }}
            />
        </View>

    )
}

const styles = StyleSheet.create({})

export default IndexScreen