import React, { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const projectsPerPage = 6;

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("api/projects");
        setProjects(response.data);
        setFilteredProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    if (filter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((p) => p.status === filter.toLowerCase())
      );
    }
    setCurrentPage(1); // Reset to first page when filter changes
  }, [filter, projects]);

  // Get current projects for pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filterOptions = ["All", "Completed", "In progress"];

  return (
    <div id="project" className="bg-black text-white py-16" style={{background: "linear-gradient(to bottom, #0e0425 0%, #1a0536 100%)"}}>
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="font-extrabold text-3xl text-center mb-8">
          <span className="border-b-2 border-purple-600 pb-2">Projects</span>
        </h1>
        
        <p className="text-center mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-duration="1500">
          With my skill-set, I have contributed to building many stunning and 
          wonderful tech solutions which have been standing out over the years.
        </p>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8" data-aos="fade-up" data-aos-duration="1500">
          <div className="inline-flex bg-black bg-opacity-40 rounded-lg p-1">
            {filterOptions.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                  filter === category
                    ? "bg-[#130A38] hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent text-white"
                    : "text-white hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent hover:bg-opacity-40"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl">No projects found matching the selected filter.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-duration="1500">
              {currentProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-black bg-opacity-70 rounded-xl overflow-hidden shadow-lg border  border-purple-900 hover:border-purple-500 transition duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      className="w-full h-full object-cover transition duration-500 hover:scale-110"
                      src={project.image}
                      alt={project.title}
                    />
                    <div className="absolute top-3 right-3">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        project.status === "completed" 
                          ? "bg-green-600" 
                          : "bg-yellow-600"
                      }`}>
                        {project.status === "completed" ? "Completed" : "In Progress"}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description || "A fantastic project showcasing my skills and creativity."}
                    </p>
                    <div className="flex justify-end">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 rounded-md hover:bg-gradient-to-t from-[#130A38] to-transparent bg-[#130A38] transition-colors duration-300 text-sm"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-10">
                <div className="inline-flex rounded-md shadow-sm">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded-l-md bg-black bg-opacity-50 border border-purple-900 hover:border-purple-600 disabled:opacity-50"
                  >
                    Prev
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                    <button
                      key={number}
                      onClick={() => paginate(number)}
                      className={`px-3 py-1 border-t border-b border-purple-900 ${
                        currentPage === number
                          ? "bg-[#130A38] text-white hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent border-purple-600"
                          : "bg-black bg-opacity-50 hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent"
                      }`}
                    >
                      {number}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 rounded-r-md bg-black bg-opacity-50 border border-purple-900 hover:border-purple-600 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;