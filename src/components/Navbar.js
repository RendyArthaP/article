import Link from 'next/link';
import Hamburger from '../assets/icons/Hamburger';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { logoutAction } from '../redux/actions/auth.actions';
import Router from "next/router";

const Navbar = ({isLogin}) => {
  const dispatch = useDispatch()
  const firstLetterUpperCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  const handleLogout = () => {
    localStorage.clear()
    dispatch(logoutAction())
    Router.push('/')
  }
  const [navbarMobile, setNavbarMobile] = useState(false)
  return (
    <div className="flex flex-row justify-between p-4 md:px-6 shadow-lg xl:px-10 2xl:px-16">
      <div className="flex flex-row items-center">
        <Link href="/">
          <h1 className="text-orange font-bold text-3xl cursor-pointer font-poppins">
            Designate.
          </h1>
        </Link>
        <div className="hidden lg:flex flex-row md:ml-6">
          <h1 className="mx-4 font-normal text-xl cursor-pointer font-poppins hover:text-orange">Event</h1>
          <h1 className="mx-4 font-normal text-xl cursor-pointer font-poppins hover:text-orange">Blog</h1>
          <select className="mx-4 w-10 cursor-pointer">
            <option className="font-poppins">ID</option>
            <option className="font-poppins">ENG</option>
          </select>
        </div>
      </div>
      <div className="hidden md:flex flex-row items-center">
        {isLogin 
          ?
            <div className="flex flex-row items-center">
              <h1>
                Hello, {firstLetterUpperCase(JSON.parse(localStorage.payload).name)}
              </h1>
              <button 
                className="mx-4"
                onClick={handleLogout}
              >
                Log out
              </button>
            </div>
          :
            <>
              <Link href="/login">
                <h1 className="mx-4 font-normal text-xl cursor-pointer font-poppins hover:text-orange">Masuk</h1>
              </Link>
              <Link href="/register">
                <h1 className="mx-4 font-normal text-xl cursor-pointer font-poppins hover:text-orange">Daftar</h1>
              </Link>
            </>
        }
        <button className="ml-4 border w-36 text-orange font-poppins font-normal text-xl border-orange p-1 hover:bg-orange hover:text-white">
          Perusahaan
        </button>
      </div>
      <div 
        className="flex md:hidden"
        onClick={() => setNavbarMobile(!navbarMobile)}
      >
        <Hamburger />
      </div>
      {navbarMobile && (
        <ul className="flex flex-col absolute bg-white w-full left-0 top-14 z-10 pb-6 md:hidden">
          <li className="mx-4 pt-4 pb-2 font-medium text-base border-b border-black">
            <Link href="/login">
              About
            </Link>
          </li>
          <li className="mx-4 pt-4 pb-2 font-medium text-base border-b border-black">
            <Link href="/register">
              Portofolio
            </Link>
          </li>
          <li className="mx-4 pt-4 pb-2 font-medium text-base border-b border-black">
            <Link href="#">
              Perusahaan
            </Link>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Navbar
