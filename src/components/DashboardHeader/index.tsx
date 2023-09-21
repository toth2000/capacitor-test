import { DashboardHeaderOffers } from "../../interface/offers";
import {
  Container,
  IconContainer,
  ItemIcon,
  OfferContainer,
  OfferIcon,
  Text,
} from "./style";

const DashboardHeader = ({
  leftIcon,
  rightIcon,
  offers,
}: {
  leftIcon: string;
  rightIcon: string;
  offers: DashboardHeaderOffers[];
}) => {
  return (
    <Container>
      <IconContainer>
        <ItemIcon icon={leftIcon} />
      </IconContainer>
      {offers.length > 1 ? (
        <OfferContainer>
          <IconContainer>
            {offers.map((item: DashboardHeaderOffers, index: number) => {
              if (index < 3)
                return <OfferIcon key={item.id} icon={item.image} />;
              else return null;
            })}
          </IconContainer>
          {offers.length > 3 ? (
            <Text>
              +{offers.length - 3} {offers.length - 3 > 1 ? "offers" : "offer"}
            </Text>
          ) : null}
        </OfferContainer>
      ) : null}
      <IconContainer>
        <ItemIcon icon={rightIcon} />
      </IconContainer>
    </Container>
  );
};

export default DashboardHeader;
