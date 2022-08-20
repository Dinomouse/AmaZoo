import "./learn.css";
import { useEffect, useState } from "react";
import Axios from "axios";

export default function Learn() {
  const [animals, setAnimals] = useState([]);
  const [chosenAnimal, setChosenAnimal] = useState("");
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
    <>
      <div>Learn</div>
      <select name="animals" id="animals" onChange={handleAnimals}>
        <option value="lion">Lion</option>
        <option value="cheetah">Cheetah</option>
        <option value="elephant">Elephant</option>
        <option value="orangutan">Orangutan</option>
        <option value="snake">Snake</option>
        <option value="monkey">Monkey</option>
      </select>
      {animals.map((e) => (
        <div>
          {e.characteristics.biggest_threat === undefined
            ? e.name + "_____No threat"
            : e.name + "_____" + e.characteristics.biggest_threat}
        </div>
      ))}
    </>
  );
}
