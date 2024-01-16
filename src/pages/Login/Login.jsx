import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";


const Login = () => {
    const {signIn}= useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)

    const handleSignIn = (e)=>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        signIn(email, password)
        .then(res=>{
            console.log(res.user)
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <>  <Navbar></Navbar>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>new here ? please <Link to={'/register'}><span className="btn btn-link">register</span></Link> </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;