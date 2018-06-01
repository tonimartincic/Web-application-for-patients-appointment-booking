import React from 'react';
import {connect} from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {Col, Grid, Row} from 'react-bootstrap';
import AddEditDeleteButtons from '../buttons/addEditDeleteButtons/AddEditDeleteButtons';
import NavigationBar from '../navigationBar/NavigationBar';
import Footer from '../footer/Footer';
import AddReferral from './add/AddReferral';
import EditReferral from './edit/EditReferral';
import DeleteReferral from './delete/DeleteReferral';
import * as styles from './referrals.css'

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
    }, {
      dataField: 'patient.firstName',
      text: 'Ime pacijenta',
      sort: true,
    }, {
      dataField: 'patient.lastName',
      text: 'Prezime pacijenta',
      sort: true,
    }, {
      dataField: 'referralGroup',
      text: 'Vrsta uputnice',
      sort: true,
    },{
      dataField: 'referralName',
      text: 'Podvrsta uputnice',
      sort: true,
    },{
      dataField: 'createdOn',
      text: 'Datum kreiranja',
      sort: true,
    }];

    const options = {
      paginationSize: 4,
      pageStartIndex: 0,
      firstPageText: 'Prva',
      prePageText: 'Nazad',
      nextPageText: 'Naprijed',
      lastPageText: 'Zadnja',
      nextPageTitle: 'Prva stranica',
      prePageTitle: 'Prethodna stranica',
      firstPageTitle: 'Iduća stranica',
      lastPageTitle: 'Zadnja stranica',
      sizePerPageList: [{
        text: '5', value: 5
      }, {
        text: '10', value: 10
      }, {
        text: 'Sve', value: this.props.referrals.length
      }]
    };

    const selectRow = {
      mode: 'radio',
      clickToSelect: true,
      bgColor: '#467dd6',

      onSelect: this.setReferral,
      selected: this.state.referral === null ? null : [this.state.referral.id],
    };

    return (
      <section>
        <NavigationBar/>
        <Grid>
          <AddReferral
            referral={this.state.referral}
            addReferralClicked={this.state.addReferralClicked}
            setAddReferralClicked={value => this.setAddReferralClicked(value)}
          />
          <EditReferral
            referral={this.state.referral}
            editReferralClicked={this.state.editReferralClicked}
            setEditReferralClicked={value => this.setEditReferralClicked(value)}
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
                pagination={paginationFactory(options)}
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
        <Footer/>
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
