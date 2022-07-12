import React, { useContext } from "react";
import { DateContext } from "./App";

function Days()  {
    const contextDate = useContext(DateContext)
    const date= new Date(contextDate.date *1000);
    const today= (new Intl.DateTimeFormat("ja-JP-u-ca-japanese", {weekday:'long'}).format(date))

    function click(e){
        let links = document.querySelectorAll('a')
        links.forEach(day => {
            day.style.fontWeight = 'normal'
        });
        e.target.style.fontWeight = 'bold'
        e.preventDefault();

        contextDate.goNextDay(e.target.getAttribute('data-time'))
    }

    function displayDate(){
        if(contextDate.nextDay.length>0){
            return (
                contextDate.nextDay.map((element)=>{
                    let dayOfWeek = (new Intl.DateTimeFormat("ja-JP-u-ca-japanese", {weekday:'long'} ).format(element*1000));
                    return ( <a onClick={click} data-time={element} href=""> {dayOfWeek}</a> )
                })
            )
        }
    }

    return (
        <div className="card-action">
            <a onClick={click} data-time={contextDate.date} href="">
               {today}
            </a>
           {displayDate()}
        </div>
        );
}

export default Days;
