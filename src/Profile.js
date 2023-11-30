import React from 'react';
import { useState } from 'react';
import Info from './Info';
import Form from './Form';
import Output from './Output';
import './Profile.css';


function Profile() {
    const [name, setName] = useState("");
    const[horo, setHoro]= useState("");
    const [mbti, setMBTI] = useState("");
    const [enne, setEnne] = useState("");
    const [photo, setPhoto] = useState("");

    const [showOutput, setShowOutput] = useState(false);

    return (
        <div className="profile-page">
            <div className="editing-profile">
                <h1>Your Profile</h1>
                <Output name={name} horo={horo} mbti={mbti} enne={enne} photo={photo} />
                <h1>Edit Profile</h1>
                <Form
                    className="profile_input"
                    name={name} setName={setName}
                    horo={horo} setHoro={setHoro}
                    mbti={mbti} setMBTI={setMBTI}
                    enne={enne} setEnne={setEnne}
                    photo={photo} setPhoto={setPhoto}
                    showOuput={showOutput} setShowOutput={setShowOutput}
                />
            </div>
            <Info/>
        </div>
        // <p>This is the edit profile/settings page.</p>
    )
}

export default Profile