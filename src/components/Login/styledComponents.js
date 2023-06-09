// * {
//   padding: 0px;
//   margin: 0px;
//   box-sizing: border-box;
// }

// .bg-container {
//   width: 100%;
//   height: 100vh;
//   background-color: #f8fafc;
//   /* background-color: black; */
//   display: grid;
//   place-items: center;
// }

// .form-card {
//   width: 100%;
//   background-color: #fff;
//   padding: 40px;
//   min-width: 400px;
//   display: grid;
//   place-items: center;
//   line-height: 1.5rem;
//   box-shadow: 3px 3px 3px 3p lightgray;
// }
// .form-card img {
//   width: 150px;
//   margin-bottom: 30px;
// }

// .active-link {
//   text-decoration: none;
// }

// .input-field {
//   width: 100%;
//   margin-bottom: 10px;
// }
// .input-field input {
//   width: 100%;
//   padding: 7px;
//   border-radius: 2px;
//   outline: none;
//   border: 1px solid lightgray;
//   margin: 3px 0px;
// }
// .input-field,
// .checkbox-filed label {
//   font-size: 15px;
//   font-family: 'Roboto';
//   font-weight: 600;
//   color: #1e293b;
// }
// .checkbox-filed {
//   width: 100%;
//   display: flex;
//   align-items: center;
//   margin-top: 0px;
// }
// .checkbox-filed input {
//   margin-right: 10px;
// }

// .button {
//   width: 100%;
//   margin-top: 20px;
//   padding: 8px;
//   font-family: 'Roboto';
//   outline: none;
//   border: none;
//   border-radius: 5px;
//   background-color: #3b82f6;
//   color: #fff;
//   font-weight: 600;
//   font-size: 15px;
//   cursor: pointer;
// }
import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ShadowContainer = styled.div`
  padding: 40px 20px;
  box-shadow: 0px 0px 20px 5px #c6c9cc;
  @media (max-width: 767px) {
    width: 90%;
  }
`

export const LoginDivContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction === 'row' ? 'row' : 'column')};
  margin-top: 10px;
  align-self: center;
`

export const ImageEl = styled.img`
  width: 60%;
  object-fit: contain;
  margin-bottom: 20px;
  margin-left: 20%;
`

export const LoginFormContainer = styled.form``

export const LabelEl = styled.label`
  margin-bottom: 2px;
  font-weight: bold;
  cursor: ${props => props.cursor};
`

export const InputEl = styled.input`
    padding: 10px;
    outline: none;
}
`

export const ButtonEl = styled.button`
  color: #ffffff;
  background-color: blue;
  width: 100%;
  cursor: pointer;
  border: 0px;
  outline: none;
  padding: 10px;
  border-radius: 4px;
  margin-top: 15px;
`
export const ErrorMsg = styled.p`
  color: red;
`
