import LeftCenter from './LeftCenter'
import RightCenter from './RightCenter'

const Center = (props) => {
  return (
    <div className='h-[90vh] w-full relative flex items-center '>
      <LeftCenter/>
      <RightCenter users={props.users}/>
    </div>
  )
}

export default Center
