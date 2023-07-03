import { NavLink } from "react-bootstrap"

export default function New ({title, text, id}){
  return(
    <>
      <NavLink className='hover-link-nav link-news' >{title}</NavLink>
      <p style={{fontWeight:'400', fontSize:'0.8rem'}}>{text}</p>
      {id != 3 &&
      <div style={{width:'100%', height:'1px', background:'white'}}></div>
      }
      
    </>
  )
}