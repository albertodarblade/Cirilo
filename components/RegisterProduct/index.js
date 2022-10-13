import TextField from "@mui/material/TextField";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { Actions, Section } from "./styles";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react";

import {
  useGetProductsQuery,
  useRegisterProductMutation,
} from "store/queries/products";
import { useRef, useState } from "react";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { globalSelector, onViewChange } from "store/slices/global";
import { useRegisterSaleMutation } from "store/queries/sales";

const steps = ["Seleciona el producto", "Define el precio"];

export default function RegisterProduct({ date }) {
  const session = useSession();
  const dispatch = useDispatch();
  const state = useSelector(globalSelector);
  const { data: registeredProducts = [] } = useGetProductsQuery();
  const [registerProduct] = useRegisterProductMutation();
  const [registerSale] = useRegisterSaleMutation();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productName, setProductName] = useState("");

  const [price, setPrice] = useState("");

  function handleChange(event, value) {
    setSelectedProduct(value);
  }

  async function handleRegister(event) {
    const { data: registeredProduct } = await registerProduct({
      name: productName,
      lastPrice: 0,
      priceRecords: [],
    });

    setSelectedProduct(registeredProduct);
    inputRef.current?.querySelector("input")?.blur();
  }

  const stepValue = calculateStepValue();
  const inputRef = useRef(null);

  function calculateStepValue() {
    if (selectedProduct && price) {
      return 2;
    }
    if (Boolean(selectedProduct)) {
      return 1;
    }

    return 0;
  }

  function handleInputChange(event) {
    setProductName(event?.target?.value || "");
  }

  function toggleRegisterForm() {
    dispatch(onViewChange({ showSellRegister: !state.view.showSellRegister }));
  }

  async function handleRegisterSale() {
    if (!selectedProduct || !price) {
      return;
    }
    const payload = {
      date: date,
      productId: selectedProduct._id,
      name: selectedProduct.name,
      price: price,
      owner: session.data.user,
    };
    await registerSale(payload);
    toggleRegisterForm();
  }
  return (
    <>
      <Stepper activeStep={stepValue} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Section>
        <Autocomplete
          value={selectedProduct}
          onInputChange={handleInputChange}
          noOptionsText={
            <Button
              onClick={handleRegister}
              color="secondary"
              variant="outlined"
              sx={{
                width: "100%",
              }}
              startIcon={<AppRegistrationIcon />}
            >
              Registrar {productName}
            </Button>
          }
          onChange={handleChange}
          id="product-register"
          getOptionLabel={(product) => product.name}
          options={registeredProducts}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Producto"
              autoComplete="off"
              ref={inputRef}
              color="secondary"
            />
          )}
        />
      </Section>

      <Section>
        {stepValue >= 1 && (
          <TextField
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            label="Precio de la venta"
            autoComplete="off"
            color="secondary"
          />
        )}

        <Actions>
          <Button color="inherit" onClick={toggleRegisterForm}>
            Cancelar
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={handleRegisterSale}
            disabled={!price || !selectedProduct}
          >
            Registrar Venta
          </Button>
        </Actions>
      </Section>
    </>
  );
}
