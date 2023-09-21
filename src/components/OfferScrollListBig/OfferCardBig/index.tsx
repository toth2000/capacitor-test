import { useNavigate } from "react-router-dom";
import {
  Image,
  ImageContainer,
  ItemIcon,
  Link,
  LinkContainer,
  Title,
  Wrapper,
} from "./style";

const OfferCardBig = ({
  title,
  image,
  buttonText,
  buttonLink,
}: {
  title: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(buttonLink);
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <LinkContainer onClick={handleClick}>
        <Link>{buttonText}</Link>
        <ItemIcon icon={"formkit:arrowright"} />
      </LinkContainer>
    </Wrapper>
  );
};

export default OfferCardBig;
