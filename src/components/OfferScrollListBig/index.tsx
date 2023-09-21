import { Container } from "./style";
import { scrollListOffersBig } from "../../constant/offers";
import { OfferScrollListBig as OfferType } from "../../interface/offers";
import OfferCardBig from "./OfferCardBig";

const OfferScrollListBig = () => {
  return (
    <Container>
      {scrollListOffersBig.map((item: OfferType) => (
        <OfferCardBig
          key={item.id}
          title={item.title}
          image={item.image}
          buttonText={item.buttonTitle}
          buttonLink={item.buttonLink}
        />
      ))}
    </Container>
  );
};

export default OfferScrollListBig;
