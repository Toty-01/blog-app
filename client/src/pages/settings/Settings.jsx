import "./settings.css";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

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
    } else if (( updatedUser.email.length > 3 && updatedUser.password.length > 3) ) {
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true)
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
    }
  };

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
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Mot de passe</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            className="settingsSubmit" 
            type="submit"
          >
            Mettre à jour
          </button>
          {success ? (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Votre profil a bien été mit à jour
            </span>
          ) : (
            <span
              style={{ color: "tear", textAlign: "center", marginTop: "20px" }}
            >
              Pour mettre à jour votre profil, veuillez remplir au moins <b className="nombre">3</b> caractères dans chaque champs
            </span>
          )}
        </form>
      </div>
    </div>
  );
}