import { createContext, useContext, useEffect, useState } from 'react';
import { useReducer } from 'react';

const BlogContext = createContext();

const initialState = {
  posts: [],
  isLoading: false,
  error: '',
  currentPost: {},
  search: '',
};
function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return { ...state, isLoading: true };
    case 'create/post':
      return {
        ...state,
        isLoading: false,
        posts: [...state.posts, action.payload],
      };
    case 'reject':
      return { ...state, error: action.payload, isLoading: false };
    case 'get/post':
      return { ...state, isLoading: false, currentPost: action.payload };
    case 'get/posts':
      return { ...state, isLoading: false, posts: action.payload };
    case 'delete/post':
      return {
        ...state,
        currentPost: {},
        isLoading: false,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case 'search':
      return {
        ...state,
        isLoading: false,
        search: action.payload,
        posts:
          state.search !== ''
            ? state.posts.filter((post) =>
                `${post.title} ${post.category}  ${post.summary}`
                  .toLocaleLowerCase()
                  .includes(state.search)
              )
            : state.posts,
      };
    default:
      return { initialState, error: 'unknown action type' };
  }
}

function BlogProvider({ children }) {
  const [{ isLoading, error, currentPost, posts }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const BASE_URL = 'http://localhost:8000';
  useEffect(() => {
    const getBlogs = async () => {
      dispatch({ type: 'loading' });
      try {
        const response = await fetch(`${BASE_URL}/posts`);
        const data = await response.json();
        dispatch({ type: 'get/posts', payload: data });
      } catch (e) {
        dispatch({ type: 'reject', payload: 'unable to fetch blog ' });
      }
    };

    getBlogs();
  }, []);

  async function createBlog(newBlog) {
    try {
      dispatch({ type: 'loading' });
      const response = await fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        body: JSON.stringify(newBlog),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      dispatch({ type: 'create/post', payload: data });
    } catch (e) {
      dispatch({ type: 'reject', payload: e });
    }
  }

  async function getCity(id) {
    try {
      dispatch({ type: 'loading' });
      const response = await fetch(`${BASE_URL}/posts/${id}`);
      const data = await response.json();
      dispatch({ type: 'get/post', payload: data });
    } catch (e) {
      dispatch({ type: 'reject', payload: 'something went wrong' });
    }
  }
  //deletePost last

  async function searchQuery(data) {
    dispatch({ type: 'search', payload: data });
  }
  return (
    <BlogContext.Provider
      value={{
        isLoading,
        posts,
        currentPost,
        createBlog,
        getCity,
        error,
        searchQuery,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

function useBlogContext() {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('Porvider was use outside of the context ');
  }
  return context;
}

export { BlogProvider, useBlogContext };
