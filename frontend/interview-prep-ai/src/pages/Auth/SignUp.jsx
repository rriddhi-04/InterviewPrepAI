import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
// import Input from '../../components/Inputs/Input';

const SignUp = ({setCurrentPage}) => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle SignUp Form Submit
  const handleSignUp = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-black">Create an Account</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6">
        Join us today by entering your details below.
      </p>

      <form onSubmit={handleSignUp}>
        <ProfilePhotoSector image={profilePic} setImage={setProfilePic} />
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
          <input
            value={fullName}
            onChange={({target}) => setFullName(target.value)}
            label="Full Name"
            placeholder="John"
            type="text"
          />  

          <input
            value={email}
            onChange={({target}) => setEmail(target.value)}
            label="Email Address"
            placeholder="john@example.com"
            type="text"
          /> 

          <input
            value={password}
            onChange={({target}) => setPassword(target.value)}
            label="Password"
            placeHolder="Min 8 Cgharactes"
            type="password" 
          />
        </div>

        {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

        <button type="submit" className="">
          SIGN UP
        </button>

        <p className="text-[13px] text-slate-800 mt-3">
          Already an account?{" "}
          <button 
            className="font-medium text-primary underline cursor-pointer"
            onClick={() => {
              setCurrentPage("login");
            }}
          >
            Login
          </button>
        </p>
      </form>
      
    </div>
  )
}

export default SignUp




