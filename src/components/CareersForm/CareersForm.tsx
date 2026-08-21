import FormAddFiles from "../FormFieldAddFiles/FormFieldAddFiles";
import FormBigField from "../FormBigField/FormBigField";
import FormField from "../FormField/FormField";
import FormSelect from "../FormSelect/FormSelect";
import style from "./careersform.module.scss";
import FormCheckbox from "../FormCheckbox/FormCheckbox";

const CareersForm = () => {
  return (
    <form action="#" className={style.form}>
      <div className={style.fields}>
        <FormField
          label="Name*"
          fieldType="text"
          text="Your name"
          isRequired={true}
        />
        <FormField
          label="Phone*"
          fieldType="tel"
          text="Your name"
          isRequired={true}
        />
        <FormField
          label="Email"
          fieldType="email"
          text="Your working email"
          isRequired={true}
        />
        <FormSelect
          label="I am interested in*"
          options={["interes1", "interes2", "interes3"]}
          isRequired={true}
        />
      </div>
      <FormBigField
        label="Cover letter"
        text="Your cover letter"
        isRequired={true}
      />
      <FormAddFiles label="Attach your CV*" isRequired={true} />
      <FormCheckbox label="I want to suscribe to receive information about new vacancies." />
      <button type="submit" title="not implemented" className={style.button}>
        Send Resume
      </button>
    </form>
  );
};

export default CareersForm;
