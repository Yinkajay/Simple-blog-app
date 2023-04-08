import React, { useState } from 'react'
import { Button } from 'react-native';
import { View } from 'react-native';
import { TextInput } from 'react-native';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native'

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)

    return <View>
        <Text style={styles.label}>Enter Title</Text>
        <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)} />
        <Text style={styles.label}>Enter Blog Content:</Text>
        <TextInput style={styles.input} value={content} onChangeText={content => setContent(content)} />
        <Button title='Save blog post'
            onPress={() => onSubmit(title, content)}
        />
    </View>
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '', 
        content: ''
    }
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

export default BlogPostForm