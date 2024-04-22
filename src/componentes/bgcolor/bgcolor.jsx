function Bgcolor() {
    const [color, setColor] = useState("olive");
  
    return (
      <div className="w -full h-screen duration-200"
        style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"Red"}} onClick={()=>setColor("red")}>
                Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"Green"}} onClick={()=>setColor("Green")}>
                Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"Red"}} onClick={()=>setColor("white")}>
                white
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"Red"}} onClick={()=>setColor("black")}>
                black
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"Red"}}>
  
            </button>
          </div>
        </div>
      </div>
     
    )
  }
  
  export default Bgcolor
  