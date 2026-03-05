# react4
- Creating react using vite

            npm install -g  create-vite

- Next create an application

            '''' 
            npm create vite@latest my-react-app -- --template react 
            ''''

- If you get a message press y to mean yes. use vite experimentally but do not install npm yet

- Sfter this install the dependancy go inside the react app 
            
            '''
             cd my-react-app 
             ''' 

- Run npm iside 
            
            ''' 
            npm install 
            ''' 
- If you find 0 vulnerability continue

            ''' 
            npm run dev 
            ''' 
            
- This takes us to the react and vite intro portal

***Class***

- When creating a React component, the component's name must start with an upper case letter.

- The component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.

- The component also requires a render() method, this method returns HTML.

            class Car extends React.Component {
            render() {
                return <h2>Hi, I am a Car!</h2>;
            }
            }

            createRoot(document.getElementById('root')).render(
            <Car />
            );

- If there is a constructor() function in your component, this function will be called when the component gets initiated.

                    class Car extends React.Component {
                    constructor() {
                        super();
                        this.state = {color: "red"};
                    }
                    render() {
                        return <h2>I am a Car!</h2>;
                    }
                    }
  

  - Another way of handling component properties is by using props.

                class Car extends React.Component {
                render() {
                    return <h2>I am a {this.props.color} Car!</h2>;
                }
                }

                createRoot(document.getElementById('root')).render(
                <Car color="red"/>
                );

- If your component has a constructor function, the props should always be passed to the constructor and also to the React.Component via the super() method.

                ````
                class Car extends React.Component {
                constructor(props) {
                    super(props);
                }
                render() {
                    return <h2>I am a {this.props.model}!</h2>;
                }
                }

                createRoot(document.getElementById('root')).render(
                <Car model="Mustang"/>
                );
                ````

- The state object is where you store property values that belongs to the component.

```
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
      </div>
    );
  }
}
```

- To change a value in the state object, use the this.setState() method.

```
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}               
```

*Lifecycle of Components*

- Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

- The three phases are: Mounting, Updating, and Unmounting.

- Mounting
Mounting means putting elements into the DOM.

React has four built-in methods that gets called, in this order, when mounting a component:

constructor() --> The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.

getDerivedStateFromProps() --> The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM

render() -->The render() method is required, and is the method that actually outputs the HTML to the DOM.

componentDidMount() --> The componentDidMount() method is called after the component is rendered.

shouldComponentUpdate --> In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.

getSnapshotBeforeUpdate --> In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.

****props****

- Props are arguments passed into React components

````
import { createRoot } from 'react-dom/client'

function Car(myobj) {
  return (
    <h2>I am a {myobj.brand}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" />
);

````

- You can send as many properties as you want.

```
import { createRoot } from 'react-dom/client'

function Car(props) {
  return (
    <h2>I am a {props.color} {props.brand} {props.model}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" model="Mustang" color="red" />
);
```

- React props can be of any data type, including variables, numbers, strings, objects, arrays, and more.

```
import { createRoot } from 'react-dom/client'

function Car(props) {
  return (
    <h2>The car is from {props.year}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car year={1969} />
);
```

```
import { createRoot } from 'react-dom/client'

function Car(props) {
  return (
    <>
      <h2>My favorite car is a {props.carinfo.name} {props.carinfo.model}!</h2>
      <p>But it has to from {props.years[0]}, {props.years[1]}, or {props.years[2]}.</p>
    </>
  );
}

let x = [1964, 1965, 1966];
let y = {name: "Ford", model: "Mustang"};

createRoot(document.getElementById('root')).render(
  <Car years={x} carinfo={y} />
);

```

- The component treats objects like objects, and you can use the dot notation to access the properties.

```
import { createRoot } from 'react-dom/client'

function Car(props) {
  return (
    <>
      <h2>My {props.carinfo.name} {props.carinfo.model}!</h2>
      <p>It is {props.carinfo.color} and it is from {props.carinfo.year}!</p>
    </>
  );
}

const carInfo = {
  name: "Ford",
  model: "Mustang",
  color: "red",
  year: 1969
};

createRoot(document.getElementById('root')).render(
  <Car carinfo={carInfo} />
);

```

- Array props can be accessed using the indexes.

```
import { createRoot } from 'react-dom/client'

function Car(props) {
  return (
    <h2>My car is a {props.carinfo[0]} {props.carinfo[1]}!</h2>
  );
}

const carInfo = ["Ford", "Mustang"];

createRoot(document.getElementById('root')).render(
  <Car carinfo={carInfo} />
);

```

- Attributes are also how you pass data from one component to another, as parameters.    

```
import { createRoot } from 'react-dom/client'

function Car(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Garage />
);

```

**Destructing props**

- You can limit the properties a component receives by using destructuring.

```
function Car({color}) {
  return (
    <h2>My car is {color}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" model="Mustang" color="red" year={1969} />
);
```

-You can also destruct the properties you need inside the component.

```
function Car(props) {
  const {brand, model} = props;
  return (
    <h2>I love my {brand} {model}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" model="Mustang" color="red" year={1969} />
);

```

- When you don't know how many properties you will receive, you can use the ...rest operator.
```
function Car({color, brand, ...rest}) {
  return (
    <h2>My {brand} {rest.model} is {color}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" model="Mustang" color="red" year={1969} />
  ```

- With Destructuring, you can set default values for props. If a property has no value, the default value will be used.
```
function Car({color = "blue", brand}) {
  return (
    <h2>My {color} {brand}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" />
);
```

**Prop Children**

- You can send the content between the opening and closing tags of a component, to another component. This can be accessed in the other component using the props.children property.
```
Result Size: 620 x 689
main.jsxindex.html 
import { createRoot } from 'react-dom/client'

function Son(props) {
  return (
    <div style={{background: 'lightgreen'}}>
      <h2>Son</h2>
      <div>{props.children}</div>
    </div>
  );
}

function Daughter(props) {
  const {brand, model} = props;
  return (
    <div style={{background: 'lightblue'}}>
      <h2>Daughter</h2>
      <div>{props.children}</div>
    </div>
  );
}

function Parent() {
  return (
    <div>
      <h1>My two Children</h1>
      <Son>
        <p>
          This was written in the Parent component,
          but displayed as a part of the Son component
        </p>
      </Son>
      <Daughter>
        <p>
          This was written in the Parent component,
          but displayed as a part of the Daughter component
        </p>
      </Daughter>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <Parent />
);

```

