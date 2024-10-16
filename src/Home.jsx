// components
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import StickySection from "./components/StickySection";
import Projects from "./components/Projects";

function Home() {
  return (
    <div className="lg:pb-[4vw]">
      <Header />
      <main>
        <AboutMe />
        <StickySection />
        <section
          className="flex items-center justify-center text-center my-16 mx-4 lg:my-[10vw]"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <p className="text-[#696667] text-[1.1rem] md:w-[50vw] lg:w-[40vw] italic lg:text-[2vw]">
            Estou sempre aberta a novos desafios que possam expandir meus
            conhecimentos e habilidades, tanto no design quanto na fotografia.
          </p>
        </section>
        <Projects />
      </main>
    </div>
  );
}

export default Home;
