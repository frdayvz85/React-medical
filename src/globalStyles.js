import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:"Cambria";
}
`;

export const Container = styled.div`
width:100%;
max-width: 1300px;
margin:0 auto;
padding:0 50px;
z-index:1;

@media screen and (max-width: 991px) {
    padding:0 30px;
}
`;

export const Button = styled.button`
border-radius:0.3rem;
background-color:${({primary}) => (primary ? '#0467FB' : '#0467FB')};
white-space:nowrap;
padding:${({big}) => (big ? '12px 64px' : '10px 20px')};
color:#fff;
font-size:${({fontBig}) => (fontBig ? '20px' : '16px')};
outline:none;
border:1px solid #4B59F7;
cursor:pointer;

&:hover {
    transition:all 0.3s ease-in-out;
    background-color:${({primary}) => (primary ? '#0467FB' : '#4B59F7')};

}

@media screen and (max-width: 991px) {
    width:100%;
}
`;

export const ButtonRegister = styled.button`
border-radius:0.3rem;
background-color:${({primary}) => (primary ? 'black' : 'gray')};
white-space:nowrap;
padding:${({big}) => (big ? '12px 64px' : '10px 20px')};
color:#fff;
font-size:${({fontBig}) => (fontBig ? '20px' : '16px')};
outline:none;
border:1px solid black;
cursor:pointer;

&:hover {
    transition:all 0.3s ease-in-out;
    background-color:${({primary}) => (primary ? 'gray' : 'grey')};

}

@media screen and (max-width: 991px) {
    width:100%;
}
`;

export const ButtonLogin = styled.button`
border-radius:0.3rem;
background-color:${({primary}) => (primary ? 'gray' : 'gray')};
white-space:nowrap;
padding:${({big}) => (big ? '12px 64px' : '10px 20px')};
color:#fff;
font-size:${({fontBig}) => (fontBig ? '20px' : '16px')};
outline:none;
border:none;
cursor:pointer;

&:hover {
    transition:all 0.3s ease-in-out;
    background-color:${({primary}) => (primary ? 'black' : 'black')};

}

@media screen and (max-width: 991px) {
    width:100%;
}
`;

export default GlobalStyle