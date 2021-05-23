import Claphands from "../assets/icons/Claphands"
import { useState } from 'react';
import Facebook from '../assets/icons/Facebook';
import Twitter from '../assets/icons/Twitter';
import Linkedin from '../assets/icons/Linkedin';
import Copied from '../assets/icons/Copied';
import Bookmark from "../assets/icons/Bookmark";

const SocialDetails = () => {
  const [claps, setClaps] = useState(0)
  return ( 
    <div className="mt-6 pb-6 flex flex-col md:flex-row md:justify-between border-b border-greyBorder">
      <div className="flex flex-row items-center md:mt-4">
        <div onClick={() => setClaps(claps + 1)} className="cursor-pointer">
          <Claphands />
        </div>
        <p className="font-normal text-base ml-1">
          {claps} claps
        </p>
      </div>
      <div className="mt-4 flex flex-col md:flex-row md:items-center">
        <p className="md:mr-2">
          Share
        </p>
        <div className="flex flex-row mt-1">
          <div className="bg-orange w-6 h-6 rounded-full mr-1">
            <Facebook />
          </div>
          <div className="bg-orange w-6 h-6 rounded-full mx-1">
            <Twitter />
          </div>
          <div className="bg-orange w-6 h-6 rounded-full mx-1">
            <Linkedin />
          </div>
          <div className="bg-orange w-6 h-6 rounded-full mx-1">
            <Copied />
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-row md:items-center">
        <h1 className="mr-2">
          Bookmark
        </h1>
        <Bookmark />
      </div>
    </div>
   );
}
 
export default SocialDetails;