import React from 'react'
import "./featureInfo.css"
import {ArrowDownward,ArrowUpward} from '@mui/icons-material';

export default function FeatureInfo() {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$ 2,415</span>
            <span className="featuredMoneyRate">-11.5 <ArrowDownward className='featuredIcon negative' /></span>
        </div>
        <span className="featuredsub">
            compared to last month
        </span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$ 4,415</span>
            <span className="featuredMoneyRate">-1.5 <ArrowDownward className='featuredIcon negative'/></span>
        </div>
        <span className="featuredsub">
            compared to last month
        </span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$ 2,815</span>
            <span className="featuredMoneyRate">+2.5 <ArrowUpward className='featuredIcon'/></span>
        </div>
        <span className="featuredsub">
            compared to last month
        </span>
      </div>
    </div>
  )
}
