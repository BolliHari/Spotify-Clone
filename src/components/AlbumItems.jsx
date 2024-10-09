import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


const AlbumItems = ({image,name,desc,id}) => {
  
  const navigation = useNavigate();
  return (
    <div onClick={() => {navigation(`/album/${id}`)}} className='min-w-[180px] p-2 hover:bg-[#ffffff26] cursor-pointer'>
      <img src={image} alt="" />
      <h3 className='font-bold text-sm mt-3 mb-2'>{name}</h3>
      <p className='text-xs mb-1'>{desc}</p>
    </div>
  )
}

export default AlbumItems
