const Course = (props) => {
  const courses = props
  console.log(courses)
  return (
  <div>
    <Header course={courses}/>
    <Content course={courses}/>
    <Total course={courses}/>
  </div>
  )
}
const Header = (props) =>{
  console.log(props.course.course.name)
  return(
    <h1>{props.course.course.name}</h1>
  )
}

const Content = (props) =>{
  console.log(props.course.course.parts)
  const parts=props.course.course.parts
  return(
    <>
    {parts.map(part =>
    <Part key={part.id} name={part.name} exercises={part.exercises} />
    )}
    </>
    
  )
}
const Total = (props) =>{
  const parts = props.course.course.parts
  console.log(parts)
  const sumArray = parts.map((exercise) => exercise.exercises)
  console.log(sumArray)
  const initialValue = 0;
  const sumWithInitial = sumArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
  return(

    <p>Number of exercises {sumWithInitial}</p>
  )
}
const Part = (props) =>{
  return(
    <p>{props.name} {props.exercises}</p>
  )
}
const App = () =>{
const courses =
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
    },
    {
      name: 'Redux', 
      exercises: 11,
      id: 4
    }
  ]
}




return(
  <div>
    <Course key={courses.id} course={courses} />
  </div>
 
)

}


export default App
