import React from "react";
import { NavLink } from "react-router-dom";
import { Card, CardText, CardBody } from "reactstrap";
import Grid from "@material-ui/core/Grid";
import Banner from 'react-js-banner';
const Details = (props) => {
  const { username, email, city, phone } =
    (props.location && props.location.state) || {};

  return (
    <div>
      <div className="form-details">

         <Banner>
   <h2>E Learning Website</h2>{"     "}
   <NavLink to="/" activeClassName="active">
          Logout
        </NavLink>
   </Banner>
       <img url="angular.jpg" alt="Angular Course"/>
        <Card>
          <CardBody>
            <CardText>Welcome : {username}</CardText>
            <CardText>Your registered Email is : {email}</CardText>
          </CardBody>
        </Card>
        <Grid item xs={6} sm={3}>
          <img src="angular.jpg" alt="Angular Course" />
        </Grid>
        <Grid item xs={6} sm={3}>
          <img src="reactc.jpg" alt="React Course" />
        </Grid>
        <Grid item xs={6} sm={3}>
          <img src="nodejsc.jpg" alt="Node JS Course" />
        </Grid>
        <Grid item xs={6} sm={3}>
          <img src="Mongodbc.jpg" alt="Mongo DB Course" />
        </Grid>
        <Grid item xs={6} sm={3}>
          <img url="mysqlcjpg" alt="MySQL Course" />
        </Grid>
        <Grid item xs={6} sm={3}>
          <img url="springbc.jpg" alt="Spring Boot Course" />
        </Grid>
      </div>
    </div>
  );
};

export default Details;
