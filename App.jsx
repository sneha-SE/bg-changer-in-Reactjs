import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200 bg-changer" style={{backgroundColor: color,
      height: "100vh",
    }}>

     <div className="bg-bar">
      <button className="btn" id="btn-1" onClick={() => setColor('#DC143C')}>Crimson</button>
      <button className="btn" id="btn-2" onClick={() => setColor('#ffb8c2')}>LightPink</button>
      <button className="btn" id="btn-3" onClick={() => setColor('#FF8C00')}>DarkOrange </button>
      <button className="btn" id="btn-4" onClick={() => setColor('#E6E6FA')}>Lavender</button>
      <button className="btn" id="btn-5" onClick={() => setColor('#DDA0DD')}>Plum</button>
      <button className="btn" id="btn-6" onClick={() => setColor('#7CFC00')}>LawnGreen</button>
      <button className="btn" id="btn-7" onClick={() => setColor('#0000CD')}>MediumBlue</button>
     </div>
    </div>
  );
}

export default App
