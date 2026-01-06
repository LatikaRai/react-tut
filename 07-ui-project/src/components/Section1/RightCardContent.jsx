import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className="w-full h-full absolute top-0 right-0 p-10 flex flex-col justify-between">
        <h1 className="h-10 w-10 text-lg font-semibold bg-white rounded-full flex items-center justify-center">{props.num+1}</h1>
        <div className="flex flex-col gap-10 text-base text-white">
          <p className="font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad eiustempore optio inventore ipsum sed, dolores expedita?</p>
          <div className="flex items-center justify-between">
            <button style={{backgroundColor: props.color}} className="py-2 px-4 text-base text-white rounded-full">{props.tag}</button>
            <i style={{backgroundColor: props.color}} className="ri-arrow-right-line p-3 h-10 w-10 text-base text-white rounded-full flex items-center justify-center"></i>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent
