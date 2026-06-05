export interface IPropsButton {
  textButton: string;
  classDop: string;
}

export interface IPropsMenu {
  name: string;
  link: string;
}

export interface IPropsMenuFooter {
  title: string;
  min: number;
  max: number;
}

export interface IPropsAskQuestions {
  id: number;
  title: string;
  text: string;
}

export interface IPropsClientsCaseSlider {
  id: number;
  logoImg: string;
  logoAlt: string;
  title: string;
  text: string;
  circle1: string;
  digit1: string;
  description1: string;
  circle2?: string | undefined;
  digit2: string;
  description2: string;
  fon: boolean;
}

export interface IPropsBenefits {
  id: number;
  image: string;
  altImg: string;
  title: string;
  text: string;
}

export interface IPropsPrisingPlans {
  id: number;
  tarif: string;
  price: number;
}

export interface IPropsFeedbackSlider {
  id: number;
  text: string;
  image: string;
  alt: string;
  name: string;
  position: string;
}

export interface IPropsHomeNews {
  id: number;
  image: string;
  alt: string;
  category: string;
  date: string;
  autor: string;
  title: string;
  text: string;
}

export type TPropsCrumbs = {
  name: string;
};

export type TPropsHeroTitle = {
  title: string;
};

export interface IPropsServicesBlockInfo {
  id: number;
  title: string;
  text: string;
}

export type servicesBlockNumberProps = {
  num: number;
};

export interface IPropsServicesBlockImage {
  mainImage: string;
  classDop: string;
}

export interface IPropsMarkets {
  id: number;
  image: string;
  alt: string;
  title: string;
  text: string;
}

export type TPropsElement = {
  children: React.ReactNode;
};

export interface IPropsHeroDecor {
  shapesClass: string;
  linesUpClass: string;
  linesLeftClass?: string;
  manyShapesClass?: string;
  linesrightClass?: string;
}

export interface IPropsCaseCards {
  id: number;
  imgmain: string;
  altmain: string;
  imglogo: string;
  altlogo: string;
  title: string;
  circle1: string;
  circle2: string;
  digit1: string;
  digit2: string;
  description1: string;
  description2: string;
  text: string;
}

export interface IPropsCaseCardInfo {
  circle1: string;
  circle2?: string | undefined;
  digit1: string;
  digit2: string;
  description1: string;
  description2: string;
}

export interface IPropsCaseCardLabel {
  imglogo: string;
  altlogo: string;
  title: string;
}

export type TPropsCards = {
  cards: IPropsCaseCards[];
  count: number;
  onLoadMore: () => void;
};

export type TPropsCategory = {
  category: number | null;
  setCategory: (id: number) => void;
};

// About Us

export interface IPropsCoreValuesItems {
  id: number;
  image: string;
  alt: string;
  title: string;
  text: string;
}

export type TPropsclientsCount = {
  clientsCount: number;
};

export interface IPropsTeams {
  id: number;
  img: string;
  alt: string;
  name: string;
  position: string;
}

//contacts
export interface IPropsContactsHeroCards {
  id: number;
  image: string;
  alt: string;
  title: string;
  text1: string;
  text2?: string;
  link?: string;
}


export interface IPropsContactsFormService {
  id: number;
  value: string;
  name: string;
  isChecked: boolean;
  onSelect: () => void;
}

export interface IPropsContactsFormField {
  label: string;
  fieldType: string;
  text: string;
  isRequired: boolean;
}

//blog
// Базовый интерфейс для любого объекта, у которого есть дата и id 
//для использования функции сортировки
//----------------------------------
export interface IBasePost {
  id: number;
  date: string;
}

// Интерфейс для обычного поста
export interface IPropsPosts extends IBasePost {
  img: string;
  alt: string;
  category: number;
  autor: string;
  title: string;
  text?: string;
}

// Интерфейс для трендового поста
export interface IPropsTrend extends IBasePost {
  image: string; // вместо img
  alt: string;
  title: string;
}

//----------------------------------------------

export interface IPropsBlogNewPosts {
  posts: IPropsPosts[];
  currentCategory?: number;
  setCurrentCategory: (arg0: number) => void;
}

export interface IPropsForBlogPosts {
  posts: IPropsPosts[];
  currentCategory?: number; 
}

export interface ICategory {
  id: number;
  name: string;
  count?: number; 
}
