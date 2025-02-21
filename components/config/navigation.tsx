import { usePathname } from "next/navigation";

import {
  Bell,
  Briefcase,
  Home,
  Settings,
  ShoppingCart,
  User,
} from "lucide-react";

export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    {
      name: "Home",
      href: "/",
      icon: <Home size={20} />,
      active: pathname === "/",
      position: "top",
    },
    {
      name: "Orders",
      href: "/orders",
      icon: <ShoppingCart size={20} />,
      active: isNavItemActive(pathname, "/orders"),
      position: "top",
    },
    {
      name: "Notifications",
      href: "/notifications",
      icon: <Bell size={20} />,
      active: isNavItemActive(pathname, "/notifications"),
      position: "top",
    },
    {
        name: "Customers",
        href: "/customer",
        icon: <User size={20} />,
        active: isNavItemActive(pathname, "/customer"),
        position: "top",
      },
    {
      name: "Page",
      href: "/page",
      icon: <Briefcase size={20} />,
      active: isNavItemActive(pathname, "/page"),
      position: "top",
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <Settings size={20} />,
      active: isNavItemActive(pathname, "/settings"),
      position: "bottom",
    },
  ];
};
