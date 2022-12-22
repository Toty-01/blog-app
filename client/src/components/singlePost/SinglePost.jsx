import './singlepost.css'
import { useLocation, Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from "axios"

export default function SinglePost() {
  const location = useLocation();
  const path = (location.pathname.split("/")[2]);
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path)
      setPost(res.data);
    };
    getPost()
  },[path])

  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={post.photo} alt="" className="singlePostImg" />
        )}
      <h1 className='singlePostTitle'>{post.title}
        <div className="singlePostEdit">
          <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
          <i className="singlePostIcon fa-solid fa-trash-can"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className='singlePostAutor'>Auteur: 
          <Link className='link' to={`/?user=${post.username}`}>
            <b className='aut'> {post.username}</b>
          </Link>
        </span>
        <span className='singlePostDate'>Créé le {new Date(post.createdAt).toLocaleDateString("fr")}</span>
      </div>
        <p className='singlePostDesc'>
          {post.desc}
        </p>
      </div>
    </div>
  )
}
