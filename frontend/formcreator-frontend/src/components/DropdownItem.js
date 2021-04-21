import React, { useState, useEffect } from 'react';
import { TextField, Grid, Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ClearIcon from '@material-ui/icons/Clear';
/*
setinputList(inputList.concat(<>
        <Grid item xs={12} style={{display:'flex'}}>
            <TextField label={"Pasirinkimas"} id={latestIdUsed} style={{marginBottom:'20px', marginRight:'20px'}}/>
            <Button>
                <ClearIcon/>
            </Button>
        </Grid>
        </>));
*/
function DropdownItem()
{
    const [latestIdUsed, setLatestIdUsed] = useState(0);
    const [inputList, setinputList] = useState([])
    const onAddButtonClick = (event) =>{
        setinputList([...inputList,{value:latestIdUsed}]);
        setLatestIdUsed(latestIdUsed+1);
        console.log(inputList);
      };
      const onRemoveButtonClick = (val) => {setinputList(inputList.filter(e=>e.value!==val.value));}
    return (
        <>
        <Grid container>
            {inputList.map((value)=>(
                <>
                <Grid item xs={12} style={{display:'flex'}}>
                    <TextField label={"Pasirinkimas"} id={latestIdUsed} style={{marginBottom:'20px', marginRight:'20px'}}/>
                    <Button onClick={()=>onRemoveButtonClick(value)}>
                        <ClearIcon/>
                    </Button>
                </Grid>
                </>
            ))}
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