import React from 'react';
import {connect} from 'react-redux';
import {deletePatient} from '../../../../actionCreators/patientsActionCreators';
import {Button, Col, ControlLabel, FormControl, FormGroup, ListGroup, ListGroupItem, Modal, Row} from 'react-bootstrap';

class DeletePatient extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownValue: null,
      selectedPatient: {
        id: null,
        firstName: null,
        lastName: null,
        mail: null,
        city: null,
        postalCode: null,
        street: null,
        streetNumber: null,
      },
    };

    this.handleChangeSelectedPatient = this.handleChangeSelectedPatient.bind(this);
  }

  resetState = () => {
    this.setState({
      dropdownValue: null,
      selectedPatient: {
        id: null,
        firstName: null,
        lastName: null,
        mail: null,
        city: null,
        postalCode: null,
        street: null,
        streetNumber: null,
      },
    });
  };

  handleChangeSelectedPatient = (event) => {
    for (let i = 0; i < this.props.patients.length; ++i) {
      if (this.props.patients[i] !== null) {
        if (this.props.patients[i].id == event.target.value)
          this.setState({
            selectedPatient: {
              id: this.props.patients[i].id,
              firstName: this.props.patients[i].firstName,
              lastName: this.props.patients[i].lastName,
              mail: this.props.patients[i].mail,
              city: this.props.patients[i].city,
              postalCode: this.props.patients[i].postalCode,
              street: this.props.patients[i].street,
              streetNumber: this.props.patients[i].streetNumber,
            }
          });
      }
    }

    this.setState({
      dropdownValue: event.target.value,
    });
  };

  handleDelete = () => {
    this.props.deletePatient(this.state.selectedPatient.id);
    this.props.setDeletePatientClicked(false);
    this.resetState();
  };

  render() {
    return (
      <section>
        <Modal
          show={this.props.deletePatientClicked}
          onHide={() => {
            this.props.setDeletePatientClicked(false);
            this.resetState();
          }
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>Obriši pacijenta</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ControlLabel>Odaberi pacijenta</ControlLabel>
            <FormGroup controlId="formControlsSelect">
              <FormControl
                componentClass='select'
                placeholder='Odaberi'
                onChange={this.handleChangeSelectedPatient}
              >
                <option value="select">Odaberi</option>
                {
                  this.props.patients
                    .map(patient => {
                      const fullName = patient.firstName + " " + patient.lastName + " - " + patient.mail;
                      return (
                        <option key={patient.id} value={patient.id}>
                          {fullName}
                        </option>)
                    })
                }
              </FormControl>
            </FormGroup>
            <FormGroup controlId="formControlsSelect">
              <Choose>
                <When
                  condition={this.state.dropdownValue !== null && this.state.dropdownValue !== 'select' && this.state.dropdownValue !== 'Odaberi'}>
                  <ListGroup>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Ime:</b> {this.state.selectedPatient.firstName}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Prezime:</b> {this.state.selectedPatient.lastName}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Mail:</b> {this.state.selectedPatient.mail}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Grad:</b> {this.state.selectedPatient.city}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Poštanski broj:</b> {this.state.selectedPatient.postalCode}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Ulica:</b> {this.state.selectedPatient.street}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Kućni broj:</b> {this.state.selectedPatient.streetNumber}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  </ListGroup>
                  <Row>
                    <Col mdOffset={1} md={4}>
                      <Button onClick={() => this.handleDelete()}>Obriši liječnika opće prakse</Button>
                    </Col>
                    <Col md={5}>
                      <Button onClick={() => {
                        this.props.setDeletePatientClicked(false);
                        this.resetState();
                      }}>Odustani</Button>
                    </Col>
                  </Row>
                </When>
              </Choose>
            </FormGroup>
          </Modal.Body>
        </Modal>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
    patients: state.patients,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deletePatient: id => dispatch(deletePatient(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeletePatient);
