import React from 'react';
import {Button} from 'react-bootstrap';
import styles from './editDeleteButtons.css';

const EditDeleteButtons = props => (
  <section className={styles.section}>
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

export default EditDeleteButtons;
