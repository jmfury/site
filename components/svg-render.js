import React from "react"
import rehypeReact from "rehype-react"
import MotionGroupComponent from "./motion-components/group"
import MotionPathComponent from "./motion-components/path"
import MotionPolygonComponent from "./motion-components/polygon"
import MotionSvgComponent from "./motion-components/svg"

// @TODO - Consider whether this needs to be a composable function at all
function rehypeReactProcessor({ ast, motionProps }) {
  const svg = ({ ...props }) => (
    <MotionSvgComponent {...props} {...motionProps} />
  )
  const processor = new rehypeReact({
    createElement: React.createElement,
    // @TODO - Consider node/id based context control
    // passNode: true,
    Fragment: React.Fragment,
    components: {
      svg,
      g: MotionGroupComponent,
      head: React.Fragment,
      html: React.Fragment,
      body: React.Fragment,
      path: MotionPathComponent,
      polygon: MotionPolygonComponent,
    },
  }).Compiler

  return processor(ast)
}

export default function SvgRender({ ast }) {
  return rehypeReactProcessor({ ast })
}
