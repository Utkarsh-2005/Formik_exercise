import {Form, Formik} from "formik";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import { advancedSchema } from "../schemas";


const onSubmit = async(values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

const AdvancedForm = () => {
  return (
    <>
    <h2>sfsv</h2>
    <Formik initialValues={{username: "jared", jobType: "", acceptedTos: false }}
    validationSchema={advancedSchema} onSubmit={onSubmit}>
      {({isSubmitting}) => (
        <Form>
          <CustomInput 
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
          />
          <CustomSelect
            label="Job Type"
            name="jobType"
            placeholder="Please select a job">
                <option value="">Please select a job type</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Product Manager</option>
            <option value="other">Other</option>
            </CustomSelect>
          <CustomCheckbox
          type="checkbox"
          name="acceptedTos"/>
          <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
      )}
    </Formik>
    </>
  );
};
export default AdvancedForm;
