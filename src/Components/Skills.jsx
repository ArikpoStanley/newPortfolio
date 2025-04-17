import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    {title: "Next js", percent: "90%"},
    {title: "Recoil", percent: "93%"},
    {title: "Nuxt js", percent: "87%"},
    {title: "Nest js", percent: "88%"},
    {title: "Node js", percent: "91%"},
    {title: "Tailwind CSS", percent: "95%"},
    {title: "Builder.io", percent: "68%"},
    {title: "Groovy & Grails", percent: "94%"},
    {title: "Bubble.io", percent: "93%"},
    {title: "Shopify", percent: "80%"},
    {title: "Tiks/PGF", percent: "87%"},
    {title: "D3.js", percent: "85%"},
    {title: "Wordpress", percent: "88%"},
    {title: "Three.js", percent: "78%"},
    {title: "Typescript", percent: "87%"},
    {title: "Express", percent: "80%"},
    {title: "React js", percent: "94%"},
    {title: "AWS", percent: "96%"},
    {title: "S3 Bucket", percent: "90%"},
    {title: "Tanstack query", percent: "87%"},
    {title: "GraphQL", percent: "80%"},
    {title: "Redux", percent: "92%"},
    {title: "ShadCn", percent: "89%"},
    {title: "Angular js", percent: "88%"},
    {title: "Vue js", percent: "95%"},
    {title: "Context API", percent: "95%"},
    {title: "PHP/Laravel", percent: "94%"},
    {title: "MySQL", percent: "96%"},
    {title: "PostgreSQL js", percent: "75%"},
  ];

  // Group skills by proficiency level for featured skills
  const expertSkills = skills.filter(skill => parseInt(skill.percent) >= 90);
  const advancedSkills = skills.filter(skill => parseInt(skill.percent) >= 80 && parseInt(skill.percent) < 90);

  return (
    <div id='skill' className='px-5 text-white py-20 md:px-20' style={{
      background: 'linear-gradient(to bottom, #0e0425 0%, #1a0536 100%)',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div className='container mx-auto rounded-xl overflow-hidden' style={{
        background: 'rgba(13, 18, 34, 0.7)',
        backdropFilter: 'blur(10px)'
      }}>
        <div className='mx-auto flex-col'>
          <div className='mx-auto flex flex-col justify-center items-center py-10 text-center px-6 ' data-aos="fade-up" data-aos-duration="1500">
            <h1 className='font-extrabold text-3xl mb-6 relative pb-3'>
              <span className='relative z-10 underline '>Skills</span>
            </h1>
            <p className='items-center font-medium leading-relaxed mb-10 text-gray-300'>
              As a versatile full-stack developer, I've mastered a comprehensive range of modern web technologies. 
              My expertise spans from React, Vue, and Angular on the frontend to Node.js, PHP/Laravel, and AWS on the backend. 
              I excel in creating responsive, scalable applications using Next.js, TypeScript, and various state management solutions.
            </p>
          </div>
          
          {/* Auto-sliding carousel with custom styling */}
          <Carousel
            centerMode
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="transform 800ms ease-in-out"
            transitionDuration={800}
            containerClass="pb-12"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="px-2"
            className="skill-slider"
          >
            {skills.map((skill, index) => (
              <div key={index} className='flex flex-col items-center transform transition-all duration-300 hover:scale-105'>
                <div className='relative mb-3'>
                  <div className='bg-white rounded-full w-28 h-28 flex items-center justify-center'>
                    <div className='absolute inset-0 rounded-full' 
                         style={{
                           background: `conic-gradient(#9333ea ${parseInt(skill.percent)}%, transparent ${parseInt(skill.percent)}%)`,
                           clipPath: 'circle(50% at center)'
                         }}>
                    </div>
                    <div className='bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center z-10'>
                      <span className='text-2xl font-bold'>{skill.percent}</span>
                    </div>
                  </div>
                </div>
                <p className='font-bold text-center'>{skill.title}</p>
              </div>
            ))}
          </Carousel>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;