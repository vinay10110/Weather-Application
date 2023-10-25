import React from 'react';
import './forecast.css'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel,AccordionItemHeading } from 'react-accessible-accordion';
const WEEK_DAYS =['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const dayInAWeek=new Date().getDay();
const forecastDays= WEEK_DAYS.slice(dayInAWeek,WEEK_DAYS.length).concat(WEEK_DAYS.slice(0,dayInAWeek))
const forecast = ({data}) => {
  return (
    <>
        <label className="title">Daily</label>
        <Accordion allowZeroExpanded>
          {data.list.splice(0,7).map((item,idx)=>(
            <AccordionItem key={idx}>
          <AccordionItemHeading> 
            <AccordionItemButton>
                <div className="daily-item">
                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                    <label className='day'>{forecastDays[idx]}</label>
                    <label className='description'>{item.weather[0].description}</label>
                    <label className='min-max'>{Math.round(item.main.temp_min)}°C /{" "}{Math.round(item.main.temp_max)}°C</label>
                </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel> 
            <div className="daily-detail-grid">
                <div className="daily-detail-grid-item">
                    <label>Pressure</label>
                    <label>{item.main.pressure}hpa</label>
                </div>
                <div className="daily-detail-grid-item">
                    <label>Humidity</label>
                    <label>{item.main.humidity}%</label>
                </div>
                <div className="daily-detail-grid-item">
                    <label>Clouds</label>
                    <label>{item.clouds.all}</label>
                </div>
                <div className="daily-detail-grid-item">
                    <label>Wind Speed</label>
                    <label>{item.wind.speed} m/s</label>
                </div>
            </div>
          </AccordionItemPanel>
</AccordionItem>
          ))}
         
        </Accordion>
    </>
  )
}

export default forecast;
