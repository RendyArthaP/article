import { useState } from 'react';
import Love from '../assets/icons/Love';

const ListComment = () => {
  const [comment, setComment] = useState({
    name: "Rendy Artha P",
    time: 12,
    comments: "Berita yang sangat akurat"
  })
  return ( 
    <div className="mt-6 flex flex-row items-center">
      <div className="w-10 h-10 bg-orange rounded-full">
        <h1 className="text-lg text-center pt-1.5">
          {comment.name.charAt(0).toUpperCase()}
        </h1>
      </div>
      <div className="flex flex-col mx-2">
        <h1 className="font-normal text-base text-gray">
          {comment.name}
        </h1>
        <span className="font-normal text-sm text-gray my-1">
          {comment.comments}
        </span>
        <div className="flex flex-row items-center">
          <span className="text-xs font-normal">
            {comment.time} minutes ago
          </span>
          <div className="flex flex-row items-center mx-4">
            <Love />
            <span className="mx-1 text-xs font-normal">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default ListComment;