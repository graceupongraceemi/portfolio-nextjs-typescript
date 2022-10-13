import React from 'react';

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 t4ext-2xl'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((project) => (
          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <img
              src='https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
              alt=''
            />

            <div>
              <h4>Case Study 1 of 3: UPS clone</h4>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </div>
  );
}

export default Projects;
