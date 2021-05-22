import Link from 'next/link';

const ListArticle = ({article}) => {
  return (
    <Link href={`/articles/${article._id}`}>
      <div className="flex flex-col lg:flex-row border cursor-pointer border-grey rounded w-full lg:h-48 lg:w-5/12 my-4 mx-auto">
        <div className="">
          <img
            src={article.image}
            alt={article.title}
            className="object-fill w-full lg:w-72 h-full rounded"
          />
        </div>
        <div className="p-2 lg:m-auto lg:text-left">
          <h1 className="font-normal text-xl text-gray">
            {article.title}
          </h1>
          <span className="font-normal text-base text-blue">
            {article.category}
          </span>
          <p className="font-normal text-base text-grey">
            {article.date.slice(0, 10)}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default ListArticle
