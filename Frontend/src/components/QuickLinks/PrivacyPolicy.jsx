import React from "react";
import ReactMarkdown from "react-markdown";
import "./privacy-policy.css";
import PrivacyPolicyBanner from "./PrivacyPolicyBanner";

const content = `

**Effective Date: April 30, 2026**

This Privacy Policy describes how Ahaan Software Consulting (“Company”, “we”, “our”, or “us”) collects, uses, discloses, and protects your information when you visit our website  (“ [www.ahaansoftware.com](https://www.ahaansoftware.com) ”) and use our services.

By accessing or using our Website, you agree to the terms of this Privacy Policy.

---

## 1. Information We Collect

We collect the following types of information:

### a) Personal Information

- Full name  
- Email address  
- Phone number  
- Company name  
- Project requirements or inquiry details  

This information is collected when you:

- Fill out contact forms  
- Request a quotation  
- Book a consultation  
- Communicate with us via email, phone, or messaging tools  

### b) Automatically Collected Information

- IP address  
- Browser type and version  
- Device information  
- Pages visited and time spent  
- Referring website URLs  

### c) Cookies and Tracking Technologies

We use cookies and similar technologies to:

- Improve user experience  
- Analyze traffic and behavior  
- Optimize marketing campaigns  

You can control cookie preferences through your browser settings.

---

## 2. How We Use Your Information

We use the collected data to:

- Respond to inquiries and provide quotations  
- Deliver our web development, app development, and digital services  
- Improve website performance and user experience  
- Conduct marketing and promotional activities  
- Communicate updates, offers, and service-related information  
- Maintain internal records and compliance  

---

## 3. Sharing of Information

We do not sell or rent your personal data.

We may share your information with:

- Trusted third-party service providers (CRM tools, email platforms, analytics tools)  
- Payment processors (if applicable)  
- Legal authorities when required by law  

All third parties are obligated to maintain confidentiality and data security.

---

## 4. Data Security

We implement appropriate technical and organizational measures to protect your data, including:

- Secure servers and encryption practices  
- Restricted data access  
- Regular monitoring and updates  

However, no digital transmission is completely secure, and we cannot guarantee absolute security.

---

## 5. Data Retention

We retain your personal data only as long as necessary for:

- Business operations  
- Legal and regulatory compliance  
- Dispute resolution  

---

## 6. Your Rights

Depending on your jurisdiction (including India, USA, and international users), you may have the right to:

- Access your personal data  
- Request correction or deletion  
- Withdraw consent  
- Opt-out of marketing communications  

To exercise these rights, contact us at:  
Email: [support@ahaansoftware.com](mailto:support@ahaansoftware.com)  

---

## 7. Third-Party Links

Our Website may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to review their policies before sharing data.

---

## 8. International Data Transfers

As we serve global clients, your information may be processed in countries outside your jurisdiction. We ensure appropriate safeguards are in place for such transfers.

---

## 9. Children’s Privacy

Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal data from children.

---

## 10. Updates to This Policy

We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised effective date.

---

## 11. Contact Us

If you have any questions or concerns regarding this Privacy Policy, please contact:

**Ahaan Software Consulting**  
Bengal Eco Intelligent Park  
Sector V, Bidhannagar  
Kolkata, West Bengal 700091, India  

Email: [support@ahaansoftware.com](mailto:support@ahaansoftware.com)  
Website: [www.ahaansoftware.com](https://www.ahaansoftware.com)  

---

## Compliance Note

This Privacy Policy is structured to align broadly with:

- Information Technology Act, 2000 (India)  
- GDPR principles (EU clients)  
- General global data protection best practices  

`;
const PrivacyPolicy = () => {
  return (
    <>
      <PrivacyPolicyBanner />

      <section className="privacy-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {" "}
              {/* 👈 change this */}
              <div className="privacy-box">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
