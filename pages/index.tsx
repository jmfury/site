import MainLayout from "../layouts/main"
import SvgRender from "../components/svg-render"
import fs from "fs"
import parseSvg from "../lib/parse-svg"
import s from "./index.module.css"
import { MotionSvgContextProvider } from "../components/motion-components/context"

export default function Page({ ast }) {
  if (!ast) return <div>Hi</div>
  return (
    <MainLayout
      footerLinks={[
        { text: "GitHub", url: "https://github.com/jmfury" },
        { text: "Twitter", url: "https://twitter.com/jimmymerritello" },
        { text: "LinkedIn", url: "https://linkedin.com/in/jimmymerritello" },
      ]}
    >
      <section className={s.content}>
        <MotionSvgContextProvider
          value={{
            polygon: {
              initial: "initial",
              animate: "animate",
              transition: {
                duration: 2.4,
                repeatType: "reverse",
                repeat: Infinity,
                repeatDelay: 1,
              },
              variants: {
                initial: {
                  opacity: 0,
                  clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)",
                },
                animate: {
                  opacity: 0.55,
                  clipPath: "polygon(0% 0%, 100% 1%, 100% 100%, 0 100%)",
                },
              },
            },
            g: {
              initial: "initial",
              animate: "animate",
              variants: {
                animate: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.5,
                  },
                },
              },
            },
          }}
        >
          <SvgRender ast={ast} />
        </MotionSvgContextProvider>

        <h1 className={s.heading}>Jimmy Merritello</h1>
      </section>
    </MainLayout>
  )
}

export async function getStaticProps() {
  const code = fs
    .readFileSync(`${process.cwd()}/assets/noun_coffee.svg`)
    .toString()

  const ast = parseSvg(code)
  return {
    props: {
      ast,
    },
  }
}
