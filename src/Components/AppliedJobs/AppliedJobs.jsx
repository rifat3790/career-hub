import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData(); // This might be undefined at first
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);


  const handleJobsFilter = filter=>{
    if(filter == 'all'){
        setDisplayJobs(appliedJobs);
    }
    else if(filter == 'remote'){
        const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
        setDisplayJobs(remoteJobs);
    }
    else if(filter == 'onsite'){
        const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
        setDisplayJobs(onsiteJobs);
    }
  }


  useEffect(() => {
    // Safeguard: Check if jobs are defined and have length
    if (jobs && jobs.length > 0) {
      const storedJobIds = getStoredJobApplication();
      const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied); // Display the applied jobs by default
    }
  }, [jobs]);

  // Debugging: Log applied jobs to make sure the logic works
  console.log(appliedJobs);

  return (
    <div>
      <h2 className="text-2xl">Jobs I applied:</h2>
      <details className="dropdown">
        <summary className="btn m-1">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li onClick={()=> handleJobsFilter('all')}>
            <a>All</a>
          </li>
          <li onClick={()=>handleJobsFilter('remote')}>
            <a>Remote</a>
          </li>
          <li onClick={()=>handleJobsFilter('onsite')}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      {appliedJobs.length > 0 ? (
        <ul>
          {displayJobs.map((job) => (
            <li key={job.id}>{job.job_title} {job.company_name} {job.remote_or_onsite}</li>
          ))}
        </ul>
      ) : (
        <p>No jobs applied yet.</p>
      )}
    </div>
  );
};

export default AppliedJobs;
