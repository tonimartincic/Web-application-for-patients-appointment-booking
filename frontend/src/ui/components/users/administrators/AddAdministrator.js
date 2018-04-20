import React from 'react';
import {connect} from 'react-redux';
import {Modal} from 'react-bootstrap';

class AddAdministrator extends React.Component {
  render() {
    return (
      <section>
        <Modal
          show={this.props.addAdministratorClicked}
          onHide={() => {
            this.props.setAddAdministratorClicked(false);
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

export default connect(mapStateToProps, mapDispatchToProps)(AddAdministrator);
