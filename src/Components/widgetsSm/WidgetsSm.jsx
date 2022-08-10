import React from 'react'
import "./WidgetsSm.css"
import {Visibility} from '@mui/icons-material';

export default function WidgetsSm() {
  return (
    <div className='widgets'>
        <span className="widgetsTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="http://cdn.thehollywoodgossip.com/uploads/2021/03/anna-renee-keller-duggar.png" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className='widgetSmUsername'>Anna Keller</span>
                    <span className='widgetSmUserTitle'>Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="http://cdn.thehollywoodgossip.com/uploads/2021/03/anna-renee-keller-duggar.png" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className='widgetSmUsername'>Anna Keller</span>
                    <span className='widgetSmUserTitle'>Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="http://cdn.thehollywoodgossip.com/uploads/2021/03/anna-renee-keller-duggar.png" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className='widgetSmUsername'>Anna Keller</span>
                    <span className='widgetSmUserTitle'>Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="http://cdn.thehollywoodgossip.com/uploads/2021/03/anna-renee-keller-duggar.png" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className='widgetSmUsername'>Anna Keller</span>
                    <span className='widgetSmUserTitle'>Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="http://cdn.thehollywoodgossip.com/uploads/2021/03/anna-renee-keller-duggar.png" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className='widgetSmUsername'>Anna Keller</span>
                    <span className='widgetSmUserTitle'>Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}
