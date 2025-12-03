import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import skillsData from '../../../../public/skills.json';
import "animate.css";


const SkillDetails = () => {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const selectedSkill = skillsData.find(skill => skill.skillId === parseInt(id));
    setSkill(selectedSkill);
  }, [id]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully!");
    setFormData({ name: '', email: '' });
    setShowForm(false);
  };

  if (!skill) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <Toaster 
        position="top-center"
        toastOptions={{
          success: {
            style: {
              background: '#10B981',
              color: '#fff',
            },
          },
        }}
      />

      <div className="max-w-6xl mx-auto mt-16 sm:mt-20">
        {/* Header with breadcrumb style */}
        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-2">
            <span className="hover:text-indigo-600 cursor-pointer">Skills</span> / 
            <span className="text-gray-700 font-medium"> {skill.category}</span>
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            {skill.skillName}
          </h1>
        </div>

        {/* Main Content Card */}
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
          {/* Image Section with Overlay */}
          <div className="relative">
            <img
              src={skill.image}
              alt={skill.skillName}
              className="w-full h-72 sm:h-96 lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Floating Badge */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <span className="text-amber-500 font-semibold text-lg">⭐ {skill.rating}</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 sm:p-8 lg:p-10">
            {/* Title and Price Row */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {skill.skillName}
                </h2>
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {skill.providerName.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{skill.providerName}</p>
                    <p className="text-sm text-gray-500">{skill.providerEmail}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl shadow-md">
                  <p className="text-sm opacity-90">Price</p>
                  <p className="text-2xl font-bold">${skill.price}</p>
                </div>
                <div className="bg-amber-50 border-2 border-amber-200 px-6 py-2 rounded-xl text-center">
                  <p className="text-amber-700 font-semibold">
                    {skill.slotsAvailable} Slots Available
                  </p>
                </div>
              </div>
            </div>

            {/* Category Badge */}
            <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              📚 {skill.category}
            </div>

            {/* Description */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">About this Skill</h3>
              <p className="text-gray-700 leading-relaxed">{skill.description}</p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center sm:justify-end">
              <button
                onClick={() => setShowForm(true)}
                className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
              >
                <span>Book a Session</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm z-50 animate__animated animate__fadeIn">
          <div className="bg-white shadow-2xl rounded-2xl max-w-md w-full relative animate__animated animate__zoomIn animate__faster overflow-hidden">
            {/* Decorative Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white relative">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <span className="text-2xl leading-none">×</span>
              </button>
              <h2 className="text-2xl font-bold">Book Your Session</h2>
              <p className="text-indigo-100 text-sm mt-1">Fill in your details to get started</p>
            </div>

            {/* Form Content */}
            <div className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillDetails;