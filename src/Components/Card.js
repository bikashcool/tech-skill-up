import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = ({ course, likedCourses, setLikedCourses}) => {
  const clickHandler = () => {
    if(likedCourses.includes(course.id)){
      // pehle se like pada hai 
      setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
      toast.warning("Like Removed");
    }else{
      // pehle se not liked 
      // insert karo liked karo 
      if(likedCourses.length === 0){
        setLikedCourses([course.id]);
      }else{
        // non-empty pehle se
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  };

  return (
    <div className="w-[300px] rounded-md overflow-hidden bg-[#1f3c4f]">
      <div className="relative">
        <img alt="course-img" src={course.image.url} />
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 -bottom-3 grid place-items-center">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white">{course.description.length > 100 ? (course.description.substr(0,100)) + "...": (course.description)}</p>
      </div>
    </div>
  );
};

export default Card;
