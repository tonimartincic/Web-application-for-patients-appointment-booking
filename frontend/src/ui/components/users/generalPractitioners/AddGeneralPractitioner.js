import React from 'react';
import {connect} from 'react-redux';
import {Modal} from 'react-bootstrap';

class AddGeneralPractitioner extends React.Component {
  render() {
    return (
      <section>
        <Modal
          show={this.props.addGeneralPractitionerClicked}
          onHide={() => {
            this.props.setAddGeneralPractitionerClicked(false);
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

export default connect(mapStateToProps, mapDispatchToProps)(AddGeneralPractitioner);
