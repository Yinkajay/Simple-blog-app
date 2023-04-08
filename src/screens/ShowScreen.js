import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Context } from '../context/BlogContext'

const ShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    const { state } = useContext(Context)

    const blogPost = state.find(blogPost => blogPost.id === id)
    console.log(blogPost)
    return <View>
        <Text style={styles.title}>{blogPost.title}</Text>
        <Text >{blogPost.content}</Text>
    </View>
}



ShowScreen.navigationOptions = ({ navigation }) => {
    const id = navigation.getParam('id')
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', { id })}>
                <Feather style={styles.icon} name='edit' />
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: '400'

    },
    icon: {
        fontSize: 30,
    }
})

export default ShowScreen