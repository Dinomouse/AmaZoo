import "./search.css";
import elephant from "../../images/Elephant_1_.svg";
import kangaroo from "../../images/kangaroo-svgrepo-com (1) 1.svg";
import orangutan from "../../images/orangutan.svg";
import leopard from "../../images/leopard.svg";

function Search({ animalClick }) {
  return (
    <div className="search-page">
      <div className="search-container">
        <div className="animal-container elephant-card">
          <h3 className="animal-title">Elephant</h3>
          <div className="image-text">
            <object
              type={"image/svg+xml"}
              data={elephant}
              className="elephant"
              aria-label="elephant"
            ></object>
            <p className="elephant-text">
              Elephants are the largest land mammals on earth and have
              distinctly massive bodies, large ears, and long trunks.
            </p>
          </div>
          <button
            className="animal-button"
            onClick={() => {
              animalClick("Elephant", 20, "1 month");
            }}
          >
            Bronze
          </button>
          <button
            className="animal-button-mid"
            onClick={() => {
              animalClick("Elephant", 50, "1 year");
            }}
          >
            Silver
          </button>
          <button
            className="animal-button-end"
            onClick={() => {
              animalClick("Elephant", 100, "5 years");
            }}
          >
            Gold
          </button>
        </div>
        <div className="animal-container">
          <h3 className="animal-title">Kangaroo</h3>
          <div className="image-text">
            <object
              type={"image/svg+xml"}
              data={kangaroo}
              className="kangaroo"
              aria-label="kangaroo"
            ></object>
            <p className="elephant-text">
              Kangaroos are marsupials that are native to Australia. They are
              known for their pouches and strong hind legs.{" "}
            </p>
          </div>
          <button
            className="animal-button"
            onClick={() => {
              animalClick("Kangaroo", 10, "1 month");
            }}
          >
            Bronze
          </button>
          <button
            className="animal-button-mid"
            onClick={() => {
              animalClick("Kangaroo", 20, "1 year");
            }}
          >
            Silver
          </button>
          <button
            className="animal-button-end"
            onClick={() => {
              animalClick("Kangaroo", 50, "5 years");
            }}
          >
            Gold
          </button>
        </div>
        <div className="animal-container">
          <h3 className="animal-title">Orangutan</h3>
          <div className="image-text">
            <object
              type={"image/svg+xml"}
              data={orangutan}
              className="orangutan"
              aria-label="orangutan"
            ></object>
            <p className="elephant-text">
              Known for their distinctive red fur, orangutans are the largest
              arboreal mammal, spending most of their time in trees.
            </p>
          </div>

          <button
            className="animal-button"
            onClick={() => {
              animalClick("Orangutan", 100, "1 month");
            }}
          >
            Bronze
          </button>
          <button
            className="animal-button-mid"
            onClick={() => {
              animalClick("Orangutan", 200, "1 year");
            }}
          >
            Silver
          </button>
          <button
            className="animal-button-end"
            onClick={() => {
              animalClick("Orangutan", 500, "5 years");
            }}
          >
            Gold
          </button>
        </div>
        <div className="animal-container">
          <h3 className="animal-title">Leopard</h3>
          <div className="image-text">
            <object
              type={"image/svg+xml"}
              data={leopard}
              className="leopard"
              aria-label="leopard"
            ></object>
            <p className="elephant-text">
              The leopard is solitary and mainly nocturnal. An agile climber, it
              frequently climbs around in tree branches.
            </p>
          </div>

          <button
            className="animal-button"
            onClick={() => {
              animalClick("Leopard", 5, "1 month");
            }}
          >
            Bronze
          </button>
          <button
            className="animal-button-mid"
            onClick={() => {
              animalClick("Leopard", 10, "1 year");
            }}
          >
            Silver
          </button>
          <button
            className="animal-button-end"
            onClick={() => {
              animalClick("Leopard", 100, "5 years");
            }}
          >
            Gold
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
