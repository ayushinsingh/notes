import React from 'react'

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="w-full shadow-lg flex justify-center flex-col bg-white p-4 sm:p-8 md:p-12 rounded-lg gap-[1rem] max-w-[343px] sm:max-w-[522px] md:max-w-[540px]">
      {props.children}
    </div>
  )
}

export default Card
