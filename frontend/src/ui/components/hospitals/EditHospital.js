import React from 'react';
import {connect} from 'react-redux';
import {Modal} from 'react-bootstrap';

class EditHospital extends React.Component {
  render() {
    return (
      <section>
        <Modal
          show={this.props.editHospitalClicked}
          onHide={() => {
            this.props.setEditHospitalClicked(false);
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

export default connect(mapStateToProps, mapDispatchToProps)(EditHospital);
