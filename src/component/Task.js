import React, { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";



const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Task = ({ todo }) => {
  const [task, setTask] = useState(todo.Task);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div className="Task">

      
      
        <div className="Task-content">
          {edit ? (
            <div className="Task-content-elment">
              <FormControl
                placeholder={task}
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </div>
          ) : (
            <InputGroup.Text>{task}</InputGroup.Text>
          )}
          <InputGroup.Append>
            <InputGroup.Text
              className="checktxt"
              style={
                todo.Done ? { backgroundColor: "green", color: "white" } : {}
              }
            >
              Done
            </InputGroup.Text>
            <InputGroup.Checkbox
              aria-label="Checkbox for following text input"
              onChange={() => {
                dispatch({
                  type: "TASK_State",
                  payload: todo,
                });
              }}
              checked={todo.Done}
            />
            {/* Edit */}
            <div className={classes.root}>
              <Fab
                color="secondary"
                aria-label="edit"
                onClick={() => {
                  setEdit(!edit);
                  dispatch({
                    type: "EDIT",
                    payload: { id: todo.id, tsk: task },
                  });
                }}
              >
                {edit}
                <EditIcon />
              </Fab>
            </div>
            {/* Delete */}
            <DeleteForeverRoundedIcon
              className="Delete"
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "DELETE",
                  payload: todo,
                })
              }
              style={{ fontSize: 70 }}
            />
          </InputGroup.Append>
        </div>
      
    </div>
  );
};

export default Task;
