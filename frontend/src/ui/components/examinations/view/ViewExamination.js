import React from 'react';
import {Col, FormGroup, ListGroup, ListGroupItem, Modal, Row, Alert} from 'react-bootstrap';
import * as styles from './viewExamination.css'

class ViewReferral extends React.Component {
  render() {
    return (
      <section>
        <Modal
          show={this.props.viewExaminationClicked}
          onHide={() => this.props.resetState()}
        >
          <Choose>
            <When condition={this.props.examinationSelected}>
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
                          <p><b>Ime i prezime:</b> {this.props.examination.patient.firstName} {this.props.examination.patient.lastName}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>OIB:</b> {this.props.examination.patient.oib}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Spol:</b> {this.props.examination.patient.sex}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Datum rođenja:</b> {this.props.examination.patient.dateOfBirth}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Mail:</b> {this.props.examination.patient.mail}</p>
                        </ListGroupItem>
                      </Col>
                      <Col md={6}>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Grad:</b> {this.props.examination.patient.addressData.city}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Poštanski broj:</b> {this.props.examination.patient.addressData.postalCode}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Ulica:</b> {this.props.examination.patient.addressData.street}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Kućni broj:</b> {this.props.examination.patient.addressData.streetNumber}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Telefonski broj:</b> {this.props.examination.patient.phoneNumber}</p>
                        </ListGroupItem>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <section className={styles.section}>
                          <span className={styles.span}>INFORMACIJE O PREGLEDU</span>
                        </section>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Status:</b> {this.props.examination.status}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Termin:</b> {this.props.examination.term}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Bolnica:</b> {this.props.examination.hospital.name}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Odjel:</b> {this.props.examination.referral.departmentType}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Bilješke:</b> {this.props.examination.remark}</p>
                        </ListGroupItem>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <section className={styles.section}>
                          <span className={styles.span}>LIJEČNIK SPECIJALIST</span>
                        </section>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Ime i prezime:</b> {this.props.examination.medicalSpecialist.firstName} {this.props.examination.medicalSpecialist.lastName}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Mail:</b> {this.props.examination.medicalSpecialist.mail}</p>
                        </ListGroupItem>
                        <ListGroupItem className={styles.listGroupItem}>
                          <p><b>Telefonski broj:</b> {this.props.examination.medicalSpecialist.phoneNumber}</p>
                        </ListGroupItem>
                      </Col>
                    </Row>
                  </ListGroup>
                </FormGroup>
              </Modal.Body>
            </When>
            <Otherwise>
              <Alert className={styles.alert} bsStyle="danger">
                <p>Morate odabrati pregled.</p>
              </Alert>
            </Otherwise>
          </Choose>
        </Modal>
      </section>
    );
  }
}

export default ViewReferral;
