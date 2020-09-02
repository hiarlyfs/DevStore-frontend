import React, { useState, useCallback } from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ImageUploader from 'react-images-upload';

import { createProduct } from '../../services/api/apiAdmin';

import useStyles from './styles';

const AddProductForm: React.FC = () => {
  const styles = useStyles();

  const [picture, setPicture] = useState<File>();
  const [productName, setProductName] = useState<string>('');
  const [productPrice, setProductPrice] = useState<number>(0);

  const onDrop = useCallback((files: File[]): void => {
    setPicture(files[0]);
  }, []);

  const onChangeProductName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setProductName(event.target.value);
    },
    [],
  );

  const onChangeProductPrice = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setProductPrice(Number.parseFloat(event.target.value));
    },
    [],
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    createProduct({
      productName,
      productPrice,
      img: picture,
    });
  };

  return (
    <form onSubmit={onSubmit} className={styles.formContainer}>
      <Box className={styles.fieldContainer}>
        <Typography className={styles.fieldTitle}>Product name</Typography>
        <TextField
          value={productName}
          onChange={onChangeProductName}
          required
          fullWidth
          label="name"
        />
      </Box>
      <Box className={styles.fieldContainer}>
        <Typography className={styles.fieldTitle}>Product price</Typography>
        <TextField
          value={productPrice}
          onChange={onChangeProductPrice}
          required
          fullWidth
          type="number"
          label="price"
        />
      </Box>
      <Box className={styles.fieldContainer}>
        <Typography className={styles.fieldTitle}>Product Image</Typography>
        <ImageUploader
          withIcon
          buttonText="Choose image"
          onChange={onDrop}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
          singleImage
          withPreview
        />
      </Box>
      <Button className={styles.btSubmit} type="submit" variant="outlined">
        Create product
      </Button>
    </form>
  );
};

export default AddProductForm;
