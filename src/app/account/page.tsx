import Link from "next/link"
import Sponser from "../../components/Features"
export default function Login(){
    return <div className="lg:pl-45 lg:pr-45"> 
    <div className="mx-auto w-full  bg-lightpurple">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4   p-10">
      <nav className="text-sm">
      <h1 className="text-6xl text-black">My Account</h1>
        <ol className="flex space-x-2">
          <li>
            <Link href="/" className="text-blue-500 hover:text-blue-700">Home</Link>
          </li>
          <li className="text-gray-500">.</li>
          <li>
            <Link href="#" className="text-blue-500 hover:text-blue-700">My Account</Link>
          </li>
        </ol>
      </nav>
    </div> 
    </div>
    <div className="grid place-items-center lg:place-items-center xl:place-items-center 2xl:place-items-center sm:m-0 md:m-0 sm:p-0 md:p-0">
    <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md mt-10">
        {/* Login Heading */}
        <h1 className="text-2xl font-bold text-gray-800 text-center">Login</h1>
        
        {/* Paragraph */}
        <p className="text-gray-600 text-sm text-center mt-2">
        Please login using account detail bellow.
        </p>

        {/* Form */}
        <form className="grid gap-4 mt-6">
          {/* Email Input */}
          <div>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password Input */}
          <div>
             <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Text Below Inputs */}
          <p className="text-xs text-gray-500 text-center">
          Forget Your password?
          </p>

          {/* Full-width Button */}
          <button
            type="submit"
            className="w-full bg-pink text-black py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>
          <p className="text-xs text-gray-500 text-center">
          Don’t have an Account?Create account
          </p>
        </form>
      </div>
      <div>
        <Sponser/>
      </div>

    </div>
    </div>

}