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

export interface SidebarProps {
  onHide: () => void;
}
