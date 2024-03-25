import { useLoaderData, useParams } from "react-router-dom";
import { CiDollar, CiLocationOn } from "react-icons/ci";
import { PiSubtitlesFill } from "react-icons/pi";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../utility/locatstorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('you have applied successfully');
    }

    return (
        <div>

            <div className="flex my-20">
                <div className="w-2/3 space-y-4">
                    <h2 className="text-xl"><span className="font-bold">Job Description: </span>{job.job_description}</h2>
                    <h2><span className="font-bold">Job Responsibility:</span>  {job.job_responsibility} </h2>
                    <p className="font-bold">Education Requirements:</p>
                    <p>{job.educational_requirements} </p>
                    <p className="font-bold">Experiences:</p>
                    <p>{job.experiences} </p>



                </div>
                <div className="w-1/3 space-y-4 border rounded-md bg-slate-200 m-2 p-4">
                    <div className="text-3xl font-bold">Job Details</div>
                    <hr />
                    <p className="flex text-center items-center space-x-2"><CiDollar></CiDollar><span className="font-bold">Salary:</span>{job.salary} (Per Month) </p>
                    <p className="flex text-center items-center space-x-2"><PiSubtitlesFill></PiSubtitlesFill><span className="font-bold mr-2">Job Title: </span> {job.job_title}</p>

                    <div className="text-3xl font-bold">Contact Information</div>
                    <p className="flex text-center items-center space-x-2"><FiPhoneCall></FiPhoneCall><span className="font-bold mr-2">Phone: </span> {job.contact_information.phone}</p>
                    <p className="flex text-center items-center space-x-2"><MdOutlineMail ></MdOutlineMail ><span className="font-bold mr-2">Phone: </span> {job.contact_information.email}</p>
                    <p className="flex text-center items-center space-x-2"><CiLocationOn></CiLocationOn><span className="font-bold mr-2">Phone: </span> {job.contact_information.address}</p>


                    <button onClick={handleApplyJob} className="btn btn-primary w-full text-xl font-bold">Apply Now</button>

                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;