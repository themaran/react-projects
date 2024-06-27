import { useState } from "react"
import { HiMiniStar } from "react-icons/hi2";
import './style.css';

const StarRating = ({noOfStar = 5}) => {

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) =>{
    setRating(getCurrentIndex);
  }
  const handleMouseEnter = (getCurrentIndex) =>{
    setHover(getCurrentIndex);
  }
  const handleMouseLeave = () =>{
    setRating(rating);
  }
  const submitalert = () =>{
    return alert('Thanks for your rating!')
  }
  return (
    <>
    <div className="container">
      <div className="card">
        <img width={220} className="image" src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />
        <div className="textcontent">
          <div>
           <h4 className="Heading">Burger</h4>
          </div>
          <div className="">
          {
            [...Array(noOfStar)].map((_,index)=>{
              index += 1;
              return <HiMiniStar 
                        className={index<= (hover || rating) ? 'active':'inactive'} 
                        key={index} 
                        onClick={()=>handleClick(index)} 
                        onMouseMove={()=>handleMouseEnter(index)} 
                        onMouseLeave={()=>handleMouseLeave()} 
                        size={20} />
            })
          }
        </div>
        </div>
        <div>
            <p className="text">World most tasty burger made with cheese and spices.</p>
          </div>
          <div className="buttons">
        <button className="btn">Add to Card</button>
        <button className="btn">Buy now</button>
      </div>
      </div>
      <div className="submitrating">
      <div className="">
          {
            [...Array(noOfStar)].map((_,index)=>{
              index += 1;
              return <HiMiniStar 
                        className={index<= (hover || rating) ? 'active':'inactive'} 
                        key={index} 
                        onClick={()=>handleClick(index)} 
                        onMouseMove={()=>handleMouseEnter(index)} 
                        onMouseLeave={()=>handleMouseLeave()} 
                        size={20} />
            })
          }
        </div>
        <div className="">
          <button className="btn" onClick={()=>{window.location.reload(false);}}>Cancel</button>
          <button className="btn" onClick={submitalert}>Submit</button>
        </div>
      </div>
    </div>
    </>

  )
}

export default StarRating