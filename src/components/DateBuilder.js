import './DataBuilder.css'
export const DateBuilder = (d) => {
    
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    //  const time=d.toLocaleTimeString();
    const hours=d.getHours();
    const minutes= d.getMinutes();


    return(
        <div  >
            <div>{`${day} ${date} ${month} ${year}`}</div>
            <div>{ ` ${hours}: ${minutes}hs  ` } </div>
         
        </div>
         )
  }

 