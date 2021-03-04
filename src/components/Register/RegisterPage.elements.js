import styled from 'styled-components';

export const Title = styled.h1`
  color: black;
  text-align:center;
  padding:1rem 0;
  /* background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')}; */

  &::after {
    content: '';
    background: #007bff;
    display: block;
    height: 3px;
    width: 170px;
    margin: 20px auto 5px;
  }
`;

export const FormContainer = styled.form`
    display:flex;
    justify-content:center;
    /* background:coral; */
`;

export const LoginForm = styled.form`
    border-radius:10px;
    margin:1rem 0;
    width:600px;
    display:flex;
    justify-self:center;
    padding:1rem 1.5rem;
    flex-direction:column;
    box-shadow: 0 4px 20px 3px rgb(0 0 0 / 10%);
`;
export const LinkContainer = styled.div`
    display:flex;
    justify-content:space-between;

`;
export const FormGroup = styled.div`
    width:100%;
    margin:1rem 0;
    display:flex;
    justify-content:space-between;

    @media screen and (max-width: 768px) {
    flex-direction:column;
  }  
`;
export const Input = styled.input`
    border-radius:10px;
    border:1px solid gray;
    padding:0.6rem 1rem;
    width:100%;
    outline:none;
    transition:350ms ease-in-out;

    &:hover {
        border:1px solid green;
    }
`;