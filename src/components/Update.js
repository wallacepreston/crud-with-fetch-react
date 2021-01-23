import React, { useState } from 'react';

const Update = ({posts, setPosts, postId, setPostId}) => {
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log('title, body: ', title, body);
    const resp = await fetch(`https://jsonplace-univclone.herokuapp.com/posts/${postId}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify({
        title,
        body,
      })
    });
    const data = await resp.json();
    if(data && data.title) {
      const newPosts = posts.map(post => {
        if(post.id === postId) {
          return {title, body, id: postId}
        } else {
          return post;
        }
      })
      setPosts(newPosts);
      setTitle('');
      setBody('');
      setPostId(null);
    }
  }

  return <>
    <h3>
      Update a Post
    </h3>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="title" value={title} onChange={(ev) => setTitle(ev.target.value)}></input>
      <input type="text" placeholder="body" value={body} onChange={(ev) => setBody(ev.target.value)}></input>
      <button type="submit" class="btn btn-outline-primary">Submit</button>
    </form>
  </>
}

export default Update;
