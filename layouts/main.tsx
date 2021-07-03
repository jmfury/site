import Container from "../components/container"
import Footer from "../components/footer"
import s from "./style.module.css"

export default function MainLayout({ children, footerLinks }) {
  return (
    <Container>
      <main className={s.mainLayout}>
        {children}
        <Footer links={footerLinks} />
      </main>
    </Container>
  )
}
