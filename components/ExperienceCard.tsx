import React from 'react';

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article>
      <img
        className='w-30 h-30 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px]'
        src='https://www.efi.com/library/efi/images/shared/logos/efi_logo_100x65.png'
        alt=''
      />
    </article>
  );
}
