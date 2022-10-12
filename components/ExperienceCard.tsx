import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article>
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

      <div>
        <h4>Software Engineer/ Full Stack Developer</h4>
        <p>Freelance (Mission based)</p>
        <div>
          {/* Tech used */}
          {/* Tech used */}
          {/* Tech used */}
        </div>
        <p>Started work... - Ended...</p>

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
