import { Button, Card } from 'react-bootstrap'
import './IvoryCloud.css'


const IvoryCloud = () => {
  return ( 
  <>
          <Card className='card'>
          <Card.Img
            className='ivory'
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/220f6753-6f05-4ddc-b597-2da49613c109/ddw2v9h-9bca7ec8-b3b1-4d2f-bb60-8b92546aa5ea.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIyMGY2NzUzLTZmMDUtNGRkYy1iNTk3LTJkYTQ5NjEzYzEwOVwvZGR3MnY5aC05YmNhN2VjOC1iM2IxLTRkMmYtYmI2MC04YjkyNTQ2YWE1ZWEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MNywfdW4fGmngj8xMxhC-fFh_YJvm-8uESBjdj8xZ1M"
          />
          <Card.Body>
            <Card.Title>
              Card Example
            </Card.Title>
            <Card.Text>Bootstrap Card Example Text!</Card.Text>
            <Button varient="primary">Test Button</Button>

          </Card.Body>
        </Card>
  
  </> 
  );
}

export default IvoryCloud;