import React, { useContext, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const CreateScreen = ({ navigation }) => {

    const { addBlogPost } = useContext(Context)

    // return <View>
    //     <Text style={styles.label}>Enter Title</Text>
    //     <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)} />
    //     <Text style={styles.label}>Enter Blog Content:</Text>
    //     <TextInput style={styles.input} value={content} onChangeText={content => setContent(content)} />
    //     <Button title='Add Blog Post' onPress={() => {
    //         addBlogPost(title, content, () => {
    //             navigation.navigate('Index')
    //         });
    //     }} />
    // </View>

    return <BlogPostForm onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Index'))
    }} />

}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 0.5,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5

    }
})

export default CreateScreen