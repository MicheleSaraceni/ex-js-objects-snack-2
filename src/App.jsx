
export default function App() {

  //-------------------------------------------------------------------------------- SNACK 1
  /*  
  const hamburger = { name: "Cheese Burger", weight: 250 };
  const secondBurger = hamburger;
  secondBurger.name = 'Double Cheese Burger';
  secondBurger.weight = 500;

  console.log(hamburger.name); // Double Cheese Burger
  console.log(secondBurger.name);  // Double Cheese Burger
  //Un solo oggetto, hamburger e secondburger puntano allo stesso oggetto in memoria
  */

  //-------------------------------------------------------------------------------- SNACK 2
  const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
  };

  const secondBurger = { ...hamburger };
  secondBurger.ingredients[0] = "Salad";

  console.log(hamburger.ingredients[0]); // Salad
  console.log(secondBurger.ingredients[0]); // Salad
  //sono stati creati 2 oggetti, uno è hamburger e uno è secondBurger


}


