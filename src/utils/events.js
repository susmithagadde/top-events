var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

export const getEventFirstName = (name) => {
    let splitNames = name.split(" vs ");
    return splitNames[0];
}
export const getEventLastName = (name) => {
    let splitNames = name.split(" vs ");
    return splitNames[1];
}

export const getStartTime = (startDateTime) => {
    let newDate = new Date(startDateTime);
    let minutes = newDate.getUTCMinutes() === 0 ? newDate.getUTCMinutes() + '0' : newDate.getUTCMinutes();
    let finalTime = newDate.getUTCHours() + ":" + minutes;
    return finalTime;
}

export const getFullDate = (fullDate) => {
    let newDate = new Date(fullDate);
    let minutes = newDate.getUTCMinutes() === 0 ? newDate.getUTCMinutes() + '0' : newDate.getUTCMinutes();
    var ampm = newDate.getUTCHours() >= 12 ? 'p.m' : 'a.m';
    let finalTime = days[newDate.getUTCDay()] + ", " + months[newDate.getUTCMonth() + 1] + " " + newDate.getUTCDate() + " " + newDate.getUTCFullYear() + ", " + newDate.getUTCHours() + ":" + minutes + " " + ampm;
    return finalTime;
}