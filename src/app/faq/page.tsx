import Link from "next/link";
import Sponser from "../../components/Features";
export default function FAQ(){
    return  <div className="lg:pl-45 lg:pr-45"> 
    <div className="mx-auto w-full  bg-lightpurple p-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4   p-10">
      <nav className="text-sm">
      <h1 className="text-6xl text-black">Hackto Demo</h1>
        <ol className="flex space-x-2">
          <li>
            <Link href="/" className="text-blue-500 hover:text-blue-700">Home</Link>
          </li>
          <li className="text-gray-500">.</li>
          <li>
            <Link href="#" className="text-blue-500 hover:text-blue-700">FAQ</Link>
          </li>
        </ol>
      </nav>
    </div> 
    </div>
  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4   p-20 mx-auto">
        <div className="p-2">
            <h1 className="text-4xl text-black">General Information</h1> 
            <br/>
            <div className="max-w-xs">           
            <p className="font-extrabold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum vel ligula a aliquam. </p>
            <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum vel ligula a aliquam. </p>
        </div>
        <div className="max-w-xs">           
            <p className="font-extrabold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum vel ligula a aliquam. </p>
            <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum vel ligula a aliquam. </p>
        </div>
        <div className="max-w-xs">           
            <p className="font-extrabold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum vel ligula a aliquam. </p>
            <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum vel ligula a aliquam. </p>
        </div>
        <div className="max-w-xs">           
            <p className="font-extrabold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum vel ligula a aliquam. </p>
            <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum vel ligula a aliquam. </p>
        </div>
        </div>
        <div className="bg-lightpurple border-gray-300 rounded-lg shadow-lg p-4">
            <h1 className="text-xl">Ask Questions</h1>
            <br/>
            <div className="max-w-lg  p-6 border mx-auto">
        <form action="#" method="POST">
    <div className="mb-4 p-4">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
      <input 
        type="text" 
        id="name" 
        name="name" 
        placeholder="Enter your name" 
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>
    
    <div className="mb-4">
      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
      <input 
        type="text" 
        id="subject" 
        name="subject" 
        placeholder="Enter subject" 
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>
    
    <div className="mb-4">
      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
      <textarea 
        id="message" 
        name="message" 
        placeholder="Enter your message" 
        rows={4}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      ></textarea>
    </div>

    <div className="flex justify-center">
      <button 
        type="submit" 
        className="px-6 py-2 bg-pink text-black rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Send
      </button>
    </div>
  </form>
</div>  
    

        </div>
    </div>
    <div className="">
        <Sponser/>
    </div>
  </div>
  
}