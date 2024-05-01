import React from "react";
import "../App.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Icon } from '@iconify/react';
function Firstpage() {

    return (
        <>
            <div className="main">
                <div className="section1">
                    <img id="img" className="rounded-br-full rounded-tr-full" src="src\assets\Landingpage-new-banner.884eb4a0.jpg"/>
                    <p id="textdata" style={{width:"80%"}} className="bg-[#0c4da3eb] text-xl rounded-br-full rounded-tr-full absolute bottom-[-100px] text-white p-8"><h2 id="h2data">Lendingkart Hai Toh Business Is Good</h2>
                        Check your eligibility for business financing and apply for unsecured small business loans to elevate your business with lowest commercial loan interest rates! Trusted by 2,80,000+ businesses across 4000+ cities, Lendingkart has facilitated business finance loans exceeding Rs. 18,000 Crores. 
                        Access lightning-fast, collateral-free small business bank loans & empower your business journey with Lendingkart!
                    <div className="tickmarktext">     
                      <h3 style={{display:"inline-flex",justifyContent:"center",alignItems:"center"}}className="text-base border-2 rounded-3xl"><Icon icon="mdi:tick"  style={{color: 'green',width:"50px"}}/>RBI Registered NBFC</h3>
                    </div>
                    </p>                  
                </div>               
                <div id="section2" className="" style={{
                    width: "35%", minHeight: "50%", display: "flex", flexDirection: 'column', zIndex: '10', position: "absolute", right: "90px", border: "2px solid white", background: "white", top: "100px",
                }}>              
                    <form className="formclass" style={{paddingTop:"5px",paddingLeft:""}}>
                       <div className="formelements">
                        <Box style={{display:"flex",width:"100%", paddingRight:"5px"}}>
                            <TextField  style={{marginRight:"10px",width:"50%"}} type="text" label="FirstName" variant="outlined" required />
                            <TextField  style={{paddingRight:"5px",width:"50%"}} type="text" label="Last Name" variant="outlined" required />
                        </Box>
                        </div>
                        <div>
                            <TextField style={{paddingLeft:"10px",marginBottom:"10px"}} fullWidth type="text" label="Email ID" variant="outlined" required/>
                            <TextField style={{paddingLeft:"10px"}}fullWidth type="text" label="Mobile Number" variant="outlined" required/>
                        </div>
                        <div className="formelements">
                        <Box sx={{ width: "420",paddingRight:"10px" }}>
                            <FormControl fullWidth>
                                <InputLabel>Do you have business registration proof</InputLabel>
                                <Select label="Do you have business registration proof">
                                <MenuItem value="Yes">Yes</MenuItem>
                                <MenuItem value="No">No</MenuItem>
                                </Select>                              
                            </FormControl>
                        </Box>
                        </div>
                        <div className="formelements">
                        <Box>
                            <FormControl style={{width:'100%',paddingRight:'10px'}}>
                             <InputLabel>Type of business</InputLabel>
                              <Select label="Type of business">
                                <MenuItem value="Proprietorship">Proprietorship</MenuItem>
                                <MenuItem value="Patnership">Patnership</MenuItem>
                                <MenuItem value="Pvt. Ltd.">Pvt. Ltd.</MenuItem>
                                <MenuItem value="One Person Company">One Person Company</MenuItem>
                                <MenuItem value="LLP">LLP</MenuItem>
                                <MenuItem value="Limited Company">Limited Company</MenuItem>
                             </Select>
                            </FormControl>
                        </Box>
                        </div>
                        <div className="formelements">
                        <Box sx={{paddingRight:"10px"}}>
                            <FormControl fullWidth>
                             <InputLabel>How old is your business</InputLabel>
                              <Select label="How old is your business">
                                <MenuItem value="Planning to Start a Business">Planning to Start a Business </MenuItem>
                                <MenuItem value="0 to 3 Months">0 to 3 Months</MenuItem>
                                <MenuItem value="3 to 6 Months">3 to 6 Months</MenuItem>
                                <MenuItem value="6 Months to 1 Year">6 Months to 1 Year</MenuItem>
                                <MenuItem value="1 to 5 Years">1 to 5 Years</MenuItem>
                                <MenuItem value="More than 5 Years">More than 5 Years</MenuItem>
                             </Select>
                            </FormControl>
                        </Box>
                        </div>
                        <div className="formelements">
                        <Box sx={{ width: "420",paddingRight:"10px" }}>
                            <FormControl fullWidth>
                             <InputLabel>Monthly sales</InputLabel>
                              <Select label="Monthly sales">
                                <MenuItem value="0 to 25K">0 to 25K</MenuItem>
                                <MenuItem value="25K to 1 Lac">25K to 1 Lac</MenuItem>
                                <MenuItem value="1 Lac to 2.5 Lacs">1 Lac to 2.5 Lacs</MenuItem>
                                <MenuItem value="2.5 to 5 Lacs">2.5 to 5 Lacs</MenuItem>
                                <MenuItem value="5 to 8.5 Lacs">5 to 8.5 Lacs</MenuItem>
                                <MenuItem value="8.5 to 85 Lacs">8.5 to 85 Lacs</MenuItem>
                                <MenuItem value="85+ Lacs">85+ Lacs</MenuItem>
                             </Select>
                             <span className="formelements" required>
                                <p id="decleration">
                                    <Checkbox style={{padding:'0'}}/>
                                    I hereby confirm that I have read, understood, and agree to the mentioned "T & C", "Terms Of Use" and "Privacy Policy" and receive communication via SMS, E-mail, and Whatsapp.
                                </p>
                             </span>
                             <button id="btn"type="submit" className="bg-orange-500 w-full h-35 text-white p-3 rounded-md">Check Eligibility</button>
                          </FormControl>
                        </Box>
                     </div>
                    </form>
                </div>
            </div>
        </>
    )
};
export default Firstpage;