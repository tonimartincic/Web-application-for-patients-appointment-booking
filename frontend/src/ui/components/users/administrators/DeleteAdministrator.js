import React from 'react';
import {connect} from 'react-redux';
import {deleteAdministrator} from '../../../../actionCreators/administratorsActionCreators';
import {
  Alert,
  Button,
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  ListGroup,
  ListGroupItem,
  Modal,
  Row
} from 'react-bootstrap';

class DeleteAdministrator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownValue: null,
      cannotDeleteYourselfValidation: null,
      selectedAdministrator: {
        id: null,
        firstName: null,
        lastName: null,
        mail: null,
      },
    };

    this.handleChangeSelectedAdministrator = this.handleChangeSelectedAdministrator.bind(this);
  }

  resetState = () => {
    this.setState({
      dropdownValue: null,
      cannotDeleteYourselfValidation: null,
      selectedAdministrator: {
        id: null,
        firstName: null,
        lastName: null,
        mail: null,
      },
    });
  };

  handleChangeSelectedAdministrator = (event) => {
    for (let i = 0; i < this.props.administrators.length; ++i) {
      if (this.props.administrators[i] !== null) {
        if (this.props.administrators[i].id == event.target.value)
          this.setState({
            selectedAdministrator: {
              id: this.props.administrators[i].id,
              firstName: this.props.administrators[i].firstName,
              lastName: this.props.administrators[i].lastName,
              mail: this.props.administrators[i].mail,
            }
          });
      }
    }

    this.setState({
      dropdownValue: event.target.value,
      cannotDeleteYourselfValidation: null,
    });
  };

  handleDelete = () => {
    if (this.state.selectedAdministrator.id === this.props.userData.id) {
      this.setState({
        cannotDeleteYourselfValidation: true,
      });
    } else {
      this.props.deleteAdministrator(this.state.selectedAdministrator.id);
      this.props.setDeleteAdministratorClicked(false);
      this.resetState();
    }
  };

  handleAlertDismiss() {
    this.setState({
      cannotDeleteYourselfValidation: false,
    });
  }
  ;

  render() {
    return (
      <section>
        <Modal
          show={this.props.deleteAdministratorClicked}
          onHide={() => {
            this.props.setDeleteAdministratorClicked(false);
            this.resetState();
          }
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>Obriši administratora</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ControlLabel>Odaberi administratora</ControlLabel>
            <FormGroup controlId="formControlsSelect">
              <FormControl
                componentClass='select'
                placeholder='Odaberi'
                onChange={this.handleChangeSelectedAdministrator}
              >
                <option value="select">Odaberi</option>
                {
                  this.props.administrators
                    .map(administrator => {
                      const fullName = administrator.firstName + " " + administrator.lastName + " - " + administrator.mail;
                      return (
                        <option key={administrator.id} value={administrator.id}>
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
                          <p><b>Ime:</b> {this.state.selectedAdministrator.firstName}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Prezime:</b> {this.state.selectedAdministrator.lastName}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Mail:</b> {this.state.selectedAdministrator.mail}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  </ListGroup>
                  <Choose>
                    <When condition={this.state.cannotDeleteYourselfValidation}>
                      <Alert bsStyle="danger" onDismiss={() => this.handleAlertDismiss()}>
                        <h4>Ne možete obrisati sami sebe</h4>
                        <p>Samo vas drugi administrator može obrisati</p>
                      </Alert>
                    </When>
                  </Choose>
                  <Row>
                    <Col mdOffset={1} md={4}>
                      <Button onClick={() => this.handleDelete()}>Obriši administratora</Button>
                    </Col>
                    <Col md={4}>
                      <Button onClick={() => {
                        this.props.setDeleteAdministratorClicked(false);
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
    administrators: state.administrators,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteAdministrator: id => dispatch(deleteAdministrator(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAdministrator);
