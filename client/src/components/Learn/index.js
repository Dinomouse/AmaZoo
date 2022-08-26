import "./learn.css";
import { useEffect, useState } from "react";
import Axios from "axios";

export default function Learn() {
  const [animals, setAnimals] = useState([]);
  const [chosenAnimal, setChosenAnimal] = useState("Lion");
  console.log(process.env.REACT_APP_ANIMALKEY);
  useEffect(() => {
    async function getAnimals() {
      const res = await Axios.get(
        `https://api.api-ninjas.com/v1/animals?name=${chosenAnimal}`,
        {
          headers: {
            "x-api-key": process.env.REACT_APP_ANIMALKEY,
          },
        }
      );

      const data = await res.data;
      setAnimals(data);
    }
    getAnimals();
  }, [chosenAnimal]);

  function handleAnimals(e) {
    setChosenAnimal(e.target.value);
  }

  return (
    <div className="Learn-Page-Container">
      <select name="animals" id="animals" onChange={handleAnimals}>
        <option value="lion">Lion</option>
        <option value="cheetah">Cheetah</option>
        <option value="elephant">Elephant</option>
        <option value="kangaroo">Kangaroo</option>

        <option value="monkey">Monkey</option>
      </select>
      <div className="learn-scroll-container">
        {animals.map((e) => (
          <div className="learn-container">
            {e.characteristics.biggest_threat === undefined ? (
              <div className="learn-item">
                {e.name} <span className="learn-span">No threat</span>
              </div>
            ) : (
              <div className="learn-item">
                {e.name}{" "}
                <span className="learn-span">
                  {e.characteristics.biggest_threat}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
