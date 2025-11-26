const Child = ({ name, age, drinks, students }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>

      <h2>Drinks:</h2>
      {drinks.map((d, i) => (
        <p key={i}>{d}</p>
      ))}

      <h2>Students:</h2>
      {students.map((s, i) => (
        <p key={i}>{s.name} - {s.mark}</p>
      ))}
    </div>
  );
};

export default Child;