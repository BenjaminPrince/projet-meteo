import React from "react";

function Days(props)  {
 
    const date= new Date(props.date *1000);
    const today= (new Intl.DateTimeFormat("ja-JP-u-ca-japanese", {weekday:'long'}).format(date))

    function click(e){
        let links = document.querySelectorAll('a')
        links.forEach(day => {
            day.style.fontWeight = 'normal'
        });
        e.target.style.fontWeight = 'bold'
        e.preventDefault();

        props.goNextDay(e.target.getAttribute('data-time'))
    }

    function displayDate(){
        if(props.nextDay.length>0){
            return (
                props.nextDay.map((element)=>{
                    let dayOfWeek = (new Intl.DateTimeFormat("ja-JP-u-ca-japanese", {weekday:'long'} ).format(element*1000));
                    return ( <a onClick={click} data-time={element} href=""> {dayOfWeek}</a> )
                })
            )
        }
    }

    return (
        <div className="card-action">
            <a onClick={click} data-time={props.date} href="">
               {today}
            </a>
           {displayDate()}
        </div>
        );
}

export default Days;
