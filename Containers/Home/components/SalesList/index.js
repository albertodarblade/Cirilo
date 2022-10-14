import {
  Sale,
  Price,
  Name,
  Total,
  ListContent,
  DateHeader,
  Action,
  Actions,
} from "./styles";
import { useDeleteSaleMutation, useGetSalesQuery } from "store/queries/sales";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { globalSelector, onViewChange } from "store/slices/global";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import dayjs from "dayjs";
import isTomorrow from "dayjs/plugin/isTomorrow";
import Placeholder from "components/Placeholder";
import RegisterProduct from "components/RegisterProduct";
import CreateIcon from "@mui/icons-material/Create";
import Button from "@mui/material/Button";
dayjs.extend(isTomorrow);

export default function SalesList() {
  const dispatch = useDispatch();
  const state = useSelector(globalSelector);

  function toggleRegisterForm() {
    dispatch(onViewChange({ showSellRegister: !state.view.showSellRegister }));
  }
  const [index, setIndex] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const [deleteSale] = useDeleteSaleMutation();

  const [date, setDate] = useState(new Date().toISOString());
  const { data: sales = [] } = useGetSalesQuery({
    startDate: date,
    endDate: date,
  });
  const total = sales.reduce((acc, item) => {
    acc = item.price + acc;
    return acc;
  }, 0);

  function handleDateChange(value) {
    const oldDate = new Date(date);
    oldDate.setDate(oldDate.getDate() + value);
    if (dayjs(oldDate).isTomorrow()) {
      return;
    }
    setDate(oldDate.toISOString());
  }

  function handleChange(index) {
    if (index === 1) {
      return;
    }

    if (index === 0) {
      handleDateChange(-1);
    }

    if (index === 2) {
      handleDateChange(1);
    }
    setIndex(index);
    setTimeout(() => {
      setIndex(1);
    });
  }

  function handleDelete(saleId) {
    return deleteSale(saleId);
  }
  return (
    <SwipeableViews hysteresis={0.3} onChangeIndex={handleChange} index={index}>
      <div></div>
      <ListContent>
        <DateHeader>
          <IconButton onClick={() => handleDateChange(-1)}>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <span>Ventas del {dayjs(date).format("D MMM YYYY")}</span>
          <IconButton onClick={() => handleDateChange(1)}>
            <KeyboardArrowRightIcon />
          </IconButton>
        </DateHeader>

        {!state.view.showSellRegister && (
          <Action>
            <Button
              onClick={toggleRegisterForm}
              variant={"contained"}
              startIcon={<CreateIcon />}
            >
              Registrar Venta
            </Button>
          </Action>
        )}

        {state.view.showSellRegister && <RegisterProduct date={date} />}
        {sales.map((sale) => (
          <Sale key={sale._id} onClick={() => setSelectedItem(sale._id)}>
            <Avatar src={sale.owner.image} />
            <Name>{sale.name}</Name>
            <Price>{sale.price} Bs.</Price>
            {sale._id === selectedItem && (
              <Actions>
                <IconButton
                  color="error"
                  onClick={() => handleDelete(sale._id)}
                >
                  <DeleteForeverIcon />
                </IconButton>
              </Actions>
            )}
          </Sale>
        ))}
        {Boolean(sales.length) && (
          <Total>
            <span>Total:</span>
            <Price>{total} Bs.</Price>
          </Total>
        )}

        {Boolean(!sales.length) && (
          <Placeholder variant="project" title="No hay ventas registradas" />
        )}
      </ListContent>
      <div></div>
    </SwipeableViews>
  );
}
