import "./search.css";
import elephant from "../../images/Elephant_1_.svg";
import kangaroo from "../../images/kangaroo-svgrepo-com (1) 1.svg";
import orangutan from "../../images/orangutan.svg";
import leopard from "../../images/leopard.svg";

function Search({ animalClick }) {
  return (
    <div className="search-container">
      <div className="animal-container">
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
            animalClick("Elephant");
          }}
        >
          1 month
        </button>
        <button
          className="animal-button-mid"
          onClick={() => {
            animalClick("Elephant");
          }}
        >
          1 year
        </button>
        <button
          className="animal-button-end"
          onClick={() => {
            animalClick("Elephant");
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
            animalClick("Kangaroo");
          }}
        >
          1 month
        </button>
        <button
          className="animal-button-mid"
          onClick={() => {
            animalClick("Kangaroo");
          }}
        >
          1 year
        </button>
        <button
          className="animal-button-end"
          onClick={() => {
            animalClick("Kangaroo");
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
            animalClick("Orangutan");
          }}
        >
          1 month
        </button>
        <button
          className="animal-button-mid"
          onClick={() => {
            animalClick("Orangutan");
          }}
        >
          1 year
        </button>
        <button
          className="animal-button-end"
          onClick={() => {
            animalClick("Orangutan");
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
            animalClick("Leopard");
          }}
        >
          1 month
        </button>
        <button
          className="animal-button-mid"
          onClick={() => {
            animalClick("Leopard");
          }}
        >
          1 year
        </button>
        <button
          className="animal-button-end"
          onClick={() => {
            animalClick("Leopard");
          }}
        >
          5 years
        </button>
      </div>
    </div>
  );
}

export default Search;
