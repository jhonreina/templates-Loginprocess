//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form class="formulario">
            <h1>Trouble logging in?</h1>
            <h2>Enter your email or phone number below</h2>        
           <div class="contenedor">

           <div class="input-contenedor">
               <input type="text" placeholder="Phone or Email"/>                        
           </div> 
            <input type="submit" value="Continue" class="button"/>
            <p><u>don't remember anything :(</u></p>

           </div>           
        </form>
      <div >
        <img src="./img/mujer.jpg" alt="imagen" width="800px"  style="margin: 180px  100px 300px 0px;"/>
     </div>

    </div>
  );
 }
export default App;
