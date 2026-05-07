import React from "react";
import ReactMarkdown from "react-markdown";

import "./grievance-policy.css";
import GrievancePolicyBanner from "./GrievancePolicyBanner";
import remarkGfm from "remark-gfm";

const content = `

# Grievance & Redressal Policy with SLA & Escalation Framework

---

## 1. Introduction

1.1 This Escalation Matrix and Grievance Redressal Policy (“Policy”) is established by Ahaan Software Consulting (“Company”, “we”, “our”, or “us”) to ensure structured, timely, and accountable resolution of service-related issues.

1.2 This Policy is designed to align with:

- Client Service Level Agreements (SLAs)  
- Master Service Agreements (MSA)  
- International service delivery standards (including US-based clients)  

---

## 2. Escalation Hierarchy

- **Level 1:** Support Team / Assigned Point of Contact  
- **Level 2:** Project Manager / Team Lead  
- **Level 3:** Department Head / Service Delivery Manager  
- **Level 4:** Senior Management / Executive Leadership  

---

## 3. Escalation Procedure & Timelines

### Level 1 – Support Team
- Acknowledgment: Within 24–48 hours  
- Resolution Target: 2–4 business days  

### Level 2 – Project Manager / Team Lead
- Resolution Target: 3–5 business days  

### Level 3 – Department Head
- Resolution Target: 5–7 business days  

### Level 4 – Senior Management
- Final Resolution: 7–10 business days  
- Outcome is final and binding, subject to contractual terms  

---

## 4. Contact Information

### Level 1 – Support Team / Initial Contact
📧 support@ahaansoftware.com  

### Level 2 – Project Manager / Team Lead
📧 support@ahaansoftware.com (internally routed)  

### Level 3 – Department Head / Service Delivery Manager
📧 vishal@ahaansoftware.com  

### Level 4 – Senior Management / Executive Team
📧 md@ahaansoftware.com  

---

## 5. SLA Commitments, Penalties & Service Credits

### 5.1 SLA Commitment

| Severity | Example | Response Time | Resolution Target |
|----------|--------|--------------|------------------|
| Critical | System down, major outage | 12–24 hrs | 1–2 business days |
| High | Core feature not working | 24 hrs | 2–4 business days |
| Medium | Minor functionality issue | 48 hrs | 3–5 business days |
| Low | Cosmetic / enhancements | 72 hrs | As scheduled |

---

### 5.2 SLA Service Credits

If SLA timelines are missed due to Company fault:

- Delay up to 3 days → 5% service credit  
- Delay up to 7 days → 10% service credit (capped)  
- Beyond 7 days → Max 15% cap  

⚠️ Important Safeguards:

- Credits apply only to the affected service, not full contract  
- Credits are non-refundable and adjusted in future invoices  
- Total liability capped at 15% of monthly billing  

---

### 5.3 SLA Exclusions

SLA commitments do NOT apply in the following cases:

- Client-side delays (content, approvals, feedback)  
- Scope changes or additional requirements  
- Third-party failures (hosting, APIs, payment gateways)  
- Force majeure events (natural disasters, outages, geopolitical issues)  
- Unauthorized changes by client or third parties  
- Incomplete or inaccurate requirements  

---

## 6. Scope Control Clause

6.1 Any issue outside defined project scope will be treated as a Change Request (CR)

6.2 Change Requests will:

- Require written approval  
- Impact cost and delivery timelines  
- Be excluded from SLA until approved  

---

## 7. MSA-Aligned Escalation Clause

**Escalation Clause:**

In the event of any dispute, delay, or dissatisfaction arising from the Services, the Client agrees to follow the structured escalation hierarchy defined by Ahaan Software Consulting.

Both parties agree to act in good faith and allow reasonable time for resolution at each escalation level before proceeding further.

No legal or financial claim shall be initiated unless all escalation levels have been exhausted.

---

## 8. Dispute Resolution & Jurisdiction

### 8.1 Governing Law
This agreement shall be governed by the laws of India.

### 8.2 Jurisdiction
All disputes shall be subject to courts located in:

📍 Kolkata, West Bengal, India  

### 8.3 International Client Positioning

- Disputes should first be resolved via good faith negotiation  
- If unresolved → binding arbitration (optional clause)  
- Litigation only as last resort in Indian jurisdiction  

---

## 9. Limitation of Liability

Ahaan Software Consulting’s total liability:

- Shall not exceed fees paid in last 3 months  

Excludes:

- Indirect damages  
- Loss of business  
- Loss of profits  
- Data loss  

---

## 10. Internal SOP (Operational Framework)

### Step 1: Ticket Logging
- Every issue must have a ticket ID  
- Categorize severity  

### Step 2: Response Discipline
- Follow SLA timelines  
- Acknowledge within defined time  

### Step 3: Escalation Trigger
- Auto-escalate if SLA breach risk  
- Notify next-level authority  

### Step 4: Documentation
- Maintain audit trail  
- Email + CRM logs mandatory  

### Step 5: Closure Protocol
- Get written confirmation from client  
- Mark ticket resolved  

---

## 11. Website Disclaimer

### General Disclaimer
All information is provided “as-is” without warranties.

### Service Disclaimer
Services are provided on an “as-available” basis.

### Fraud Warning
Only trust official emails:

📧 [support@ahaansoftware.com](mailto:support@ahaansoftware.com)

📧 [vishal@ahaansoftware.com](mailto:vishal@ahaansoftware.com) 

📧 [md@ahaansoftware.com](mailto:md@ahaansoftware.com)   

### Limitation of Liability
No liability for indirect or consequential damages.

`;


const GrievancePolicy = () => {
  return (
    <>
      <GrievancePolicyBanner />

      <section className="grievance-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="grievance-box">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GrievancePolicy;