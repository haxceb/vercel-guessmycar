import React, { useState } from "react";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import HistoryIcon from "@material-ui/icons/History";
import PaymentIcon from "@material-ui/icons/Payment";
import PolicyCard from "./PolicyCard";
import { Typography } from "@material-ui/core";

function Policies() {
  const foo = [1, 2, 3, 4];
  const [count, setcount] = useState(foo);
  return (
    <div className="container-fluid mt-4 mb-4">
      <div className="mt-4 mb-4">
        <Typography variant="h4" align="center">Our policies are top-notch</Typography>
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        {count.map((count) => {
          if (count == 1) {
            return (
              <PolicyCard
                icon={<LocalShippingIcon color="action" />}
                text="Unlimited furniture delivery"
              />
            );
          } else if (count == 2) {
            return (
              <PolicyCard
                icon={<SentimentVerySatisfiedIcon color="action" />}
                text="10-year warranty"
              />
            );
          } else if (count == 3) {
            return (
              <PolicyCard
                icon={<HistoryIcon color="action" />}
                text="60-day returns"
              />
            );
          } else if (count == 4) {
            return (
              <PolicyCard
                icon={<PaymentIcon color="action" />}
                text="Flexible payments"
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Policies;
