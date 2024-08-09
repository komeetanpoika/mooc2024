const Header = (props) =>{
  return(
    <h1>{props.header}</h1>
  )
}
const Content = (props) =>{
  console.log(props)
  return(
    <>
    <Part name={props.content[0].name} exercises={props.content[0].exercises}/>
    <Part name={props.content[1].name} exercises={props.content[1].exercises}/>
    <Part name={props.content[2].name} exercises={props.content[2].exercises}/>
    </>
  )
}
const Total = (props) =>{
  return(

    <p>Number of exercises {props.sum[0].exercises + props.sum[1].exercises + props.sum[2].exercises}</p>
  )
}
const Part = (props) =>{
  return(
    <p>{props.name} {props.exercises}</p>
  )
}
const App = () =>{
const course = "Half Stack application development"
const parts = [
  {name: 'Fundamentals of React', exercises: 10},
  {name: 'Using props to pass data', exercises: 7},
  {name: 'State of a component', exercises: 14}
]




return(
  <div>
    <Header header={course} />
    <Content content={parts}/>
    <Total sum={parts} />
  </div>
)
}


export default App
