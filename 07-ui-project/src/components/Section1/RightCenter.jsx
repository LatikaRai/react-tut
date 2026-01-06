import RightCard from './RightCard.jsx'

const RightCenter = (props) => {
  return (
    <div className='w-2/3 h-full flex flex-nowrap overflow-x-auto gap-4 py-8'>
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} color={elem.color} img={elem.img} tag={elem.tag} num={idx}/>
      })}
    </div>
  )
}

export default RightCenter
