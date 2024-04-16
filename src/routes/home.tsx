import { Container } from "@mui/material";
import StyledLoginButton from "../components/button";
import tw from 'twin.macro';




export const Home = () => {
    const handleGoogleAuthClick = () => {
        window.location.href = 'http://localhost:3001/auth/google';
    };
    return (
        <Container maxWidth="sm">
            <StyledLoginButton onClick={handleGoogleAuthClick}/>
        </Container>
      );
}