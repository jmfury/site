import MainLayout from "../layouts/main"
import SvgRender from "../components/svg-render"
import fs from "fs"
import parseSvg from "../lib/parse-svg"
import s from "./index.module.css"

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
        <SvgRender ast={ast} />
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
