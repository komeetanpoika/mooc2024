const Courses = ({courses}) => {
  console.log({courses})
  const course={courses}
  console.log(course.courses)
  return (
    <>
      {course.courses.map(course =>
      <div key = {course.id}>
        <Course courses={course} />
        </div>
      )}
    </>
  )
}

const Course = (props) => {
  console.log(props)
  const courses = props
  console.log(courses)
  return (
  <div>
    <Header course={courses}/>
    <Content course={courses}/>
  </div>
  )
}
const Header = (props) =>{
  console.log(props.course.courses.name)
  return(
    <h1>{props.course.courses.name}</h1>
  )
}

const Content = ({course}) =>{
  console.log({course})
  const parts=course.courses.parts
  console.log(parts)
  return(
    <>
    {parts.map(part =>
    <Part key={part.id} name={part.name} exercises={part.exercises} />
    )}
    <Total course={course} />
    </>
    
  )
}
const Total = (props) =>{
  console.log(props)
  const parts = props.course.courses.parts
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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Colanjuonti',
          exercises: 20,
          id: 5
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]



return(
  <div>
    <Courses courses={courses}/>
  </div>
 
)

}


export default App
