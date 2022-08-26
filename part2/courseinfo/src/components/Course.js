import { useReducer } from "react"

const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  return(
    <div>
        {parts.map(part => {
            return <Part key={part.id} part={part} />
        })}
    </div>
  )
}

const Course = function ({course}) {

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total sum={course.parts.reduce(function(sum,part) {
                return sum += part.exercises
            },0)} />
        </div>
    );
}

export default Course;

