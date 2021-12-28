import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,

} from "reactstrap";


const pageNotFound = () => {
  return (
    <div>
    <Card
    >
      <CardBody>
        <CardTitle className="text-center text-dark"  tag="h2">
          Naim Gitfire App
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted text-center"
          tag="h6"
        >
          This a React based web App.
        </CardSubtitle>
        <CardText className="text-center text-dark" tag="h3">
         <p>This is React based web Application with all the functionality of authentication thas is done using firebase .Here user can make a new account on clicking on the signup option and if he/she already have an account then he/she can signin clicking on the signin option mentioned in the navbar.</p>

         <p>
           After signing in  user can explore a search bar that can search the user on githu with there respective github name and they can find out the various information regarding the gthub account of the user .
         </p>
        </CardText>
        
      </CardBody>
    </Card>
  </div>
  );
};

export default pageNotFound;
