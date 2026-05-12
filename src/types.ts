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
  linesLeftClass: string;
  linesUpClass: string;
  manyShapesClass: string;
  linesrightClass: string;
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
  text: string
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