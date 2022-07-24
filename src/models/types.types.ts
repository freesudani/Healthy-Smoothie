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

export interface StepsProps {
  id: number;
  image: string;
  description: string;
}

export interface TrainingProps {
  id: number;
  title: string;
  details: string;
}

export interface MenuProps {
  id: number;
  image: string;
  title: string;
  menu: SubMenuProps[];
}

export interface SubMenuProps {
  subtitle: string;
  ingredients: string[];
}

export interface itemProps {
  itemId: number;
}

export interface SidebarProps {
  onHide: () => void;
}
