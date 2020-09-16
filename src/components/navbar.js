import React from 'react';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const StyledButton = withStyles({
    root: {
        marginTop: '15px',
        borderRadius: 3,
        color: 'white',
        width: '192px',
        height: '42px',
        float: 'right',
        padding: '0 30px',
        borderRadius: '23px',
        border: '2px solid #FFFFFF',

        "&:hover": {
            backgroundColor: '#F59D23',
            border: '2px solid #F59D23',
        },
    },

    label: {
        textTransform: 'capitalize',
    },
})(Button);

export default function Navbar() {

    return (
        <Container style={{
            background: 'linear-gradient(90deg, #4C90E4 3.59%, #6891EE 39.45%, #8A92FA 71.76%)',
            boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.25)',
                width: '100vw',
                    height: '10vh',
}} className = 'navbar' maxWidth = "xl" >

    <StyledButton>Assist via Call</StyledButton>
        </Container >
    );
}


