import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Register from "./pages/register/Register";
import Post from './components/post/Post'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Contact from "./pages/contact/Contact";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />}/>
        <Route path="/post" element={<Post />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
