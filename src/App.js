import "./App.css";
import * as React from "react";
import TextField from "@mui/material/TextField";
import boximage from "../src/images/boxlogo.svg";
import { useState } from "react";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import CheckIcon from "@mui/icons-material/Check";

function App() {
  const [activetab, setActivetab] = useState(0);

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className=" relative  border-4 border-[#302f2f] bg-[#fff] rounded-[24px] xl:rounded-[24px] grid grid-cols-12 m-[100px] xl:m-[100px] 3xl:m-[5.208vw]">
        <div className="col-span-12 lg:col-span-4 px-[18px] lg:px-[34px] 3xl:px-[2.871vw] py-[30px] lg:py-[44px] 3xl:py-[2.871vw] bg-[#f8fbfc] rounded-tl-[24px] rounded-bl-[24px]">
          <div className="flex gap-2 items-center mb-[30px]">
            <img
              src={boximage}
              alt="boximage"
              className="h-[30px] xl:h-[35px] 2xl:h-[38px] 3xl:h-[2.5vw] w-[30px] xl:w-[35px] 2xl:w-[38px] 3xl:w-[2.5vw]"
            />
            <div className="text-[#231e38] font-bold text-[24px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[1.658vw]">
              InsideBox
            </div>
          </div>

          <div className="space-y-8">
            <div
              className={`flex gap-3 my-8 cursor-pointer items-center ${
                activetab >= 0 ? "text-[#2893d1]" : "text-[#2f323a]"
              }`}
              onClick={() => setActivetab(0)}
            >
              <div
                className={`border-2 rounded-full h-6 xl:h-7 3xl:h-8 w-6 xl:w-7 3xl:w-8 flex items-center justify-center text-[14px] lg:text-[14px] 3xl:text-[0.838vw] font-medium ${
                  activetab > 0
                    ? "border-[#2bc06c] bg-[#2bc06c] text-white"
                    : activetab === 0
                    ? "border-[#2893d1] bg-white text-[#2893d1]"
                    : "border-[#5e5f5f] bg-white text-[#2f323a]"
                }`}
              >
                {activetab > 0 ? (
                  <span className="text-[#fff]">
                    <CheckIcon />
                  </span>
                ) : (
                  "1"
                )}
              </div>
              <div
                className={`text-[16px] lg:text-[18px] 2xl:text-[20px] 3xl:text-[1.338vw]  font-medium
      ${
        activetab > 0
          ? "text-[#2f323a]"
          : activetab === 0
          ? "text-[#2893d1]"
          : "text-[#2f323a]"
      }`}
              >
                Company details
              </div>
            </div>

            <div
              className={`flex gap-3 my-6 cursor-pointer items-center ${
                activetab >= 1 ? "text-[#2893d1]" : "text-[#2f323a]"
              }`}
              onClick={() => setActivetab(1)}
            >
              <div
                className={`border-2 rounded-full h-6 xl:h-7 3xl:h-8 w-6 xl:w-7 3xl:w-8 flex items-center justify-center text-[14px] lg:text-[14px] 3xl:text-[0.838vw] font-medium ${
                  activetab > 1
                    ? "border-[#2bc06c] bg-[#2bc06c] text-white"
                    : activetab === 1
                    ? "border-[#2893d1] bg-white text-[#2893d1]"
                    : "border-[#5e5f5f] bg-white text-[#2f323a]"
                }`}
              >
                {activetab > 1 ? (
                  <span className="text-[#fff]">
                    <CheckIcon />
                  </span>
                ) : (
                  "2"
                )}
              </div>
              <div
                className={`text-[16px] lg:text-[18px] 2xl:text-[20px] 3xl:text-[1.338vw]  font-medium
      ${
        activetab > 1
          ? "text-[#2f323a]"
          : activetab === 1
          ? "text-[#2893d1]"
          : "text-[#2f323a]"
      }`}
              >
                State
              </div>
            </div>

            <div
              className={`flex gap-3 my-6 cursor-pointer items-center ${
                activetab >= 2 ? "text-[#2893d1]" : "text-[#2f323a]"
              }`}
              onClick={() => setActivetab(2)}
            >
              <div
                className={`border-2 rounded-full h-6 xl:h-7 3xl:h-8 w-6 xl:w-7 3xl:w-8 flex items-center justify-center text-[14px] lg:text-[14px] 3xl:text-[0.838vw] font-medium ${
                  activetab > 2
                    ? "border-[#2bc06c] bg-[#2bc06c] text-white"
                    : activetab === 2
                    ? "border-[#2893d1] bg-white text-[#2893d1]"
                    : "border-[#5e5f5f] bg-white text-[#2f323a]"
                }`}
              >
                {activetab > 2 ? (
                  <span className="text-[#fff]">
                    <CheckIcon />
                  </span>
                ) : (
                  "3"
                )}
              </div>
              <div
                className={`text-[16px] lg:text-[18px] 2xl:text-[20px] 3xl:text-[1.338vw]  font-medium
      ${
        activetab > 2
          ? "text-[#2f323a]"
          : activetab === 2
          ? "text-[#2893d1]"
          : "text-[#2f323a]"
      }`}
              >
                Business details
              </div>
            </div>

            <div
              className={`flex gap-3 my-6 cursor-pointer items-center ${
                activetab >= 3 ? "text-[#2893d1]" : "text-[#2f323a]"
              }`}
              onClick={() => setActivetab(3)}
            >
              <div
                className={`border-2 rounded-full h-6 xl:h-7 3xl:h-8 w-6 xl:w-7 3xl:w-8 flex items-center justify-center text-[14px] lg:text-[14px] 3xl:text-[0.838vw] font-medium ${
                  activetab > 3
                    ? "border-[#2bc06c] bg-[#2bc06c] text-white"
                    : activetab === 3
                    ? "border-[#2893d1] bg-white text-[#2893d1]"
                    : "border-[#5e5f5f] bg-white text-[#2f323a]"
                }`}
              >
                {activetab > 3 ? (
                  <span className="text-[#fff]">
                    <CheckIcon />
                  </span>
                ) : (
                  "4"
                )}
              </div>
              <div
                className={`text-[16px] lg:text-[18px] 2xl:text-[20px] 3xl:text-[1.338vw]  font-medium
      ${
        activetab > 3
          ? "text-[#2f323a]"
          : activetab === 3
          ? "text-[#2893d1]"
          : "text-[#2f323a]"
      }`}
              >
                Team
              </div>
            </div>

            <div
              className={`flex gap-3 my-6 cursor-pointer items-center ${
                activetab >= 4 ? "text-[#2893d1]" : "text-[#2f323a]"
              }`}
              onClick={() => setActivetab(4)}
            >
              <div
                className={`border-2 rounded-full h-6 xl:h-7 3xl:h-8 w-6 xl:w-7 3xl:w-8 flex items-center justify-center text-[14px] lg:text-[14px] 3xl:text-[0.838vw] font-medium ${
                  activetab > 4
                    ? "border-[#2893d1] bg-[#2893d1] text-white"
                    : activetab === 4
                    ? "border-[#2893d1] bg-white text-[#2893d1]"
                    : "border-[#5e5f5f] bg-white text-[#2f323a]"
                }`}
              >
                {activetab > 4 ? (
                  <span className="text-[#fff]">
                    <CheckIcon />
                  </span>
                ) : (
                  "5"
                )}
              </div>
              <div
                className={`text-[16px] lg:text-[18px] 2xl:text-[20px] 3xl:text-[1.338vw]  font-medium
      ${
        activetab > 4
          ? "text-[#2f323a]"
          : activetab === 4
          ? "text-[#2893d1]"
          : "text-[#2f323a]"
      }`}
              >
                Personal details
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8 p-[30px] lg:p:[50px] 3xl:[2.208vw]">
          <div className="flex justify-end">
            <div className="text-[#acabab] text-[14px] xl:text-[14px] 3xl:text-[0.938vw]">
              Having trouble?{" "}
              <span className="text-[#33b0f8] font-medium cursor-pointer">
                {" "}
                Get Help
              </span>
            </div>
          </div>

          {activetab === 0 && (
            <>
              <div className="px-[50px] lg:p-[80px] 3xl:p-[4.688vw]">
                <div className="text-[25px] xl:text-[28px] 3xl:xl:text-[1.971vw] font-bold text-[#3a3939]">
                  {" "}
                  About Your Company Type
                </div>

                <div className="text-[12px] xl:text-[14px] 3xl:xl:text-[0.971vw] font-medium text-[#b1afaf]">
                  {" "}
                  Enter detailed information about your company
                </div>
                <div className="my-[30px] space-y-[37px] 3xl:space-y-[1.919vw]">
                  <div className="w-full">
                    <TextField
                      id="outlined-basic"
                      label="Company Name"
                      variant="outlined"
                      className="w-full"
                    />
                  </div>
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-2">
                      <div className="w-full">
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Type
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="Type"
                              onChange={handleChange}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                    </div>
                    <div className="col-span-4">
                      <div className="w-full">
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Size
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="Type"
                              onChange={handleChange}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <TextField
                      id="outlined-basic"
                      label="Company Name"
                      variant="outlined"
                      className="w-full"
                    />
                  </div>
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-3">
                      <div className="w-full">
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Country
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="Country"
                              onChange={handleChange}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                    </div>
                    <div className="col-span-3">
                      <div className="w-full">
                        <TextField
                          id="outlined-basic"
                          label="City"
                          variant="outlined"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {activetab === 1 && (
            <>
              <div className="px-[50px] lg:p-[80px] 3xl:p-[4.688vw]">
                <div className="text-[25px] xl:text-[28px] 3xl:xl:text-[1.971vw] font-bold text-[#3a3939]">
                  {" "}
                  State Details
                </div>

                <div className="text-[12px] xl:text-[14px] 3xl:xl:text-[0.971vw] font-medium text-[#b1afaf]">
                  {" "}
                  Enter detailed information about your state
                </div>
                <div className="my-[30px] space-y-[37px] 3xl:space-y-[1.919vw]">
                  <div className="w-full">
                    <TextField
                      id="outlined-basic"
                      label="State Name"
                      variant="outlined"
                      className="w-full"
                    />
                  </div>
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-2">
                      <div className="w-full">
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Type
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="Type"
                              onChange={handleChange}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                    </div>
                    <div className="col-span-4">
                      <div className="w-full">
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              State
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="Type"
                              onChange={handleChange}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <TextField
                      id="outlined-basic"
                      label="Company Name"
                      variant="outlined"
                      className="w-full"
                    />
                  </div>
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-3">
                      <div className="w-full">
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Country
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="Country"
                              onChange={handleChange}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                    </div>
                    <div className="col-span-3">
                      <div className="w-full">
                        <TextField
                          id="outlined-basic"
                          label="City"
                          variant="outlined"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {activetab === 2 && (
            <>
              <div className="px-[50px] lg:p-[80px] 3xl:p-[4.688vw]">
                <div className="text-[25px] xl:text-[28px] 3xl:xl:text-[1.971vw] font-bold text-[#3a3939]">
                  {" "}
                  About Your Company
                </div>

                <div className="text-[12px] xl:text-[14px] 3xl:xl:text-[0.971vw] font-medium text-[#b1afaf]">
                  {" "}
                  Enter detailed information about your company
                </div>
                <div className="my-[30px] space-y-[37px] 3xl:space-y-[1.919vw]">
                  <div className="w-full">
                    <TextField
                      id="outlined-basic"
                      label="Company Name"
                      variant="outlined"
                      className="w-full"
                    />
                  </div>
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-2">
                      <div className="w-full">
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Type
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="Type"
                              onChange={handleChange}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                    </div>
                    <div className="col-span-4">
                      <div className="w-full">
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Size
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="Type"
                              onChange={handleChange}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <TextField
                      id="outlined-basic"
                      label="Company Name"
                      variant="outlined"
                      className="w-full"
                    />
                  </div>
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-3">
                      <div className="w-full">
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Country
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="Country"
                              onChange={handleChange}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                    </div>
                    <div className="col-span-3">
                      <div className="w-full">
                        <TextField
                          id="outlined-basic"
                          label="City"
                          variant="outlined"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {activetab === 3 && (
            <>
              <div className="px-[50px] lg:p-[80px] 3xl:p-[4.688vw]">
                <div className="text-[25px] xl:text-[28px] 3xl:xl:text-[1.971vw] font-bold text-[#3a3939]">
                  {" "}
                  About Your Team
                </div>

                <div className="text-[12px] xl:text-[14px] 3xl:xl:text-[0.971vw] font-medium text-[#b1afaf]">
                  {" "}
                  Enter detailed information about your company
                </div>
                <div className="my-[30px] space-y-[37px] 3xl:space-y-[1.919vw]">
                  <div className="w-full">
                    <TextField
                      id="outlined-basic"
                      label="Company Name"
                      variant="outlined"
                      className="w-full"
                    />
                  </div>
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-2">
                      <div className="w-full">
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Type
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="Type"
                              onChange={handleChange}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                    </div>
                    <div className="col-span-4">
                      <div className="w-full">
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Team Size
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="Type"
                              onChange={handleChange}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <TextField
                      id="outlined-basic"
                      label="Company Name"
                      variant="outlined"
                      className="w-full"
                    />
                  </div>
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-3">
                      <div className="w-full">
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Country
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="Country"
                              onChange={handleChange}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                    </div>
                    <div className="col-span-3">
                      <div className="w-full">
                        <TextField
                          id="outlined-basic"
                          label="City"
                          variant="outlined"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {activetab === 4 && (
            <>
              <div className="px-[50px] lg:p-[80px] 3xl:p-[4.688vw]">
                <div className="text-[25px] xl:text-[28px] 3xl:xl:text-[1.971vw] font-bold text-[#3a3939]">
                  {" "}
                  About Your Personal Details
                </div>

                <div className="text-[12px] xl:text-[14px] 3xl:xl:text-[0.971vw] font-medium text-[#b1afaf]">
                  {" "}
                  Enter detailed information about your company
                </div>
                <div className="my-[30px] space-y-[37px] 3xl:space-y-[1.919vw]">
                  <div className="w-full">
                    <TextField
                      id="outlined-basic"
                      label="Company Name"
                      variant="outlined"
                      className="w-full"
                    />
                  </div>
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-2">
                      <div className="w-full">
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Type
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="Type"
                              onChange={handleChange}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                    </div>
                    <div className="col-span-4">
                      <div className="w-full">
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Size
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="Type"
                              onChange={handleChange}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <TextField
                      id="outlined-basic"
                      label="Company Name"
                      variant="outlined"
                      className="w-full"
                    />
                  </div>
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-3">
                      <div className="w-full">
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Country
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="Country"
                              onChange={handleChange}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                    </div>
                    <div className="col-span-3">
                      <div className="w-full">
                        <TextField
                          id="outlined-basic"
                          label="City"
                          variant="outlined"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="flex justify-between items-center px-[50px] lg:px-[80px] 3xl:px-[4.688vw] pb-[30px] lg:pb-[40px] 3xl:pb-[3.688vw]">
            <div
              className={`cursor-pointer text-[14px] xl:text-[14px] 3xl:text-[0.819vw] text-[#373d46] font-medium px-[14px] xl:px-[15px] 3xl:px-[0.921vw] py-[9px] xl:py-[9px] 3xl:py-[0.721vw] border border-[#cfcdcd] rounded-[6px]
      ${
        activetab === 0
          ? " cursor-not-allowed bg-[#f0f0f0] text-[#b0b0b0]"
          : "hover:bg-[#e2e2e2]"
      }`}
              onClick={() => activetab > 0 && setActivetab(activetab - 1)}
            >
              Previous Step
            </div>

            <div
              className={`cursor-pointer text-[14px] xl:text-[14px] 3xl:text-[0.819vw] bg-[#1873db] text-[#ffffff] font-medium px-[14px] xl:px-[15px] 3xl:px-[0.921vw] py-[9px] xl:py-[9px] 3xl:py-[0.721vw] border border-[#3e6eae] rounded-[6px]
      ${
        activetab === 4
          ? "cursor-not-allowed bg-[#4389da] text-[#b0b0b0]"
          : "hover:bg-[#1560a1]"
      }`}
              onClick={() => activetab < 4 && setActivetab(activetab + 1)}
            >
              Next Step
            </div>
          </div>
        </div>
      </div>

      {/* <div className=' absolute -left-40 xl:-left-40 3xl:-left-40 -bottom-60 xl:-bottom-60 3xl:-bottom-60 h-[200px] xl:h-[250px] 3xl:h-[22.979vw] w-[200px] xl:w-[250px] 3xl:w-[22.979vw] bg-[#fc6868] rounded-full -z-10'></div> */}
    </>
  );
}

export default App;
