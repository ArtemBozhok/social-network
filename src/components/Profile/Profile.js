import React from "react";
import style from './Profile.module.css';
import Posts from "./Posts/Posts";
import ProfileInfo from "./Profile-info/Profile-info";
import ProfileForm from "./Profile-form/Profile-form";

const Profile = () => {
    return (
        <main>
            <div className="profile">
                <ProfileInfo/>
                <ProfileForm/>
                <Posts/>
            </div>
        </main>
    )
}

export default Profile;