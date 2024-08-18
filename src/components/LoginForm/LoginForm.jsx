import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { login } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await dispatch(login(values)).unwrap(); 
      navigate("/contacts");
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" placeholder="Email" />
          <Field type="password" name="password" placeholder="Password" />
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
