import React from 'react';

import QRCode from 'react-qr-code';


const Generator = (props) => {
var value = props.name   
  return (
<div className='flex mx-auto items-center justify-around' style={{ height: "auto", margin: "5px auto", maxWidth: 264, width: "100%" }}>
  <QRCode
    size={156}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={value}
    viewBox={`0 0 256 256`}
  />
</div>

)};

export default Generator