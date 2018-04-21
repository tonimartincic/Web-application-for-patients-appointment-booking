import React from 'react';
import {connect} from 'react-redux';
import {Modal} from 'react-bootstrap';

class EditPatient extends React.Component {
  render() {
    return (
      <section>
        <Modal
          show={this.props.editPatientClicked}
          onHide={() => {
            this.props.setEditPatientClicked(false);
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

export default connect(mapStateToProps, mapDispatchToProps)(EditPatient);
