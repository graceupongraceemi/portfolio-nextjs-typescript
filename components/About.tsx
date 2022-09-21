import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1.5 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
      {/* 
      <motion.img src='https://images.unsplash.com/photo-1621789098261-433128ee8d1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXRpZnVsJTIwZmxvd2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60' /> */}

      <motion.img
        initial={{
          x: -200,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src='https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/304858811_418429550382410_5931376345538681864_n.png?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BlcuhNVHtLUAX9u9RON&_nc_ht=scontent-lax3-2.xx&oh=00_AT9LiIJ96I8zJQ27vnDBcOLK24wxlmRzYBPV1mud7-15FQ&oe=6330CAB7'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a{' '}
          <span className='underline decoration-[#F7AB0A]/50'>little </span>{' '}
          background
        </h4>
        <p className='text-sm'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          laudantium suscipit aperiam dignissimos! Vitae libero at, culpa labore
          quidem possimus nulla! Temporibus ullam nisi cupiditate labore,
          repellat facilis, ducimus iusto reiciendis laboriosam unde quas
          placeat soluta velit ab molestiae, voluptates dolores nulla excepturi
          eveniet officia assumenda tenetur molestias harum quae? Aspernatur
          quos officia quae, maiores nisi voluptatum soluta autem quidem quis
          praesentium voluptatem deserunt eligendi, consequuntur, in laborum
          accusantium illum.
        </p>
      </div>
    </motion.div>
  );
}
