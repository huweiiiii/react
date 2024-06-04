import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { useStore } from "../../store";
import Test from './Test';
import TestCart from './TestCart';
import { title } from './login.module.scss';

const Login: React.FC = () => {
  console.log("Login");
  const { userStore } = useStore();
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);

  const StyledButton = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  `;
  const StyledInput = styled.input`
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    border: none;
    background-color: #f2f2f2;
  `;
  return (
    <div>
      <p className={title}>
        {userStore.isLogin?`当前登录的用户是：${userStore.name}`:"当前没有登录用户！"}
      </p>
      <p>
        <StyledInput ref={ref} type="text" />
        <StyledButton onClick={() => {
          userStore.login(ref.current!.value);
          setTimeout(() => {
            navigate('/');
          });
        }} > 登录 </StyledButton>
        <StyledButton onClick={() => userStore.logout()} > 退出 </StyledButton>
      </p>
      <Test />
      <TestCart />
    </div>
  )
}

export default observer(Login);