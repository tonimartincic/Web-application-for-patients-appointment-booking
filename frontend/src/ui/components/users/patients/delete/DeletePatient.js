import React from 'react';
import {Button, Col, FormGroup, ListGroup, ListGroupItem, Modal, Row, Alert} from 'react-bootstrap';
import * as styles from './deletePatient.css'

class DeletePatient extends React.Component {
  render() {
    return (
      <section>
        <Modal
          show={this.props.deletePatientClicked}
          onHide={() => this.props.resetState()}
        >
          <Choose>
            <When condition={this.props.patientSelected}>
              <Modal.Header closeButton>
                <Modal.Title className={styles.modalTitle}>
                  Obriši pacijenta
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
                              <p><b>Ime:</b> {this.props.patient.firstName}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Prezime:</b> {this.props.patient.lastName}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Spol:</b> {this.props.patient.sex}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>OIB:</b> {this.props.patient.oib}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Datum rođenja:</b> {this.props.patient.dateOfBirth}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Mail:</b> {this.props.patient.mail}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                      </Col>
                      <Col md={6}>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Grad:</b> {this.props.patient.city}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Poštanski broj:</b> {this.props.patient.postalCode}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Ulica:</b> {this.props.patient.street}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Kućni broj:</b> {this.props.patient.streetNumber}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Broj mobitela:</b> {this.props.patient.phoneNumber}</p>
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
                <p>Morate odabrati pacijenta.</p>
              </Alert>
            </Otherwise>
          </Choose>
        </Modal>
      </section>
    );
  }
}

export default DeletePatient;
