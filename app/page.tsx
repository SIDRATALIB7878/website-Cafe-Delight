import Hero from "@/components/hero"
import About from "@/components/about"
import Menu from "@/components/menu"
import Blogs from "@/components/blogs"
import Services from "@/components/services"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Menu />
      <Blogs />
      <Services />
      <Contact />
    </main>
  )
}
