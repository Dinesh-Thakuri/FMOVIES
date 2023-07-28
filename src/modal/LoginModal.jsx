import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import isEmail from "validator/lib/isEmail";
import { login } from "../Redux/Slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LoginModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(isEmail(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail) {
      alert("Enter correct email.");
    }

    // api call to backend/firebase
    // backend gives token

    let token = "hhhjhajsdf.adsfuipi2323";

    // let isRememberMe = false;

    dispatch(login(token));
    navigate("/");
  };

  return (
    <>
      <div
        className="flex border-2 border-[white] px-3 py-1 gap-x-2 rounded-full text-[white] 
      hover:bg-theme
       focus:outline-none focus-visible:ring-2 focus-visible:ring-white 
       focus-visible:ring-opacity-75"
      >
        <button type="button" onClick={openModal}>
          Login
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col p-6 rounded-xl text-left  h-[full] bg-[gray] text-[white]"
                >
                  <div className="flex">
                    <h1 className="text-h">Welcome Back</h1>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                  <div className="pt-[10px]  flex flex-col">
                    <label className="text-gray-300">
                      <b>Account</b>
                    </label>
                    <input
                      type="text"
                      placeholder="Username or email"
                      className={`border-2 rounded-md bg-[#292929] p-3 w-[360px] outline-none ${
                        !isValidEmail && email ? "border-[red]" : ""
                      } `}
                      value={email}
                      onChange={(e) => handleChangeEmail(e)}
                    />
                    {!isValidEmail && email && (
                      <div className="text-[red] text-sm">
                        Enter email with correct format
                      </div>
                    )}
                  </div>
                  <div className="pt-[10px] flex flex-col">
                    <label className="text-gray-300">
                      <b>Password</b>
                    </label>
                    <input
                      type="password"
                      placeholder="Your password"
                      className="border-2 rounded-md bg-[#292929]  p-3 w-[360px] outline-none"
                    />
                  </div>
                  <div className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      className="mr-2"
                      // onClick={(isRememberMe = true)}
                    />
                    <label className="text-[gray]">Remember Me</label>
                  </div>
                  <button
                    type="submit"
                    className="mt-4 w-full bg-theme text-[black] font-semibold p-2 rounded-md"
                    disabled={!isValidEmail}
                  >
                    Sign In
                  </button>
                </form>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
