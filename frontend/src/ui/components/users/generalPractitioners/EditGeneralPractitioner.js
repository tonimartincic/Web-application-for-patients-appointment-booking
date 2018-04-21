import React from 'react';
import {connect} from 'react-redux';
import {Modal} from 'react-bootstrap';

class EditGeneralPractitioner extends React.Component {
  render() {
    return (
      <section>
        <Modal
          show={this.props.editGeneralPractitionerClicked}
          onHide={() => {
            this.props.setEditGeneralPractitionerClicked(false);
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

export default connect(mapStateToProps, mapDispatchToProps)(EditGeneralPractitioner);
