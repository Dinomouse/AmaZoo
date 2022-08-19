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
        <p className="about-container">
          An endangered species is a species that is very likely to become
          extinct in the near future, either worldwide or in a particular
          political jurisdiction. Endangered species may be at risk due to
          factors such as habitat loss, poaching and invasive species. The
          International Union for Conservation of Nature (IUCN) Red List lists
          the global conservation status of many species, and various other
          agencies assess the status of species within particular areas. Many
          nations have laws that protect conservation-reliant species which, for
          example, forbid hunting, restrict land development, or create
          protected areas. Some endangered species are the target of extensive
          conservation efforts such as captive breeding and habitat restoration.
        </p>
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
