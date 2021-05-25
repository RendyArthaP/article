import { useState } from 'react';
import moment from 'moment';
import Love from '../assets/icons/Love';

const ListComment = ({comment}) => {
  const firstLetterUpperCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return ( 
    <div className="mt-6 flex flex-row items-center">
      <div className="w-10 h-10 bg-orange rounded-full">
        <h1 className="text-lg text-center pt-1.5 text-white font-cabin">
          {JSON.parse(localStorage.payload).name.charAt(0).toUpperCase()}
        </h1>
      </div>
      <div className="flex flex-col mx-2">
        <h1 className="font-normal text-base text-gray font-cabin">
          {firstLetterUpperCase(JSON.parse(localStorage.payload).name)}
        </h1>
        <span className="font-normal text-sm text-gray my-1 font-cabin">
          {comment.comment}
        </span>
        <div className="flex flex-row items-center">
          <span className="text-xs font-normal font-cabin">
            {moment(comment.date).startOf('day').fromNow()}
          </span>
          <div className="flex flex-row items-center mx-4">
            <Love />
            <span className="mx-1 text-xs font-normal font-cabin">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default ListComment;