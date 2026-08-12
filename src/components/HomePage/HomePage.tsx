import HomeHero from "../HomeHero/HomeHero";
import AwardsBlock from "../AwardsBlock/AwardsBlock";
import Clients from "../Clients/Clients";
import Agency from "../Agency/Agency";
import Achievements from "../Achievements/Achievements";
import OurServices from "../OurServices/OurServices";
import GetFreeSeo from "../GetFreeSeo/GetFreeSeo";
import AskQuestions from "../AskQuestions/AskQuestions";
import ClientsCase from "../ClientsCase/ClientsCase";
import Benefits from "../Benefits/Benefits";
import PricingPlans from "../PricingPlans/PrisingPlans";
import Feedback from "../Feedback/Feedback";
import HomeNews from "../HomeNews/HomeNews";
import { useRef } from "react";

const HomePage = () => {
  // 1. Создаем "якорь" для DOM-элемента формы
  const getFreeSeoRef = useRef<HTMLDivElement>(null);

  // 2. Функция, которая выполнит плавный скролл
  const scrollToForm = () => {
    if (getFreeSeoRef.current) {
      getFreeSeoRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Фокус на поле ввода для доступности (a11y)
      const firstInput = getFreeSeoRef.current.querySelector("input");
      (firstInput as HTMLElement)?.focus();
    }
  };
  return (
    <main>
      <HomeHero onCtaClick={scrollToForm} />
      <div className="container">
        <AwardsBlock />
        <Clients clientsCount={6} />
      </div>
      <Agency />
      <Achievements />
      <OurServices />
      <div id="get-free-seo" ref={getFreeSeoRef}>
        <GetFreeSeo />
      </div>
      <AskQuestions />
      <ClientsCase />
      <Benefits />
      <div className="container">
        <PricingPlans />
        <Feedback />
        <HomeNews />
      </div>
    </main>
  );
};;

export default HomePage;
