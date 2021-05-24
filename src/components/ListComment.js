import { useState } from 'react';
import moment from 'moment';
import Love from '../assets/icons/Love';

const ListComment = ({comment}) => {
  console.log(comment)
  return ( 
    <div className="mt-6 flex flex-row items-center">
      <div className="w-10 h-10 bg-orange rounded-full">
        <h1 className="text-lg text-center pt-1.5 text-white">
          {comment.username.charAt(0).toUpperCase()}
        </h1>
      </div>
      <div className="flex flex-col mx-2">
        <h1 className="font-normal text-base text-gray">
          {comment.username}
        </h1>
        <span className="font-normal text-sm text-gray my-1">
          {comment.comment}
        </span>
        <div className="flex flex-row items-center">
          <span className="text-xs font-normal">
            {moment(comment.date).startOf('day').fromNow()}
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