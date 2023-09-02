import { Menu } from "../interface/menu";

import home_icon from "../images/icons/home_icon.png";
import settings_icon from "../images/icons/setting_icon.png";
import graph_icon from "../images/icons/graph_icon.png";
import message_icon from "../images/icons/message_icon.png";

export const menuItem: Menu[] = [
  {
    id: 0,
    name: "Home",
    icon: home_icon,
    path: "/",
    active: false,
  },
  {
    id: 1,
    name: "Analytics",
    icon: graph_icon,
    path: "/analytics",
    active: false,
  },
  {
    id: 2,
    name: "Message",
    icon: message_icon,
    path: "/",
    active: false,
  },
  {
    id: 3,
    name: "Settings",
    icon: settings_icon,
    path: "/",
    active: false,
  },
];
