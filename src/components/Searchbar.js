const Searchbar = () => {
  return (
    <div className="mt-28 flex flex-col px-6 md:flex-row md:justify-between w-full mx-auto md:px-16 max-w-6xl">
      <div className="w-full max-w-3xl my-2 md:my-0 md:mx-4">
        <input 
          type="text"
          className="border border-gray rounded p-2 focus:outline-none w-full"
        />
        <button className="bg-orange border -ml-16 absolute py-2 border-gray rounded w-16 text-white">
          Cari
        </button>
      </div>
      <select className="border border-gray rounded text-grayText p-2 w-full md:w-32 focus:outline-none md:mx-2 my-2 md:my-0">
        <option>Kategori</option>
      </select>
      <select className="border border-gray rounded text-grayText p-2 w-full md:w-32 focus:outline-none md:mx-2 my-2 md:my-0">
        <option>Urutkan</option>
      </select>
    </div>
  )
}

export default Searchbar
