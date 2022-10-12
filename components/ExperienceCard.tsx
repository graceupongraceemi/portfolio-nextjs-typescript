import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hideen'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-30 h-30 rounded-full xl:w-[200px] xl:h-[200px]'
        src='https://www.efi.com/library/efi/images/shared/logos/efi_logo_100x65.png'
        alt=''
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>
          Software Engineer/ Full Stack Developer
        </h4>
        <p className='font-bold text-2xl mt-1'>Freelance (Mission based)</p>
        <div className='flex space-x-2 my-2'>
          <img
            className='h-10 w-10 rounded-full'
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-i781M2JNO6ZYT5VetHsSAHaDt%26pid%3DApi%26h%3D160&f=1&ipt=c80646d54b5ed4ce93bdbe155e782f9c1a38bc83ad0ec4b8689718297fda5c46&ipo=images'
            alt=''
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-i781M2JNO6ZYT5VetHsSAHaDt%26pid%3DApi%26h%3D160&f=1&ipt=c80646d54b5ed4ce93bdbe155e782f9c1a38bc83ad0ec4b8689718297fda5c46&ipo=images'
            alt=''
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-i781M2JNO6ZYT5VetHsSAHaDt%26pid%3DApi%26h%3D160&f=1&ipt=c80646d54b5ed4ce93bdbe155e782f9c1a38bc83ad0ec4b8689718297fda5c46&ipo=images'
            alt=''
          />
        </div>
        <p className='uppercase py-5 text-gray-300'>
          Started work... - Ended...
        </p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}
