import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import itemData from '../data.json'; // Adjust the path if necessary

export default function TitlebarBelowImageList() {
  return (
    <div className="overflow-x-auto p-8 ">
      <h2 className="collections-title text-center mb-4 text-[#001c25;]">MUFA'S CATEGORIES</h2>
      <ImageList
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          transform: 'translateZ(0)',
          width: 'auto',
          }}>
            
        {itemData.map((item, index) => (
          <ImageListItem 
            key={item.img} 
            sx={{ 
              minWidth: 200, 
              marginRight: index < itemData.length - 1 ? 2 : 0, // Added margin between images
            }}
          >
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              className="object-cover w-full h-full"
            />
            <div className="bg-black bg-opacity-75 p-2 absolute bottom-0 left-0 right-0">
              <h4 className="text-white font-medium text-center">{item.title}</h4>
              <p className="text-yellow-500 font-normal text-center">{item.description}</p>
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
