import React from "react";
import Card from "../components/card";
import RatesCard from "../components/ratesCard";
import GaugeCard from "../components/gaugeCard";
import StoresTrendCard from "../components/storesTrendCard";
import Spinner from "../components/spinner";

const Dashboard = props => {
  if (!props.totalR && !props.prodViews) {
    return (
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          height: "80vh"
        }}
      >
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container-fluid pr-5 pl-5 pt-5">
      {/* row 1 - revenue */}

      <div className="row">
        <Card heading={"Total Revisiones"} value={props.totalR} revenue />
        <Card
          heading={"Revisiones desde Amazon"}
          value={props.amR}
          store={"AM"}
          revenue
        />
        <Card
          heading={"Revisiones desde Ebay"}
          value={props.ebR}
          store={"EB"}
          revenue
        />
        <Card
          heading={"Revisiones desde Etsy"}
          value={props.etR}
          store={"ET"}
          revenue
        />
      </div>

      {/* row 2 - rates */}
      <div className="row">
        <Card heading={"Productos Vistos"} value={props.prodViews} />
        {props.purRate && props.checkRate && props.abanRate ? (
          <RatesCard
            purchaseRate={props.purRate}
            checkoutRate={props.checkRate}
            abandonedRate={props.abanRate}
          />
        ) : null}
        {props.purRate && props.checkRate && props.abanRate ? (
          <GaugeCard
            purchaseRate={props.purRate}
            checkoutRate={props.checkRate}
            abandonedRate={props.abanRate}
          />
        ) : null}
      </div>

      {/* row 3 - orders trend */}
      <div
        className="row"
        style={{
          minHeight: "400px",
          display: "flex",
          justifyContent: "center"
        }}
      >
        {props.ordTrendStore ? (
          <StoresTrendCard ordersTrendStore={props.ordTrendStore} />
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;
