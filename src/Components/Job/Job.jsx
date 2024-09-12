import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
  return (
    <div className="flex flex-col h-full">
      <div className="card card-compact bg-base-100 shadow-xl pt-5 flex-grow h-full">
        <figure>
          <img
            src={logo}
            alt="Company Logo"
          />
        </figure>
        <div className="space-y-4 mt-4 p-10 flex flex-col h-full justify-between">
          <div>
            <h2 className="card-title">{job_title}</h2>
            <p>{company_name}</p>
            <div className="my-4">
              <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
              <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] ml-4 text-[#7E90FE]">{job_type}</button>
            </div>
            <div className="flex gap-4">
              <p className="flex items-center gap-1"><IoLocationOutline className="text-2xl" /> <span>{location}</span></p>
              <p className="flex items-center gap-1"><CiDollar className="text-2xl" /> <span>{salary}</span></p>
            </div>
          </div>
          <div className="card-actions mt-4">
            <Link to={`/job/${id}`}><button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
