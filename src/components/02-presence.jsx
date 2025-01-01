import {motion} from 'motion/react'
const Presence = () => {
  return (
    <div className="h-[100lvh] bg-black text-white flex flex-col items-center justify-center">
        <div className="w-36 h-36 bg-white rounded-xl z-20"></div>
        <motion.div  initial = {{
            opacity: 0,
            y: -20
        }} animate = {{
            opacity: 1,
            y: 0
        }} transition = {{
            duration: 2
        }} className="w-[8rem] h-[2.5rem] -mt-[1.5rem]  z-10 bg-[#a9a8a8] rounded-xl"></motion.div>
        {/* <div className="w-[6.5rem] h-[2.2rem] -mt-[1.5rem]  bg-[#666666] rounded-xl"></div> */}
    </div>
  )
}

export default Presence