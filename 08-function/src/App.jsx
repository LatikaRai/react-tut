const App = () => {
  function onTypedValue(val){
    console.log(val);
  }
  return (
    <div>
      <input onChange={(elem)=>{
        onTypedValue(elem.target.value)
      }} type="text" />
    </div>
  )
}

export default App
