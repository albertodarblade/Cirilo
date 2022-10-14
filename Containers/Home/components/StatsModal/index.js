import { Avatar, Button, Dialog, DialogTitle, IconButton } from "@mui/material";
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";
import { useGetSalesQuery } from "store/queries/sales";
import {
  Actions,
  Amount,
  Calendar,
  DateDetail,
  DetailsText,
  SaleDetail,
} from "./styles";
import arrayHelper from "helpers/array";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";

export default function StatsModal({ open, onClose }) {
  const [skipRequest, setSkipRequest] = useState(true);

  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    color: "#2EAD4B",
    key: "selection",
  });

  const { data: sales = [] } = useGetSalesQuery(
    {
      startDate: selectionRange.startDate.toISOString(),
      endDate: selectionRange.endDate.toISOString(),
    },
    { skip: skipRequest }
  );
  function handleRange(value) {
    setSkipRequest(true);
    setSelectionRange(value.selection);
  }

  const groupedSales = arrayHelper.groupBy(
    sales,
    (sale) => `${sale.productId}}`
  );

  const productKeys = Object.keys(groupedSales) || [];
  const reportRef = useRef(null);

  useEffect(() => {
    reportRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [sales]);
  return (
    <Dialog open={open} onClose={onClose} fullScreen fullWidth>
      <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
        Reporte de ventas
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Calendar>
        <DateRangePicker
          direction="horizontal"
          showDateDisplay={false}
          showMonthArrow={false}
          scroll={{ enabled: true }}
          ranges={[selectionRange]}
          onChange={handleRange}
        />

        <Actions>
          <DateDetail>
            {dayjs(selectionRange.startDate).format("D MMM YYYY")}
          </DateDetail>
          <span> - </span>
          <DateDetail>
            {dayjs(selectionRange.endDate).format("D MMM YYYY")}
          </DateDetail>
        </Actions>
        <Actions>
          <Button
            color="primary"
            variant="contained"
            onClick={() => setSkipRequest(false)}
          >
            Generar Reporte
          </Button>
        </Actions>
      </Calendar>

      {!skipRequest && (
        <>
          <Amount ref={reportRef}>{sales.length} Productos Vendidos</Amount>
          <div>
            {productKeys.map((keyElement) => (
              <Accordion key={keyElement}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <span>
                    <Amount>{groupedSales[keyElement].length} vendidos</Amount>
                    <DetailsText>
                      {groupedSales[keyElement][0].name}
                    </DetailsText>
                  </span>
                </AccordionSummary>
                <AccordionDetails>
                  {groupedSales[keyElement].map((sale) => (
                    <SaleDetail key={sale._id}>
                      <Avatar
                        src={sale.owner.image}
                        sx={{ width: 24, height: 24 }}
                      />
                      <span>{dayjs(sale.date).format("D MMM YYYY")}</span>
                      <span>{sale.price} Bs.</span>
                    </SaleDetail>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </>
      )}
    </Dialog>
  );
}
