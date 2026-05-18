import React from "react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <div className="border-2 border-gray-500 p-4 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2>Course Title</h2>
        <h2>{params.courseId}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia,
          officiis.
        </p>
      </div>
    </div>
  );
};

export default CourseDetail;
