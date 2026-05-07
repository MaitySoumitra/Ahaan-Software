import React from "react";
import ReactMarkdown from "react-markdown";
import "./cookie-policy.css";
import CookiePolicyBanner from "./CookiePolicyBanner";
import remarkGfm from "remark-gfm";

const content = `

**Effective Date: April 30, 2026**

---

## 1. Introduction

1.1 Welcome to Ahaan Software Consulting (“Company”, “we”, “our”, or “us”).  
This Cookie Policy explains how we use cookies and similar tracking technologies across our websites, applications, and digital services.

1.2 By accessing or using our services, you consent to the use of cookies in accordance with this policy.  
If you do not agree, you may disable cookies through your browser settings as outlined below.

---

## 2. What Are Cookies?

2.1 Cookies are small text files placed on your device when you visit a website.  
They enable core functionality, enhance user experience, and provide analytical insights.

### 2.2 Types of Cookies We Use:

- **Session Cookies** – expire when browser closes  
- **Persistent Cookies** – stored for a defined duration  
- **First-Party Cookies** – set by our website  
- **Third-Party Cookies** – set by external services  

---

## 3. How We Use Cookies

3.1 We use cookies for the following purposes:

- **Essential Cookies**  
Required for website functionality, security, and accessibility  

- **Performance & Analytics Cookies**  
Help us understand user behavior, traffic patterns, and performance metrics  

- **Functionality Cookies**  
Store preferences such as language, region, and user settings  

- **Advertising & Targeting Cookies**  
Used to deliver relevant ads and measure campaign performance  

---

## 4. Cookies We Use

| Cookie Name | Type | Purpose | Duration |
|------------|------|--------|---------|
| _ga | Third-party (Analytics) | Distinguishes users (Google Analytics) | 2 years |
| _gid | Third-party (Analytics) | Tracks users | 24 hours |
| _gat | Third-party (Analytics) | Controls requests | 1 minute |
| PHPSESSID | First-party (Essential) | Session tracking | Session |
| cookie_consent | First-party (Functionality) | Stores preferences | 1 year |

---

## 5. Third-Party Cookies

5.1 We may use trusted third-party services such as:

- Analytics providers  
- Advertising platforms  
- CRM tools  

5.2 These services may place cookies governed by their own policies.  
We do not control or assume liability for third-party cookie practices.

---

## 6. Managing Cookies

6.1 You can control or disable cookies at any time. However, disabling cookies may impact functionality.

6.2 **Browser Controls**  
Most browsers allow you to block or delete cookies via settings.

6.3 **Opt-Out Tools**  
You can opt out of tracking tools like:  
👉 https://tools.google.com/dlpage/gaoptout

6.4 **Cookie Consent Tool**  
We provide a consent banner to accept, reject, or customize preferences.

---

## 7. Data Protection & Compliance

7.1 We align with applicable laws:

- IT Act, 2000 (India)  
- GDPR (European Union)  
- CCPA/CPRA (USA)  

7.2 Where required, we obtain consent before placing non-essential cookies.

---

## 8. Updates to This Policy

8.1 We may update this policy periodically to reflect legal or business changes.  

8.2 Continued use of our website constitutes acceptance of the updated policy.

---

## 9. Contact Us

**Ahaan Software Consulting**  
Bengal Eco Intelligent Park  
Sector V, Bidhannagar  
Kolkata, West Bengal 700091, India  

📧 Email: [support@ahaansoftware.com](mailto:support@ahaansoftware.com) 

🌐 Website: [www.ahaansoftware.com](https://www.ahaansoftware.com) 

---

## 10. Data Protection Contact

If you are located in regions requiring formal oversight (such as the EEA), you may contact us at:  

📧 [support@ahaansoftware.com](mailto:support@ahaansoftware.com) 

---

# Website Disclaimer

## General Disclaimer

The information provided on this website is for general informational purposes only.  
While Ahaan Software Consulting strives for accuracy, we make no warranties regarding completeness, reliability, or suitability.

Use of the website is strictly at your own risk.

---

## Website Availability

We do not guarantee uninterrupted or error-free operation.  
Temporary downtime may occur due to technical or external factors.

---

## Cookie Notice

This website uses cookies to enhance user experience, analyze traffic, and improve services.  
Continued use indicates consent.

---

## Fraud Awareness

We do not solicit business, job offers, or payments through unofficial channels.  

Always verify via:  
📧 [support@ahaansoftware.com](mailto:support@ahaansoftware.com)
 
📧 [vishal@ahaansoftware.com](mailto:vishal@ahaansoftware.com) 

---

## Third-Party Trademarks

All third-party logos and trademarks belong to their respective owners.  
Use does not imply endorsement unless explicitly stated.

---

## Intellectual Property

All content (text, graphics, code, branding) is owned by Ahaan Software Consulting.  

Unauthorized use, reproduction, or distribution is strictly prohibited.

---

## External Links

We may include links to third-party websites.  
We are not responsible for their content or practices.

---

## Limitation of Liability

We shall not be liable for:

- Website usage issues  
- Data loss  
- Service interruptions  
- Business losses  

---

## Software & Services Disclaimer

All services are provided on an “as-is” and “as-available” basis.  

We do not guarantee:

- Error-free operation  
- Specific business outcomes  
- Compatibility with all systems  

---

## Amendments

We reserve the right to modify this disclaimer at any time. Continued use of the website indicates acceptance of changes.

---

## Contact Information

For any concerns:  
📧 [support@ahaansoftware.com](mailto:support@ahaansoftware.com)  

`;
const CookiePolicy = () => {
  return (
    <>
      <CookiePolicyBanner />

      <section className="cookie-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cookie-box">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CookiePolicy;