import React from 'react';
import {connect} from 'react-redux';
import {Col, Grid, Row, Table, Button} from 'react-bootstrap';
import NavigationBar from '../navigationBar/NavigationBar';
import Footer from '../footer/Footer';
import AddReferral from './add/AddReferral';
import EditReferral from './edit/EditReferral';
import DeleteReferral from './delete/DeleteReferral';
import AddEditDeleteButtons from '../buttons/addEditDeleteButtons/AddEditDeleteButtons';
import * as styles from './referrals.css'

class Referrals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addReferralClicked: false,
      editReferralClicked: false,
      deleteReferralClicked: false,
    };

    this.setAddReferralClicked = this.setAddReferralClicked.bind(this);
    this.setEditReferralClicked = this.setEditReferralClicked.bind(this);
    this.setDeleteReferralClicked = this.setDeleteReferralClicked.bind(this);
  }

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
    return (
      <section>
        <NavigationBar/>
        <Grid>
          <AddReferral
            addReferralClicked={this.state.addReferralClicked}
            setAddReferralClicked={value => this.setAddReferralClicked(value)}
          />
          <EditReferral
            editReferralClicked={this.state.editReferralClicked}
            setEditReferralClicked={value => this.setEditReferralClicked(value)}
          />
          <DeleteReferral
            deleteReferralClicked={this.state.deleteReferralClicked}
            setDeleteReferralClicked={value => this.setDeleteReferralClicked(value)}
          />
          <Row>
            <Col md={12}>
              <h2 className={styles.h2}>Uputnice</h2>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Table striped bordered condensed hover>
                <thead>
                <tr>
                  <th>Pacijent</th>
                  <th>Vrsta uputnice</th>
                  <th>Datum kreiranja</th>
                </tr>
                </thead>
                <tbody>
                {
                  this.props.referrals
                    .map((referral, index) => {
                        return (
                          <tr key={index}>
                            <td>{referral.patient.firstName} {referral.patient.lastName}</td>
                            <td>{referral.referralName}</td>
                            <td>{referral.createdOn}</td>
                            <td>
                              <Button>
                                Pregledaj
                              </Button>
                            </td>
                          </tr>)
                      }
                    )
                }
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col md={8} mdOffset={3}>
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
