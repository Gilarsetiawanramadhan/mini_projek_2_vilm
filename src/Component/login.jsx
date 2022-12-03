import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {

    const formik = useFormik({
        initialValues: {
            UserName: '',
            password: '',
        },
        validationSchema: Yup.object({
            UserName: Yup.string()
                .min(8,'minimun 8 characthers')
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            password: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return(
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="User Name">User Name</label>
                <input
                    id="User Name"
                    name="User Name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.UserName}
                />
                {formik.touched.UserName && formik.errors.UserName ? (
                <div>{formik.errors.UserName}</div>
                ) : null}
                <br/>
            <label htmlFor="password">password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
                ) : null}
                <br/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Login;