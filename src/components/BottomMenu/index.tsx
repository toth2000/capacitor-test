import { useState, useEffect } from "react";

import { Container, ItemContainer, ItemIcon, ItemTitle } from "./style";
import { menuItem } from "../../constant/menuItem";
import { Menu } from "../../interface/menu";
import { useNavigate } from "react-router-dom";

const BottomMenu = () => {
  const [menu, setMenu] = useState<Menu[]>(menuItem);
  const navigate = useNavigate();

  const handleUpdateMenu = (activeIndex: number) => {
    const updatedMenu = menu.map((item) =>
      item.id === activeIndex
        ? { ...item, active: true }
        : { ...item, active: false }
    );
    setMenu(updatedMenu);
    navigate(updatedMenu[activeIndex].path);
  };

  useEffect(() => {
    handleUpdateMenu(0);
  }, []);

  return (
    <Container>
      {menu.map((item) => (
        <ItemContainer
          key={item.id}
          active={item.active}
          onClick={() => handleUpdateMenu(item.id)}
        >
          <ItemIcon src={item.icon} />
          <ItemTitle>{item.name}</ItemTitle>
        </ItemContainer>
      ))}
    </Container>
  );
};

export default BottomMenu;
