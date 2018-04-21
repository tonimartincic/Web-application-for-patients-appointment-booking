import React from 'react';
import {connect} from 'react-redux';
import {Modal} from 'react-bootstrap';

class AddMedicalSpecialist extends React.Component {
  render() {
    return (
      <section>
        <Modal
          show={this.props.addMedicalSpecialistClicked}
          onHide={() => {
            this.props.setAddMedicalSpecialistClicked(false);
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

export default connect(mapStateToProps, mapDispatchToProps)(AddMedicalSpecialist);
