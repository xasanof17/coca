import type { IconType } from "react-icons";
import { AiFillPieChart } from "react-icons/ai";
import { SiCoffeescript } from "react-icons/si";
import { TfiLocationPin } from "react-icons/tfi";
import { LuCalendarRange } from "react-icons/lu";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

type AsideLinks = {
  href: string;
  Icon: IconType;
};

export const asideLinks: AsideLinks[] = [
  {
    href: "/dashboard",
    Icon: AiFillPieChart,
  },
  {
    href: "/dashboard1",
    Icon: SiCoffeescript,
  },
  {
    href: "/dashboard2",
    Icon: TfiLocationPin,
  },
  {
    href: "/dashboard3",
    Icon: LuCalendarRange,
  },
  {
    href: "/dashboard4",
    Icon: BsFillBoxSeamFill,
  },
  {
    href: "/dashboard5",
    Icon: IoSettingsOutline,
  },
];
