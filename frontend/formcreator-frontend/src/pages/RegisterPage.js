import {
    Button,
    Container,
    Grid,
    TextField,
    makeStyles,
    Paper,
    Typography,
    FormControl
} from '@material-ui/core';
import React from 'react';
import theme from '../theme';

const useStyles = makeStyles({
    paper: {
        width: '75%',
        margin: '20px',
        padding: '20px',
    },
    input: {
        alignSelf: 'center',
        width: '50%'
    },
    form: {
        marginTop: '20px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: '20px'
    },
    registerBtn:{
        backgroundColor: theme.palette.primary.main,
        color: "white",
    },
    loginBtn:{
        backgroundColor: theme.palette.primary.contrastText,
        marginLeft: '10px',
    },
    loginField:{
        flexGrow: 1
    },
    text: {
        marginBottom: '20px'
    }
});

function RegisterPage() {
    const classes = useStyles();
    return (
        <>
            <Container className={classes.form}>
                <Paper elevation={2} className={classes.paper}>
                    <Typography variant={"h4"} className={classes.text}>
                        Užsiregistruoti
                    </Typography>
                    <div>
                        <Grid container>
                            <Grid item xs={12} className={classes.form}>
                                <TextField className={classes.input} label="El. paštas" type="email" variant="outlined" required /> 
                            </Grid>
                            <Grid item xs={12} className={classes.form}>
                                <TextField className={classes.input} label="Slaptažodis" type="password" variant="outlined" required />
                            </Grid>
                            <Grid item xs={12} className={classes.form}>
                                <TextField className={classes.input} label="Pakartoti slaptažodį" type="password" variant="outlined" required />
                            </Grid>
                            <Grid container display="flex" justify="flex-end" item xs={12} style={{marginTop:'50px'}}>
                                <div className={classes.loginField}>
                                    <Button className={classes.registerBtn}>REGISTRUOTIS</Button> 
                                </div>
                                <Typography variant="body1" style={{margin:'auto'}}>Jau turi paskyrą?</Typography>
                                <Button href="/login" className={classes.loginBtn}>PRISIJUNGTI</Button>
                                <Button href="/remindpassword" style={{marginLeft:'20px'}} className={classes.registerBtn}>PRIMINTI SLAPTAŽODĮ</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Paper>
            </Container>
        </>
    );
}

export default RegisterPage;