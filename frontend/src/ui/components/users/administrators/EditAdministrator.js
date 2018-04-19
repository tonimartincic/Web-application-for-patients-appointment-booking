import React from 'react';
import {connect} from 'react-redux';
import {Modal} from 'react-bootstrap';

class EditAdministrator extends React.Component {
  render() {
    return (
      <section>
        <Modal
          show={this.props.editAdministratorClicked}
          onHide={() => {
            this.props.setEditAdministratorClicked(false);
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

export default connect(mapStateToProps, mapDispatchToProps)(EditAdministrator);
