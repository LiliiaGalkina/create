import type { IPropsGallery } from "../../types";
import style from "./casestydiesitem.module.scss";

const GalleryPart:React.FC<IPropsGallery> = ({img, altImg}) => {
    return ( <div className={style.gallery}>
        <img src={img} alt={altImg} className={style.galleryImg}/>
    </div> );
}
 
export default GalleryPart;