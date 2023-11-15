// import { useContext, useEffect, useRef, useState } from "react";
// import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useForm } from "react-hook-form"
import img from '../../../assets/others/authentication1.png'
import { useContext } from "react";
import usePublicAxios from "../../../useAxios/usePublicAxios";
import GoogleLogin from "../../SocialLogin/GoogleLogin";
import { Link } from "react-router-dom";
const Register = () => {
//     const {createUser} = useContext(AuthContext)
//     const[disable,setDisable]=useState(true)
//    const captchaRef = useRef(null)
//    useEffect(()=>{
//        loadCaptchaEnginge(6); 
//    },[])
//    const captchaValidationHandler = () => {
//        const user_captcha= captchaRef.current.value 
//        if(validateCaptcha(user_captcha)){
//           return  setDisable(false)
//        }else{
//           return setDisable(true)
//        }
//    }
//    const loginHandler = e => {
//        e.preventDefault()
//        const email = e.target.email.value 
//        const password = e.target.password.value 
//        const name = e.target.name.value 
//        console.log(email,password);
//        createUser(email,password)
//        .then(result => {
//            const user = result.user 
//            console.log(user);
//        })
//        .catch(error=> {
//            console.log(error);
//        })
//    }
const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const {createUser} = useContext(AuthContext)

  const publicAxios = usePublicAxios()
  const onSubmit = (data) => {
    createUser(data.email,data.password)
    .then(result => {
          const user = {
            name: data.name,
            email: data.email
          }
          publicAxios.post("/users",user).then(res => {console.log(res.data);})
        console.log(result.user);
    })
    .catch(error => {
        console.log(error);
    })
  }
  console.log(watch("name"))

    return (
        <div>
              <div className="hero min-h-screen ">
  <div className="hero-content flex-col-reverse lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <img className='lg:w-3/4' src={img} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register("name",{required:true})} type="name" placeholder="name" className="input input-bordered" />
          {errors?.name?.type === "required" && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email",{required:true})} type="email" placeholder="email" className="input input-bordered"  />
          {errors?.email?.type==="required" && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register("password",{required:true, minLength:6,maxLength:20})} type="password" placeholder="password" className="input input-bordered" />
          {errors?.password?.type === "required" && <span className="text-red-600">This field is required</span>}
          {errors?.password?.type === "minLength" && <span className="text-red-600">password should be 6 character long</span>}
          {errors?.password?.type === "maxLength" && <span className="text-red-600">password should not longer than 20 character</span>}
          
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text"><LoadCanvasTemplate /></span>
          </label>
          <input ref={captchaRef} name='captcha' type="text" placeholder="write the text above" className="input input-bordered" required />
          <button onClick={captchaValidationHandler} className='btn btn-outline btn-xs mt-2'>Validate</button>
        </div> */}
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <p>Already have an Account? please <Link to="/login">Login</Link></p>
      <GoogleLogin></GoogleLogin>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;