const Part = (props) => {
  return (
    <p>{props.part} {props.exercise}</p>
  )
}

const Content = () => {
  return (
    <>
    <Part part='Fundamentals of React' exercise={10} />
    <Part part='Using Props To Pass Data' exercise={7} />
    <Part part='State of a Component' exercise={14} />
    </>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const App = () => {
  // const-definitions
  const course = 'Helsinki'
  return (
    <div>
      <Header course={course} />
      <Content />
      {/* <Total ... /> */}
    </div>
  )
}

export default App