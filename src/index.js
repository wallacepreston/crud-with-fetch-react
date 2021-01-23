import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import {
  Create,
  Update,
} from './components';

import './bootstrap.css';
import './style.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState(null);

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
    { 
      postId 
        ? <Update posts={posts} setPosts={setPosts} postId={postId} setPostId={setPostId}/> 
        : <Create posts={posts} setPosts={setPosts} />
    }
    {
      posts.map(post => <div key={post.id}>
          <h3>{post.title}</h3>
          <div>{post.body}</div>
          <button type="button" class="btn btn-outline-primary" onClick={() => setPostId(post.id)}>Edit</button>
        </div>)
    }
  </>
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);