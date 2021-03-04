import styled from 'styled-components';
import { FaPhoneSquare} from "react-icons/fa";
import { BiWorld,BiPhoneCall } from "react-icons/bi";
import { HiOutlineLocationMarker,HiOutlineMail} from "react-icons/hi";

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

export const FormContainer = styled.div`
    display:flex;
    gap:40px;

    @media screen and (max-width: 768px) {
      flex-direction:column;
  } 
    /* background:coral; */
`;
export const FormDetail = styled.div`
    border-radius:10px;
    margin:1rem 0;
    width:50%;
    display:flex;
    justify-self:center;
    padding:1rem 1.5rem;
    flex-direction:column;
    box-shadow: 0 4px 20px 3px rgb(0 0 0 / 10%);

    @media screen and (max-width: 768px) {
      width:100%;
  } 
`;
export const LoginForm = styled.form`
    border-radius:10px;
    margin:1rem 0;
    width:50%;
    display:flex;
    justify-self:center;
    padding:1rem 1.5rem;
    flex-direction:column;
    box-shadow: 0 4px 20px 3px rgb(0 0 0 / 10%);

    @media screen and (max-width: 768px) {
      width:100%;
  } 
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
    gap:25px;

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
export const TextArea = styled.textarea`
    border-radius:10px;
    border:1px solid gray;
    padding:0.6rem 1rem;
    width:100%;
    height:250px;
    outline:none;
    transition:350ms ease-in-out;

    &:hover {
        border:1px solid green;
    }
`;


export const Detail = styled.div`
    border-radius:10px;
    border:1px solid gray;
    padding:0.6rem 1rem;
    margin:1rem 0;
    width:100%;
    transition:350ms ease-in-out;

    &:hover {
        border:1px solid green;
    }
`;
export const Label = styled.label`
    width:100%;
    transition:350ms ease-in-out;

    &:hover {
        border:1px solid green;
    }
`;
export const LogoPhone = styled(BiPhoneCall)`
  margin-right: 0.5rem;
`;
export const LogoMobile = styled(FaPhoneSquare)`
  margin-right: 0.5rem;
`;
export const LogoLocation = styled(HiOutlineLocationMarker)`
  margin-right: 0.5rem;
`;
export const LogoEmail = styled(HiOutlineMail)`
  margin-right: 0.5rem;
`;
export const LogoWebsite = styled(BiWorld)`
  margin-right: 0.5rem;
`;
export const Text = styled.span`
    font-family:'Cambria';
    font-weight:Bold;

  
`;
export const MainDetail = styled.div`
    margin:0.3rem 0;
    color:grey;
  
`;