import React from 'react';
import {connect} from 'react-redux';
import {Modal} from 'react-bootstrap';

class AddPatient extends React.Component {
  render() {
    return (
      <section>
        <Modal
          show={this.props.addPatientClicked}
          onHide={() => {
            this.props.setAddPatientClicked(false);
            this.resetState();
          }
          }
        >
        </Modal>
      </section>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPatient);
