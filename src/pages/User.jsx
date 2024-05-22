import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${userId}`)
      .then(res => {
        setUser(res.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [userId]);

  return (
    <div>
      
        <div>
          <h1>User Inforation</h1>
          <img src={user.avatar}  alt={`${user.first_name} ${user.last_name}`} style={{ width: '200px', height: '200px'}} />
          <h1>{`${user.first_name} ${user.last_name}`}</h1>
          <p>Email: {user.email}</p>
        </div>
      
    </div>
  );
};

export default User;
