import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=1&per_page=9')
      .then(res => {
        setUsers(res.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleImageClick = (userId) => {
    navigate(`/user/${userId}`);
  };

  return (
    <div style={{ textAlign: 'center'}}>
      <h1>Home Page</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center'}}>
        
        {users.map(user => (
          <div key={user.id} style={{ cursor: 'pointer' }}>
            <img
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
              onClick={() => handleImageClick(user.id)}
              style={{ width: '250px', height: '250px'}}
            />
            <h3>{user.first_name} {user.last_name}</h3>
          </div>
        ))}
        </div>
      <Link to="/menu">메뉴 페이지로 고고</Link>
    </div>
  );
};

export default Home;

// /users의 배열을 Card에 넣는다
// 과제 예시 화면입니다.
// https://reqres.in/api/users?page=1&per_page=9 
// axios get 연결하고 앞선 세션에서 진행한 map 활용해서 코드 작성하시면 됩니다!
// User 페이지에서는 useparams을 활용하여 오늘 사용한 /users/{id} get 연결로 진행하시면 됩니다. 
// 화이팅하시고 수욜에 뵙겠습니다!!