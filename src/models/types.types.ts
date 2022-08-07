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

export interface BenefitsProps {
  id: number;
  title: string;
  description: string;
}

export interface JobsProps {
  id: number;
  title: string;
  location: string;
  fullTime: boolean;
  deadline: Date;
}

export interface itemProps {
  itemId: number;
}

export interface SidebarProps {
  onHide: () => void;
}

export interface OnJobProps {
  OnJobs: React.Dispatch<React.SetStateAction<JobsProps[]>>;
}

export interface ContactUsProps {
  show: boolean;
  onShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface JobVacancyProps {
  jobs: JobsProps[];
}
