import React from 'react';
import {Button, Col, FormGroup, ListGroup, ListGroupItem, Modal, Row, Alert} from 'react-bootstrap';
import * as styles from './deleteGeneralPractitioner.css'

class DeleteGeneralPractitioner extends React.Component {
  render() {
    return (
      <section>
        <Modal
          show={this.props.deleteGeneralPractitionerClicked}
          onHide={() => this.props.resetState()}
        >
          <Choose>
            <When condition={this.props.generalPractitionerSelected}>
              <Modal.Header closeButton>
                <Modal.Title className={styles.modalTitle}>
                  Obriši specijalista obiteljske medicine
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FormGroup controlId="formControlsSelect">
                  <ListGroup>
                    <Row>
                      <Col md={6}>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Ime:</b> {this.props.generalPractitioner.firstName}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Prezime:</b> {this.props.generalPractitioner.lastName}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Mail:</b> {this.props.generalPractitioner.mail}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Broj mobitela:</b> {this.props.generalPractitioner.phoneNumber}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                      </Col>
                      <Col md={6}>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Grad:</b> {this.props.generalPractitioner.city}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Poštanski broj:</b> {this.props.generalPractitioner.postalCode}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Ulica:</b> {this.props.generalPractitioner.street}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Kućni broj:</b> {this.props.generalPractitioner.streetNumber}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                      </Col>
                    </Row>
                  </ListGroup>
                </FormGroup>
              </Modal.Body>
              <Modal.Footer>
                <Row>
                  <Col mdOffset={1} md={4}>
                    <Button
                      className={styles.button}
                      onClick={() => this.props.handleDelete()}
                    >
                      <span className='glyphicon glyphicon-trash'/> Obriši
                    </Button>
                  </Col>
                  <Col mdOffset={2} md={4}>
                    <Button
                      className={styles.button}
                      onClick={() => this.props.resetState()}
                    >
                      <span className='glyphicon glyphicon-share-alt'/> Odustani
                    </Button>
                  </Col>
                </Row>
              </Modal.Footer>
            </When>
            <Otherwise>
              <Alert className={styles.alert} bsStyle="danger">
                <p>Morate odabrati specijalista obiteljske medicine.</p>
              </Alert>
            </Otherwise>
          </Choose>
        </Modal>
      </section>
    );
  }
}

export default DeleteGeneralPractitioner;
