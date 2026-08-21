import type { IPropsFormAddFiles } from "../../types";
import style from "./formfieldaddfiles.module.scss";

const FormFieldAddFiles:React.FC<IPropsFormAddFiles> = ({label, isRequired}) => {
    return (
      <div className={style.fieldBlock}>

        <input
          type="file"
          id="file"
          name="file"
          className={style.fileField}
          required={isRequired}
        />
        <label htmlFor="details" className={style.label}>
          {label}
        </label>
      </div>
    );
}
 
export default FormFieldAddFiles;