import styled from "styled-components";
//Method from react
import {useContext} from 'react'
//Context we created 
import {RoseContext} from '../context/user'

function UserInfo(){
//TODO:Have user information render in the header
const user = useContext(RoseContext)
    return(
      <UserContainer>
       <img src={user.img} />
       <h3>{user.username}</h3>
      </UserContainer>
    )
  }
  export default UserInfo;

  const UserContainer = styled.div `
    display:flex;
    align-items: center;
    & img{
    width:100px;
    border-radius: 50%;
    }
  `