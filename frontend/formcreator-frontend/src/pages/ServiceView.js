import "../App.css";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "fontsource-roboto";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { TableContainer } from "@material-ui/core";
import { Table } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import theme from "../theme";
import DeleteModal from "../components/DeleteModal";

const data = [
  { id: 1, name: "Valyti", provider: "UAB LEMAO" },
  { id: 2, name: "Pomidoru valdymas", provider: "UAB LEMAO" },
  { id: 3, name: "Ramunas", provider: "UAB LEMAO" },
  { id: 4, name: "Deividas", provider: "UAB LEMAO" },
  { id: 5, name: "Lemao", provider: "UAB LEMAO" },
];

const useStyles = makeStyles({
  paper: {
    margin: "20px",
    padding: "20px",
    backgroundColor: theme.palette.secondary.light,
  },
});

function ServiceView() {
  const classes = useStyles();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textDialog, settextDialog] = useState("");
  const handleOpen = () => {
    setIsModalOpen(true);
  };
  const handleClose = () => {
    setIsModalOpen(false);
  };
  return (
    <Container>
      <DeleteModal
        body={textDialog}
        ModalOpen={isModalOpen}
        onModalClose={handleClose}
      />
      <Paper elevation={2} className={classes.paper}>
        <Typography variant="h5">Paslaugų peržiūra</Typography>
        <Typography variant="h6">Naudingos nuorodos:</Typography>
        <Grid container style={{ display: "flex" }}>
          <Button
            variant="contained"
            color="primary"
            style={{ marginRight: "15px" }}
          >
            ATGAL
          </Button>
          <Button variant="contained" color="secondary" href="/services/add">
            PRIDĖTI PASLAUGĄ
          </Button>
        </Grid>
      </Paper>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Paslaugos ID</TableCell>
              <TableCell>Paslaugos pavadinimas</TableCell>
              <TableCell>Paslaugos tiekėjas</TableCell>
              <TableCell>Veiksmai</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <>
                <TableRow>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.provider}</TableCell>
                  <TableCell>
                    <Button
                      href={`/service/edit/${row.id}`}
                      variant="outlined"
                      color="primary"
                      style={{ marginRight: "10px" }}
                    >
                      <EditIcon />
                      REDAGUOTI
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        settextDialog(`Paslaugos id: ${row.id}`);
                        handleOpen();
                      }}
                    >
                      <DeleteIcon /> TRINTI
                    </Button>
                  </TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default ServiceView;
