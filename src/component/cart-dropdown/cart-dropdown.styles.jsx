import styled from "styled-components";
import { BaseButton, GoogleSignInButton, InvertedButton } from "../button/button.styles";

export let CartDropdownComponent = styled.div`
    position: absolute;
    width: 280px;
    height: 380px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    ${BaseButton},
    ${GoogleSignInButton},
    ${InvertedButton} {
      margin-top: auto;
      font-size: 12px;
    }
`


export let EmptyMessage = styled.span`
font-size: 18px;
      margin: 50px auto;
`


export let CartItems = styled.div`
  height: 240px;
      display: flex;
      flex-direction: column;
      overflow: scroll;
`



  