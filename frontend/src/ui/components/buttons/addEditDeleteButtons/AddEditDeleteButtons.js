import React from 'react';
import {Button} from 'react-bootstrap';
import styles from './addEditDeleteButtons.css';

const AddEditDeleteButtons = props => (
  <section className={styles.section}>
    <Button
      className={styles.button}
      onClick={value => props.setAddClicked(value)}
    >
      <span className='glyphicon glyphicon-plus'/> Dodaj
    </Button>
    <Button
      className={styles.button}
      onClick={value => props.setEditClicked(value)}
    >
      <span className='glyphicon glyphicon-edit'/> Uredi
    </Button>
    <Button
      className={styles.button}
      onClick={value => props.setDeleteClicked(value)}
    >
      <span className='glyphicon glyphicon-trash'/> Obriši
    </Button>
  </section>
);

export default AddEditDeleteButtons;
