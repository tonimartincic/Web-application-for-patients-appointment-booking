import React from 'react';
import {connect} from 'react-redux';
import {Modal} from 'react-bootstrap';

class EditMedicalSpecialist extends React.Component {
  render() {
    return (
      <section>
        <Modal
          show={this.props.editMedicalSpecialistClicked}
          onHide={() => {
            this.props.setEditMedicalSpecialistClicked(false);
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

export default connect(mapStateToProps, mapDispatchToProps)(EditMedicalSpecialist);
