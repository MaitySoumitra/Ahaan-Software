// src/pages/Careers/Careers.jsx

import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { MdLocationOn, MdWork, MdAccessTime } from "react-icons/md";

import { BsCalendarCheck } from "react-icons/bs";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import { getAllCareers } from "../../../Api/WordpressAPI";

import "./Careers.css";

const Careers = () => {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      const data = await getAllCareers();

      const formattedData = data.map((item) => ({
        id: item.slug,

        postId: item.id,

        designation: item.title.rendered,

        summary: item.acf?.job_summary || "",

        open_positions: item.acf?.open_position || "",

        qualifications: item.acf?.required_qualifications || "",

        preferred_skills: item.acf?.preferred_skills || "",

        location: item.acf?.location || "",

        employment_type: item.acf?.employment_type || "",

        shift: item.acf?.shift_time || "",

        responsibilities: item.content.rendered || "",

        featured_image:
          item?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
      }));

      setJobs(formattedData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <h4>Loading careers...</h4>
      </div>
    );
  }

  return (
    <div className="career-page py-5">
      <div className="container">
        {/* Header */}

        <div className="career-header text-center"></div>

        {/* Cards */}

        <div className="row g-4">
          {jobs.map((job) => (
            <div className="col-lg-4 col-md-6" key={job.postId}>
              <div className="job-card-v2 h-100">
                {/* Image */}

                <div className="featured-icon-wrap">
                  <img
                    src={job.featured_image || "https://via.placeholder.com/80"}
                    alt={job.designation}
                    className="job-featured-image"
                  />
                </div>

                {/* Title */}

                <h3 className="job-title">
                  {
                    new DOMParser().parseFromString(
                      job.designation,
                      "text/html",
                    ).documentElement.textContent
                  }
                </h3>

                {/* Info Grid */}

                <div className="job-info-grid">
                  {/* Employment */}

                  <div className="job-info-item">
                    <MdWork />

                    <span>{job.employment_type}</span>
                  </div>

                  {/* Location */}

                  <div className="job-info-item">
                    <MdLocationOn />

                    <span>{job.location}</span>
                  </div>

                  {/* Shift */}

                  <div className="job-info-item">
                    <MdAccessTime />

                    <span>{job.shift}</span>
                  </div>

                  {/* Position */}

                  <div className="job-info-item">
                    <BsCalendarCheck />

                    <span>{job.open_positions} Position</span>
                  </div>
                </div>

                {/* Summary */}

                <p className="job-excerpt">
                  {job.summary?.substring(0, 140)}...
                </p>

                {/* Button */}

                <button
                  className="view-details-link"
                  onClick={() => navigate(`/careers/${job.id}`)}
                >
                  See Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
