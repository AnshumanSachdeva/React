import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//     type: 'a',
//     props: {
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'Click me to visit google'
// }

const anotherEle = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

const anotherUser = "chai aur react"

const reactEle = React.createElement(
  'a',
  {href: 'https://google.com',target:'_blank'},
  'click to visit google',
  anotherUser
)
// jo syntax upr use kiya hai vo humne actual react ka use karke banaya hai isliye vo valid hai also , is syntax mein humein proper series mein hi cheeje deni padhti hai .ie. 1. tag, 2. object, 3. text, 4. var injection (Evaluated expression)

createRoot(document.getElementById('root')).render(
    // <App />
    // reactElement   // yeh q nhi chala?? qki yeh syntax sahi nhi hai because yeh jisne b vite se bnaya hai uske b kush prerequisites hai toh usne yeh bola hai ki aise tarike se hi karna hai jaise niche wala chalaya
    // anotherEle // this will work
    // reactEle  // this will also work
)
