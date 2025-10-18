import React from 'react';

interface MenuBarProps {
  logoName: string
  label: string
  selected: boolean;
  onClick: () => void;
}

const MenuBar: React.FC<MenuBarProps> = (props) => {
  return (
    <div className={'flex flex-row justify-between items-center p-2 my-2 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-700 ' + (props.selected ? 'bg-gray-100 dark:bg-neutral-700' : '')} onClick={props.onClick}>
      <div className='flex flex-row items-center gap-2'>
        <img src={`/${props.logoName}`} alt={props.label} className='block dark:hidden w-5 h-5' />
        <img src={`dark/${props.logoName}`} alt={props.label} className='hidden dark:block w-5 h-5' />
        <p className='w-full text-sm dark:text-white text-gray-700'>{props.label}</p>
      </div>
      {props.selected && <img src="/ChevronRight.svg" alt="Chevron Right" className='block dark:hidden w-5 h-5 ml-2' />}
      {props.selected && <img src="dark/ChevronRight.svg" alt="Chevron Right" className='hidden dark:block w-5 h-3 ml-2' />}
    </div>
  )
}

export default MenuBar
