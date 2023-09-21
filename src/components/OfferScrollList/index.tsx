import OfferCard from "./OfferCard";
import { Container } from "./style";
import { scrollListOffers } from "../../constant/offers";
import { OfferScrollList as OfferType } from "../../interface/offers";

const OfferScrollList = () => {
  return (
    <Container>
      {scrollListOffers.map((item: OfferType) => (
        <OfferCard
          key={item.id}
          title={item.title}
          image={item.image}
          description={item.description}
          borderColor={item.borderColor}
        />
      ))}
    </Container>
  );
};

export default OfferScrollList;
