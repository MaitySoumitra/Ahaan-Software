import "./CaseStudyDetails.css";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getCaseStudyBySlug, getMediaById } from "../../../Api/WordpressAPI";

const CaseStudyDetails = () => {
  const { slug } = useParams();

  const [data, setData] = useState(null);

  const [images, setImages] = useState({});

  useEffect(() => {
    loadData();
  }, [slug]);

  const loadData = async () => {
    const response = await getCaseStudyBySlug(slug);

    if (!response) return;

    const acf = response.acf;

    const imageMap = {};

    imageMap.projectOverview = (
      await getMediaById(acf.project_overview_image)
    )?.source_url;

    imageMap.clientBackground = (
      await getMediaById(acf.client_background_image)
    )?.source_url;

    imageMap.challenges = (
      await getMediaById(acf.challenges_image)
    )?.source_url;

    imageMap.tech1 = (await getMediaById(acf.technology_1_logo))?.source_url;

    imageMap.tech2 = (await getMediaById(acf.technology_2_logo))?.source_url;

    imageMap.tech3 = (await getMediaById(acf.technology_3_logo))?.source_url;

    imageMap.tech4 = (await getMediaById(acf.technology_4_logo))?.source_url;

    imageMap.solution1 = (await getMediaById(acf.solution_1_image))?.source_url;

    imageMap.solution2 = (await getMediaById(acf.solution_2_image))?.source_url;

    imageMap.solution3 = (await getMediaById(acf.solution_3_image))?.source_url;

    imageMap.solution4 = (await getMediaById(acf.solution_4_image))?.source_url;

    imageMap.featureImage = (
      await getMediaById(acf["key_features_&_benefits_image"])
    )?.source_url;

    imageMap.results = (await getMediaById(acf.results_image))?.source_url;

    imageMap.conclusion = (
      await getMediaById(acf.conslusion_image)
    )?.source_url;

    setImages(imageMap);
    setData(response);
  };

  if (!data) return <div className="text-center py-5">Loading...</div>;

  const acf = data.acf;

  const solutions = [
    {
      title: acf.solution_1_title,
      description: acf.solution_1_description,
      image: images.solution1,
    },
    {
      title: acf.solution_2_title,
      description: acf.solution_2_description,
      image: images.solution2,
    },
    {
      title: acf.solution_3_title,
      description: acf.solution_3_description,
      image: images.solution3,
    },
    {
      title: acf.solution_4_title,
      description: acf.solution_4_description,
      image: images.solution4,
    },
  ];

  return (
    <div className="case-details">

      {/* HERO SECTION */}
      <section
        className="case-study-hero"
        style={{
          backgroundImage:
            "url('https://ahaanmedia.com/ahaanwebsite/Banner/CaseStudy.jpg')",
        }}
      >
        <div className="hero-overlay">
          <div className="container">
            <div className="row align-items-center">
              {/* Left Content */}
              <div className="col-lg-6">
                <h1 className="hero-title">{data.title.rendered}</h1>

                <div
                  className="hero-description"
                  dangerouslySetInnerHTML={{
                    __html: data.content.rendered,
                  }}
                />
              </div>

              {/* Right Featured Image */}
              <div className="col-lg-6 text-center">
                <img
                  src={data?._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
                  alt={data.title.rendered}
                  className="hero-feature-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}

      <section className="project-overview-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2>Project Overview</h2>

              <p>{acf.project_overview}</p>
            </div>

            <div className="col-lg-6">
              <img src={images.projectOverview} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT BACKGROUND */}

      <section className="client-background-section">
        <div className="container">
          <div className="row align-items-center client-row">
            <div className="col-lg-5">
              <img src={images.clientBackground} className="img-fluid" alt="" />
            </div>

            <div className="col-lg-7">
              <h2>Client Background</h2>

              <div
                dangerouslySetInnerHTML={{
                  __html: acf.client_background,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}

      <section className="challenges-section">
        <div className="container">
          <div className="row align-items-center challenges-row">
            {/* Content Left */}
            <div className="col-lg-6">
              <h2>Challenges</h2>

              <div
                dangerouslySetInnerHTML={{
                  __html: acf.challenges,
                }}
              />
            </div>

            {/* Image Right */}
            <div className="col-lg-6">
              <img src={images.challenges} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}

      <section className="technologies-section">
        <div className="container">
          <h2>technologies & methodologies used</h2>

          <div className="technologies-wrapper">
            <div className="tech-item">
              <img src={images.tech1} alt="" />
            </div>

            <div className="tech-item">
              <img src={images.tech2} alt="" />
            </div>

            <div className="tech-item">
              <img src={images.tech3} alt="" />
            </div>

            <div className="tech-item">
              <img src={images.tech4} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}

      <section className="solution-section">
        <div className="container">
          <h2 className="solution-main-title">the solutions provided</h2>

          <div className="solution-timeline">
            {solutions.map((item, index) => (
              <div
                key={index}
                className={`solution-item ${
                  index % 2 === 0 ? "right" : "left"
                }`}
              >
                <div className="timeline-dot"></div>

                <div className="solution-content">
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <img src={item.image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}

      <section className="key-benefits-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2>Key Features & Benefits</h2>

              <div
                dangerouslySetInnerHTML={{
                  __html: acf["key_features_&_benefits"],
                }}
              />
            </div>

            <div className="col-lg-6">
              <img src={images.featureImage} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}

      <section className="results-section">
        <div className="container">
          <div className="row align-items-center results-row">
            {/* Image Left */}
            <div className="col-lg-5">
              <img src={images.results} className="img-fluid" alt="" />
            </div>

            {/* Content Right */}
            <div className="col-lg-7">
              <h2>Results</h2>

              <div
                dangerouslySetInnerHTML={{
                  __html: acf.results,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONCLUSION */}

      <section className="conclusion-section">
        <div className="container">
          <div className="row align-items-center conclusion-row">
            {/* Content Left */}
            <div className="col-lg-6">
              <h2>Conclusion</h2>

              <div
                dangerouslySetInnerHTML={{
                  __html: acf.conslusion,
                }}
              />
            </div>

            {/* Image Right */}
            <div className="col-lg-6">
              <img src={images.conclusion} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetails;
