import React from 'react'

type SectionHeadingProps = {
  title: string;
  subtitle: string;
};

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div>
      <h2 className='sm:text-3xl text-2xl font-bold text-gray-800 dark:text-gray-200 text-center'>{title}</h2>
      <p className='text-center mt-3 text-gray-500 dark:text-gray-400'>{subtitle}</p>
    </div>
  )
}

export default SectionHeading