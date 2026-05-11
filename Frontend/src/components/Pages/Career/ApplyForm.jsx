import axios from "axios";

import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import { getAllCareers } from "../../../Api/WordpressAPI";

import "./ApplyForm.css";

const ApplyForm = ({ currentJob }) => {
  const [jobs, setJobs] = useState([]);

  const [captcha, setCaptcha] = useState("");

  const [userCaptcha, setUserCaptcha] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();


const generateCaptcha = () => {
  const chars =
    "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";

  let code = "";

  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  setCaptcha(code);
};

  // Fetch Jobs

  useEffect(() => {
    fetchJobs();

    generateCaptcha();
  }, []);

  const fetchJobs = async () => {
    try {
      const data = await getAllCareers();

      const formatted = data.map((item) => ({
        title: item.title.rendered,
      }));

      setJobs(formatted);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    if (currentJob) {
      setValue("role", currentJob);
    }
  }, [currentJob, setValue]);



  const onSubmit = async (data) => {
    if (userCaptcha !== captcha) {
      alert("Invalid captcha");

      generateCaptcha();

      return;
    }

    try {
      const formData = new FormData();

      formData.append("name", data.name);

      formData.append("phone", data.phone);

      formData.append("email", data.email);

      formData.append("role", data.role);

      formData.append("experience", data.experience);

      formData.append("coverLetter", data.coverLetter);

      formData.append("resume", data.resume[0]);

      const response = await axios.post(
        "https://ahaan-admin.ahaanmedia.com/wp-json/career/v1/apply",

        formData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      console.log(response.data);

      alert("Application submitted successfully!");

      reset();

      generateCaptcha();
    } catch (error) {
      console.log(error);

      alert("Submission failed");
    }
  };

  return (
    <div className="job-apply-card">
      <h3 className="form-heading">Apply for this position</h3>

      <form onSubmit={handleSubmit(onSubmit)}>


        <div>
          <input
            type="text"
            placeholder="Full Name"
            {...register("name", {
              required: true,
            })}
          />

          {errors.name && <small>Name is required</small>}
        </div>



        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }}
            {...register("phone", {
              required: true,
              pattern: /^[0-9]+$/,
            })}
          />

          {errors.phone && <small>Phone is required</small>}
        </div>



        <div>
          <input
            type="email"
            placeholder="Email Address"
            {...register("email", {
              required: true,
            })}
          />

          {errors.email && <small>Email is required</small>}
        </div>



        <div>
          <select
            {...register("role", {
              required: true,
            })}
          >
            <option value="">Select your role</option>

            {jobs.map((job, index) => (
              <option key={index} value=                   {
                    new DOMParser().parseFromString(
                      job.title,
                      "text/html",
                    ).documentElement.textContent
                  }>
                   {
                    new DOMParser().parseFromString(
                      job.title,
                      "text/html",
                    ).documentElement.textContent
                  }
              </option>
            ))}
          </select>
        </div>



        <div>
          <input
            type="number"
            placeholder="Years of Experience"
            {...register("experience", {
              required: true,
            })}
          />
        </div>


        <div>
          <textarea
            rows="5"
            placeholder="Cover Letter"
            {...register("coverLetter", {
              required: true,
            })}
          />
        </div>


        <div className="job-file-input">
          <label>Upload Resume/CV</label>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            {...register("resume", {
              required: true,
            })}
          />
        </div>


        <div className="captcha-wrapper">
          <div className="captcha-box">{captcha}</div>

          <button
            type="button"
            className="refresh-captcha"
            onClick={generateCaptcha}
          >
            Refresh
          </button>
        </div>

        <input
          type="text"
          placeholder="Enter Captcha"
          value={userCaptcha}
          onChange={(e) => setUserCaptcha(e.target.value)}
        />


        <button type="submit" className="job-submit-btn">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;
