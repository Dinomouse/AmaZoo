import "./about.css";
import Arian from "../Arian";

export default function AboutPage() {
  return (
    <div className="about-page-container">
      <div className="about-scroll-container">
        <h2>About</h2>
        <p className="about-container">
          AmaZoo is an application designed to enable people to easily sponsor
          different endangered animals, track their sponsorships and learn about
          how they can help protect endangered species
        </p>
        <h2>Endangered Animals</h2>
        <p className="about-container">text about animals</p>
        <h2>Who designed this?</h2>
        <p className="about-me-container">
          I'm Arian. I am currently an aspiring software developer who has just
          finished studying at the School of Code.
          <br /> Click below to see my GitHub:
        </p>
        <Arian />
      </div>
    </div>
  );
}
