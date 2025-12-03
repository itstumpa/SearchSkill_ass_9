import React from "react";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5754E8] to-purple-600">
              Us
            </span>
          </h1>
          <div className="h-1.5 w-24 bg-[#5754E8] mx-auto rounded-full mb-8"></div>
          <p className="text-2xl md:text-3xl font-medium text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Empowering Communities Through{" "}
            <span className="text-[#5754E8]">Skill Sharing</span>
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Story & Mission */}
          <div className="lg:col-span-7 space-y-10">
            {/* Story */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-lg text-gray-600 leading-loose mb-6">
                In today’s fast-paced, digital world, we believe that some of
                the most valuable learning still happens face-to-face — in
                living rooms, community centers, and local parks. That’s why we
                created{" "}
                <span className="font-bold text-[#5754E8]">SearchSkill</span>:
                an interactive platform where people can offer, learn, and trade
                skills within their local area.
              </p>
              <p className="text-lg text-gray-600 leading-loose">
                Whether you’re looking to learn guitar from a neighbor, trade
                Spanish lessons for yoga sessions, or get coding help from
                someone nearby — our platform connects everyday experts with
                curious learners, right where they live.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-[#5754E8]/5 to-purple-50 border-l-4 border-[#5754E8] p-8 rounded-r-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Our Mission
              </h2>
              <p className="text-gray-700 text-lg italic">
                "To make skill-sharing more accessible, personal, and
                community-driven. We aim to foster local connections, encourage
                lifelong learning, and empower individuals to both teach and
                grow."
              </p>
            </div>
          </div>

          {/* Right Column: Features (Transformed List) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                What We Offer
              </h2>

              <div className="space-y-6">
                {/* Item 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">
                      A Local Marketplace for Skills
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Discover real people offering lessons, workshops, and
                      training in everything from music and languages to fitness
                      and tech.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">
                      Two-Way Learning
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Not just a place to learn — a place to teach. Users can be
                      both students and instructors, sharing what they know.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">
                      Trusted Connections
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      With user ratings and verified profiles, we help you find
                      the right skill partner with confidence.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">
                      Flexible Exchanges
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Pay, trade, or barter — our platform supports multiple
                      models of exchange.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Why It Matters + CTA */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why It Matters
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Learning shouldn’t be limited by cost, access, or formality.
            Everyone has something to teach, and everyone has something they
            want to learn. By connecting people locally, we’re helping build
            stronger, smarter, and more connected communities — one skill at a
            time.
          </p>
          <Link to="/register">
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-[#5754E8] rounded-full hover:bg-[#423fd4] hover:shadow-lg hover:shadow-[#5754E8]/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5754E8] active:scale-95">
              <span>Join Us Today</span>
              <svg
                className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
