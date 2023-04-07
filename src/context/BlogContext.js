import React, { useReducer, useState } from "react";
import createDataContext from "./createDataContext";



const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: `Blog Post #${state.length + 1}` }]
        default:
            return state
    }
}
const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'add_blogpost' })
    }
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost }, [])

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