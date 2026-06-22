import "./CaseStudies.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCaseStudies } from "../../../Api/WordpressAPI";
import CaseStudiesBanner from "./CaseStudiesBanner";

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    loadCaseStudies();
  }, []);

  const loadCaseStudies = async () => {
    const data = await getAllCaseStudies();
    setCaseStudies([...data].reverse());
  };

  return (
    <>
      <CaseStudiesBanner />
      <section className="case-studies-page">
        <div className="case-container">
          <div className="row g-4">
            {caseStudies.map((item) => (
              <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                <div className="case-card">
                  <div className="case-card-top">
                    <img
                      src={
                        item?._embedded?.["wp:featuredmedia"]?.[0]?.source_url
                      }
                      alt={item.title.rendered}
                      className="case-logo"
                    />
                  </div>

                  <div className="case-card-bottom">
                    <h3>{item.title.rendered}</h3>

                    <div
                      className="case-desc"
                      dangerouslySetInnerHTML={{
                        __html: item.content.rendered,
                      }}
                    />

                    <a
                      href={`/case-studies/${item.slug}`}
                      className="case-btn"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
