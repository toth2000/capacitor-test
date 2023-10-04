import { useEffect } from "react";
import {
  ButtonContainer,
  Container,
  HeroContainer,
  ItemIcon,
  LoginContainer,
  Text,
  Title,
} from "./style";
import TriangleShape from "../../components/TriangleShape";
import IconButton from "../../components/IconButton";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "../../firebase";

const Authentication = () => {
  const googleProvide = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(firebaseAuth, googleProvide)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log("User Data: ", credential);
        alert("Login Success");
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  return (
    <Container>
      <TriangleShape color="black">
        <LoginContainer>
          <Text>Login</Text>
        </LoginContainer>
      </TriangleShape>
      <HeroContainer>
        <ItemIcon icon={"ph:meta-logo-duotone"} />
        <Title>Influenxing</Title>
        <ButtonContainer>
          <IconButton
            icon="devicon:google"
            text="Continue with google"
            onClick={handleGoogleSignIn}
            width="100%"
            background="#EEE0C9"
            textColor="black"
          />
        </ButtonContainer>
      </HeroContainer>
    </Container>
  );
};

export default Authentication;
