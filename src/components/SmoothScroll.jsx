import { ReactLenis } from "@studio-freight/react-lenis";

const SmoothScroll = ({children}) => {
  return (
    <ReactLenis root options={{lerp: 0.06, duration: 1.2, smoothTouch: true}}>
        {children}
    </ReactLenis>
  )
}

export default SmoothScroll;
