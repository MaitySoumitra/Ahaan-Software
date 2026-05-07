import React from "react";
import ReactMarkdown from "react-markdown";
import "./intellectual-property-policy.css";
import IntellectualPropertyBanner from "./IntellectualPropertyBanner";

const content = `

# Intellectual Property Policy

---

## 1. Introduction

The purpose of this Intellectual Property Policy is to establish clear guidelines for the ownership, protection, usage, and assignment of intellectual property (IP) created, developed, or acquired by Ahaan Software Consulting (“Company”, “we”, “our”, or “us”).

This policy applies to all employees, contractors, consultants, partners, and any third parties engaged with the Company.

---

## 2. Scope

This policy covers all forms of intellectual property, including but not limited to:

- Software and source code  
- Website and application designs  
- UI/UX assets  
- Trademarks and branding  
- Copyrights and content  
- Trade secrets and proprietary processes  
- Client deliverables and technical documentation  

created, developed, or used during the course of engagement with Ahaan Software Consulting.

---

## 3. Definitions

### 3.1 Intellectual Property (IP)
Creations of the mind including inventions, designs, code, content, trademarks, and business processes.

### 3.2 Invention
Any new or improved process, system, product, or technical solution.

### 3.3 Proprietary Information
Confidential business or client-related data including strategies, pricing, codebases, and customer information.

### 3.4 Work Product
Any output created during employment or engagement, including software, documentation, designs, and deliverables.

---

## 4. Ownership of Intellectual Property

### 4.1 Employee-Created IP
All IP created by employees during the course of their employment shall be the exclusive property of Ahaan Software Consulting, including:

- Work created within job responsibilities  
- Work created using company resources  
- Work related to company business  

---

### 4.2 Contractor / Consultant IP
All IP created by contractors, freelancers, or consultants shall be fully owned by Ahaan Software Consulting, unless otherwise specified in a written agreement.

---

### 4.3 Client Work & Transfer of Rights

- IP developed for clients will be transferred only after full payment is received  
- Until payment completion, all deliverables remain the property of Ahaan Software Consulting  
- The Company retains the right to reuse non-confidential frameworks, code structures, and methodologies  

---

### 4.4 Pre-Existing (Prior) IP

- Employees and contractors must disclose any pre-existing IP before engagement  
- Such IP remains the property of the original owner  
- Any integration into company work must be explicitly approved  

---

## 5. Disclosure of Intellectual Property

All employees and contractors must:

- Promptly disclose any invention, innovation, or work product  
- Submit disclosures in writing to their reporting manager or designated authority  

---

## 6. Protection of Intellectual Property

### 6.1 Patents
Ahaan Software Consulting reserves the right to file patents for eligible innovations.

### 6.2 Copyrights
All copyrights for work created under engagement are owned by the Company unless contractually transferred.

### 6.3 Trademarks
The Company will register and protect its trademarks, brand assets, and service marks.

### 6.4 Trade Secrets & Confidentiality

- All employees and contractors must sign Non-Disclosure Agreements (NDAs)  
- Confidential information must not be disclosed during or after engagement  

---

## 7. Use of Company Intellectual Property

### 7.1 Internal Use
IP may be used only for authorized business purposes.

### 7.2 External Use
Any external use, sharing, licensing, or publication requires prior written approval.

---

## 8. Assignment of Intellectual Property Rights

### 8.1 Mandatory Assignment

All employees and contractors:

- Assign full rights, title, and interest in IP to the Company  
- Agree that such assignment is automatic upon creation  

---

### 8.2 Cooperation Clause

Personnel must:

- Sign required documents  
- Assist in securing patents, copyrights, or legal protection  

This obligation continues even after termination if required.

---

## 9. Enforcement of Intellectual Property Rights

9.1 Ahaan Software Consulting reserves the right to take legal action against:

- Unauthorized use  
- IP theft  
- Infringement or duplication  

9.2 All personnel must report suspected violations immediately.

---

## 10. Exit & Post-Termination Obligations

### 10.1 Return of Assets

Upon exit, all individuals must return:

- Devices  
- Documents  
- Code and access credentials  

---

### 10.2 Continuing Obligations

Confidentiality and IP protection obligations continue indefinitely after termination.

---

## 11. Client & Third-Party IP Protection

- Client data and IP will remain strictly confidential  
- The Company will not reuse client-specific assets without permission  
- Third-party IP must be used in compliance with licensing agreements  

---

## 12. Limitation & Liability

Ahaan Software Consulting shall not be liable for:

- Misuse of IP by clients after delivery  
- Unauthorized modifications by third parties  
- Third-party licensing violations beyond Company control  

---

## 13. Training and Awareness

The Company will conduct periodic training programs to ensure awareness of:

- IP protection  
- Data security  
- Legal compliance  

---

## 14. Policy Review and Updates

This policy will be reviewed periodically and updated as required to reflect:

- Legal changes  
- Business requirements  
- Industry best practices  

---

## 15. Governing Law & Jurisdiction

This policy shall be governed by the laws of India.

Any disputes shall be subject to the exclusive jurisdiction of courts located in:

📍 Kolkata, West Bengal, India  

---

## 16. Contact Information

For any questions or concerns:

**Ahaan Software Consulting**

📧 [support@ahaansoftware.com](mailto:support@ahaansoftware.com)

📧 [vishal@ahaansoftware.com](mailto:vishal@ahaansoftware.com) 

📧 [md@ahaansoftware.com](mailto:md@ahaansoftware.com)   

📍 Bengal Eco Intelligent Park, EM Block  
Sector V, Bidhannagar  
Kolkata, West Bengal 700091, India  

`;
const IntellectualPropertyPolicy = () => {
  return (
    <>
      <IntellectualPropertyBanner />

      <section className="ipp-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="ipp-box">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntellectualPropertyPolicy;