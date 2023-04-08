import React, { useReducer, useState } from "react";
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";



const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogposts':
            return action.payload
        case 'add_blogpost':
            return [...state, { title: action.payload['title'], content: action.payload['content'], id: Math.floor(Math.random() * 9999) }]
        case 'delete_blopost':
            return state.filter((post) => post.id !== action.payload)
        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id
                    ? action.payload : blogPost
            })
        default:
            return state
    }
}

const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts')
        dispatch({
            type: 'get_blogposts',
            payload: response.data
        })
    }
}


const addBlogPost = (dispatch) => {
    // return (title, content, callback) => {
    //     dispatch({
    //         type: 'add_blogpost', payload: {
    //             title,
    //             content
    //         }
    //     })
    //     callback()
    // }
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', {
            title,
            content
        })
        callback()
    }
}

const editBlogPost = dispatch => {
    // return (id, title, content, callback) => {
    //     dispatch({
    //         type: 'edit_blogpost',
    //         payload: { id, title, content }
    //     })
    //     callback()
    // }
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts${id}`, {
            title, content
        })
        dispatch({
            type: 'edit_blogpost',
            payload: { id, title, content }
        })
        callback()
    }
}

const deleteBlogPost = (dispatch) => {
    // return (id) => {
    //     dispatch({ type: 'delete_blogpost', payload: id })
    // }
    return async id => {
        await jsonServer.delete(`/blogposts/${id}`)
        dispatch({ type: 'delete_blogpost', payload: id })
    }
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts }, [])

// const BlogContext = React.createContext({})


// const blogReducer = (state, action) => {
//     switch (action.type) {
//         case 'add_blogpost':
//             return [...state, { title: `Blog Post #${state.length + 1}` }]
//         default:
//             return state
//     }
// }

// export const BlogProvider = ({ children }) => {
//     // const [blogPosts, setBlogPosts] = useState([])

//     const [blogPosts, dispatch] = useReducer(blogReducer, [])

//     const addBlogPost = () => {
//         dispatch({type:'add_blogpost'})
//     }

//     return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
//         {children}
//     </BlogContext.Provider>
// }

// export default BlogContext  