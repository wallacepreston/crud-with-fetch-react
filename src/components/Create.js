import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Create = () => {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log('title, description: ', title, description);
    
  }

  return <>
    <h3>
      Create a Post
    </h3>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="title" value={title} onChange={(ev) => setTitle(ev.target.value)}></input>
      <input type="text" placeholder="description" value={description} onChange={(ev) => setDescription(ev.target.value)}></input>
      <button type="submit" class="btn btn-outline-primary">Submit</button>
    </form>
  </>
}

export default Create;
