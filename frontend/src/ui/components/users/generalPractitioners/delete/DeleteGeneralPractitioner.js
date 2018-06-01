import React from 'react';
import {connect} from 'react-redux';
import {deleteGeneralPractitioner} from '../../../../../actionCreators/users/generalPractitionersActionCreators';
import {Button, Col, FormGroup, ListGroup, ListGroupItem, Modal, Row, Alert} from 'react-bootstrap';
import * as styles from './deleteGeneralPractitioner.css'

class DeleteGeneralPractitioner extends React.Component {
  handleDelete = () => {
    this.props.deleteGeneralPractitioner(this.props.generalPractitioner.id);
    this.props.setDeleteGeneralPractitionerClicked(false);
    this.props.resetState();
  };

  render() {
    return (
      <section>
        <Modal
          show={this.props.deleteGeneralPractitionerClicked}
          onHide={() => {
            this.props.setDeleteGeneralPractitionerClicked(false);
          }
          }
        >
          <Choose>
            <When condition={this.props.generalPractitioner !== null}>
              <Modal.Header closeButton>
                <Modal.Title>Obriši specijalista obiteljske medicine</Modal.Title>
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
                      onClick={() => this.handleDelete()}
                    >
                      <span className='glyphicon glyphicon-trash'/> Obriši
                    </Button>
                  </Col>
                  <Col mdOffset={2} md={4}>
                    <Button
                      className={styles.button}
                      onClick={() => {
                        this.props.setDeleteGeneralPractitionerClicked(false);
                      }}
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

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    deleteGeneralPractitioner: id => dispatch(deleteGeneralPractitioner(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteGeneralPractitioner);
