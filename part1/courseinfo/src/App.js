const Total = (props) => {
  let total = 0
  props.parts.forEach(element => {
    total += element.exercises
  })
  return (
    <>
    <p>{total}</p>
    </>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercise}</p>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercise} />
      <Part part={props.parts[1].name} exercise={props.parts[1].exercise} />
      <Part part={props.parts[2].name} exercise={props.parts[2].exercise} />
    </>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const parts = [{
    name: 'Fundamentals of React',
    exercises: 10
  }, {
    name: 'Using props to pass data',
    exercises: 7
  }, {
    name: 'State of a component',
    exercises: 14
  }]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App