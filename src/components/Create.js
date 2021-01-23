import React, { useState } from 'react';

const Create = ({posts, setPosts}) => {
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log('title, body: ', title, body);
    const resp = await fetch('https://jsonplace-univclone.herokuapp.com/posts/', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify({
        title,
        body,
      })
    });
    const data = await resp.json();
    setPosts([data, ...posts]);
    setTitle('');
    setBody('');
  }

  return <>
    <h3>
      Create a Post
    </h3>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="title" value={title} onChange={(ev) => setTitle(ev.target.value)}></input>
      <input type="text" placeholder="body" value={body} onChange={(ev) => setBody(ev.target.value)}></input>
      <button type="submit" class="btn btn-outline-primary">Submit</button>
    </form>
  </>
}

export default Create;
