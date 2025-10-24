import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { auth } from "../../firebase/firebase.config";
import { useAuth } from "../../contexts/AuthContext";
import PrivateRoute from "../../Routes/PrivateRoute";
import { useEffect } from "react";




const Login = () => {
  const { user } = useAuth(); 
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();

  //  Handle email/password login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Successfully logged in!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // Handle Google login
  const handleGoogleSignin = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        toast.success("Google sign-in successful!");
        navigate(from, { replace: true }); 
      })
      .catch((e) => toast.error(e.message));
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);
  

  // Handle logout
  // const handleLogout = () => {
  //   signOut(auth)
  //     .then(() => toast.success("Logged out successfully"))
  //     .catch((error) => toast.error(error.message));
  // };

  const [email, setEmail] = useState("");
const handleForgotPasswordClick = () => {
    navigate(`/forgot-password?email=${encodeURIComponent(email)}`);
  };

  

  return (
    <div className="my-30 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
      <div className="card-body">
          <form onSubmit={handleLogin}>
            <h1 className="text-3xl font-bold text-center mb-4">Login now!</h1>

            <fieldset className="fieldset relative">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full bg-blue-900/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Email"
              />

              <label className="label mt-4">Password</label>
              <input
                type={show ? "text" : "password"}
                name="password"
                required
                className="input input-bordered w-full bg-blue-900/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Password"
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-5 top-[120px] cursor-pointer z-50"
              >
                {show ? <Eye /> : <EyeClosed />}
              </span>

              <div className="mt-2">
                <button
        type="button"
        onClick={handleForgotPasswordClick}
        className="link link-hover text-sm text-gray-400"
      >
        Forgot password?
      </button>
              </div>

              <button type="submit" className="btn btn-neutral mt-4 w-full">
                Login
              </button>
{/* or design  */}
              <div className="flex items-center justify-center gap-2 my-2">
                <div className="h-px w-16 bg-black/30"></div>
                <span className="text-sm text-black/70">or</span>
                <div className="h-px w-16 bg-black/30"></div>
              </div>

              <button
                type="button"
                onClick={handleGoogleSignin}
                className="btn bg-white text-black border-[#e5e5e5] w-full"
              >
                <svg
                  aria-label="Google logo"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </fieldset>

            <p className="text-center mt-3 text-black/80">
              New to our website?{" "}
              <Link className="text-blue-400 hover:underline font-semibold underline" to="/register">
                Register
              </Link>
            </p>
          </form>
      </div>
    </div>
  );
};

export default Login;
