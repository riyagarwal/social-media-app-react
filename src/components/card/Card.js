import './Card.css'

function Card({id, title, likes}) {
  return (
    <>
        <img src='' />
        <p>User ID: {id}</p>
        <p>Title: {title}</p>
        <p>Likes: {likes}</p>
        <button>Like Post</button>
    </>
  )
}

export default Card