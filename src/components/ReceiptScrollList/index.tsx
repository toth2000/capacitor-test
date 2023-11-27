import Reciept from "./Reciept";
import { Container } from "./style";
import { receiptItemList } from "../../constant/receipt";
import { ReceiptItem as ReceiptType } from "../../interface/receipt";

const RecieptScrollList = () => {
  return (
    <Container>
      {receiptItemList.map((item: ReceiptType) => (
        <Reciept
          title={item.titile}
          date={item.date}
          time={item.time}
          price={item.price}
          buttonText={item.buttonText}
          color={item.color}
        />
      ))}
    </Container>
  );
};

export default RecieptScrollList;
