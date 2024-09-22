import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStorage";

const JobDetails = () => {

    const navigate = useNavigate();

    const jobs = useLoaderData();
    const {id} =  useParams();
    const job = jobs.find(j => j.id === parseInt(id));
    console.log(job);
    const {job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information} = job;


    const handleApplyJob = () => {
        saveJobApplication(parseInt(id));
        toast('Job has been applied')
    }
    

    return (
        <div>
            <h2>Job Details of: {id}</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-3 space-y-4">
                    <h2><span className="font-extrabold">Job Description:</span> <span><small>{job_description}</small></span></h2>
                    <h2><span className="font-extrabold">Job Responsibility:</span> <span><small>{job_responsibility}</small></span></h2>
                    <h5 className="font-extrabold">Educational Requirements:</h5>
                    <p><small>{educational_requirements}</small></p>
                    <h5 className="font-extrabold">Experience: </h5>
                    <p><small>{experiences}</small></p>

                </div>
                <div>
                <div className="bg-gradient-to-r from-[#9873FF1A] to-[#7E90FE1A] p-4 space-y-6 rounded-lg">
                    <h2 className="text-[20px] font-extrabold">Job Details</h2>
                    <hr />
                    <h2><span className="font-bold">Salary: </span> <span>{salary} (per Month)</span></h2>
                    <h2><span className="font-bold">Job title: </span> <span>{job_title}</span></h2>

                    <h2 className="text-[20px] font-extrabold">Contact Information</h2>

                    <hr />

                    <h2><span className="font-bold">Phone: </span> <span>{contact_information.phone}</span></h2>
                    <h2><span className="font-bold">Email: </span> <span>{contact_information.email}</span></h2>
                    <h2><span className="font-bold">Address: </span> <span>{contact_information.address}</span></h2>
                </div>
                <div className="w-full mt-6">
                <button onClick={handleApplyJob} className="btn bg-gradient-to-r from-[#9873FF] to-[#7E90FE] w-full text-white">Apply Now</button>
                </div>
                </div>
            </div>
            <div className="my-6 flex justify-center">
                <button onClick={()=> navigate(-1)} className="btn btn-secondary px-10">Back</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;