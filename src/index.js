import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import {
  Create,
} from './components';

import './bootstrap.css';
import './style.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await fetch('https://jsonplace-univclone.herokuapp.com/posts/');
      const data = await resp.json();
      console.log('data: ', data);
      setPosts(data)
    }
    fetchPosts();
  }, []);

  return <>
    <h1>
      Posts
    </h1>
    <Create />
    {
      posts.map(post => <div key={post.id}>
          <h3>{post.title}</h3>
          <div>{post.body}</div>
        </div>)
    }
  </>
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);