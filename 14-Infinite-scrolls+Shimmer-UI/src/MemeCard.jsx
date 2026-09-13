import React from 'react'

const MemeCard = ({memeData}) => {

    const {url, title, author} = memeData; 
  return (
    <div className="p-5 m-5 border border-zinc-400 rounded-lg">
         <img className="h-64 w-64" src={url} alt="meme" />
         <p>{author}</p>
    </div>
  )
}

export default MemeCard;