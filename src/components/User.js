import React from 'react';
import UserCard from './UserCard';


const User = (props) =>{
    const data = props.data.map((info) => {
        return <UserCard data={info}/>
    });
    return <div>{data}</div>;
    };
   

export default User;