import ListComment from "./ListComment"
import { useDispatch, useSelector } from 'react-redux';
import { postComment, getComment } from '../redux/actions/comment.actions';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Comment = () => {
  const router = useRouter()
  let { id } = router.query
  const dispatch = useDispatch()
  const comments = useSelector((state) => state.handleComment.data.data)

  useEffect(() => {
    dispatch(getComment(id))
  }, [dispatch, id])

  return (  
    <main className="mt-6 pb-6">
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="text-base font-normal">
          {!!comments && comments.length} comments
        </h1>
        <div>
          <span className="md:mx-2 text-base font-normal text-gray">
            Newest
          </span>
          <span className="mx-2 text-base font-normal text-grey">
            Oldest
          </span>
          <span className="ml-2 text-base font-normal text-grey">
            Liked
          </span>
        </div>
      </div>
      <div className="w-full max-w-4xl my-2 md:my-0 mx-auto pt-4">
        <input 
          type="text"
          className="border border-gray rounded p-2 focus:outline-none w-full"
        />
        <button className="bg-orange border -ml-16 absolute py-2 border-gray rounded w-16 text-white">
          Add
        </button>
      </div>
      {!!comments && comments.map((comment, index) => (
        <ListComment 
          comment = {comment} 
          key={index}
        />
      ))}
    </main>
  );
}
 
export default Comment;