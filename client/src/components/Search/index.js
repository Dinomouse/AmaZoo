import "./search.css";
import elephant from "../../images/Elephant_1_.svg";
import kangaroo from "../../images/kangaroo-svgrepo-com (1) 1.svg";
import orangutan from "../../images/orangutan.svg";
import leopard from "../../images/leopard.svg";

function Search({ animalClick }) {
  return (
    <div className="search-container">
      <div className="scroll-container">
        <div className="animal-container elephant-card">
          <h2 className="animal-title">Elephant</h2>
          <object
            type={"image/svg+xml"}
            data={elephant}
            className="elephant"
            aria-label="elephant"
          ></object>
          <button
            className="animal-button"
            onClick={() => {
              animalClick("Elephant", 20, "1 month");
            }}
          >
            1 month
          </button>
          <button
            className="animal-button-mid"
            onClick={() => {
              animalClick("Elephant", 50, "1 year");
            }}
          >
            1 year
          </button>
          <button
            className="animal-button-end"
            onClick={() => {
              animalClick("Elephant", 100, "5 years");
            }}
          >
            5 years
          </button>
        </div>
        <div className="animal-container">
          <h2 className="animal-title">Kangaroo</h2>
          <object
            type={"image/svg+xml"}
            data={kangaroo}
            className="kangaroo"
            aria-label="kangaroo"
          ></object>
          <button
            className="animal-button"
            onClick={() => {
              animalClick("Kangaroo", 10, "1 month");
            }}
          >
            1 month
          </button>
          <button
            className="animal-button-mid"
            onClick={() => {
              animalClick("Kangaroo", 20, "1 year");
            }}
          >
            1 year
          </button>
          <button
            className="animal-button-end"
            onClick={() => {
              animalClick("Kangaroo", 50, "5 years");
            }}
          >
            5 years
          </button>
        </div>
        <div className="animal-container">
          <h2 className="animal-title">Orangutan</h2>
          <object
            type={"image/svg+xml"}
            data={orangutan}
            className="orangutan"
            aria-label="orangutan"
          ></object>
          <button
            className="animal-button"
            onClick={() => {
              animalClick("Orangutan", 100, "1 month");
            }}
          >
            1 month
          </button>
          <button
            className="animal-button-mid"
            onClick={() => {
              animalClick("Orangutan", 200, "1 year");
            }}
          >
            1 year
          </button>
          <button
            className="animal-button-end"
            onClick={() => {
              animalClick("Orangutan", 500, "5 years");
            }}
          >
            5 years
          </button>
        </div>
        <div className="animal-container">
          <h2 className="animal-title">Leopard</h2>
          <object
            type={"image/svg+xml"}
            data={leopard}
            className="leopard"
            aria-label="leopard"
          ></object>
          <button
            className="animal-button"
            onClick={() => {
              animalClick("Leopard", 5, "1 month");
            }}
          >
            1 month
          </button>
          <button
            className="animal-button-mid"
            onClick={() => {
              animalClick("Leopard", 10, "1 year");
            }}
          >
            1 year
          </button>
          <button
            className="animal-button-end"
            onClick={() => {
              animalClick("Leopard", 100, "5 years");
            }}
          >
            5 years
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
