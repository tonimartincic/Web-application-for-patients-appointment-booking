import React from 'react';
import {connect} from 'react-redux';
import {deleteHospital} from '../../../../actionCreators/hospitals/hospitalsActionCreators';
import {Button, Col, FormGroup, ListGroup, ListGroupItem, Modal, Row, Alert} from 'react-bootstrap';
import * as styles from './deleteHospital.css'

class DeleteHospital extends React.Component {
  handleDelete = () => {
    this.props.deleteHospital(this.props.hospital.id);
    this.props.setDeleteHospitalClicked(false);
    this.props.resetState();
  };

  render() {
    return (
      <section>
        <Modal
          show={this.props.deleteHospitalClicked}
          onHide={() => {
            this.props.setDeleteHospitalClicked(false);
          }
          }
        >
          <Choose>
            <When condition={this.props.hospital !== null}>
              <Modal.Header closeButton>
                <Modal.Title>Obriši bolnicu</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FormGroup controlId="formControlsSelect">
                  <ListGroup>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Naziv:</b> {this.props.hospital.name}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Grad:</b> {this.props.hospital.city}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Poštanski broj:</b> {this.props.hospital.postalCode}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Ulica:</b> {this.props.hospital.street}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Kućni broj:</b> {this.props.hospital.streetNumber}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Mail:</b> {this.props.hospital.mail}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Telefonski broj:</b> {this.props.hospital.phoneNumber}</p>
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
                        this.props.setDeleteHospitalClicked(false);
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
                <p>Morate odabrati bolnicu.</p>
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
    deleteHospital: id => dispatch(deleteHospital(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteHospital);
