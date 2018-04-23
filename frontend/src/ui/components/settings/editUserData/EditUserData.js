import React from 'react';
import {Modal} from 'react-bootstrap';
import {connect} from 'react-redux'

class EditUserData extends React.Component {
  render() {
    return (
      <Modal show={this.props.editUserDataClicked}
             onHide={() => this.props.setEditUserDataClicked(false)}>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserData);
