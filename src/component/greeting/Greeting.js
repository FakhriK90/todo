import React from 'react';
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import './greeting.css';

const Greeting = () => {
    return (
        <div className="greeting">
            <div className="logsig">
            <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username'
            placeholder='Username'
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
          />

          
          <Link to="/pagetask" style={{textDecoration:"none", color:"grey"}}>
          <Button content='Login' primary />
        </Link>
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button content='Sign up' icon='signup' size='big' />
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
            </div>
        </div>
    )
}

export default Greeting
