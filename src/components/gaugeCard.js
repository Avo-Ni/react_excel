import React from "react";
import ReactNFC from "react-fusioncharts";
import Widgets from "fusioncharts/fusioncharts.widgets";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import FusionCharts from "fusioncharts";

ReactNFC.fcRoot(FusionCharts, Widgets, FusionTheme);
const dataSource = props => {
  return {
    chart: {
      caption: "KPI Ventas",
      subcaption: "",
      numbersuffix: "%",
      gaugefillmix: "{dark-20},{light+70},{dark-10}",
      theme: "ecommerce"
    },
    colorrange: {
      color: [
        {
          minvalue: "0",
          maxvalue: "25",
          label: "Baja",
          code: "#F2726F"
        },
        {
          minvalue: "25",
          maxvalue: "75",
          label: "Media",
          code: "#FFC533"
        },
        {
          minvalue: "75",
          maxvalue: "100",
          label: "Alta",
          code: "#62B58F"
        }
      ]
    },
    pointers: {
      pointer: [
        {
          value: `${props.purchaseRate}%`
        }
      ]
    }
  };
};
const chartConfigs = props => {
  return {
    type: "hlineargauge", // The gauge type
    width: "250", // Width of the gauge
    height: "150", // Height of the gauge
    containerBackgroundOpacity: "0",
    dataFormat: "json", // Data type
    dataSource: dataSource(props)
  };
};

const gaugeCard = props => {
  return (
    <div className="col-lg-3 col-sm-6 is-light-text mb-4">
      <div className="card is-card-dark chart-card">
        <div className="row full-height">
          <div className="col-sm-4 full height">
            <div className="chart-container full-height">
              <ReactNFC {...chartConfigs(props)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default gaugeCard;
