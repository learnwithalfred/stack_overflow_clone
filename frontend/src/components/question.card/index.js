import React from 'react'

function Index({ name, description, imageUrl, createdAt }) {
  return (
    <>
      <ul>
        <li>{name}</li>
        <li>{description}</li>
        <li>{createdAt}</li>
        <img src={imageUrl} alt={name} />
      </ul>
    </>
  );
}

export default Index
