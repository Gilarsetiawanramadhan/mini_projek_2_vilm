import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Login = () => {

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            UserName: Yup.string()
                .min(8,'minimun 8 characthers')
                .required('Required'),
            password: Yup.string()
                .min(8,'minimun 8 characthers')
                .required('Required'),
            }),
        onSubmit: values => {
            console.log(values)
            axios.get(`${process.env.REACT_APP_BASEURL}`)
            .then(response => {
                console.log(response.data)
            })

        },
    });

    return(
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="username">User Name</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? (
                <div style={{color:"red"}}>{formik.errors.username}</div>
                ) : null}
                <br/><br/>
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
                <div style={{color:"red"}}>{formik.errors.password}</div>
                ) : null}
                <br/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Login;