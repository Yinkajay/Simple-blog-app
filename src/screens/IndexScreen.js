import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import BlogContext from "../context/BlogContext";


const IndexScreen = () => {
    const value = useContext(BlogContext)
    return (
        <View>
            <Text>Index Screen</Text>
            <Text>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default IndexScreen