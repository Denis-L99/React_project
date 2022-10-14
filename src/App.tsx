import React from 'react'

// React Element with JSX
// const title = <h1>Hello React.js </h1>

// const title = React.createElement("h1",null,"React")

// const list = (
//   <ul>
//     <li>list item 1</li>
//     <li>list item 2</li>
//     <li>list item 3</li>
//   </ul>
// )

// React Component 
type TitleProps = {
  title: string
  text?: string
  num: number
}

const Title = (props: TitleProps) => {
  console.log(props)
  return (
    <>
    <h1>
    {props.text}
    {props.title}
   </h1>
   <div>
      {props.num}
   </div>
   </>
  )
} 

const List = () => {
  let a = 10
  return (
    <React.Fragment>
  <ul>
    <li>list item {a + 1}</li>
    <li>list item 2</li>
    <li>list item 3</li>
  </ul>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, voluptatum corrupti, consequuntur unde distinctio animi earum dolorem quae fugiat, sapiente reiciendis. Aspernatur facere laboriosam incidunt cupiditate tenetur labore mollitia possimus.</p>
    </React.Fragment>
  )
}

function App() {
    return (
    <div className="App">
      <Title title="App.js" text="Hi" num={15} />
      <Title title="Test.js" text="Hello" num={20} />
       <List/>
        {10 + 5}
        </div>
           ) 
}

export default App
