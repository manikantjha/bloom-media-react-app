import Hero from "../components/common/Hero";
// import Details from "../components/about/Details";
import Team from "../components/about/Team";
import AboutDetails from "../components/common/About";

export default function About() {
  return (
    <div>
      <Hero
        heroImg="https://images.unsplash.com/photo-1607004468138-e7e23ea26947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        heroTitle="Hello!"
        heroDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dolor sequi distinctio dicta sit cupiditate voluptatem quis ipsam vel dolores. Harum dolor sequi distinctio dicta sit cupiditate voluptatem quis ipsam vel dolores."
        btnText="Lets Talk"
      />
      <AboutDetails
        aboutTitle="About Bloom Media"
        aboutShortDescription="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, ea?"
        aboutDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur inventore sint animi porro sed perferendis, cupiditate, autem assumenda quo enim, adipisci praesentium. Vitae, maxime fugiat. Eum explicabo ullam, a animi ut repudiandae debitis odio! Impedit maxime necessitatibus dolor ullam ipsum error expedita aut quia, sapiente optio nesciunt ipsam iure quis."
      />

      <Team />
    </div>
  );
}
