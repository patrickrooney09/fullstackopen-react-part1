import Part from "./Part";
function Content(props) {
  return (
    <div>
      {props.parts.map((currentPart, index) => {
        return (
          <Part
            part={currentPart.name}
            exercises={currentPart.exercises}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Content;
