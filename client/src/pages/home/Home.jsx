import { useEffect, useState } from "react"
import "./home.css"
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from "../../components/sidebar/Sidebar"
import axios from "axios"

const Home = () => {
  const [posts,setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      console.log(res)
    }
    fetchPosts()
  },[])

  return (
    <>
      <Header />
      <div className='Home'>
        <Posts />
        <Sidebar />
      </div>
    </>
  )
}

export default Home