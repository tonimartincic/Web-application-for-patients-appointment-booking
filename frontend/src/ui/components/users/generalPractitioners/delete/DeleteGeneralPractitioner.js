import React from 'react';
import {connect} from 'react-redux';
import {deleteGeneralPractitioner} from '../../../../../actionCreators/users/generalPractitionersActionCreators';
import {Button, Col, ControlLabel, FormControl, FormGroup, ListGroup, ListGroupItem, Modal, Row} from 'react-bootstrap';
import * as styles from './deleteGeneralPractitioner.css'

class DeleteGeneralPractitioner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownValue: null,
      selectedGeneralPractitioner: {
        id: null,
        firstName: null,
        lastName: null,
        mail: null,
        city: null,
        postalCode: null,
        street: null,
        streetNumber: null,
        phoneNumber: null,
      },
    };

    this.handleChangeSelectedGeneralPractitioner = this.handleChangeSelectedGeneralPractitioner.bind(this);
  }

  resetState = () => {
    this.setState({
      dropdownValue: null,
      selectedGeneralPractitioner: {
        id: null,
        firstName: null,
        lastName: null,
        mail: null,
        city: null,
        postalCode: null,
        street: null,
        streetNumber: null,
        phoneNumber: null,
      },
    });
  };

  handleChangeSelectedGeneralPractitioner = (event) => {
    for (let i = 0; i < this.props.generalPractitioners.length; ++i) {
      if (this.props.generalPractitioners[i] !== null) {
        if (this.props.generalPractitioners[i].id == event.target.value)
          this.setState({
            selectedGeneralPractitioner: {
              id: this.props.generalPractitioners[i].id,
              firstName: this.props.generalPractitioners[i].firstName,
              lastName: this.props.generalPractitioners[i].lastName,
              mail: this.props.generalPractitioners[i].mail,
              city: this.props.generalPractitioners[i].city,
              postalCode: this.props.generalPractitioners[i].postalCode,
              street: this.props.generalPractitioners[i].street,
              streetNumber: this.props.generalPractitioners[i].streetNumber,
              phoneNumber: this.props.generalPractitioners[i].phoneNumber,
            }
          });
      }
    }

    this.setState({
      dropdownValue: event.target.value,
    });
  };

  handleDelete = () => {
    this.props.deleteGeneralPractitioner(this.state.selectedGeneralPractitioner.id);
    this.props.setDeleteGeneralPractitionerClicked(false);
    this.resetState();
  };

  render() {
    return (
      <section>
        <Modal
          show={this.props.deleteGeneralPractitionerClicked}
          onHide={() => {
            this.props.setDeleteGeneralPractitionerClicked(false);
            this.resetState();
          }
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>Obriši specijalista obiteljske medicine</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ControlLabel>Odaberi specijalista obiteljske medicine</ControlLabel>
            <FormGroup controlId="formControlsSelect">
              <FormControl
                componentClass='select'
                placeholder='Odaberi'
                onChange={this.handleChangeSelectedGeneralPractitioner}
              >
                <option value="select">Odaberi</option>
                {
                  this.props.generalPractitioners
                    .map(generalPractitioner => {
                      const fullName = generalPractitioner.firstName + " " + generalPractitioner.lastName + " - " + generalPractitioner.mail;
                      return (
                        <option key={generalPractitioner.id} value={generalPractitioner.id}>
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
                    <Row>
                      <Col md={6}>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Ime:</b> {this.state.selectedGeneralPractitioner.firstName}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Prezime:</b> {this.state.selectedGeneralPractitioner.lastName}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Mail:</b> {this.state.selectedGeneralPractitioner.mail}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Broj mobitela:</b> {this.state.selectedGeneralPractitioner.phoneNumber}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                      </Col>
                      <Col md={6}>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Grad:</b> {this.state.selectedGeneralPractitioner.city}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Poštanski broj:</b> {this.state.selectedGeneralPractitioner.postalCode}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Ulica:</b> {this.state.selectedGeneralPractitioner.street}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Kućni broj:</b> {this.state.selectedGeneralPractitioner.streetNumber}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                      </Col>
                    </Row>
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
                        this.props.setDeleteGeneralPractitionerClicked(false);
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
    generalPractitioners: state.generalPractitioners,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteGeneralPractitioner: id => dispatch(deleteGeneralPractitioner(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteGeneralPractitioner);
