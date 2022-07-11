import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { get } from '../services/ApiCallBase';
import { User, Users } from '../types';
import "./List.css";

interface Props {
    input: string;
}

const List: React.FC<Props> =({ input }) => {
    const [data, setData] = useState<Users|[]|any>([]);
    const navigate = useNavigate();

    const getData = async () => {
        const data: Users = await get('https://api.github.com/users');
        setData(data);
        return data;
    }

    useEffect(()=>{
        getData();
    },[]);

    const viewUserDetails = (item: User) => {
        navigate('/user', {state: { user: item }});
    }

    //fix
    const filteredData = data.filter((el: User) => {
        // use rx_js search

        //if no input the return the original
        if (input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.login.toLowerCase().includes(input)
        }
    });
    

    // center align name and image
    return (
        <ul>
            {filteredData.map((item: User) => (
                <div key={item.id} onClick={() => viewUserDetails(item)} className="item">
                    <img src={item.avatar_url} alt={'user_avatar'} className="img" />
                    <p>{item.login}</p>
                </div>
            ))}
        </ul>
    )
}

export default List;