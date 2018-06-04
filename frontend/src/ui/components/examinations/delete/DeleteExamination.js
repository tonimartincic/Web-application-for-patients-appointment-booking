import React from 'react';
import {Button, Col, FormGroup, ListGroup, ListGroupItem, Modal, Row, Alert} from 'react-bootstrap';
import * as styles from './deleteExamination.css'

class DeleteExamination extends React.Component {
  render() {
    return (
      <section>
        <Modal
          show={this.props.deleteExaminationClicked}
          onHide={() => this.props.resetState()}
        >
          <Choose>
            <When condition={this.props.examinationSelected}>
              <Modal.Header closeButton>
                <Modal.Title className={styles.modalTitle}>
                  Obriši pregled
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FormGroup controlId="formControlsSelect">
                  <ListGroup>
                    <ListGroupItem>
                      <Row>
                        <Col md={12}>
                          <p><b>Status:</b> {this.props.examination.status}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={12}>
                          <p><b>Pacijent:</b> {this.props.examination.patient.firstName} {this.props.examination.patient.lastName}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={12}>
                          <p><b>Termin:</b> {this.props.examination.term}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={12}>
                          <p><b>Bilješke:</b> {this.props.examination.remark}</p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  </ListGroup>
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
                <p>Morate odabrati pregled.</p>
              </Alert>
            </Otherwise>
          </Choose>
        </Modal>
      </section>
    );
  }
}

export default DeleteExamination;
