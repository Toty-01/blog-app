import './post.css'
import imge from '../img/img (2).jpg'
import { Link } from 'react-router-dom';

export default function Post() {
  return (
    <div className="post">
      <img className='postImg' src={imge} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className='Postcat'>Music </span>
          <span className='Postcat'>Life</span>
        </div>
        <span className="postTitle">
          <Link className='link' to="/post">Lorem obcaecati quibusdam.</Link></span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className='postDescription'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse asperiores fugit magni culpa vero nobis necessitatibus numquam facere quos amet cupiditate, ex aut aliquam nemo deleniti totam voluptas maiores libero?
        Qui et repudiandae eveniet accusamus quos iste quo dicta itaque veniam commodi. Aspernatur quaerat ad omnis repellat, magnam commodi. Quae similique at possimus voluptatibus earum esse in labore omnis illum.
      </p>
    </div>
  )
}
