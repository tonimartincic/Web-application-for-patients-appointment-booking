import React from 'react';
import {Col, ListGroup, ListGroupItem, Modal, Row} from 'react-bootstrap';
import {connect} from 'react-redux'
import * as constants from '../../../../constants/values';
import * as styles from './userInfo.css'

class UserInfo extends React.Component {
  render() {
    return (
      <section>
        <Modal show={this.props.showUserInfoClicked}
               onHide={() => this.props.setShowUserInfoClicked(false)}>
          <Modal.Header closeButton>
            <Modal.Title className={styles.modalTitle}>
              O meni
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
              <ListGroupItem>
                <Row>
                  <Col md={11} mdOffset={1}>
                    <p><b>Ime:</b> {this.props.userData.firstName}</p>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col md={11} mdOffset={1}>
                    <p><b>Prezime:</b> {this.props.userData.lastName}</p>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col md={11} mdOffset={1}>
                    <p><b>Mail:</b> {this.props.userData.mail}</p>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col md={11} mdOffset={1}>
                    <p><b>Broj mobitela:</b> {this.props.userData.phoneNumber}</p>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col md={11} mdOffset={1}>
                    <p><b>Vrsta korisnika:</b> {this.props.userData.type}</p>
                  </Col>
                </Row>
              </ListGroupItem>
              <Choose>
                <When
                  condition=
                    {
                      this.props.userData.type === constants.PATIENT ||
                      this.props.userData.type === constants.GENERAL_PRACTITIONER
                    }
                >
                  <ListGroupItem>
                    <Row>
                      <Col md={11} mdOffset={1}>
                        <p><b>Grad:</b> {this.props.userData.city}</p>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col md={11} mdOffset={1}>
                        <p><b>Poštanski broj:</b> {this.props.userData.postalCode}</p>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col md={11} mdOffset={1}>
                        <p><b>Ulica:</b> {this.props.userData.street}</p>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col md={11} mdOffset={1}>
                        <p><b>Kućni broj:</b> {this.props.userData.streetNumber}</p>
                      </Col>
                    </Row>
                  </ListGroupItem>
                </When>
              </Choose>
            </ListGroup>
          </Modal.Body>
        </Modal>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
