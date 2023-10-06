import React from "react";
import ReactNFC from "react-fusioncharts";

const chartConfigs = {
  type: "angulargauge", // The gauge type
  width: "450", // Width of the gauge
  height: "250", // Height of the gauge
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Indicador 1",
      lowerLimit: "0",
      upperLimit: "100",
      showValue: "1",
      numberSuffix: "%",
      theme: "fusion",
      showToolTip: "0",
      pivotBorderColor: "#333333",
      pivotBorderAlpha: 100
    },
    // Chart Data
    colorRange: {
      color: [
        {
          minValue: "0",
          maxValue: "50",
          code: "#F2726F"
        },
        {
          minValue: "50",
          maxValue: "75",
          code: "#FFC533"
        },
        {
          minValue: "75",
          maxValue: "100",
          code: "#62B58F"
        }
      ]
    },
    dials: {
      dial: [
        {
          value: "81"
        }
      ]
    }
  }
};

const linearGaugeCard = props => {
  return (
    <div className="col-md-8 col-lg-9 is-light-text mb-4">
      <div className="card is-card-dark chart-card">
        <div className="row full-height">
          <div className="col-sm-4 full height">
            <div className="chart-container full-height">
              <ReactNFC {...chartConfigs} />
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default linearGaugeCard;
