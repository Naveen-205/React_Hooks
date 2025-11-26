import Child from "./Child";

const Parent = () => {
  
  const name = "Naveen";       // string
  const age = 20;                  // number
  const drinks = ["Maaza", "Fanta", "Sprite"]; // array
  const students = [                 // array of objects
    { name: "Ajay", mark: 70 },
    { name: "Kumar", mark: 60 },
    { name: "Abi", mark:80}
  ];

  return (
    <div>
      <Child 
        name={name}
        age={age}
        drinks={drinks}
        students={students}
      />
    </div>
  );
};

export default Parent;