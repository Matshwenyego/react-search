import React from 'react';
import { useLocation } from "react-router-dom";
import {Location} from '../types';
import "./User.css";

const User: React.FC = () => {
    const location: Location = useLocation();    
    const { state } = location;
    const { user } = state;
    
    return (
        <div className="item">
            <img src={user.avatar_url} alt={'user_avatar'} className="image" />
            <p>{`Name: ${user.login}`}</p>
            <p>{`Github Link: ${user.html_url}`}</p>
            <p>{`Repos Link: ${user.repos_url}`}</p>
            <p>{`Site Admin: ${user.site_admin}`}</p>
        </div>
    )
}

export default User;