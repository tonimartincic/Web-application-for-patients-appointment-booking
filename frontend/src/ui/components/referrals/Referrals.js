import React from 'react';
import {connect} from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {Col, Grid, Row} from 'react-bootstrap';
import AddEditDeleteButtons from '../buttons/addEditDeleteButtons/AddEditDeleteButtons';
import NavigationBar from '../navigationBar/NavigationBar';
import AddReferral from './add/AddReferral';
import ViewReferral from './view/ViewReferral';
import EditReferral from './edit/EditReferral';
import DeleteReferral from './delete/DeleteReferral';
import * as styles from './referrals.css'
import * as colors from '../../../constants/colors';
import * as tables from '../../../constants/tables';

class Referrals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      referral: null,
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
          <AddReferral
            addReferralClicked={this.state.addReferralClicked}
            setAddReferralClicked={value => this.setAddReferralClicked(value)}
          />
          {/*<ViewReferral*/}
            {/*referral={this.state.referral}*/}
            {/*addReferralClicked={this.state.addReferralClicked}*/}
            {/*setAddReferralClicked={value => this.setAddReferralClicked(value)}*/}
          {/*/>*/}
          <EditReferral
            referral={this.state.referral}
            editReferralClicked={this.state.editReferralClicked}
            setEditReferralClicked={value => this.setEditReferralClicked(value)}
            resetState={() => this.resetState()}
          />
          <DeleteReferral
            referral={this.state.referral}
            deleteReferralClicked={this.state.deleteReferralClicked}
            setDeleteReferralClicked={value => this.setDeleteReferralClicked(value)}
            resetState={() => this.resetState()}
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
                striped
                hover
                condensed
                bordered
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

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Referrals);
