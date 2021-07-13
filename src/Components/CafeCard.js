import React from 'react';
import Typography from "@material-ui/core/Typography";
import classes from "./Footer.module.css";

export default function CafeCard(props) {
    const {cafe} = props;

    console.log(cafe);

    // let emailfix = cafe.email;
    // emailfix.split(" ").join("");

    // console.

    return (
        <Typography color="primary" className={classes.title}>
            {cafe.name !== cafe.street && (
                <>
                    <div><img className="img-grid" src={`${cafe.imageLink}`} alt={`${cafe.name}`} /></div>
                    <div><p>{cafe.imageDescription}</p></div>
                    <div><h2>{cafe.name}</h2></div>
                    <div><h4>{cafe.street}</h4></div>
                    <div><p>{cafe.email}</p></div>
                </>
            )}
        </Typography>
    );
}


