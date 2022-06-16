import { Button, Breadcrumb, Form, FormText, Container, Col, Row } from 'react-bootstrap'
import './WarriorCats.css'

const WarriorCats = () => {
  return (
    <>

      <Container className='master-container'>

        <Breadcrumb className='breadcrumb-container'>
          <Breadcrumb.Item href="/ivorycloud">Ivorycloud</Breadcrumb.Item>
          <Breadcrumb.Item>Pumpkinfire</Breadcrumb.Item>
          <Breadcrumb.Item>Missingheart</Breadcrumb.Item>
        </Breadcrumb>

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


        <Button href='/bootstrap'>Bootstrap Main</Button>


      </Container>

    </>
  );
}

export default WarriorCats;