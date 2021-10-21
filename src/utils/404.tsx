import { Link } from "react-router-dom"

const PageNotExisted = () => {
    return (
        <>
            <h1> Sorry! Page not Found. </h1>
            <Link to={'/'} style={{ textDecoration: 'none' }}> Go back to home page</Link>
        </>
    )
};
export default PageNotExisted;