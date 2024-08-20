import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useStore from "../useStore";

function CustomTabPanel(props, onClose) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Widget = ({ onClose }) => {
  const [value, setValue] = React.useState(0);

  const checkButton = useStore((state) => state.checkButton);
  const setCheckButton = useStore((state) => state.setCheckButton);

  const submit = useStore((state) => state.submit);
  const setSubmit = useStore((state) => state.setSubmit);

  const cspm1 = useStore((state) => state.cspm1);
  const setCspm1 = useStore((state) => state.setCspm1);
  const cspm2 = useStore((state) => state.cspm2);
  const setCspm2 = useStore((state) => state.setCspm2);

  const cwpp1 = useStore((state) => state.cwpp1);
  const setCwpp1 = useStore((state) => state.setCwpp1);
  const cwpp2 = useStore((state) => state.cwpp2);
  const setCwpp2 = useStore((state) => state.setCwpp2);

  const registry1 = useStore((state) => state.registry1);
  const setregistry1 = useStore((state) => state.setregistry1);
  const registry2 = useStore((state) => state.registry2);
  const setregistry2 = useStore((state) => state.setregistry2);

  const [checkValue, setCheckValue] = useState(false);

  const toggleSwitch = () => {
    setCheckValue(false);
    setCheckButton(checkValue);
  };

  const handleCSMP1 = () => {
    if(cspm1 === true)
    setCspm1(false);
    else
    setCspm1(true)
  };
  const handleCSMP2 = () => {
    if(cspm2 === true)
    setCspm2(false);
    else
    setCspm2(true)
  };

  const handleCWPP1 = () => {
    if(cwpp1 === true)
    setCwpp1(false);
    else
    setCwpp1(true)
  };
  const handleCWPP2 = () => {
    if(cwpp2 === true)
    setCwpp2(false);
    else
    setCwpp2(true)
  };

  const handleRegistry1 = () => {
    if(registry1 === true)
    setregistry1(false);
    else
    setregistry1(true)
  };
  const handleRegistry2 = () => {
    if(registry2 === true)
    setregistry2(false);
    else
    setregistry2(true)
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = () => {
    setSubmit(true)
    setCheckValue(false);
    setCheckButton(checkValue);
  }

  return (
    <div>
      {checkButton === true ? (
        <>
          <div className="fixed top-0 right-0 z-50 h-screen w-screen bg-black bg-opacity-50 flex justify-end">
            <div className="w-1/3 bg-white rounded-l-lg p-6 translate-x-0 transition-transform duration-300 ease-in-out">
              <h2 className="text-lg font-semibold mb-4">Add Widget</h2>
              <p>Personalize your dashboard by adding the following widget:</p>

              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="CSPM" {...a11yProps(0)} />
                    <Tab label="CWPP" {...a11yProps(1)} />
                    <Tab label="Registry" {...a11yProps(2)} />
                  </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                  <div className="flex flex-col space-y-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        checked={cspm1 === true}
                        onClick={handleCSMP1}
                      />
                      <span>Cloud Accounts</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        checked={cspm2 === true}
                        onClick={handleCSMP2}
                      />
                      <span>Cloud Account Risk Management</span>
                    </label>
                  </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                  <div className="flex flex-col space-y-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        checked={cwpp1 === true}
                        onClick={handleCWPP1}
                      />
                      <span>Top 5 Namespace Specific Alerts</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        checked={cwpp2 === true}
                        onClick={handleCWPP2}
                      />
                      <span>Workload Alerts</span>
                    </label>
                  </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={2}>
                  <div className="flex flex-col space-y-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        checked={registry1 === true}
                        onClick={handleRegistry1}
                      />
                      <span>Image Risk Assessment</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        checked={registry2 === true}
                        onClick={handleRegistry2}
                      />
                      <span>Image Security Issues</span>
                    </label>
                  </div>
                </CustomTabPanel>
              </Box>

              <div className="flex justify-end mt-4">
                <button
                  onClick={toggleSwitch}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded mr-2"
                >
                  Cancel
                </button>
                <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Widget;
