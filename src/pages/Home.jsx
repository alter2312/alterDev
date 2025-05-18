import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Session } from "../components/section";
import Presentacion from "../components/presentacion.jsx";
import { CardPlan } from "../components/ui/card/cardPlan.jsx";
import { CardProyect } from "../components/ui/card/cardProyect.jsx";
import { CardText } from "../components/ui/card/CardText.jsx";
import { CardSkill } from "../components/ui/card/cardSkill.jsx";
import { Myprofile } from "../components/presentacion.jsx";
import { Contact } from "../components/ui/form/contact.jsx";
import { ScrollReveal } from "../animation/ScrollReveal .jsx";
import plans from "../data/plans.js";
import projects from "../data/proyects.js";
import imgYo from "../assets/img/img-yo.png";
function Home() {
  const contentTextCard =
    "This portfolio showcases various projects and skills, highlighting creativity and technical expertise. Each section is thoughtfully designed to provide a seamless user experience and demonstrate proficiency in modern web development techniques.";
  const titleTextCard = "Resumen";

  return (
    <>
      <ScrollReveal delay={0.2} direction="donw">
        <Header />
      </ScrollReveal>
      <ScrollReveal delay={0.5} direction="up">
        <Presentacion name="Alter" />
      </ScrollReveal>
      <ScrollReveal delay={0.5} direction="right">
        <Session nameSection="about" title="Sobre Mí">
          <section className="flex justify-evenly items-center w-full h-5/6">
            <CardText textCard={contentTextCard} titleCard={titleTextCard} />
            <Myprofile url={imgYo} />
          </section>
        </Session>
      </ScrollReveal>
      <ScrollReveal delay={0.5} direction="left">
        <Session nameSection="skills" title="Habilidades">
          <section className="w-4/5 h-5/6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 place-items-center gap-8 pb-10 box-border">
            <ScrollReveal delay={0.1}>
              <CardSkill skill="HTML" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <CardSkill skill="CSS" />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <CardSkill skill="JavaScript" />
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <CardSkill skill="React" />
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <CardSkill skill="Git" />
            </ScrollReveal>
            <ScrollReveal delay={0.6}>
              <CardSkill skill="Tailwind CSS" />
            </ScrollReveal>
            <ScrollReveal delay={0.7}>
              <CardSkill skill="SQL" />
            </ScrollReveal>
          </section>
        </Session>
      </ScrollReveal>
      <ScrollReveal delay={0.5} direction="down">
        <Session nameSection="projects" title="Proyectos" bg="bg-neutral-950">
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <CardProyect
                key={index}
                nameImg={project.nameImg}
                title={project.title}
                contentText={project.contentText}
                urlCodigo={project.urlCodigo}
                urlProyecto={project.urlProyecto}
              />
            ))}
          </section>
        </Session>
      </ScrollReveal>
      <ScrollReveal delay={0.5} direction="up">
        <Session title={"Trabajemos Juntos"} bg="bg-neutral-950">
          <section className="w-4/5 h-5/6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 pb-10 box-border">
            {plans.map((plan, index) => (
              <CardPlan
                key={index}
                price={plan.price}
                features={plan.features}
                buttonText={plan.buttonText}
                onButtonClick={plan.onButtonClick}
              />
            ))}
          </section>
        </Session>
      </ScrollReveal>
      <ScrollReveal delay={0.5} direction="left">
        <Session nameSection="contact" title="Contacto">
          <section className="w-4/5 h-5/6 flex justify-center items-center gap-8 pb-10 box-border">
            <Contact />
          </section>
        </Session>
      </ScrollReveal>
      <ScrollReveal delay={0.5} direction="up">
        <Footer />
      </ScrollReveal>
    </>
  );
}
export default Home;
