import React from 'react';
import {Alert, Button, Col, FormGroup, ListGroup, ListGroupItem, Modal, Row} from 'react-bootstrap';
import * as styles from './deleteAdministrator.css'

class DeleteAdministrator extends React.Component {
  render() {
    return (
      <section>
        <Modal
          show={this.props.deleteAdministratorClicked}
          onHide={() => this.props.resetState()}
        >
          <Choose>
            <When condition={this.props.administratorSelected}>
              <Modal.Header closeButton>
                <Modal.Title>Obriši administratora</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FormGroup controlId="formControlsSelect">
                  <ListGroup>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Ime:</b> {this.props.administrator.firstName}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Prezime:</b> {this.props.administrator.lastName}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Mail:</b> {this.props.administrator.mail}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={7} mdOffset={1}>
                          <p><b>Broj mobitela:</b> {this.props.administrator.phoneNumber}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  </ListGroup>
                  <Choose>
                    <When condition={this.props.cannotDeleteYourselfValidation}>
                      <Alert bsStyle="danger" onDismiss={() => this.props.handleAlertDismiss()}>
                        <h4>Ne možete obrisati sami sebe</h4>
                        <p>Samo vas drugi administrator može obrisati</p>
                      </Alert>
                    </When>
                  </Choose>
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
                <p>Morate odabrati administratora.</p>
              </Alert>
            </Otherwise>
          </Choose>
        </Modal>
      </section>
    );
  }
}

export default DeleteAdministrator;
