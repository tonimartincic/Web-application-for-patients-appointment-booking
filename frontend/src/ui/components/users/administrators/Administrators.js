import React from 'react';
import {connect} from 'react-redux';
import {Button, Col, Grid, Row, Table} from 'react-bootstrap';
import NavigationBar from '../../navigationBar/NavigationBar';
import Footer from '../../footer/Footer';
import AddAdministrator from './AddAdministrator';
import EditAdministrator from './EditAdministrator';
import DeleteAdministrator from './DeleteAdministrator';
import * as styles from './administrators.css'

class Administrators extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addAdministratorClicked: false,
      editAdministratorClicked: false,
      deleteAdministratorClicked: false,
    };

    this.setAddAdministratorClicked = this.setAddAdministratorClicked.bind(this);
    this.setEditAdministratorClicked = this.setEditAdministratorClicked.bind(this);
    this.setDeleteAdministratorClicked = this.setDeleteAdministratorClicked.bind(this);
  }

  setAddAdministratorClicked = value =>
    this.setState({
      addAdministratorClicked: value,
    });

  setEditAdministratorClicked = value =>
    this.setState({
      editAdministratorClicked: value,
    });

  setDeleteAdministratorClicked = value =>
    this.setState({
      deleteAdministratorClicked: value,
    });

  render() {
    return (
      <section>
        <NavigationBar/>
        <Grid>
          <Row>
            <Col md={12}>
              <Table striped bordered condensed hover>
                <thead>
                <tr>
                  <th>Ime</th>
                  <th>Prezime</th>
                  <th>Mail</th>
                  <th>Broj mobitela</th>
                </tr>
                </thead>
                <tbody>
                {
                  this.props.administrators
                    .map((administrator, index) => {
                        return (
                          <tr key={index}>
                            <td>{administrator.firstName}</td>
                            <td>{administrator.lastName}</td>
                            <td>{administrator.mail}</td>
                            <td>{administrator.phoneNumber}</td>
                          </tr>)
                      }
                    )
                }
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <div>
              <Col md={8} mdOffset={3}>
                <Button
                  className={styles.button}
                  onClick={value => this.setAddAdministratorClicked(value)}
                >
                  Dodaj
                </Button>
                <Button
                  className={styles.button}
                  onClick={value => this.setEditAdministratorClicked(value)}
                >
                  Uredi
                </Button>
                <Button
                  className={styles.button}
                  onClick={value => this.setDeleteAdministratorClicked(value)}
                >
                  Obriši
                </Button>
              </Col>
            </div>
            <AddAdministrator
              addAdministratorClicked={this.state.addAdministratorClicked}
              setAddAdministratorClicked={value => this.setAddAdministratorClicked(value)}
            />
            <EditAdministrator
              editAdministratorClicked={this.state.editAdministratorClicked}
              setEditAdministratorClicked={value => this.setEditAdministratorClicked(value)}
            />
            <DeleteAdministrator
              deleteAdministratorClicked={this.state.deleteAdministratorClicked}
              setDeleteAdministratorClicked={value => this.setDeleteAdministratorClicked(value)}
            />
          </Row>
        </Grid>
        <Footer/>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    administrators: state.administrators,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Administrators);
