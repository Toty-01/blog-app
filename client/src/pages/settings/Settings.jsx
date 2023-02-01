import "./settings.css";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
      }
    }
    if (email.length > 3 && password.length > 3) {
    const res = await axios.put("/users/" + user._id, updatedUser);
    setSuccess(true);
    dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    alert('Profil mit à jour')
    } else {
    dispatch({ type: "UPDATE_FAILURE" });
    setError(true);
    }
  }

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Mise à jour</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Photo de profil</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF+user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
            <div className="inputs">
            <label>Email</label>
            <input
              className="inp"
              type="email"
              placeholder={user.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Mot de passe</label>
            <input
              className="inp"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button 
            className="settingsSubmit" 
            type="submit"
          >
            Mettre à jour
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Votre profil a bien été mit à jour
            </span>
          )}
          {error && (
            <span
              style={{ color: "red", textAlign: "center", marginTop: "20px" }}
            >
              Votre profil n'a pas pu être mit à jour, veillez à saisir plus de 3 caractères
            </span>
          )}
        </form>
      </div>
    </div>
  );
}