import { motion } from "motion/react"
const Header = () => {
  return (
    <div className="flex items-center justify-center h-[100lvh]">
        <motion.h1 
        initial= {{
            opacity: 0,
            y: 20
        }}
         animate={{
            opacity: 1,
            y: 0
        }} 
         transition={{
            duration: 1
         }}
        className=" text-[4rem] font-semibold">
            Hello World!
        </motion.h1>
    </div>
  )
}

export default Header