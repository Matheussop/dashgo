
import { useContext } from "react";
import { SidebarDrawerContext } from "../contexts/SideBarDrawer";


export function useSidebarDrawer() {
  const context = useContext(SidebarDrawerContext);

  return context;
}