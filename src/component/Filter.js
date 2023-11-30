import React from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Button } from 'semantic-ui-react'

const Filter = () => {
    const dispatch = useDispatch()
    return (
        <div className="filter">
            
      <Card style={{ width: '40rem' }}>
  <Card.Body className="btn-filter">
  <Button 
  inverted color='purple'
  onClick={() => dispatch ({ type: 'SHOW', payload: 'done'})}>
        Done
      </Button>
      <Button 
      inverted color='purple'
      onClick={() => dispatch({ type: 'SHOW', payload: 'notDone'})}>
        Not Done
      </Button>
      <Button 
      inverted color='blue'
      onClick={() => dispatch({ type: 'SHOW', payload: 'all'})}>
        Show All
      </Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default Filter
