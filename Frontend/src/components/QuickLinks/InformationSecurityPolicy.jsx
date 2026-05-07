import React from "react";
import ReactMarkdown from "react-markdown";
import "./information-security-policy.css";
import InformationSecurityBanner from "./InformationSecurityBanner";

const content = `

# Information Security Policy

---

## 1. Purpose

The purpose of this Information Security Policy is to ensure the protection of Ahaan Software Consulting’s information assets, including data, systems, networks, and digital infrastructure, from risks such as unauthorized access, data breaches, cyber threats, and misuse.

This policy establishes the framework for safeguarding the confidentiality, integrity, and availability of information across all business operations.

---

## 2. Scope

This policy applies to:

- All employees, contractors, consultants, interns, and temporary staff  
- Third-party vendors, partners, and service providers  
- All systems, devices, and data owned, managed, or processed by Ahaan Software Consulting  

This includes all information assets whether stored digitally, physically, or in transit.

---

## 3. Information Security Principles

### 3.1 Confidentiality
Information shall be accessible only to authorized individuals with a legitimate business need.

### 3.2 Integrity
Information must remain accurate, complete, and protected against unauthorized modification.

### 3.3 Availability
Information and systems must be available and accessible when required by authorized users.

---

## 4. Roles and Responsibilities

### 4.1 Information Security Officer (ISO)

Responsible for:

- Developing and maintaining security policies  
- Monitoring compliance  
- Handling security incidents  

---

### 4.2 IT Department

Responsible for:

- Implementing security controls  
- Maintaining infrastructure security  
- Monitoring systems and networks  

---

### 4.3 Employees & Staff

Responsible for:

- Adhering to this policy  
- Protecting company and client data  
- Reporting security incidents immediately  

---

### 4.4 Third Parties

All third-party vendors must comply with Ahaan Software Consulting’s security standards when accessing or handling company or client data.

---

## 5. Information Classification

- **Public:** Information approved for public disclosure  
- **Internal:** Restricted to internal use only  
- **Confidential:** Sensitive business or client data requiring protection  
- **Restricted:** Highly sensitive data with strict access controls  

---

## 6. Access Control

### 6.1 User Authentication
Access to systems is granted only through secure authentication mechanisms (e.g., passwords, MFA).

### 6.2 Role-Based Access Control (RBAC)
Access rights are assigned based on job roles and responsibilities.

### 6.3 Least Privilege Principle
Users are granted the minimum access necessary to perform their duties.

---

## 7. Data Protection

### 7.1 Data Encryption
Sensitive data must be encrypted:

- At rest  
- In transit  

### 7.2 Data Backup
Regular backups are maintained to ensure business continuity and data recovery.

### 7.3 Data Retention
Data is retained only as long as necessary for operational, contractual, or legal purposes.

---

## 8. Network Security

### 8.1 Firewall Protection
Firewalls are deployed to protect systems from unauthorized access.

### 8.2 Intrusion Detection & Prevention (IDPS)
Systems are in place to detect and prevent security threats.

### 8.3 Secure Remote Access
Remote access is secured using VPNs, MFA, and encrypted connections.

---

## 9. Physical Security

### 9.1 Access Restrictions
Physical access to infrastructure is limited to authorized personnel only.

### 9.2 Surveillance
Critical areas may be monitored through surveillance systems.

### 9.3 Environmental Protection
Infrastructure is protected against environmental risks such as fire, power failure, and natural disasters.

---

## 10. Incident Management

### 10.1 Incident Reporting
All security incidents must be reported immediately to the designated authority.

### 10.2 Incident Response
Ahaan Software Consulting maintains a structured incident response plan to mitigate risks.

### 10.3 Post-Incident Review
All incidents are reviewed to identify root causes and prevent recurrence.

---

## 11. Compliance and Audit

### 11.1 Regulatory Compliance

Ahaan Software Consulting complies with applicable regulations including:

- GDPR (where applicable)  
- CCPA (for US clients)  
- Applicable Indian IT laws  

### 11.2 Internal Audits
Regular audits are conducted to ensure policy compliance.

### 11.3 Third-Party Audits
External audits may be conducted where required.

---

## 12. Training and Awareness

### 12.1 Employee Training

Employees receive regular training on:

- Data security  
- Cyber threats  
- Best practices  

### 12.2 Awareness Programs
Ongoing initiatives are conducted to maintain a security-first culture.

---

## 13. Policy Review

### 13.1 Periodic Review
This policy is reviewed periodically to ensure relevance and effectiveness.

### 13.2 Amendments
Any changes must be approved by senior management.

---

## 14. Enforcement

### 14.1 Compliance Requirement
All personnel and third parties must comply with this policy.

### 14.2 Disciplinary Action
Failure to comply may result in:

- Disciplinary action  
- Termination of employment or contract  
- Legal action where applicable  

---

## 15. Limitation & Responsibility Clause

Ahaan Software Consulting implements industry-standard security practices; however:

- No system can be guaranteed 100% secure  

The Company shall not be liable for breaches caused by:

- Client-side vulnerabilities  
- Third-party systems  
- Force majeure events  

---

## 16. Contact Information

For any questions, concerns, or incident reporting:

**Ahaan Software Consulting**

📧 [support@ahaansoftware.com](mailto:support@ahaansoftware.com)

📧 [vishal@ahaansoftware.com](mailto:vishal@ahaansoftware.com) 

📧 [md@ahaansoftware.com](mailto:md@ahaansoftware.com)    

📍 Bengal Eco Intelligent Park, EM Block  
Sector V, Bidhannagar  
Kolkata, West Bengal 700091, India  

`;

const InformationSecurityPolicy = () => {
  return (
    <>
      <InformationSecurityBanner />

      <section className="isec-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="isec-box">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InformationSecurityPolicy;