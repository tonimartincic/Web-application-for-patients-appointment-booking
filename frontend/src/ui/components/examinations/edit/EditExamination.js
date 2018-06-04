import React from 'react';
import DatePicker from 'react-bootstrap-date-picker';
import {Button, Col, Collapse, ControlLabel, FormControl, FormGroup, Modal, Row, Alert} from 'react-bootstrap';
import * as constants from '../../../../constants/values';
import * as styles from './editExamination.css'

class EditExamination extends React.Component {
  render() {
    return (
      <section>
        <Modal
          show={this.props.editExaminationClicked}
          onHide={() => this.props.resetState()}
        >
          <Choose>
            <When condition={this.props.examinationSelected}>
              <Modal.Header closeButton>
                <Modal.Title className={styles.modalTitle}>Uredi pregled</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row>
                  <Col md={12}>
                    <FormGroup
                      controlId="formBasicText"
                    >
                      <ControlLabel>Status</ControlLabel>
                      <FormControl
                        componentClass="select"
                        placeholder="select"
                        onChange={this.props.handleChangeStatus}
                        value={this.props.examination.status}
                      >
                        {
                          this.props.examinationStatuses
                            .map((examinationStatus, index) =>
                              <option key={index} value={examinationStatus}>
                                {examinationStatus}
                              </option>
                            )
                        }
                      </FormControl>
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Termin</ControlLabel>
                      <DatePicker
                        value={this.props.examination.term}
                        dateFormat='DD-MM-YYYY'
                        weekStartsOn={1}
                        dayLabels={constants.datePickerDayNames}
                        monthLabels={constants.monthNames}
                        onChange={this.props.handleChangeTerm}
                      />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Bilješke</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Unesite bilješke"
                        onChange={this.props.handleChangeRemark}
                        value={this.props.examination.remark}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Modal.Body>
              <Modal.Footer>
                <Row>
                  <Col mdOffset={1} md={4}>
                    <Button
                      className={styles.button}
                      onClick={() => this.props.handleSubmit()}
                    >
                      <span className='glyphicon glyphicon-floppy-save'/> Spremi
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

export default EditExamination;
