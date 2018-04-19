import React from 'react';
import {Col, Modal, Row, Well} from 'react-bootstrap';
import {connect} from 'react-redux';
import {setShowingUserData} from '../../../actions/showingUserDataActions';

class UserData extends React.Component {
  render() {
    return (
      <section>
        <Modal show={this.props.showingUserData}
               onHide={() => this.props.setShowingUserData(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Informacije</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Well>
              <Row>
                <Col md={8} mdOffset={1}>
                  <h4>Ime:
                    {
                      ' ' + this.props.userData.firstName
                    }
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col md={8} mdOffset={1}>
                  <h4>Prezime:
                    {
                      ' ' + this.props.userData.lastName
                    }
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col md={8} mdOffset={1}>
                  <h4>Mail:
                    {
                      ' ' + this.props.userData.mail
                    }
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col md={8} mdOffset={1}>
                  <h4>Vrsta korisnika:
                    {
                      ' ' + this.props.userData.type
                    }
                  </h4>
                </Col>
              </Row>
            </Well>
          </Modal.Body>
        </Modal>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
    showingUserData: state.showingUserData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setShowingUserData: (value) => dispatch(setShowingUserData(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserData);
