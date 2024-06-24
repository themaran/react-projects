import { useEffect, useState } from "react";
import './style.css';


const RandomColorGenerator = () => {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    const randomColorUtility = (length) =>{
        return Math.floor(Math.random()*length)
    }

    const handleCreateRandomHexColor = () =>{
        let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexColor = "#";

        for (let i=0; i<6; i++){
            hexColor += hex[randomColorUtility(hex.length)]
        }
        console.log(hexColor);
        setColor(hexColor);
    }
    const handleCreateRandomRgbColor = () =>{
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r},${g},${b})`);
    }
    useEffect(()=>{
        if(typeOfColor === 'rgb') handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();
    },[typeOfColor]);

    // //pallete
    // const [color1, setColor1] = useState("#000000");
    
    // const handlePallete = ()  =>{
    //     const r = randomColorUtility(256);
    //     const g = randomColorUtility(256);
    //     const b = randomColorUtility(256);

    //     setColor1(`rgb(${r},${g},${b})`);
    // }
  return (
    <div style={{
        width:"100vw",
        height:"100vh",
        background:color

    }}>
        <button className="btn" onClick={()=>setTypeOfColor("hex")}>Create HEX Color</button>
        <button className="btn" onClick={()=>setTypeOfColor("rgb")}>Create RGB Color</button>
        {/* <button onClick={()=>handlePallete()}>Create Pallete</button> */}
        <button className="btn" onClick={typeOfColor === "hex" ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>

        <div style={{
            display:'flex',
            judtifyContent:'center',
            alignItems:'center',
            color:'white',
            fontSize:'60px',
            marginTop: '50px',
            flexDirection: 'column',
            gap:'20px'

        }}>
            <h6>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h6>
            <h>{color}</h>
            {/* <div className="pallete">
                <div className="colors" style={{background:color1}}></div>
                <div className="colors" style={{background:color2}}></div>
                <div className="colors"></div>
                <div className="colors"></div>
                <div className="colors"></div>
            </div> */}
        </div>
    </div>
  )
}

export default RandomColorGenerator