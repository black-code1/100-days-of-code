const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line
ReactDOM.render(JSX, document.getElementById("challenge-node"));

/*const JSX = (
    <div>
      
      <h2>Welcome to React!</h2> <br />
      <p>Be sure to close all tags!</p>
      <hr />
     
    </div>
  );
  
  const MyComponent = function() {
  // change code below this line

return (
    <div>some text</div>
  );

  // change code above this line
}
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
      
        <ChildComponent/>

      </div>
    );
  }
};
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      
<TypesOfFruit/>
      
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
       
<Fruits/>
   
      </div>
    );
  }
};

class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        
<NonCitrus/>
<Citrus/>
        
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
     
<Fruits/>
       
        <Vegetables />
      </div>
    );
  }
};


class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
<Fruits/>
<Vegetables/>
      </div>
    );
  }
};

ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'))

class MyComponent extends React.Component{
      constructor(props) {
    super(props);
  }
    render(){
        return (
        <div>
            <h1>My First React Component!</h1>
        </div>
    );
}}

ReactDOM.render(<MyComponent/>,document.getElementById('challenge-node'))
  */
