function Car(props){
  return (
    <h1>My name is {props.brand}</h1>
  )
}


function Garage(){
  return (
    <>
    <h1>Who lives in Garage</h1>
    <Car brand='Mercedes'/>
    </>
  )
}

export default Garage;

