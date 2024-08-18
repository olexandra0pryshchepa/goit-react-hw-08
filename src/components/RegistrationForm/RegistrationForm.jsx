import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { register } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await dispatch(register(values)).unwrap(); 
      navigate("/contacts"); 
    } catch (error) {
      console.error("Registration failed", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="name" placeholder="Enter name" />
          <Field type="email" name="email" placeholder="Enter email" />
          <Field type="password" name="password" placeholder="Enter password" />
          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
