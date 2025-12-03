import React, { useState } from "react";
import { Star, Search, ArrowUpDown, Filter } from "lucide-react";
import skills from "../../../public/skills.json";
import { useNavigate } from "react-router";

const AllSkills = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [sortBy, setSortBy] = useState("name");
  const navigate = useNavigate();

  const goToDetails = (id) => {
    navigate(`/skill-details/${id}`);
  };

  // Filter skills based on search term
  const filteredSkills = skills.filter((skill) =>
    skill.skillName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort skills based on sort order and sort by criteria
  const sortedSkills = [...filteredSkills].sort((a, b) => {
    if (sortOrder === "default") return 0;

    let comparison = 0;

    switch (sortBy) {
      case "name":
        comparison = a.skillName.localeCompare(b.skillName);
        break;
      case "price":
        comparison = a.price - b.price;
        break;
      case "rating":
        comparison = a.rating - b.rating;
        break;
      default:
        comparison = 0;
    }

    return sortOrder === "asc" ? comparison : -comparison;
  });

  return (
        <div className="bg-linear-to-r from-indigo-50 via-white to-indigo-50">
      <div className="max-w-10/12 mx-auto pt-10 md:pt-20 px-8">


    <div className="sm:px-3 pb-8 md:pb-16">
      {/* Page Title */}
      <h2 className="text-center pt-16 text-2xl md:3xl lg:text-5xl text-[#2f2f2f] mb-4 font-bold">
  All Skills
</h2>
<p className="text-center mb-8 text-sm md:text-md lg:w-2/4 mx-auto ">Connect with locals to exchange today’s most popular skills in a trusted space. Turn your talents into opportunities with an easy-to-use local skills marketplace.</p>
      
      <div className="text-center my-6">
        
       
      </div>

      {/* Search and Filter Section */}
       <p className="text-gray-500 my-2 mx-2">
          Showing {sortedSkills.length} of {skills.length} Results
        </p>
      <div className="bg-white shadow-md rounded-xl p-4 md:p-6 mb-6">
       
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              
          {/* Search Input */}
          <div className="relative w-full lg:w-1/3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5754E8] focus:border-transparent"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            {/* Sort By Dropdown */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full sm:w-auto px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5754E8] focus:border-transparent bg-white cursor-pointer"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
              </select>
            </div>

            {/* Sort Order Dropdown */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <ArrowUpDown className="w-5 h-5 text-gray-600" />
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full sm:w-auto px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5754E8] focus:border-transparent bg-white cursor-pointer"
              >
                <option value="default">Default Order</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>

            {/* Reset Button */}
            <button
              onClick={() => {
                setSearchTerm("");
                setSortOrder("default");
                setSortBy("name");
              }}
              className="px-4 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition w-full sm:w-auto"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedSkills.map((skill) => (
          <div
            key={skill.skillId}
            onClick={() => goToDetails(skill.skillId)}
            className="card bg-white shadow-md hover:shadow-lg hover:scale-105 transition ease-in-out duration-300 rounded-xl overflow-hidden cursor-pointer flex flex-col h-full"
          >
            <figure className="p-3 rounded-md">
              <img
                src={skill.image}
                alt={skill.skillName}
                className="rounded-md h-56 sm:h-60 md:h-64 lg:h-72 w-full object-cover"
              />
            </figure>

            <div className="px-4 pb-4 flex flex-col flex-1">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-md md:text-lg lg:text-xl">
                  {skill.skillName}
                </h3>
                <h4 className="text-md md:text-lg lg:text-xl font-bold text-green-400">
                  ${skill.price}
                </h4>
              </div>
<div>
        <h3 className="my-2 text-sm md:text-md text-gray-600 h-16 overflow-hidden">
                  {skill.description}
                </h3>
</div>
              <div className="flex justify-between text-sm md:text-base text-gray-600 mt-auto pt-1">
                <span className="flex items-center gap-1 bg-[#e1e0ff] p-2 rounded-md text-red-600 font-semibold">
                  <Star className="w-4 h-4" />
                  {skill.rating}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToDetails(skill.skillId);
                  }}
                  className="flex items-center gap-1 bg-[#5754E8] p-2 rounded-md text-white font-semibold hover:bg-[#403eea] transition"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {sortedSkills.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No skills found
          </h3>
          <p className="text-gray-500">
            Try adjusting your search or filter criteria
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSortOrder("default");
              setSortBy("name");
            }}
            className="mt-4 px-6 py-2 bg-[#5754E8] text-white rounded-md font-semibold hover:bg-[#3e3cbc] transition"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
    </div>
      
      </div>
  );
};

export default AllSkills;