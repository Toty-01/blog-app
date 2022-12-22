import './post.css'
import { Link } from 'react-router-dom';

export default function Post({post}) {
  return (
    <div className="post">
      {post.photo && (
        <img className='postImg' src={post.photo} alt="" />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
             <span key={c} className='Postcat'>{c.name}</span> 
          ))}
        </div>
          <Link className='link' to={`/post/${post._id}`}>
            <span className="postTitle">{post.title}</span>
          </Link>
        <hr />
        <span className="postDate">Créé le {new Date(post.createdAt).toLocaleDateString("fr")}</span>
      </div>
      <p className='postDescription'>
        {post.desc}
      </p>
    </div>
  )
}
