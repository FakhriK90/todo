import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const AddTask = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [newTask, setNewTask] = useState('');
    // const [allow, setAllow] = useState(false);

    // const handleSubmit = (el) => {
    //   el.preventDefault();
    //   newTask && dispatch(add(newTask))
    //   setNewTask('')
    // };

    // const handleChange = (el) =>{
    //   setNewTask(el.target.value)
    // }
    const addFunc = () => {
      if (newTask.trim()) {
        dispatch({
          type: 'ADD_TODO',
          payload: newTask,
        })
      }
      setNewTask('')
    }
    

    return (
        <div className="addt">            
            <form className={classes.root} noValidate autoComplete="off">      
      <TextField 
      label="Add Tasks" 
      variant="filled"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)} />      
    </form>
    <div className="btn">
    <Button 
    inverted color='green'
    onClick={addFunc}>
        Submit
      </Button>
    </div>
    </div>
    )
}

export default AddTask
