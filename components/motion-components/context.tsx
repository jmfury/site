import { AnimationProps, MotionProps } from "framer-motion"
import { createContext, ReactNode, useContext } from "react"

export const MotionSvgContext = createContext({})

interface MotionSvgContextProviderProps {
  value: SvgMotionConfig
  children?: ReactNode | ReactNode[]
}

interface SvgMotionConfig {
  [x: string]: AnimationProps | MotionProps
}

export function MotionSvgContextProvider({
  value,
  children,
}: MotionSvgContextProviderProps) {
  return (
    <MotionSvgContext.Provider value={value}>
      {children}
    </MotionSvgContext.Provider>
  )
}

export const useMotionSvgContext = () => useContext(MotionSvgContext)
