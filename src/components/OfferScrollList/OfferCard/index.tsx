import {
  Container,
  Description,
  Image,
  ImageContainer,
  ItemIcon,
  Link,
  LinkContainer,
  TextContainer,
  Title,
  Wrapper,
} from "./style";

const OfferCard = ({
  title,
  description,
  image,
  borderColor,
}: {
  title: string;
  description: string;
  image: string;
  borderColor: string;
}) => {
  return (
    <>
      <Wrapper borderColor={borderColor}>
        <Container>
          <ImageContainer>
            <Image src={image} />
          </ImageContainer>
          <TextContainer>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </TextContainer>
        </Container>
        <LinkContainer borderColor={borderColor}>
          <Link>view details</Link>
          <ItemIcon icon={"formkit:arrowright"} />
        </LinkContainer>
      </Wrapper>
    </>
  );
};

export default OfferCard;
