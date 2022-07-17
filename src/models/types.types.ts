export interface NavbarProps {
  id: number;
  title: string;
  path: string;
}

export interface FranchiseProps {
  id: number;
  title: string;
  price: number;
}

export interface SidebarProps {
  onHide: () => void;
}
