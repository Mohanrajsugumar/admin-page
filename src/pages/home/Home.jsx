import React from 'react'
import "./Home.css"
import FeatureInfo from '../../Components/featureInfo/FeatureInfo'
import Chart from '../../Components/chart/Chart'
import {userData} from "../../DummyData"
import WidgetsSm from '../../Components/widgetsSm/WidgetsSm'
import WidgetsLg from '../../Components/widgetsLg/WidgetsLg'

export default function Home() {
  return (
    <div className='home'>
    <FeatureInfo />
    <Chart  data={userData} title="User Analytics" grid dataKey="Active User"/>
    <div className='homeWidgets'>
      <WidgetsSm />
      <WidgetsLg />
    </div>
    </div>
  )
}
