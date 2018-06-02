import React from 'react';
import {Col, FormGroup, ListGroup, ListGroupItem, Modal, Row, Alert} from 'react-bootstrap';
import * as styles from './viewReferral.css'

class ViewReferral extends React.Component {
  render() {
    return (
      <section>
        <Modal
          show={this.props.viewReferralClicked}
          onHide={() => this.props.resetState()}
        >
          <Choose>
            <When condition={this.props.referralSelected}>
              <Modal.Header closeButton>
                <Modal.Title className={styles.modalTitle}>
                  Pregled uputnice
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FormGroup controlId="formControlsSelect">
                  <ListGroup>
                    <Row>
                      <Col md={12}>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Pacijent:</b> {this.props.referral.patient.firstName} {this.props.referral.patient.lastName}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Vrsta uputnice:</b> {this.props.referral.referralGroup}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Podvrsta uputnice:</b> {this.props.referral.referralName}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Row>
                            <Col md={12}>
                              <p><b>Datum kreiranja:</b> {this.props.referral.createdOn}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                      </Col>
                    </Row>
                  </ListGroup>
                </FormGroup>
              </Modal.Body>
            </When>
            <Otherwise>
              <Alert className={styles.alert} bsStyle="danger">
                <p>Morate odabrati uputnicu.</p>
              </Alert>
            </Otherwise>
          </Choose>
        </Modal>
      </section>
    );
  }
}

export default ViewReferral;
