import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../utils/validation.js";
import AuthInput from "./AuthInput.jsx";
import HashLoader from "react-spinners/HashLoader";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/userSlice";
import { toast } from "react-toastify";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });
  const onSubmit = async (data) => {
    console.log(data);
    let res = await dispatch(registerUser({ ...data, picture: "" }));
    if (res.payload.user) {
      toast.success("Registration successful  🚀");
      navigate("/login");
    }
  };
  console.log("value watch", watch());
  console.log("errors", errors);

  return (
    <div className="w-full flex items-center justify-center overflow-hidden">
      {/* Container */}
      <div className="w-full max-w-md space-y-8 p-10 dark:bg-dark_bg_2 rounded-2xl">
        {/* Heading */}
        <div className="text-center dark:text-dark_text_1">
          <h2 className="mt-6 text-3xl font-bold">Welcome</h2>
          <p className="mt-2 text-sm">Sign up</p>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
          <AuthInput
            name="name"
            type="text"
            placeholder="Full Name"
            register={register}
            error={errors?.name?.message}
          />
          <AuthInput
            name="email"
            type="text"
            placeholder="Email"
            register={register}
            error={errors?.email?.message}
          />
          <AuthInput
            name="phoneNumber"
            type="text"
            placeholder="Phone Number"
            register={register}
            error={errors?.phoneNumber?.message}
          />
          <AuthInput
            name="password"
            type="password"
            placeholder="Password"
            register={register}
            error={errors?.password?.message}
          />
          <AuthInput
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            register={register}
            error={errors?.confirmPassword?.message}
          />
          {/* If we have an error */}
          {error ? (
            <div>
              <p className="text-red-400">{error}</p>
            </div>
          ) : null}
          {/* Submit button */}
          <button
            className="w-full flex justify-center bg-green_1 text-gray-100 p-4 rounded-full tracking-wide font-semibold
          focus:outline-none hover:bg-green_2 shadow-lg cursor-pointer transition ease-in duration-300"
            type="submit"
          >
            {status === "loading" ? (
              <HashLoader color="#fff" size={30} />
            ) : (
              "Sign Up"
            )}
          </button>
          {/* Sign in link */}
          <p className="flex flex-col items-center justify-center mt-10 text-center text-md dark:text-dark_text_1">
            <span>Have an account ?</span>
            <Link
              href="/login"
              className="hover:underline cursor-pointer transition ease-in duration-300"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
