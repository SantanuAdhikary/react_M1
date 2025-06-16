import React, { Fragment } from "react";
import Card from "./components/Card";
import About from "./components/About";

const App = () => {
  return (
    <>

     <div className="outer">
        <Card
          productName={"mobile"}
          price={40000}
          imageSrc={
            "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
        <Card
          productName={"laptop"}
          price={50000}
          imageSrc={
            "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
        <Card
          productName={"camera"}
          price={35000}
          imageSrc={
            "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
      </div>


      <About/>
        
    </>
  );
};

export default App;
