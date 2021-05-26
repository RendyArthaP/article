import ListComment from "./ListComment"
import { useDispatch, useSelector } from 'react-redux';
import { postComment, getComment } from '../redux/actions/comment.actions';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Comment = ({isLogin}) => {
  const router = useRouter()
  let { id } = router.query
  const dispatch = useDispatch()
  const comments = useSelector((state) => state.handleComment.data.data)
  // console.log(comments)
  const [comment, setComment] = useState("")
  const handleComment = (e) => {
    e.preventDefault();
    dispatch(postComment(id, comment))
    setComment("")
  }
  
  useEffect(() => {
    dispatch(getComment(id))
  }, [dispatch, id])
  
  return (  
    <main className="mt-6 pb-6">
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="text-base font-normal font-cabin">
          {!!comments && comments.length} comments
        </h1>
        <div>
          <span className="md:mx-2 text-base font-normal text-gray font-cabin">
            Newest
          </span>
          <span className="mx-2 text-base font-normal text-grey font-cabin">
            Oldest
          </span>
          <span className="ml-2 text-base font-normal text-grey font-cabin">
            Liked
          </span>
        </div>
      </div>
      {isLogin 
        ?
          <div className="w-full max-w-4xl my-2 md:my-0 mx-auto pt-4">
            <input 
              type="text"
              className="border border-gray rounded p-2 font-cabin focus:outline-none w-full"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button 
              type="button"
              className="bg-orange border -ml-16 absolute py-2 font-cabin border-gray rounded w-16 text-white"
              onClick={handleComment}
            >
              Add
            </button>
          </div>
        :
          null
      }
      {!!comments && comments.length === 0 
        ? 
          <div className="text-center font-bold text-2xl mt-10">
            <h1 className="font-cabin">Silahkan beri review</h1>
          </div>
        :
          <>
            {!!comments && comments.map((commentList, index) => (
              <ListComment 
                comment = {commentList} 
                key={index}
              />
            ))}
          </>
      }
    </main>
  );
}
 
export default Comment;