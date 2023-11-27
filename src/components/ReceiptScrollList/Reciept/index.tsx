import {
  Button,
  Container,
  Description,
  TextContainer,
  Title,
  Wrapper,
} from "./style";

const Reciept = ({
  title,
  date,
  time,
  price,
  buttonText,
  color,
}: {
  title: string;
  date: string;
  time: string;
  price: string;
  buttonText: string;
  color: string;
}) => {
  return (
    <>
      <Wrapper borderColor={color}>
        <Container>
          <Title>{title}</Title>
          <TextContainer>
            <Description>{date}</Description>
            <Description>{time}</Description>
          </TextContainer>
          <Title>{price}</Title>
          <Button color={color}>Presonal</Button>
        </Container>
      </Wrapper>
    </>
  );
};

export default Reciept;
