function isWeekend(date){
    
    const today = date;
    const nextDay = today.add(3, 'd');
    const nextDayFormatted = nextDay.format('dddd');

    if(nextDayFormatted == 'Saturday' || nextDayFormatted == 'Sunday'){
        return `${true} ${nextDayFormatted}`;
    }    

    return `${false} ${nextDayFormatted}`;
}

export default isWeekend;