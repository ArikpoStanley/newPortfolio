import React, { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("api/projects");
        setProjects(response.data);
        setFilteredProjects(response.data); // Default to all projects
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    if (filter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.status === filter.toLocaleLowerCase()));
    }
  }, [filter, projects]);

  return (
      <div id="project" className="bg-black text-white pb-20">
      <div className="container text-center mx-auto pt-10">
        <h1 className="font-extrabold text-3xl text-center underline py-10">Projects</h1>
        <div className="container bg-gray-400 pt-4 rounded-xl">
          {/* Filter Buttons */}
          <div className="flex flex-row space-x-4 bg-transparent w-80 text-blue-900 px-4 py-2 mb-4 font-bold rounded-lg">
            {["All", "Completed", "In progress"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`hover:text-purple-700 ${filter === category ? "text-purple-700 underline" : ""}`}
              >
                {category}
              </button>
            ))}
          </div>

          <p className="font-bold text-black" data-aos="fade-left" data-aos-duration="2000">
            With my skill-set, I have contributed to building many stunning and wonderful tech solutions
            which have been standing out over the years. Some of them are still under the process of being
            completed and are likely to hit the market anytime soon.
          </p>

          {/* Project Grid */}
          <div
            className="grid lg:grid-cols-3 shadow-md rounded-xl projects-Container mx-auto justify-between gap-10 mt-8 bg-gray-400 p-8"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            {!filteredProjects? (
              <div>Fetching projects please wait... </div>
            ) : (
              
              filteredProjects.map((p, index) => (
                <div
                  key={index}
                  className="text-black rounded-2xl shadow-md shadow-gray-700 cursor-pointer p-4 hover:scale-110 transition duration-500 bg-white"
                >
                  <img className="hover:bg-purple-300 cursor-pointer" src={p.image} alt={p.title} />
                  <p className="font-bold text-center">{p.title}</p>
                  <a href={p.url} className="font-bold hover:text-purple-600 text-blue-600">
                    View in browser
                  </a>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
