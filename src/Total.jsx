function Total(props) {
  return (
    <div>
      Number of exercises{" "}
      {props.parts.reduce(
        (acc, currentValue) => acc + currentValue.exercises,
        0
      )}
    </div>
  );
}

export default Total;
