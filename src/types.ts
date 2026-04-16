export type buttonProps = {
    textButton: string;
    classDop: string;
}

export type menuProps = {
    name: string;
}

export type menuFooterProps = {
    title: string;
    min: number;
    max: number;
}

export type askQuestionsProps = {
    id: number;
    title: string;
    text: string;
}

export type clientsCaseSliderProps = {
  id: number;
  logoImg: string;
  logoAlt: string;
  title: string;
  text: string;
  img1: string;
  alt1: string;
  digit1: string;
  description1: string;
  img2: string;
  alt2: string;
  digit2: string;
  description2: string;
  fon: boolean;
  fonImg: string;
};

export type benefitsProps = {
    id: number;
    image: string;
    altImg: string;
    title: string;
    text: string;
}

export type prisingPlansProps = {
    id: number;
    tarif: string;
    price: number;
}

export type feedbackSliderProps = {
    id: number;
    text: string;
    image: string;
    alt: string;
    name: string;
    position: string;
}

export type nomeNewsProps = {
    id: number;
    image: string;
    alt: string;
    category: string;
    date: string;
    autor: string;
    title: string;
    text: string;
}