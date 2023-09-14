import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  // const [username, setUsername] = useState([]);
  // const [password, setPassword] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitData = async () => {
    try {
      const response = await axios({
        url: "api/users/login",
        method: "POST",
        data: {
         email,
         password
        },
        headers:
      });
      if(response.status === 200){
        console.log("submitData Login",response);
        // setLoginData(response.data.success)

      }
    } catch (error) {
      console.log("SubmitData CATCH ERROR",error)
    }
  };

  return (
    <div className="bg-amber-500 min-h-screen flex items-center justify-center">
      <div className="shadow-lg bg-white w-[35%] h-3/6 text-2xl rounded-md">
        <h1 className="text-2xl uppercase text-center font-bold py-1 px-1">
          Login
        </h1>
        <form className="py-10 px-10">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-black font-medium text-[20px]"
            >
              Email address:
            </label>
            <input
              className="shadow appearance-none border rounded w-full h-14 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3"
              type="text"
              id="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password "
              className="block text-black font-medium text-[20px] mt-8"
            >
              Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full h-14 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3 text-10px"
              type="text"
              id="password"
              name="password"
              placeholder="************"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <Link to="">
            <span
              to="biocalls"
              className="bg-blue-600 flex justify-center uppercase text-white w-full mt-9 font-bold py-2 px-4 rounded "
              type="button"
              // onClick={() => {
              //   // submitData();
              //   // nav.to("biocalls")
              // }}
              onClick={submitData}
            >
              Sign In
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
