export default interface SidebarItemInterface {
  name: string;
  icon: string;
  isParent: boolean;
  path: string;
  isActive: boolean;
  sidebarSubItems: SidebarSubItemInterface[];
}

export interface SidebarSubItemInterface {
  name: string;
  path: string;
  isVisible: boolean;
}
