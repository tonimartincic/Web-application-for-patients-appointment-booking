import React from 'react';
import {connect} from 'react-redux';
import {deleteMedicalSpecialist} from '../../../../../actionCreators/users/medicalSpecialistsActionCreators';
import {Button, Col, ControlLabel, FormControl, FormGroup, ListGroup, ListGroupItem, Modal, Row} from 'react-bootstrap';
import * as styles from './deleteMedicalSpecialist.css'

class DeleteMedicalSpecialist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownValue: null,
      selectedMedicalSpecialist: {
        id: null,
        firstName: null,
        lastName: null,
        mail: null,
        phoneNumber: null,
      },
    };

    this.handleChangeSelectedMedicalSpecialist = this.handleChangeSelectedMedicalSpecialist.bind(this);
  }

  resetState = () => {
    this.setState({
      dropdownValue: null,
      selectedMedicalSpecialist: {
        id: null,
        firstName: null,
        lastName: null,
        mail: null,
        phoneNumber: null,
      },
    });
  };

  handleChangeSelectedMedicalSpecialist = (event) => {
    for (let i = 0; i < this.props.medicalSpecialists.length; ++i) {
      if (this.props.medicalSpecialists[i] !== null) {
        if (this.props.medicalSpecialists[i].id == event.target.value)
          this.setState({
            selectedMedicalSpecialist: {
              id: this.props.medicalSpecialists[i].id,
              firstName: this.props.medicalSpecialists[i].firstName,
              lastName: this.props.medicalSpecialists[i].lastName,
              mail: this.props.medicalSpecialists[i].mail,
              phoneNumber: this.props.medicalSpecialists[i].phoneNumber,
            }
          });
      }
    }

    this.setState({
      dropdownValue: event.target.value,
    });
  };

  handleDelete = () => {
    this.props.deleteMedicalSpecialist(this.state.selectedMedicalSpecialist.id);
    this.props.setDeleteMedicalSpecialistClicked(false);
    this.resetState();
  };

  render() {
    return (
      <section>
        <Modal
          show={this.props.deleteMedicalSpecialistClicked}
          onHide={() => {
            this.props.setDeleteMedicalSpecialistClicked(false);
            this.resetState();
          }
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>Obriši liječnika specijalista</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ControlLabel>Odaberi liječnika specijalista</ControlLabel>
            <FormGroup controlId="formControlsSelect">
              <FormControl
                componentClass='select'
                placeholder='Odaberi'
                onChange={this.handleChangeSelectedMedicalSpecialist}
              >
                <option value="select">Odaberi</option>
                {
                  this.props.medicalSpecialists
                    .map(medicalSpecialist => {
                      const fullName = medicalSpecialist.firstName + " " + medicalSpecialist.lastName + " - " + medicalSpecialist.mail;
                      return (
                        <option key={medicalSpecialist.id} value={medicalSpecialist.id}>
                          {fullName}
                        </option>)
                    })
                }
              </FormControl>
            </FormGroup>
            <FormGroup controlId="formControlsSelect">
              <Choose>
                <When
                  condition={this.state.dropdownValue !== null && this.state.dropdownValue !== 'select' && this.state.dropdownValue !== 'Odaberi'}
                >
                  <ListGroup>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Ime:</b> {this.state.selectedMedicalSpecialist.firstName}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Prezime:</b> {this.state.selectedMedicalSpecialist.lastName}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Mail:</b> {this.state.selectedMedicalSpecialist.mail}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Broj mobitela:</b> {this.state.selectedMedicalSpecialist.phoneNumber}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  </ListGroup>
                </When>
              </Choose>
            </FormGroup>
          </Modal.Body>
          <Choose>
            <When
              condition={this.state.dropdownValue !== null && this.state.dropdownValue !== 'select' && this.state.dropdownValue !== 'Odaberi'}
            >
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
                        this.resetState();
                      }}
                    >
                      <span className='glyphicon glyphicon-share-alt'/> Odustani
                    </Button>
                  </Col>
                </Row>
              </Modal.Footer>
            </When>
          </Choose>
        </Modal>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
    medicalSpecialists: state.medicalSpecialists,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteMedicalSpecialist: id => dispatch(deleteMedicalSpecialist(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteMedicalSpecialist);
