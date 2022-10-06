import './App.css';
// import MyComponent from './components/Greet';
// import Hello from './components/Hello';
//  import Welcome from './components/Welcome';
// import Greet from './components/Greet';
// import Message from './components/Message';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
         <Counter />
      {/* <Message/> */}
       {/* <MyComponent></MyComponent>
       <Welcome/>
       <Hello/> */}
       {/* <Greet name="Rupali" heroName="Wonder Woman"> 
        <p>This is children props</p></Greet> 
       <Greet name="Snehal" heroName="Super Woman">
        <button>Smile Please</button></Greet>
       <Greet name="Shruti" heroName="Best Woman"/>

       <Welcome name="Rupali" heroName="Wonder Woman">
       <p>This is children props</p></Welcome>
       <Welcome name="Snehal" heroName="Super Woman">
       <button>Smile Please</button></Welcome>
       <Welcome name="Shruti" heroName="Best Woman"/> */}
    </div>
  );
}

export default App;
