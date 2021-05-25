import { useState } from 'react';

const Author = () => {
  const [author, setAuthor] = useState({
    name: "Rendy Artha P",
    description: "Works at TotalKarir, helping event creators level-up their game and connect with one another. Born and raised in New Orleans, there’s nothing he enjoys more than helping people get together."
  })
  return ( 
    <div className="flex flex-col mt-6 pb-6 border-b border-greyBorder">
      <div className="flex flex-row items-center">
        <div className="w-14 h-14 bg-orange rounded-full">
          <h1 className="text-2xl text-center pt-2.5 text-white font-cabin">
            {author.name.charAt(0).toUpperCase()}
          </h1>
        </div>
        <div className="flex flex-col mx-4">
          <span className="text-sm text-grey font-normal font-cabin">
            About Author
          </span>
          <h1 className="text-xl font-normal text-gray font-cabin">
            {author.name}
          </h1>
        </div>
      </div>
      <p className="mt-2 font-normal text-xs text-black font-cabin">
        {author.description}
      </p>
    </div>
  );
}
 
export default Author;