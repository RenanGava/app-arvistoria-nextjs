import { useEffect, useState } from "react"

type WidthState = number

export function useWidth() {
    const [width, setWidth] = useState<WidthState>()
    
      useEffect(() => {
        if (typeof window !== 'undefined') {
          const handleResize = () => {
            setWidth(window.innerWidth);
          }
        
          window.addEventListener("resize", handleResize);
         
          handleResize();
        
          return () => window.removeEventListener("resize", handleResize);
        }
      }, [])
      return width
}