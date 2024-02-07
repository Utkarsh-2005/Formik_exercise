import { useFormik } from "formik";

const BasicForm = () => {
  const {values, handleBlur, handleChange} = useFormik({
    initialValues: {
      email: "",
      age:"",
      password:"",
      confirmPassword:"",
    }
  })

  console.log(values)
  return (
    <form autoComplete="off">
      <label htmlFor="email">Email</label>
      <input value={values.email} 
      onChange={handleChange}
      onBlur = {handleBlur}
       id="email" type="email" placeholder="Enter your email" />
      <label htmlFor="email">Age</label>
      <input value={values.age} 
      onChange={handleChange}
      onBlur = {handleBlur}
       id="age" type="number" placeholder="Enter your age" />
      <label htmlFor="email">Password</label>
      <input value={values.password} 
      onChange={handleChange}
      onBlur = {handleBlur}
       id="password" type="password" placeholder="Enter your password" />
       <label htmlFor="email">Confirm Password</label>
      <input value={values.confirmPassword} 
      onChange={handleChange}
      onBlur = {handleBlur}
       id="confirmPassword" type="Confirm password" placeholder="Confirm your password" />
       <button type="submit">Submit</button>
    </form>
  );
};
export default BasicForm;
