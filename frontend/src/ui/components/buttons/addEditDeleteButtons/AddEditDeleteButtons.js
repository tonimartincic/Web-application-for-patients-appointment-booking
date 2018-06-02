import React from 'react';
import {Button} from 'react-bootstrap';
import styles from './addEditDeleteButtons.css';

const AddEditDeleteButtons = props => (
  <section className={styles.section}>
    <Button
      className={styles.button}
      onClick={() => props.setAddClicked(true)}
    >
      <span className='glyphicon glyphicon-plus'/> Dodaj
    </Button>
    <Button
      className={styles.button}
      onClick={() => props.setEditClicked(true)}
    >
      <span className='glyphicon glyphicon-edit'/> Uredi
    </Button>
    <Button
      className={styles.button}
      onClick={() => props.setDeleteClicked(true)}
    >
      <span className='glyphicon glyphicon-trash'/> Obriši
    </Button>
  </section>
);

export default AddEditDeleteButtons;
