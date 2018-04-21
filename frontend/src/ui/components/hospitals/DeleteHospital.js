import React from 'react';
import {connect} from 'react-redux';
import {deleteHospital} from '../../../actionCreators/hospitalsActionCreators';
import {Button, Col, ControlLabel, FormControl, FormGroup, ListGroup, ListGroupItem, Modal, Row} from 'react-bootstrap';
import * as styles from './deleteHospital.css'

class DeleteHospital extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownValue: null,
      selectedHospital: {
        id: null,
        name: null,
        city: null,
        postalCode: null,
        street: null,
        streetNumber: null,
        phoneNumber: null,
        mail: null,
      },
    };

    this.handleChangeSelectedHospital = this.handleChangeSelectedHospital.bind(this);
  }

  resetState = () => {
    this.setState({
      dropdownValue: null,
      selectedHospital: {
        id: null,
        name: null,
        city: null,
        postalCode: null,
        street: null,
        streetNumber: null,
        phoneNumber: null,
        mail: null,
      },
    });
  };

  handleChangeSelectedHospital = (event) => {
    for (let i = 0; i < this.props.hospitals.length; ++i) {
      if (this.props.hospitals[i] !== null) {
        if (this.props.hospitals[i].id == event.target.value)
          this.setState({
            selectedHospital: {
              id: this.props.hospitals[i].id,
              name: this.props.hospitals[i].name,
              city: this.props.hospitals[i].city,
              postalCode: this.props.hospitals[i].postalCode,
              street: this.props.hospitals[i].street,
              streetNumber: this.props.hospitals[i].streetNumber,
              phoneNumber: this.props.hospitals[i].phoneNumber,
              mail: this.props.hospitals[i].mail,
            }
          });
      }
    }

    this.setState({
      dropdownValue: event.target.value,
    });
  };

  handleDelete = () => {
    this.props.deleteHospital(this.state.selectedHospital.id);
    this.props.setDeleteHospitalClicked(false);
    this.resetState();
  };

  render() {
    return (
      <section>
        <Modal
          show={this.props.deleteHospitalClicked}
          onHide={() => {
            this.props.setDeleteHospitalClicked(false);
            this.resetState();
          }
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>Obriši bolnicu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ControlLabel>Odaberi bolnicu</ControlLabel>
            <FormGroup controlId="formControlsSelect">
              <FormControl
                componentClass='select'
                placeholder='Odaberi'
                onChange={this.handleChangeSelectedHospital}
              >
                <option value="select">Odaberi</option>
                {
                  this.props.hospitals
                    .map(hospital => {
                      return (
                        <option key={hospital.id} value={hospital.id}>
                          {hospital.name}
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
                          <p><b>Naziv:</b> {this.state.selectedHospital.name}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Grad:</b> {this.state.selectedHospital.city}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Poštanski broj:</b> {this.state.selectedHospital.postalCode}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Ulica:</b> {this.state.selectedHospital.street}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Kućni broj:</b> {this.state.selectedHospital.streetNumber}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Mail:</b> {this.state.selectedHospital.mail}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Telefonski broj:</b> {this.state.selectedHospital.phoneNumber}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  </ListGroup>
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
                          this.resetState();
                        }}
                      >
                        <span className='glyphicon glyphicon-share-alt'/> Odustani
                      </Button>
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
    hospitals: state.hospitals,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteHospital: id => dispatch(deleteHospital(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteHospital);
