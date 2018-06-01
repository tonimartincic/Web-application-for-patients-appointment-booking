import React from 'react';
import {connect} from 'react-redux';
import {deleteReferral} from '../../../../actionCreators/referrals/referralsActionCreators';
import {Button, Col, ControlLabel, FormControl, FormGroup, ListGroup, ListGroupItem, Modal, Row} from 'react-bootstrap';
import * as styles from './deleteReferral.css'

class DeleteReferral extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownValue: null,
      selectedReferral: {
        id: null,
        referralName: null,
        patientFirstName: null,
        patientLastName: null,
        createdOn: null,
      },
    };

    this.handleChangeSelectedReferral = this.handleChangeSelectedReferral.bind(this);
  }

  resetState = () => {
    this.setState({
      dropdownValue: null,
      selectedReferral: {
        id: null,
        referralName: null,
        patientFirstName: null,
        patientLastName: null,
        createdOn: null,
      },
    });
  };

  handleChangeSelectedReferral = (event) => {
    for (let i = 0; i < this.props.referrals.length; ++i) {
      if (this.props.referrals[i] !== null) {
        if (this.props.referrals[i].id == event.target.value)
          this.setState({
            selectedReferral: {
              id: this.props.referrals[i].id,
              referralName: this.props.referrals[i].referralName,
              patientFirstName: this.props.referrals[i].patient.firstName,
              patientLastName: this.props.referrals[i].patient.lastName,
              createdOn: this.props.referrals[i].createdOn,
            }
          });
      }
    }

    this.setState({
      dropdownValue: event.target.value,
    });
  };

  handleDelete = () => {
    this.props.deleteReferral(this.state.selectedReferral.id);
    this.props.setDeleteReferralClicked(false);
    this.resetState();
  };

  render() {
    return (
      <section>
        <Modal
          show={this.props.deleteReferralClicked}
          onHide={() => {
            this.props.setDeleteReferralClicked(false);
            this.resetState();
          }
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>Obriši uputnicu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ControlLabel>Odaberi uputnicu</ControlLabel>
            <FormGroup controlId="formControlsSelect">
              <FormControl
                componentClass='select'
                placeholder='Odaberi'
                onChange={this.handleChangeSelectedReferral}
              >
                <option value="select">Odaberi</option>
                {
                  this.props.referrals
                    .map(referral => {
                      const fullName = referral.patient.firstName + " " + referral.patient.lastName + " / " + referral.referralName + " / " + referral.createdOn;
                      return (
                        <option key={referral.id} value={referral.id}>
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
                    <Row>
                      <Col md={12}>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Pacijent:</b> {this.state.selectedReferral.patientFirstName} {this.state.selectedReferral.patientLastName}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Vrsta uputnice:</b> {this.state.selectedReferral.referralName}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Datum kreiranja:</b> {this.state.selectedReferral.createdOn}</p>
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
                        this.props.setDeleteReferralClicked(false);
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
    referrals: state.referrals,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteReferral: id => dispatch(deleteReferral(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteReferral);
