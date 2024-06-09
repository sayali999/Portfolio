import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'


const Scrollup = () => {

    const [topbtn,setTopbtn] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                setTopbtn(true)
            }else{
                setTopbtn(false)
            }
        })
    },[]);

    const scrollup = () =>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
  return (
    <>
    <div className='scrollup'>
        {topbtn && (
           
             <button  onClick={scrollup}><i class="bi bi-arrow-up fw-bold"></i></button>

        )}
       {/* <Link to="top" spy={true} smooth={true} offset={-100} duration={100} >Up</Link> */}
    </div>
    </>
  )
}

export default Scrollup
