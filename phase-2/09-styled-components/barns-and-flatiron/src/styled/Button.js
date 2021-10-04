import styled from "styled-components"
const Button = styled.div `
    background: ${props => props.primary? '#5cbded' : 'gold'};
    padding: 0.5em 2em;
    margin: 0 0.3em 0.3em 0;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    font-weight:400;
    color:white;
    & a{
        text-decoration:none;
        color:inherit;
    }
    &:hover{
        border-style: solid;
        border-color: black;
        }
  
`
export default Button