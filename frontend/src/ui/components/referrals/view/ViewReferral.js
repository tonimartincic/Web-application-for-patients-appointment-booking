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
              <Modal.Body>
                <FormGroup controlId="formControlsSelect">
                  <ListGroup>
                    <Row>
                      <Col md={12}>
                        <section className={styles.section}>
                          <span className={styles.span}>PACIJENT</span>
                        </section>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Ime i prezime:</b> {this.props.referral.patient.firstName} {this.props.referral.patient.lastName}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>OIB:</b> {this.props.referral.patient.oib}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Spol:</b> {this.props.referral.patient.sex}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Datum rođenja:</b> {this.props.referral.patient.dateOfBirth}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Mail:</b> {this.props.referral.patient.mail}</p>
                        </ListGroupItem>
                      </Col>
                      <Col md={6}>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Grad:</b> {this.props.referral.patient.addressData.city}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Poštanski broj:</b> {this.props.referral.patient.addressData.postalCode}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Ulica:</b> {this.props.referral.patient.addressData.street}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Kućni broj:</b> {this.props.referral.patient.addressData.streetNumber}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Telefonski broj:</b> {this.props.referral.patient.phoneNumber}</p>
                        </ListGroupItem>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <section className={styles.section}>
                          <span className={styles.span}>UPUTNICA ZA</span>
                        </section>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Vrsta uputnice:</b> {this.props.referral.referralGroup}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Podvrsta uputnice:</b> {this.props.referral.referralName}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Odjel:</b> {this.props.referral.departmentType}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Dijagnoza:</b> {this.props.referral.diagnosis}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Napomena:</b> {this.props.referral.remark}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Datum kreiranja:</b> {this.props.referral.createdOn}</p>
                        </ListGroupItem>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <section className={styles.section}>
                          <span className={styles.span}>SPECIJALIST OBITELJSKE MEDICINE</span>
                        </section>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Ime i prezime:</b> {this.props.referral.generalPractitioner.firstName} {this.props.referral.generalPractitioner.lastName}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Mail:</b> {this.props.referral.generalPractitioner.mail}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Telefonski broj:</b> {this.props.referral.generalPractitioner.phoneNumber}</p>
                        </ListGroupItem>
                      </Col>
                      <Col md={6}>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Grad:</b> {this.props.referral.generalPractitioner.addressData.city}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Poštanski broj:</b> {this.props.referral.generalPractitioner.addressData.postalCode}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Ulica:</b> {this.props.referral.generalPractitioner.addressData.street}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Kućni broj:</b> {this.props.referral.generalPractitioner.addressData.streetNumber}</p>
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
