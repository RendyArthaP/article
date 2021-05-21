import Link from 'next/link';

const Navbar = () => {
  return (
    <div 
      className="flex flex-row justify-between p-4 md:px-6 shadow-lg xl:px-10 2xl:px-16"
    >
      <div className="flex flex-row items-center">
        <h1 className="text-orange font-bold text-3xl">
          Designate.
        </h1>
        <div className="hidden lg:flex flex-row md:ml-6">
          <h1 className="mx-4 font-normal text-xl cursor-pointer hover:text-orange">Event</h1>
          <h1 className="mx-4 font-normal text-xl cursor-pointer hover:text-orange">Blog</h1>
          <select className="mx-4 w-10 cursor-pointer">
            <option>ID</option>
            <option>ENG</option>
          </select>
        </div>
      </div>
      <div className="hidden md:flex flex-row items-center">
        <Link href="/login">
          <h1 className="mx-4 font-normal text-xl cursor-pointer hover:text-orange">Masuk</h1>
        </Link>
        <Link href="/register">
          <h1 className="mx-4 font-normal text-xl cursor-pointer hover:text-orange">Daftar</h1>
        </Link>
        <button className="mx-4 border w-32 text-orange font-normal text-xl border-orange p-1 hover:bg-orange hover:text-white">
          Perusahaan
        </button>
      </div>
    </div>
  )
}

export default Navbar
