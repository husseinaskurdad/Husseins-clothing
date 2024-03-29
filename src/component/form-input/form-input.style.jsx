import styled, { css } from "styled-components";

let subColor = 'grey'
let mainColor = 'black'
// $sub-color: grey;
// $main-color: black;


let ShrinkLabelStyles = css`
top: -14px;
font-size: 12px;
color: ${mainColor};

`

export let FormInputLabel = styled.label`
    color: ${subColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
    ${({shrink}) => shrink && ShrinkLabelStyles}

    /* &.shrink {
      @include shrinkLabel();
    } */
`
export let Input = styled.input`

background: none;
    background-color: white;
    color: ${subColor};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${subColor};
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    &:focus ~ ${FormInputLabel} {
      ${ShrinkLabelStyles};
    }
`

export let Group = styled.div`
  position: relative;
  margin: 45px 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`



// @mixin shrinkLabel {
//   top: -14px;
//   font-size: 12px;
//   color: $main-color;
// }

// .group {


//   .form-input {
//     background: none;
//     background-color: white;
//     color: $sub-color;
//     font-size: 18px;
//     padding: 10px 10px 10px 5px;
//     display: block;
//     width: 100%;
//     border: none;
//     border-radius: 0;
//     border-bottom: 1px solid $sub-color;
//     margin: 25px 0;

//     &:focus {
//       outline: none;
//     }

//     &:focus ~ .form-input-label {
//       @include shrinkLabel();
//     }
//   }



//   .form-input-label {

//   }
// }
