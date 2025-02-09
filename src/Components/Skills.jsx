import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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
    {title: "SQL", percent: "96%"},
    {title: "PostgreSQL js", percent: "75%"},
  ]
  return (
    <div id='skill' className='px-5 text-white flex items-center justify-center py-28 bg-[url("/portfolio-img2.png")] h-screen'>
      <div className='container bg-gray-900 mx-auto rounded-2xl pt-8'>
        <div className='mx-auto  flex-col'>
       <div className='mx-auto flex flex-col justify-center items-center mb-6 text-center w-4/5' data-aos="fade-up" data-aos-duration="2000">
       <h1 className='font-extrabold text-3xl mb-10 underline'>Skills</h1>
        <p className='items-center font-bold'>Over the years i have accumulated by virtue of experience a 
        number of skills that have proven to be very helpful and of great assistance and
         application both to life and my tech career. Some of which are...</p>
       </div>
          <Carousel  centerMode responsive={responsive} infinite={true} className='skill-slider pb-10 flex items-center justify-center ' >
         {skills?.map((skill, index)=>(
           <div key={index} className='place-items-center'>
           <div className='border-8 plac border-fuchsia-800 rounded-full w-28 h-28 p-6 pr-2 text-2xl font-extrabold ' data-aos="fade-down" data-aos-duration="2000">{skill?.percent} </div>
           <p className='font-bold '>{skill?.title}</p>
       </div>
         ))}
     
          </Carousel>
        </div>
        
      </div>
    </div>
  )
}

export default Skills