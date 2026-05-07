import React from "react";
import ReactMarkdown from "react-markdown";
import "./terms-conditions.css";
import TermsBanner from "./TermsBanner";

const content = `

# Terms and Conditions

---

## 1. Introduction

1.1 Welcome to Ahaan Software Consulting (“Company”, “we”, “our”, or “us”). These Terms and Conditions (“Terms”) govern your access to and use of our websites, applications, and services (“Services”).

1.2 By accessing or using our Services, you agree to be legally bound by these Terms. If you do not agree, you must not use our Services.

---

## 2. Definitions

2.1 “Services” refers to all products, solutions, platforms, consulting, development, marketing, and staffing services offered by Ahaan Software Consulting.  

2.2 “User” / “Client” / “You” refers to any individual or entity using our Services.  

2.3 “Company” / “We” / “Us” refers to Ahaan Software Consulting.  

---

## 3. Eligibility

3.1 You must be at least 18 years old to use our Services.  

3.2 If acting on behalf of an organization, you confirm you have authority to bind that entity legally.  

---

## 4. Account Registration

4.1 You agree to provide accurate and complete information when registering.  

4.2 You are responsible for:

- Maintaining confidentiality of credentials  
- All activities under your account  

4.3 You must notify us immediately of any unauthorized use.  

---

## 5. Acceptable Use / User Conduct

You agree NOT to:

- Violate any applicable laws or regulations  
- Infringe intellectual property or rights of others  
- Upload or transmit harmful, illegal, or malicious content  
- Attempt to disrupt, hack, or misuse our systems  

---

## 6. Intellectual Property Rights

6.1 All platform content, code, designs, and materials are owned by Ahaan Software Consulting or its licensors.  

6.2 You are granted a limited, non-exclusive, non-transferable license for business use only.  

6.3 You may not:

- Copy, modify, distribute, or reverse engineer  
- Create derivative works  

without written consent.

---

## 7. Payment Terms

7.1 All services are subject to agreed pricing and contracts.  

7.2 Payment terms:

- Advance payments may be required  
- Milestone-based billing applies where defined  
- Late payments may result in service suspension  

7.3 Taxes, bank charges, and international transfer fees are borne by the client.  

---

## 8. Cancellation & Refund Policy

8.1 Cancellation requests must be submitted in writing.  

8.2 Refunds:

- Are not guaranteed  
- Depend on work completed and resources allocated  
- Typically non-refundable once work has started  

---

## 9. Delivery Policy

9.1 Project timelines are estimates and depend on:

- Scope clarity  
- Client responsiveness  
- Third-party dependencies  

9.2 Deliverables are provided via:

- Email  
- Cloud access  
- Secure repositories  

---

## 10. Breach & Termination

10.1 We reserve the right to:

- Suspend or terminate access  
- Cancel services  

if Terms are violated.

10.2 Legal action may be initiated where necessary.  

---

## 11. Warranty Disclaimer

All Services are provided:

“AS IS” and “AS AVAILABLE”

We disclaim all warranties including:

- Merchantability  
- Fitness for purpose  
- Non-infringement  

We do not guarantee:

- Error-free systems  
- Continuous uptime  
- Specific business outcomes  

---

## 12. Limitation of Liability

To the maximum extent permitted by law:

Ahaan Software Consulting shall NOT be liable for:

- Indirect or consequential damages  
- Loss of profits, data, or business  
- Service interruptions  

### Liability Cap

Total liability is limited to:

Fees paid in the last 3 months of service  

---

## 13. Indemnification

You agree to indemnify and hold harmless Ahaan Software Consulting from:

- Claims arising from misuse of services  
- Violation of laws  
- IP infringement caused by your inputs or content  

---

## 14. Governing Law & Dispute Resolution

14.1 These Terms are governed by the laws of India.  

14.2 Jurisdiction:

📍 Kolkata, West Bengal, India  

14.3 Dispute Resolution Process:

- Step 1: Good faith negotiation  
- Step 2: Arbitration (India-based)  
- Step 3: Courts (if required)  

---

## 15. Changes to Terms

We may update these Terms at any time.  

Continued use of Services constitutes acceptance of updated Terms.  

---

## 16. Miscellaneous

### 16.1 Entire Agreement
These Terms override all prior agreements.  

### 16.2 Severability
Invalid clauses do not affect remaining Terms.  

### 16.3 Waiver
Failure to enforce rights does not constitute waiver.  

### 16.4 Assignment
We may assign rights freely; you may not without consent.  

### 16.5 Force Majeure
We are not liable for delays caused by events beyond control.  

### 16.6 Notices
Official communication via registered email.  

### 16.7 No Partnership
No partnership or employment relationship is created.  

---

## 17. Service-Specific Terms

### 17.1 Software Development Services

- Scope includes design, development, testing, deployment  
- Timelines are estimates, not guarantees  
- IP transfers only after full payment  
- Support and maintenance are separate and chargeable  

---

### 17.2 IT Staffing Services

- We provide qualified professionals  
- No guarantee of individual performance  
- Professionals remain under Ahaan Software Consulting  
- Payment required as per agreement  
- Termination requires notice as per contract  

---

### 17.3 Digital Marketing Services

- Services include SEO, PPC, social media, etc.  
- No guaranteed rankings or ROI  
- Performance depends on market variables  
- Client must provide approvals on time  

---

### 17.4 Consulting Services

- Advice based on available information  
- No guarantee of outcomes  
- Deliverables defined in agreement  

---

## 18. Service-Specific Disclaimers

- Software may contain defects  
- Marketing results are not guaranteed  
- Staffing performance varies  
- Consulting outcomes depend on execution  

---

## 19. Data Protection

19.1 We process data in accordance with our Privacy Policy.  

19.2 Clients must comply with applicable laws including:

- GDPR (if applicable)  
- CCPA (for US clients)  

---

## 20. Contact Information

**Ahaan Software Consulting**

📧 [support@ahaansoftware.com](mailto:support@ahaansoftware.com)

📧 [vishal@ahaansoftware.com](mailto:vishal@ahaansoftware.com) 

📧 [md@ahaansoftware.com](mailto:md@ahaansoftware.com)   

📍 Bengal Eco Intelligent Park, EM Block  
Sector V, Bidhannagar  
Kolkata, West Bengal 700091, India  

`;

const TermsConditions = () => {
  return (
    <>
      <TermsBanner />

      <section className="tc-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tc-box">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsConditions;