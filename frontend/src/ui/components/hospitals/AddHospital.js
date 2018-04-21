import React from 'react';
import {connect} from 'react-redux';
import {Modal} from 'react-bootstrap';

class AddHospital extends React.Component {
  render() {
    return (
      <section>
        <Modal
          show={this.props.addHospitalClicked}
          onHide={() => {
            this.props.setAddHospitalClicked(false);
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

export default connect(mapStateToProps, mapDispatchToProps)(AddHospital);
