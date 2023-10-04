import { Container, ItemIcon, Text } from "./style";

const IconButton = ({
  icon,
  text,
  onClick,
  width,
  background,
  textColor,
  gap,
}: {
  icon: string;
  text: string;
  onClick: any;
  width: string;
  background: string;
  textColor: string;
  gap?: string;
}) => {
  return (
    <Container
      onClick={onClick}
      width={width}
      background={background}
      gap={gap}
    >
      <ItemIcon icon={icon} />
      <Text textColor={textColor}>{text}</Text>
    </Container>
  );
};

export default IconButton;
