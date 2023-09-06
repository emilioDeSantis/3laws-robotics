import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function ScrollToButton({onClick, children}:{onClick:()=>void, children:React.ReactNode}) {
  return (
    <div
        onClick={onClick}
        style={{
            display:'flex',
            flexDirection:'column',
            alignItems: 'center',
            color:'white',
            cursor:'pointer',
            fontFamily: "korataki",
            fontWeight: 200,
            fontSize: "1.2rem",
            letterSpacing: "0.09em",
            textTransform: "capitalize",
            // paddingInline: "2vw",
            // paddingBlock: "1vw",
            // background: "#ffffff99",
            borderRadius: "10px",
            // border: "1px solid #fff",
            zIndex: 201,
            paddingInline: '2vw',
            // backdropFilter: "blur(10px)",
            // WebkitBackdropFilter: "blur(10px)",
            // boxShadow: '0 0 10px #8ff',
        }}
    >
        {children}
        <div style={{
            width:'1.8rem',
            height:'1.8rem',
        }}>
            <ChevronDownIcon/>
        </div>
    </div>
  )
}
