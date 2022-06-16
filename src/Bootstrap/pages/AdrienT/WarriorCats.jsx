import { Button, Breadcrumb, Card, Form, FormText, Container, Col, Row } from 'react-bootstrap'
import './WarriorCats.css'

const AdrienT = () => {
  return (
    <>

      <Container className='master-container'>

        <div className='login-flexbox-container'>

        <div className='login-left'>
          <h1>Welcome to Warrior Cats</h1>
        </div>

        <div className='login-right'>

        <Form className='form'>
          <Row>
            <Col md>
              <Form.Group controlId='formEmail'>

                <Form.Label
                  className='CatName'
                >Cat Name</Form.Label>

                <FormText className='text-muted'>Typically, a warrior cat name will be a compound word made up of two words that are things found in nature. </FormText>

                <Form.Control type="email" placeholder='ivory.cloud@gmail.com' />

              </Form.Group>
            </Col>

            <Col md>
              <Form.Group controlId='formPassword'>
                <Form.Label
                  className='CatSecret'
                >Cat Secret</Form.Label>
                <FormText className='text-muted'>Pick a secure secret so no-cat can break into your account! </FormText>
                <Form.Control type="password" placeholder='becomesLeader123%^_!' />
              </Form.Group>
            </Col>
            <Button className="login-btn" variant='secondary' type='submit'>Login</Button>
          </Row>
          <h6>New to Warrior Cats? <a href="/#">Sign Up.</a></h6>
        </Form>
        </div> 
        {/* login flexbox right ending div ☝🏽 */}
        </div>
        {/* login flexbox container ending div ☝🏽 */}



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

        <Breadcrumb className='breadcrumb-container'>
          <Breadcrumb.Item>Ivorycloud</Breadcrumb.Item>
          <Breadcrumb.Item>Pumpkinfire</Breadcrumb.Item>
          <Breadcrumb.Item active>Missingheart</Breadcrumb.Item>
        </Breadcrumb>


        <Button href='/bootstrap'>Bootstrap Main</Button>


      </Container>

    </>
  );
}

export default AdrienT;