import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
}));

export default function Assigntask() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const [task, setTask] = useState('')
    const [memberid, setMemberid] = useState('')
    const [taskid, setTaskId] = useState('')
    const [member, setMember] = useState('')
    const classes = useStyles();
    
    const  handleClick = async () => {
        try {
            //const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyYW5kb211c2VyMTIzIiwiZXhwIjoxNjg0MTkyNzM2LCJpYXQiOjE2ODQxNTY3MzZ9.mG0gAgzBJ8tqAh3X4PyxnfKSDWRXbrJVchaHX1iUGIAsM2U-eLNe6ebrO7w10u1FdkYa5VO2SvZaJ3_j5B7Nig'
        // ,'Access-Control-Allow-Methods' : '*'
        // ,'Access-Control-Allow-Origin' : '*' 
    //};
          const response = await fetch('http://localhost:8082/api/v1/task/view-assign-task/'+memberid+'/'+taskid,{  })
          const jsonData = await response.json();
          setTask(jsonData.data.taskDetails);
          setMember(jsonData.data.memberDetails);
          //setData(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    // const handleClick = (e) => {
    //     e.preventDefault()
    //     const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyYW5kb211c2VyMTIzIiwiZXhwIjoxNjg0MTkyNzM2LCJpYXQiOjE2ODQxNTY3MzZ9.mG0gAgzBJ8tqAh3X4PyxnfKSDWRXbrJVchaHX1iUGIAsM2U-eLNe6ebrO7w10u1FdkYa5VO2SvZaJ3_j5B7Nig'
    //     // ,'Access-Control-Allow-Methods' : '*'
    //     // ,'Access-Control-Allow-Origin' : '*' 
    // };
    //     fetch('http://localhost:8082/api/v1/task/view-assign-task/'+memberid+'/'+taskid,{ 
    //         mode: 'no-cors' ,headers })
    //         .then(res=>res.json())
    //         .then((result)=>{
    //           setTask(result.data.taskDetails);
    //           setMember(result.data.memberDetails);
    //             console.log(result);
    //         }
    //       );
    // }

    return (

        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h4 style={{ color: "green" }}><u>View Assign Task</u></h4>

                <form className={classes.root} noValidate autoComplete="off">

                    <TextField id="outlined-basic" label="Member ID" variant="outlined"
                        value={memberid}
                        onChange={(e) => setMemberid(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Task ID" variant="outlined"
                        value={taskid}
                        onChange={(e) => setTaskId(e.target.value)}
                    />
                    <Button variant="contained" color="secondary" onClick={handleClick}>Submit
                    </Button>
                </form>

            </Paper>
            <Paper elevation={3} style={paperStyle}>

                {
                         <Paper>
                        Task Id  : {task.taskid}<br></br>
                        Task Name  : {task.taskname}<br></br>
                        Task deliverables  : {task.deliverables}<br></br>
                        Task Start Date  : {task.taskStartDate}<br></br>
                        Task End Date  : {task.taskEndDate}<br></br>
                        Project Start Date  : {member.projectStartDate}<br></br>
                        Project End Date  : {member.projectEndDate}<br></br>
                        Applocation Percentage  : {member.allocationPercentage}<br></br>
                
                         </Paper>
                }
            </Paper>



        </Container>
    );
}