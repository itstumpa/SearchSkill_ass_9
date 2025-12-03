import React from 'react';

const PrivacyPolicy = () => {
  // Shared styles for consistency
  const sectionHeaderClass = "text-2xl font-bold text-gray-800 mt-10 mb-6 flex items-center gap-3 border-b pb-2 border-gray-100";
  const listClass = "space-y-3 mb-6";
  const listItemClass = "flex items-start gap-3 text-gray-600 p-3 rounded-lg hover:bg-gray-50 transition-colors";
  const bulletIcon = (
    <svg className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Document Header */}
        <div className="text-center mb-12">
          <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm">Legal</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            We are committed to transparency. Here is how we protect your data.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-12 lg:p-16">
            
            {/* Introduction */}
            <div className="bg-indigo-50 rounded-xl p-6 mb-10 border border-indigo-100">
              <p className="text-gray-700 leading-relaxed text-lg">
                At <strong className="text-indigo-900">SearchSkill</strong>, your privacy is very important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
              </p>
            </div>

            {/* Section 1 */}
            <h2 className={sectionHeaderClass}>
              <span className="text-indigo-500">01.</span> Information We Collect
            </h2>
            <ul className={listClass}>
              <li className={listItemClass}>
                {bulletIcon}
                <span><strong className="text-gray-900">Personal Information:</strong> When you sign up, we may collect your name, email address, phone number, and location.</span>
              </li>
              <li className={listItemClass}>
                {bulletIcon}
                <span><strong className="text-gray-900">Profile Data:</strong> Skills offered, skills desired, bio, profile photo, and availability.</span>
              </li>
              <li className={listItemClass}>
                {bulletIcon}
                <span><strong className="text-gray-900">Usage Data:</strong> Information on how you interact with the platform, including messages, ratings, and views.</span>
              </li>
            </ul>

            {/* Section 2 */}
            <h2 className={sectionHeaderClass}>
              <span className="text-indigo-500">02.</span> How We Use Your Information
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                "To create and manage user accounts",
                "To connect users for skill-sharing and communication",
                "To improve our services and personalize your experience",
                "To send notifications and respond to inquiries"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                   <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                   <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Section 3 */}
            <h2 className={sectionHeaderClass}>
              <span className="text-indigo-500">03.</span> Information Sharing
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We do not sell your data. We may share limited information:
            </p>
            <ul className={listClass}>
              <li className={listItemClass}>{bulletIcon} With other users when you interact with them</li>
              <li className={listItemClass}>{bulletIcon} With service providers who help operate the platform</li>
              <li className={listItemClass}>{bulletIcon} If required by law or to protect user safety</li>
            </ul>

            {/* Section 4 & 5 Grouped Visually */}
            <div className="grid md:grid-cols-2 gap-8 mt-10">
                <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">4. Data Security</h2>
                    <p className="text-gray-600 leading-relaxed bg-gray-50 p-5 rounded-xl">
                        We use standard security practices to protect your information. However, no online system is 100% secure, so we cannot guarantee absolute security.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">5. Your Choices</h2>
                    <ul className="space-y-2">
                        {["You can update or delete your profile at any time", "You can opt out of marketing emails", "You may request access to the data we store about you"].map((txt, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600">
                                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span>{txt}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Section 6 */}
            <h2 className={sectionHeaderClass}>
              <span className="text-indigo-500">06.</span> Changes to This Policy
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We may update this Privacy Policy from time to time. When we do, we will notify users through the platform or by email.
            </p>

            {/* Section 7: Contact - Callout Box */}
            <div className="mt-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions or concerns about this policy, our team is ready to help.
              </p>
              <a href="mailto:privacy@searchskill.com" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition-colors">
                privacy@searchskill.com
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;