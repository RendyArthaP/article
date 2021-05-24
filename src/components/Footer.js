import Facebook from "../assets/icons-footer/Facebook"
import Twitter from "../assets/icons-footer/Twitter"
import Instagram from "../assets/icons-footer/Instagram"
import Linkedin from "../assets/icons-footer/Linkedin"

const Footer = () => {
  return ( 
    <footer>
      <div className="bg-orange px-4 md:px-6 xl:px-10 2xl:px-16 flex flex-wrap flex-col md:flex-row md:justify-between">
        <div className="pt-4">
          <div>
            <h1 className="font-bold text-4xl text-white">
              Designate.
            </h1>
            <span className="font-bold text-xs text-white">
              Solve your problems with our services
            </span>
          </div>
          <div className="pt-4 flex flex-col w-64 ">
            <span className="font-normal text-white text-lg">District 8, SCBD Lot 28 Jl. Jenderal Sudirman Kav. 52-53 DKI Jakarta 12190 Indonesia</span>
            <span className="font-normal text-white text-lg">Phone : 021-5431 334</span>
          </div>
        </div>
        <div className="flex flex-col my-4">
          <h1 className="font-bold text-2xl text-white">Feature</h1>
          <span className="text-white">Overview</span>
          <span className="text-white">Design</span>
          <span className="text-white">Programming</span>
          <span className="text-white">Collaborate</span>
        </div>
        <div className="flex flex-col my-4">
          <h1 className="font-bold text-2xl text-white">Know Us More</h1>
          <span className="text-white font-normal text-lg">About us</span>
          <span className="text-white font-normal text-lg">Testimonial</span>
          <span className="text-white font-normal text-lg">FAQ</span>
          <span className="text-white font-normal text-lg">Terms & Condition</span>
        </div>
        <div className="flex flex-col my-4">
          <h1 className="font-bold text-2xl text-white">About Us</h1>
          <span className="text-white font-normal text-lg">Stories</span>
          <span className="text-white font-normal text-lg">Community</span>
          <span className="text-white font-normal text-lg">Careers</span>
        </div>
        <div className="flex flex-col my-4 ">
          <h1 className="font-bold text-2xl text-white">Find Us On</h1>
          <div className="flex flex-row mt-1">
            <div className="mr-2">
              <Facebook />
            </div>
            <div className="mr-2">
              <Twitter />
            </div>
            <div className="mr-2">
              <Instagram />
            </div>
            <div>
              <Linkedin />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-brown px-4 md:px-6 xl:px-10 2xl:px-16">
        <div className="flex flex-col text-center py-2 md:flex-row md:justify-between md:py-2.5">
          <div className="">
            <h1 className="font-normal text-sm text-white mb-1">
              Copyright &copy; {new Date().getFullYear()} Designate
            </h1>
          </div>
          <h1 className="font-normal text-sm text-white">
            Hak Cipta Dilindungi oleh Undang-Undang
          </h1>
        </div>
      </div>
    </footer>
   );
}
 
export default Footer;