import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // Define the initial state for the person's profile
  const Person = {
    fullName: "Munyia",
    bio: "Some where from the world",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy89RVmRQv5X0bmZzl-5m_PkEM8OezvwB9Nw&usqp=CAU",
    profession: "Software Developer"
  }

  // Define state to toggle the visibility of the profile
  const [show, setShow] = useState(true)
  const [timeSinceMount, setTimeSinceMount] = useState(true)

  // Function to toggle the visibility state
  function toggleShow() {
    setShow(!show)
  }

  useEffect(() =>{
    const intervalId = setInterval(()=>{
      setTimeSinceMount(prevTime => prevTime+1)
    }, 1000)
    return() =>clearInterval(intervalId);
    
  },[])
  return (
    <div id='box'>
      {/* Conditional rendering: show profile only if show is true */}
      {show && 
        <div id='box1'>
          <div>
            {/* Display person's full name, bio, and profession */}
            <h1>{Person.fullName}</h1>
            <h3>{Person.bio}</h3>
            <h3>{Person.profession}</h3>
          </div>
          {/* Display person's image */}
          <img src={Person.imgSrc} alt="img hrer" />
        </div>
      }
      {/* Button to toggle the visibility */}
      <button onClick={toggleShow}>toggle show</button>
      <p>Time since mount: {timeSinceMount} seconds</p>
    </div>
  )
}

export default App
