import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';

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

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        paddingTop: '1%',
        position: 'absolute',
        width: '380px',
        //height: '480px',
        left: '38%',
        top: '20%',
        justifyContent: 'center',
        background: '#FFFFFF',
        borderRadius: '24px',
    },
    card: {
        padding: '4% 5% 5% 5%',
        margin: '8% auto',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        //position: 'absolute',
        width: '259px',
        height: '169px',
        background: 'linear-gradient(111.58deg, #F3F9FF 4.42%, #F8F9FF 53.42%, #DBE1FF 100%)',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25), -1px -1px 8px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px',
    },
    heading: {
        fontSize: '18px',
        lineHeight: '21px',

        color: '#000000',
    },
    description: {

        fontSize: '13px',
        lineHeight: '15px',
        textAlign: 'center',

        color: '#999999',
    },
    invitation: {

        fontSize: '16px',
        lineHeight: '17px',
        marginBottom: '5px',

        color: '#000000',

    },
    link: {
        //position: 'absolute',
        color: '#3D3C3C',
        width: '100%',
        height: '40px',
        paddingLeft: '5%',
        background: '#FFFFFF',
        borderRadius: '9px',
    },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};

export default function AssistViaCall() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Container style={{
                background: 'linear-gradient(90deg, #4C90E4 3.59%, #6891EE 39.45%, #8A92FA 71.76%)',
                boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.25)',
                width: '100vw',
                height: '10vh',
            }} className='navbar' maxWidth="xl" >

                <StyledButton onClick={handleOpen} >Assist via Call</StyledButton>
            </Container >
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <CloseIcon style={{ cursor: 'pointer', float: 'right', marginRight: '13px' }} />
                        <div className={classes.card}>
                            <p align='center' className={classes.heading}>Counseling Call Mode</p>
                            <p className={classes.description}>Directly face-to-face video call with your customer.</p>
                            <p className={classes.invitation}>Invitation link</p>
                            <Grid className={classes.link} container >
                                <Grid style={{textDecoration: 'underline', textAlign: 'center', alignSelf: 'center' , fontSize: '12px' }} container item xs={10} >
                                    https://app.support-genie.com/792-667-7091
                                </Grid>
                                <Grid style={{ alignSelf: 'center' , justifyContent: 'center' }} container item xs={2}>
                                    <FileCopyOutlinedIcon fontSize='small' style={{ cursor: 'pointer' }} />
                                </Grid>

                            </Grid>
                        </div>

                        <div className={classes.card}>
                            <p align='center' className={classes.heading}>Observation Call Mode</p>
                            <p className={classes.description}>Check your customer’s issues using their Rear camera.</p>
                            <p className={classes.invitation}>Invitation link</p>
                            <Grid className={classes.link} container >
                                <Grid style={{textDecoration: 'underline', textAlign: 'center',alignSelf: 'center' , fontSize: '12px' }} container item xs={10} >
                                    https://app.support-genie.com/792-667-7091
                                </Grid>
                                <Grid style={{ alignSelf: 'center' ,justifyContent: 'center' }} container item xs={2}>
                                    <FileCopyOutlinedIcon fontSize='small' style={{color: '#3D3C3C', cursor: 'pointer', }} />
                                </Grid>

                            </Grid>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}


