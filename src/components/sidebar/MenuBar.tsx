import React from 'react';

interface MenuBarProps {
  logoName: string
  label: string
  selected: boolean;
  onClick: () => void;
}

const MenuBar: React.FC<MenuBarProps> = (props) => {
  return (
    <div className={'flex flex-row justify-between p-2 my-2 rounded-lg cursor-pointer hover:bg-gray-100 ' + (props.selected ? 'bg-gray-100' : '')} onClick={props.onClick}>
      <div className='flex flex-row items-center gap-2'>
        <img src={`/${props.logoName}`} alt={props.label} className='w-5 h-5' />
        <p className='w-full text-sm text-gray-700'>{props.label}</p>
      </div>
      {props.selected && <img src="/ChevronRight.svg" alt="Chevron Right" className='w-5 h-5 ml-2' />}
    </div>
  )
}

export default MenuBar
