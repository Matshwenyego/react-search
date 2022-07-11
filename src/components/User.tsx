import React from 'react';
import { useLocation } from "react-router-dom";
import {Location} from '../types';
import "./List.css";



const User: React.FC = () => {
    const location: Location = useLocation();    
    const { state } = location;
    const { user } = state;
    return (
        <div className="item">
            <img src={user.avatar_url} alt={'user_avatar'} className="img" />
            <p>{user.login}</p>
        </div>
    )
}

export default User;