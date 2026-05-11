import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import { IoMdArrowBack } from "react-icons/io";

import { getCareerBySlug } from "../../../Api/WordpressAPI";

import "./Careers.css";
import "./JobDetails.css";
import CareerBanner from "./CareerBanner";
import ApplyForm from "./ApplyForm";

const JobDetails = () => {
  const { jobId } = useParams();

  const navigate = useNavigate();

  const [job, setJob] = useState(null);

  const [loading, setLoading] = useState(true);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetchCareer();
  }, [jobId]);

  const fetchCareer = async () => {
    try {
      const item = await getCareerBySlug(jobId);

      if (!item) return;

      const formattedJob = {
        id: item.slug,

        designation: item.title.rendered,

        summary: item.acf?.job_summary || "",

        location: item.acf?.location || "",

        employment_type: item.acf?.employment_type || "",

        shift: item.acf?.shift_time || "",

        open_positions: item.acf?.open_position || "",

        responsibilities: item.content.rendered || "",

        featured_image:
          item?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
      };

      setJob(formattedJob);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (data) => {
    console.log(data);

    alert("Application submitted!");

    reset();
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <h4>Loading...</h4>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="text-center py-5">
        <h4>Job not found</h4>
      </div>
    );
  }

  return (
    <>
      <CareerBanner />
      <div className="container py-5">


        <button className="job-back-btn" onClick={() => navigate(-1)}>
          <IoMdArrowBack />
          Back to Careers
        </button>



        <div className="job-details-layout">


          <section className="job-content-side">


            {job.featured_image && (
              <img
                src={job.featured_image}
                alt={job.designation}
                className="job-details-image"
              />
            )}



            <div className="job-title-area">
              <h1>
                {
                  new DOMParser().parseFromString(job.designation, "text/html")
                    .documentElement.textContent
                }
              </h1>

              <div className="job-meta-row">
                <span>
                  <strong>Location:</strong> {job.location}
                </span>

                <span>
                  <strong>Shift:</strong> {job.shift}
                </span>

                <span>
                  <strong>Employment:</strong> {job.employment_type}
                </span>
              </div>
            </div>

 

            <div className="job-description-block">


              <h3>Job Summary</h3>

              <p>{job.summary}</p>



              <h3>Key Responsibilities</h3>

              <div
                dangerouslySetInnerHTML={{
                  __html: job.responsibilities,
                }}
              />

          
            </div>
          </section>



          <section className="job-sticky-form-side">
            <ApplyForm />
          </section>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
