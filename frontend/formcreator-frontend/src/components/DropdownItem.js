import React, { useState, useEffect } from 'react';
import { TextField, Grid, Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ClearIcon from '@material-ui/icons/Clear';

function DropdownItem()
{
    const [inputList, setinputList] = useState([])
    const onAddButtonClick = (event) =>{
        setinputList(inputList.concat(<>
        <Grid item xs={12} style={{display:'flex'}}>
            <TextField label={"Pasirinkimas "+(inputList.length+1)} style={{marginBottom:'20px', marginRight:'20px'}}/>
            <Button>
                <ClearIcon/>
            </Button>
        </Grid>
        </>))
      };
    return (
        <>
        <Grid container>
            {inputList}
            <Grid item xs={12} style={{display:'flex'}}>
                <Button variant="contained" color="secondary" onClick={onAddButtonClick}>
                    <AddCircleOutlineIcon style={{marginRight:"5px"}}/> Pridėti naują pasirinkimą
                </Button>
            </Grid>
        </Grid>
        </>
    );
}

export default DropdownItem;