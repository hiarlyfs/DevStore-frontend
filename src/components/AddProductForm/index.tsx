/* eslint-disable react/prop-types */
import React, { useState, useCallback, useEffect } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import ImageUploader from 'react-images-upload';

import { Dispatch } from 'redux';

import {
  selectErrorAddingProduct,
  selectNewProductAdded,
  selectIsAddingNewProduct,
} from '../../redux/newProduct/newProduct.selectors';
import {
  addProductStart,
  clearReduxState,
} from '../../redux/newProduct/newProduct.actions';
import { INewProduct } from '../../redux/newProduct/newProduct.interfaces';

import useStyles from './styles';
import { Product } from '../../types/Products';
import { IReducer } from '../../redux/root-reducer.interface';

interface IMapDispatchToProps {
  addProduct: (product: INewProduct) => void;
  clearRedux: () => void;
}

interface IMapStateToProps {
  isAdding: boolean;
  error: Error | null;
  product: Product | null;
}

interface IProps extends IMapStateToProps, IMapDispatchToProps {}

const AddProductForm: React.FC<IProps> = ({
  addProduct,
  error,
  isAdding,
  product,
  clearRedux,
}: IProps) => {
  const styles = useStyles();

  const [picture, setPicture] = useState<Blob | null>(null);
  const [productName, setProductName] = useState<string>('');
  const [productPrice, setProductPrice] = useState<string>('');
  const [productCategory, setProductCategory] = useState<string>('');
  const [showErrorSnackbar, setShowErrorSnackbar] = useState(false);
  const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);

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
      setProductPrice(event.target.value);
    },
    [],
  );

  const onChangeProductCategory = useCallback(
    (
      event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>,
    ): void => {
      setProductCategory(event.target.value as string);
    },
    [],
  );

  const openErrorSnackbar = useCallback(() => setShowErrorSnackbar(true), []);
  const openSuccessSnackbar = useCallback(
    () => setShowSuccessSnackbar(true),
    [],
  );

  const closeErrorSnackbar = useCallback(() => setShowErrorSnackbar(false), []);

  const closeSuccessSnackbar = useCallback(
    () => setShowSuccessSnackbar(false),
    [],
  );

  const clearInputs = useCallback(() => {
    setPicture(null);
    setProductName('');
    setProductPrice('');
    setProductCategory('');

    // This block clear the image in the image preview of react-upload-image
    const imgPreview = document.getElementsByClassName(
      'deleteImage',
    )[0] as HTMLDivElement;

    imgPreview.click();
  }, []);

  // Show to user the result of the add new product;
  useEffect(() => {
    if (!isAdding && !error && product) {
      clearInputs();
      openSuccessSnackbar();
    }

    if (error) openErrorSnackbar();
  }, [
    error,
    product,
    isAdding,
    clearInputs,
    openSuccessSnackbar,
    openErrorSnackbar,
  ]);

  // Clear the new product redux state when the component will ummount
  // This will avoid the sate be saved, like the error, and any snackbar
  // be display due to the before user interact.
  useEffect(() => {
    return () => clearRedux();
  }, [clearRedux]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    addProduct({
      img: picture as Blob,
      productName,
      productCategory,
      productPrice,
    });
  };

  return (
    <form onSubmit={onSubmit} className={styles.formContainer}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={showSuccessSnackbar}
        onClose={closeSuccessSnackbar}
      >
        <MuiAlert
          onClose={closeSuccessSnackbar}
          elevation={6}
          variant="filled"
          severity="success"
        >
          New Product added.
        </MuiAlert>
      </Snackbar>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={showErrorSnackbar}
        onClose={closeErrorSnackbar}
      >
        <MuiAlert
          onClose={closeErrorSnackbar}
          elevation={6}
          variant="filled"
          severity="error"
        >
          An error occured trying to create a new product.
        </MuiAlert>
      </Snackbar>

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
        <Typography className={styles.fieldTitle}>Product category</Typography>
        <Select
          required
          native
          value={productCategory}
          onChange={onChangeProductCategory}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value="frameworks">Frameworks</option>
          <option value="languages">Languages</option>
          <option value="tools">Tools</option>
        </Select>
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
      {isAdding && <CircularProgress className={styles.circularProgress} />}
    </form>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => ({
  addProduct: (product) => dispatch(addProductStart(product)),
  clearRedux: () => dispatch(clearReduxState()),
});

const mapStateToProps = createStructuredSelector<IReducer, IMapStateToProps>({
  error: selectErrorAddingProduct,
  isAdding: selectIsAddingNewProduct,
  product: selectNewProductAdded,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProductForm);
