const fruit = [
  { name: 'apple', price: 180 },
  { name: 'banana', price: 230 },
  { name: 'lemon', price: 200 },
  { name: 'peach', price: 480 },
  { name: 'kiwi', price: 80 },
  { name: 'mango', price: 680 }
];

const text = document.getElementById("name");

const btn = document.getElementById("btn");

const out = document.getElementById("out");

const fruitName = fruit.map(e => e);

// console.log(fruitName[1].name);

btn.addEventListener("click" , () => {
  let result = fruitName.find( value => value.name == text.value);
  console.log(result);
  out.insertAdjacentHTML("beforeend" , `${result.name}:価格は${result.price}円です`)
});