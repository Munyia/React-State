import { useState } from 'react'

import './App.css'

function App() {
  const Person={fullName: "Munyia", bio: "Some where from the world", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy89RVmRQv5X0bmZzl-5m_PkEM8OezvwB9Nw&usqp=CAU", profession: "Software Developer"}
  const [show, setShow] = useState(true)
  function toggleShow() {
    setShow(!show)
  }

  return (
    <div id='box'>
    {
      show && 
     <div id='box1'>
      <div>
        <h1>{Person.fullName}</h1>
        <h3>{Person.bio}</h3>
        <h3>{Person.profession}</h3>
      </div>
      <img src={Person.imgSrc} alt="img hrer" />
     </div>
    }
      <button onClick={toggleShow}>toggle show</button>
    </div>
  )
}

export default App
