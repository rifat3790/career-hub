import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const JobDetails = () => {

    const navigate = useNavigate();

    const jobs = useLoaderData();
    const {id} =  useParams();
    const job = jobs.find(j => j.id === parseInt(id));
    console.log(job);
    const {job_description, job_responsibility, educational_requirements, experiences} = job;
    

    return (
        <div>
            <h2>Job Details of: {id}</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border md:col-span-3 space-y-4">
                    <h2><span className="font-extrabold">Job Description:</span> <span><small>{job_description}</small></span></h2>
                    <h2><span className="font-extrabold">Job Responsibility:</span> <span><small>{job_responsibility}</small></span></h2>
                    <h5 className="font-extrabold">Educational Requirements:</h5>
                    <p><small>{educational_requirements}</small></p>
                    <h5 className="font-extrabold">Experience: </h5>
                    <p><small>{experiences}</small></p>

                </div>
                <div className="border">
                    <button>Apply Now</button>
                </div>
            </div>
            <div className="my-6 flex justify-center">
                <button onClick={()=> navigate(-1)} className="btn btn-secondary px-10">Back</button>
            </div>
        </div>
    );
};

export default JobDetails;