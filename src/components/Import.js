import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
const useStyles = makeStyles({
    button: {
        display: 'flex',
        justifyContent: 'center',
    },
  })

const Import = (props) => {
    const classes = useStyles();
    console.log('makes', props.makes)

    return (
        <Container>
        <br/> 
        <div className={classes.button} >
            <Button onClick={props.fetchMakes}  variant="contained" color="primary" >
                IMPORT
            </Button>
        </div> 
         
        <h1>Count:{props.makes.length}</h1>
        <Table  size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Make</TableCell>
              <TableCell align="right">Action</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {props.makes.map((make, idx) => (
              <TableRow key={make.Make_ID}>
                <TableCell component="th" scope="make">
                  {make.Make_ID}
                </TableCell>
                <TableCell align="right">{make.Make_Name}</TableCell>
                <TableCell align="right">
                <DeleteIcon
                                onClick={() => props.deleteMake(idx)}
                               
                                    
                                className="icon text-red" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Container>
    )
}

export default Import





