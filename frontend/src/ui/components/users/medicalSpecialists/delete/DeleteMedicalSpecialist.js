import React from 'react';
import {connect} from 'react-redux';
import {deleteMedicalSpecialist} from '../../../../../actionCreators/users/medicalSpecialistsActionCreators';
import {Button, Col, FormGroup, ListGroup, ListGroupItem, Modal, Row, Alert} from 'react-bootstrap';
import * as styles from './deleteMedicalSpecialist.css'

class DeleteMedicalSpecialist extends React.Component {
  handleDelete = () => {
    this.props.deleteMedicalSpecialist(this.props.medicalSpecialist.id);
    this.props.setDeleteMedicalSpecialistClicked(false);
    this.props.resetState();
  };

  render() {
    return (
      <section>
        <Modal
          show={this.props.deleteMedicalSpecialistClicked}
          onHide={() => {
            this.props.setDeleteMedicalSpecialistClicked(false);
          }
          }
        >
          <Choose>
            <When condition={this.props.medicalSpecialist !== null}>
              <Modal.Header closeButton>
                <Modal.Title>Obriši liječnika specijalista</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FormGroup controlId="formControlsSelect">
                  <ListGroup>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Ime:</b> {this.props.medicalSpecialist.firstName}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Prezime:</b> {this.props.medicalSpecialist.lastName}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Mail:</b> {this.props.medicalSpecialist.mail}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Broj mobitela:</b> {this.props.medicalSpecialist.phoneNumber}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
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
                        this.props.setDeleteMedicalSpecialistClicked(false);
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
                <p>Morate odabrati liječnika specijalista.</p>
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
    deleteMedicalSpecialist: id => dispatch(deleteMedicalSpecialist(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteMedicalSpecialist);
