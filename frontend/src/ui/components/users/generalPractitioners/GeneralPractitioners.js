import React from 'react';
import {connect} from 'react-redux';
import {Col, Grid, Row, Table} from 'react-bootstrap';
import NavigationBar from '../../navigationBar/NavigationBar';
import Footer from '../../footer/Footer';
import AddGeneralPractitioner from './add/AddGeneralPractitioner';
import EditGeneralPractitioner from './edit/EditGeneralPractitioner';
import DeleteGeneralPractitioner from './delete/DeleteGeneralPractitioner';
import AddEditDeleteButtons from '../../buttons/addEditDeleteButtons/AddEditDeleteButtons';
import * as styles from './generalPractitioners.css';

class GeneralPractitioners extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addGeneralPractitionerClicked: false,
      editGeneralPractitionerClicked: false,
      deleteGeneralPractitionerClicked: false,
    };

    this.setAddGeneralPractitionerClicked = this.setAddGeneralPractitionerClicked.bind(this);
    this.setEditGeneralPractitionerClicked = this.setEditGeneralPractitionerClicked.bind(this);
    this.setDeleteGeneralPractitionerClicked = this.setDeleteGeneralPractitionerClicked.bind(this);
  }

  setAddGeneralPractitionerClicked = value =>
    this.setState({
      addGeneralPractitionerClicked: value,
    });

  setEditGeneralPractitionerClicked = value =>
    this.setState({
      editGeneralPractitionerClicked: value,
    });

  setDeleteGeneralPractitionerClicked = value =>
    this.setState({
      deleteGeneralPractitionerClicked: value,
    });

  render() {
    return (
      <section>
        <NavigationBar/>
        <Grid>
          <AddGeneralPractitioner
            addGeneralPractitionerClicked={this.state.addGeneralPractitionerClicked}
            setAddGeneralPractitionerClicked={value => this.setAddGeneralPractitionerClicked(value)}
          />
          <EditGeneralPractitioner
            editGeneralPractitionerClicked={this.state.editGeneralPractitionerClicked}
            setEditGeneralPractitionerClicked={value => this.setEditGeneralPractitionerClicked(value)}
          />
          <DeleteGeneralPractitioner
            deleteGeneralPractitionerClicked={this.state.deleteGeneralPractitionerClicked}
            setDeleteGeneralPractitionerClicked={value => this.setDeleteGeneralPractitionerClicked(value)}
          />
          <Row>
            <Col md={12}>
              <h2 className={styles.h2}>Specijalisti obiteljske medicine</h2>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Table striped bordered condensed hover>
                <thead>
                <tr>
                  <th>Ime</th>
                  <th>Prezime</th>
                  <th>Mail</th>
                  <th>Grad</th>
                  <th>Poštanski broj</th>
                  <th>Ulica</th>
                  <th>Kućni Broj</th>
                  <th>Broj mobitela</th>
                </tr>
                </thead>
                <tbody>
                {
                  this.props.generalPractitioners
                    .map((generalPractitioner, index) => {
                        return (
                          <tr key={index}>
                            <td>{generalPractitioner.firstName}</td>
                            <td>{generalPractitioner.lastName}</td>
                            <td>{generalPractitioner.mail}</td>
                            <td>{generalPractitioner.city}</td>
                            <td>{generalPractitioner.postalCode}</td>
                            <td>{generalPractitioner.street}</td>
                            <td>{generalPractitioner.streetNumber}</td>
                            <td>{generalPractitioner.phoneNumber}</td>
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
                setAddClicked={value => this.setAddGeneralPractitionerClicked(value)}
                setEditClicked={value => this.setEditGeneralPractitionerClicked(value)}
                setDeleteClicked={value => this.setDeleteGeneralPractitionerClicked(value)}
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
    generalPractitioners: state.generalPractitioners,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralPractitioners);
