import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Сбрасываем скролл в ноль при каждой смене пути
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Этот компонент ничего не рендерит визуально
};

export default ScrollToTop;
