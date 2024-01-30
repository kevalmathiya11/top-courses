import React, { useState } from 'react'
import Card from './Card'

function Cards(props) {
 
  let courses = props.courses
  let category = props.category
  const allCourses = [];
  const [likedCourses,setLikedCourses] = useState([])
  const getCourses  = () => {

    if ( category == "All"){
      Object.values(courses).forEach(courseCatagory =>{
        courseCatagory.forEach(course => {
          allCourses.push(course);
        })
      })
      return allCourses;
    }
    else{
      return courses[category]
    }
   
  }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {getCourses().map((course) =>{
          return <Card key={course.id} 
          course = {course} 
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}/>
        })}
    </div>
  )
}

export default Cards
