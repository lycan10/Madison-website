import React from 'react';
import "./partners.css";
import l1 from "../../asset/logo/l1.png";
import l2 from "../../asset/logo/l2.png";
import l3 from "../../asset/logo/l3.png";
import l4 from "../../asset/logo/l4.png";
import l5 from "../../asset/logo/l5.png";

import l6 from "../../asset/logo/ACDelco-Logo.png";
import l7 from "../../asset/logo/BGG.png";
import l8 from "../../asset/logo/bosch-1.png";
import l9 from "../../asset/logo/cen.png";
import l10 from "../../asset/logo/chrysler.png";

import l11 from "../../asset/logo/Deutz.png";
import l12 from "../../asset/logo/FKBearings.png";
import l13 from "../../asset/logo/Ford.png";
import l14 from "../../asset/logo/hitachi.png";
import l15 from "../../asset/logo/kawasaki.png";

import l16 from "../../asset/logo/kohler.png";
import l17 from "../../asset/logo/Leece-Neville.png";
import l18 from "../../asset/logo/Mahle.png";
import l19 from "../../asset/logo/Marelli.png";
import l20 from "../../asset/logo/Mitsubishi.png";

import l21 from "../../asset/logo/motorola.png";
import l22 from "../../asset/logo/Perkins.png";
import l23 from "../../asset/logo/Valeo.png";
import l24 from "../../asset/logo/General_Motors.svg";

const images = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16, l17, l18, l19, l20, l21, l22, l23, l24];

const Partners = () => {
  return (
    <div className='partners'>
      <div className='partners-container'>
        <div className="services-header">
          <h1 style={{ color: "black" }}>Our Partners</h1>
        </div>
        <div className="partners-list">
          {images.map((item, index) => (
            <img src={item} alt={`Partner ${index + 1}`} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
