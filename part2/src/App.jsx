const Header = (props) =>{
  return(
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) =>{
  console.log(props.course.parts)
  const parts=props.course.parts
  return(
    <>
    {parts.map(part =>
    <Part key={part.id} name={part.name} exercises={part.exercises} />
    )}
    </>
    
  )
}
const Total = (props) =>{
  const parts = props.course.parts
  console.log(parts)
  const sum = parts.map(exercises=>exercises)
  console.log(sum)
  return(

    <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
  )
}
const Part = (props) =>{
  return(
    <p>{props.name} {props.exercises}</p>
  )
}
const App = () =>{
const course =
{ 
  name: "Half Stack application development",
  id:1,
  parts: [
    {
      name: 'Fundamentals of React', 
      exercises: 10,
      id: 1
    },
    {
      name: 'Using props to pass data', 
      exercises: 7,
      id: 2
    },
    {
      name: 'State of a component', 
      exercises: 14,
      id: 3
    }
  ]
}




return(
  <div>
    <Header course={course} />
    <Content course={course}/>
    <Total course={course} />
  </div>
 
)

}


export default App
