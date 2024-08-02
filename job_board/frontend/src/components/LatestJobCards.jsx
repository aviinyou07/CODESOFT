import React from "react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="p-5 rounded-md shadow-2xl bg-blue-100 border cursor-pointer"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-extrabold text-lg text-gray-600">
          {job?.company?.name}
        </h1>
        <p className="text-sm text-gray-500 font-medium">India</p>
      </div>
      <div className="">
        <h1 className="font-semibold text-lg text-gray-800 my-3 text-center">
          {job?.title}
        </h1>
        <p className="text-sm text-gray-500">{job?.description}</p>
      </div>
      <div className="flex items-center gap-6 mt-5 justify-center">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          {job?.position} Positions
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          {job?.salary}LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
