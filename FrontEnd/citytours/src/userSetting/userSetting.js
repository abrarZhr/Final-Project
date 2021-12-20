import axios from 'axios'
import { useState } from 'react';
import React from 'react';

const UserSetting = () => {

    const [username, setUsername] = useState("")  
    const [email, setEmail] = useState("")  
    const [password, setPassword] = useState("") 
    const [msg, setMsg] = useState(false) 
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const updatedUser = {
          userId: user._id,
          username,
          email,
          password
      }
      try {
          await axios.put("http://localhost:5000/app/user"+user._id, updatedUser)
          setMsg(true)
      } catch (err) {
          
      }
    }
  
    return (
      <div className="userSetting">

      <h3>heloo</h3>

        <div className="settings">
          <div className="settingsWrapper">
            <div className="settingsTitle">
              <span className="settingsTitleUpdate">My Account</span>
              <span className="settingsTitleDelete">Delete Account</span>
            </div>
            <form className="settingsForm" onSubmit={handleSubmit}>
              <label>Username</label>
              <input type="text" placeholder={user.username} onChange={e => setUsername(e.target.value)} />
              <label>Email</label>
              <input type="email" placeholder={user.email} onChange={e => setEmail(e.target.value)} />
              <label>Password</label>
              <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
              <button className="settingsSubmitButton" type="submit">
                Update
              </button>
              </form>
              {msg && (
                  <div style={{color: "green", fontSize: "20px"}}>Update Succssfuly...</div>
              )}
          </div>
        </div>
      </div>
    );
  };
  
  export default UserSetting;
  