import { useEffect, useState } from "react";
import TriangleShape from "../TriangleShape";
import {
  ButtonContainer,
  Container,
  Text,
  TextButton,
  TextContainer,
} from "./style";
import { TextSliderData } from "../../constant/textSlider";

const TextSlider = () => {
  const [text, setText] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextClick = () => {
    if (activeIndex < TextSliderData.length - 1)
      setActiveIndex((prev) => prev + 1);
    else handleSkip();
  };

  const handleSkip = () => {
    alert("Next Page redirect");
  };

  useEffect(() => {
    setText(TextSliderData[activeIndex].text);
  }, [activeIndex]);

  return (
    <Container>
      <TriangleShape color="blue"></TriangleShape>
      <TextContainer>
        <Text>{text}</Text>
      </TextContainer>
      <ButtonContainer>
        <TextButton onClick={handleSkip}>Skip</TextButton>
        <TextButton onClick={handleNextClick}>Next</TextButton>
      </ButtonContainer>
    </Container>
  );
};

export default TextSlider;
