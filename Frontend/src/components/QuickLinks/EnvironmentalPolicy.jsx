import React from "react";
import ReactMarkdown from "react-markdown";
import "./environmental-policy.css";
import EnvironmentalBanner from "./EnvironmentalBanner";

const content = `

# Environmental Policy

---

## 1. Introduction

Ahaan Software Consulting (“Company”, “we”, “our”, or “us”) is committed to minimizing environmental impact and promoting sustainable business practices across all operations.

We recognize our responsibility toward environmental stewardship and aim to integrate sustainability into our decision-making, service delivery, and organizational culture.

---

## 2. Environmental Commitment

### 2.1 Compliance
Ahaan Software Consulting complies with all applicable environmental laws, regulations, and standards relevant to its operations in India and international markets.

### 2.2 Continuous Improvement
We are committed to continuously improving our environmental performance by:

- Setting measurable sustainability goals  
- Monitoring environmental impact  
- Implementing improvement initiatives  

### 2.3 Resource Efficiency
We strive to optimize the use of:

- Energy  
- Water  
- Office and IT resources  

to reduce waste and environmental footprint.

### 2.4 Pollution Prevention
We take proactive measures to:

- Reduce emissions and environmental impact  
- Minimize electronic and operational waste  
- Promote environmentally responsible practices  

---

## 3. Responsibilities

### 3.1 Management Commitment
Senior leadership is responsible for:

- Providing resources and direction  
- Ensuring implementation of this policy  
- Driving sustainability initiatives  

### 3.2 Employee Engagement
All employees are expected to:

- Follow environmentally responsible practices  
- Reduce waste and resource usage  
- Contribute ideas for sustainability improvements  

### 3.3 Training and Awareness
We conduct periodic training and awareness programs to:

- Educate employees on environmental responsibilities  
- Promote sustainable workplace behavior  

---

## 4. Key Areas of Focus

### 4.1 Energy Efficiency
We implement practices such as:

- Use of energy-efficient devices and infrastructure  
- Cloud-based solutions to reduce physical resource consumption  

### 4.2 Water Conservation
We encourage responsible water usage within our facilities and promote conservation practices.

### 4.3 Waste Reduction
We aim to reduce waste by:

- Promoting digital-first operations (paperless workflows)  
- Recycling electronic and office waste where possible  
- Responsible disposal of IT equipment  

### 4.4 Sustainable Transportation
We encourage:

- Remote work and hybrid models  
- Use of public transportation  
- Carpooling and eco-friendly commuting  

---

## 5. Supplier and Partner Engagement

### 5.1 Environmental Responsibility
We encourage vendors and partners to adopt sustainable practices and comply with environmental standards.

### 5.2 Collaboration
We collaborate with partners to:

- Improve sustainability practices  
- Identify opportunities for reducing environmental impact  

---

## 6. Community Engagement

### 6.1 Awareness Initiatives
Ahaan Software Consulting supports initiatives that promote environmental awareness and sustainability.

### 6.2 Participation
We may engage in community programs, digital awareness campaigns, and sustainability initiatives.

---

## 7. Monitoring and Reporting

### 7.1 Performance Tracking
We periodically assess environmental performance through:

- Internal reviews  
- Operational audits  

### 7.2 Transparency
We aim to communicate sustainability efforts to stakeholders where applicable.

---

## 8. Review and Continuous Improvement

### 8.1 Policy Review
This policy will be reviewed periodically to ensure alignment with:

- Business operations  
- Regulatory requirements  
- Environmental best practices  

### 8.2 Continuous Improvement
We actively seek opportunities to improve sustainability performance across all functions.

---

## 9. Limitation & Practical Scope

Given the nature of our IT and digital services business, environmental impact is relatively limited compared to manufacturing industries. However, we remain committed to responsible operations within our scope.

---

## 10. Contact Information

For any questions or concerns regarding this Environmental Policy:

**Ahaan Software Consulting**

📧 [support@ahaansoftware.com](mailto:support@ahaansoftware.com)

📧 [vishal@ahaansoftware.com](mailto:vishal@ahaansoftware.com) 

📧 [md@ahaansoftware.com](mailto:md@ahaansoftware.com)   


📍 Bengal Eco Intelligent Park, EM Block  
Sector V, Bidhannagar  
Kolkata, West Bengal 700091, India  

`;

const EnvironmentalPolicy = () => {
  return (
    <>
      <EnvironmentalBanner />

      <section className="env-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="env-box">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnvironmentalPolicy;