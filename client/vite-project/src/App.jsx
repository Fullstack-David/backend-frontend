import React, {useState, useEffect} from 'react'

function App() {

  const [youtube, setYoutube] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/youtube");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setYoutube(data);
      } catch(error){
        console.error(`Error fetching data: ${error.message}`);
      }
    }

    fetchData();

  },[])
  return (
    <div>🔥React and express🔥
      <h1>{ youtube.like }</h1>
      <h1>{ youtube.subscribe }</h1>
    </div>
  )
}

export default App;