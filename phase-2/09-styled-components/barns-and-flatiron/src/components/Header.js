import {Link} from 'react-router-dom'
import styled from 'styled-components';
function Header({storeName}){
    return(
      <HeaderContainer>
        <NavWrapper>
          <Link to="/books/new">New Form</Link>
          <Link to="/books">Book List</Link>
        </NavWrapper>
        <h1>{storeName}</h1>
      </HeaderContainer>
    )
  }
  //Exporting Header
  export default Header;
  
  const HeaderContainer = styled.div `
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    & h1{
      width: 100%; 
      text-align: center;
    }
  `

const NavWrapper = styled.ul`
  margin: 0;
  background:#5cbded;
  display:flex;
  justify-content: flex-end;
  & a {
    text-decoration:none;
    color: white;
    padding: 0.5em 2em;
    margin:0 0.3em 0.3em 0;
    &:hover{
      border-style:solid;
      border-width: 0.1em;
      padding: 0.3em 1em;
    }
  }
  

`