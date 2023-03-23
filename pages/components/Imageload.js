import Image from "next/image"
import styles from '@/styles/Home.module.css'
import { useEffect, useRef, useState } from "react"



export default function Imageload({src}) {

  const [cargando, setCargando] = useState(true)
  const inputRef = useRef(null)


  useEffect(()=> {
    const observador = new IntersectionObserver((entries)=>{
     entries.forEach( entry => {
      if(entry.isIntersecting){
        inputRef.current.src = `/assets/${src}.jpg`
         setCargando(false)
         observador.disconnect()
      }
     })
    },{
      rootMargin: "0px 50px 0px 0px",
      threshold: 1
    })


    observador.observe(inputRef.current)

  },[inputRef.current])
    



  return (
  <>
    {cargando ? <h2>Cargando...</h2> : <h2>Cargado</h2>}
    <Image ref={inputRef}  className={styles.logo} alt="prueba" width={500} height={500}/>
  </>  
  )
}
