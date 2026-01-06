import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

const App = () => {
  const [num,setNum] = useState(0);
  const [active,setActive] = useState(null);

  function increasing(){
    setNum(num+1);
    setActive('inc');
    setTimeout(()=>setActive(null),350);
  }

  function decreasing(){
    if (num>0){
      setNum(num-1);
      setActive('dec');
    setTimeout(()=>setActive(null),350);
    }
  }

  function handleOnClick(){
    setNum(0);
    btnGlow();
  }

  function btnGlow(){
    setActive('btn');
    setTimeout(()=>setActive(null),350);
  }


  return (
    <div className='home'>
      <div className="counter">
        <i onClick={increasing} className={`ri-add-line ${active=='inc'? 'active': ''}`}></i>
        <div className='num-show'>{num}</div>
        <i onClick={decreasing} className={`ri-subtract-fill ${active=='dec'? 'active': ''}`}></i>
      </div>
      <button onClick={handleOnClick} className={`${active=='btn'? 'btn-effect':''}`}>Reset</button>
    </div>
  )
}

export default App
