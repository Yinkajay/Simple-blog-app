import React, { useContext, useState } from 'react'
import { Button, Text } from 'react-native'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import { Context } from '../context/BlogContext'
import { TextInput } from 'react-native'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ navigation }) => {
    console.log(navigation)
    const { state, editBlogPost } = useContext(Context)

    const id = navigation.getParam('id')
    const blogPost = state.find(post => post.id === id)


    // return <View>
    //     <Text>Post - {blogPost.title}</Text>

    //     <Text style={styles.label}>Edit Title</Text>
    //     <TextInput style={styles.input} value={newTitle} onChange={title => setNewTitle(title)} />
    //     <Text style={styles.label}>Edit Content</Text>
    //     <TextInput style={styles.input} value={newContent} onChange={content => setNewContent(content)} />
    //     <Button title='Make Changes' onPress={() => { }} />
    // </View>

    return <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {
            editBlogPost(id, title, content, () => navigation.pop())
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

export default EditScreen