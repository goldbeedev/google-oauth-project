import StyledLoginButton from "../components/button";





export const Home = () => {
    const handleGoogleAuthClick = () => {
        window.location.href = 'http://localhost:3001/auth/google';
    };
    return (
        <div>
            <StyledLoginButton onClick={handleGoogleAuthClick}/>
        </div>
      );
}