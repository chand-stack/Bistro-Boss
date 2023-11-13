import img from '../../../assets/others/authentication1.png'
import bg from '../../../assets/others/authentication.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
const Login = () => {

    const {signIn} = useContext(AuthContext)

     const[disable,setDisable]=useState(true)
    const captchaRef = useRef(null)

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])


    const captchaValidationHandler = () => {
        const user_captcha= captchaRef.current.value 
        if(validateCaptcha(user_captcha)){
           return  setDisable(false)
        }else{
           return setDisable(true)
        }
    }

    const loginHandler = e => {
        e.preventDefault()
        const email = e.target.email.value 
        const password = e.target.password.value 
        console.log(email,password);
        signIn()
        .then(result => {
            const user = result.user 
            console.log(user);
        })
        .catch(error=> {
            console.log(error);
        })
    }


    return (
        <div>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col-reverse lg:flex-row">
    <div className="text-center lg:text-left">
      <img className='lg:w-3/4' src={img} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={loginHandler} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"><LoadCanvasTemplate /></span>
          </label>
          <input ref={captchaRef} name='captcha' type="text" placeholder="write the text above" className="input input-bordered" required />
          <button onClick={captchaValidationHandler} className='btn btn-outline btn-xs mt-2'>Validate</button>
        </div>
        <div className="form-control mt-6">
          <input disabled={disable} className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;