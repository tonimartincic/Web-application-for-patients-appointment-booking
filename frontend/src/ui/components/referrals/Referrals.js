import React from 'react';
import {connect} from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {Col, Grid, Row} from 'react-bootstrap';
import AddEditDeleteButtons from '../buttons/addEditDeleteButtons/AddEditDeleteButtons';
import NavigationBar from '../navigationBar/NavigationBar';
import ViewReferral from './view/ViewReferral';
import AddEditReferral from './addEdit/AddEditReferral';
import DeleteReferral from './delete/DeleteReferral';
import {addReferral, editReferral, deleteReferral} from '../../../actionCreators/referrals/referralsActionCreators';
import * as styles from './referrals.css'
import * as colors from '../../../constants/colors';
import * as tables from '../../../constants/tables';

class Referrals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      referral: null,
      referralSelected: false,

      addReferralClicked: false,
      editReferralClicked: false,
      deleteReferralClicked: false,
    };

    this.setReferral = this.setReferral.bind(this);
    this.setAddReferralClicked = this.setAddReferralClicked.bind(this);
    this.setEditReferralClicked = this.setEditReferralClicked.bind(this);
    this.setDeleteReferralClicked = this.setDeleteReferralClicked.bind(this);
  }

  resetState = () =>
    this.setState({
      referral: null,
      addReferralClicked: false,
      editReferralClicked: false,
      deleteReferralClicked: false,
    });

  setReferral = row =>
    this.setState({
      referral: row,
    });

  setAddReferralClicked = value =>
    this.setState({
      addReferralClicked: value,
    });

  setEditReferralClicked = value =>
    this.setState({
      editReferralClicked: value,
    });

  setDeleteReferralClicked = value =>
    this.setState({
      deleteReferralClicked: value,
    });

  handleDelete = () => {
    this.props.deleteReferral(this.state.referral.id);
    this.setDeleteReferralClicked(false);
    this.resetState();
  };

  render() {
    const columns = [{
      dataField: 'id',
      text: 'ID',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    }, {
      dataField: 'patient.firstName',
      text: 'Ime pacijenta',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    }, {
      dataField: 'patient.lastName',
      text: 'Prezime pacijenta',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    }, {
      dataField: 'referralGroup',
      text: 'Vrsta uputnice',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    },{
      dataField: 'referralName',
      text: 'Podvrsta uputnice',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    },{
      dataField: 'createdOn',
      text: 'Datum kreiranja',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    }];

    const selectRow = {
      mode: 'radio',
      clickToSelect: true,
      bgColor: colors.SELECTED_ROW,

      onSelect: this.setReferral,
      selected: this.state.referral === null ? null : [this.state.referral.id],
    };

    return (
      <section>
        <NavigationBar/>
        <Grid>
          {/*<ViewReferral*/}
            {/*referral={this.state.referral}*/}
            {/*addReferralClicked={this.state.addReferralClicked}*/}
            {/*setAddReferralClicked={value => this.setAddReferralClicked(value)}*/}
          {/*/>*/}
          <AddEditReferral
            referral={this.state.referral}
            referralSelected={this.state.referralSelected}

            addReferralClicked={this.state.addReferralClicked}
            setAddReferralClicked={value => this.setAddReferralClicked(value)}
            editReferralClicked={this.state.editReferralClicked}
            setEditReferralClicked={value => this.setEditReferralClicked(value)}

            resetState={() => this.resetState()}
          />
          <DeleteReferral
            referral={this.state.referral}
            referralSelected={this.state.referralSelected}

            deleteReferralClicked={this.state.deleteReferralClicked}
            setDeleteReferralClicked={value => this.setDeleteReferralClicked(value)}

            resetState={() => this.resetState()}
            handleDelete={() => this.handleDelete()}
          />
          <Row>
            <Col md={12}>
              <h2 className={styles.h2}>Uputnice</h2>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <BootstrapTable
                keyField='id'
                data={this.props.referrals}
                columns={columns}
                striped hover condensed bordered
                pagination={paginationFactory(tables.PAGINATION_OPTIONS)}
                selectRow={selectRow}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <AddEditDeleteButtons
                setAddClicked={value => this.setAddReferralClicked(value)}
                setEditClicked={value => this.setEditReferralClicked(value)}
                setDeleteClicked={value => this.setDeleteReferralClicked(value)}
              />
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    referrals: state.referrals,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addReferral: referral => dispatch(addReferral(referral)),
    editReferral: referral => dispatch(editReferral(referral)),
    deleteReferral: id => dispatch(deleteReferral(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Referrals);
