import {useRef} from 'react'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

export const useScrollToRef = () => {
  const ref = useRef(null)
  const executeScroll = () => scrollToRef(ref)
  return {executeScroll, ref}
}