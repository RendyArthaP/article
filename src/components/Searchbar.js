import { useSelector, useDispatch } from 'react-redux'
import { categorySelected } from '../redux/actions/article.actions';

const Searchbar = ({articles, searchName, setSearchName, searchNameArticle}) => {
  const dispatch = useDispatch()
  const searchArticle = useSelector((state) => state.handleArticle.categoryArticle)
  const category = ['Kategory', ...new Set(articles.map(categories => categories.category))]

  return (
    <div className="mt-10 flex flex-col px-6 md:flex-row md:justify-between w-full mx-auto md:px-16 max-w-6xl">
      <div className="w-full max-w-3xl my-2 md:my-0 md:mx-4">
        <input 
          type="text"
          className="border border-gray font-cabin rounded p-2 focus:outline-none w-full"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          placeholder="Masukkan kata kunci atau judul article"
        />
        <button 
          className="bg-orange border -ml-16 font-cabin absolute py-2 border-gray rounded w-16 text-white"
          onClick={searchNameArticle}
        >
          Cari
        </button>
      </div>
      <select 
        className="border border-gray rounded font-cabin text-grayText p-2 w-full md:w-32 focus:outline-none md:mx-2 my-2 md:my-0"
        value={searchArticle}
        onChange={(e) => dispatch(categorySelected(e.target.value))}
      >
        {category.map((categories, index) => {
          return (
            <option 
              key={index}
              value={categories}
            >
              {categories}
            </option>
          )
        })}
      </select>
      <select className="border border-gray rounded font-cabin text-grayText p-2 w-full md:w-32 focus:outline-none md:mx-2 my-2 md:my-0">
        <option>Urutkan</option>
      </select>
    </div>
  )
}

export default Searchbar
