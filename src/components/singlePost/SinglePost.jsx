import './singlepost.css'
import img from '../img/img (3).jpg'

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src={img} alt="" className="singlePostImg" />
      <h1 className='singlePostTitle'>Lorem ipsum
        <div className="singlePostEdit">
          <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
          <i className="singlePostIcon fa-solid fa-trash-can"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className='singlePostAutor'>Autor: <b>Toto </b></span>
        <span className='singlePostDate'>1 hour ago</span>
      </div>
        <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi veniam autem assumenda, illo placeat, 
          distinctio ratione nihil ut exercitationem ex necessitatibus. Eum adipisci pariatur doloribus laborum rnatur, unde.
          Commodi veniam autem assumenda, illo placeat, Commodi veniam autem assumenda, illo placeat, 
          distinctio ratione nihil ut exercitationem ex necessitatibus. Eum adipisci pariatur doloribus laborum rnatur, unde.
          distinctio ratione nihil ut exercitationem ex necessitatibus. Eum adipisci pariatur doloribus laborum rnatur, unde.Commodi veniam autem assumenda, illo placeat, 
          distinctio ratione nihil ut exercitationem ex necessitatibus. Eum adipisci pariatur doloribus laborum rnatur, unde.
        </p>
      </div>
    </div>
  )
}
