import style from "./ourservicesimages.module.scss";

const OurServicesImages = () => {
    return (
      <div className={style.ourservicesimages}>
        <img src="./image/home/services-dashboard.png" alt="some graphs" className={style.mainimg}/>
        <img src="./image/home/services-fon.png" alt="grey abstractive" className={style.fon}/>
        <a href="#" className={style.subscribe}><img src="./image/home/services-subscribe.png" alt="subscribe button" /></a>
        <img src="./image/home/services-likes.png" alt="white heart on red fon and digits" className={style.likes}/>
        <img src="./image/home/services-followers.png" alt="white icon man and digits" className={style.followers}/>
        <img src="./image/home/services-like.png" alt="like icon" className={style.like}/>
      </div>
    );
}
 
export default OurServicesImages;