import './ItemDate.css';

function ItemDate(props){
    
    const day = props.day;
    const month = props.month;
    const year = props.year;
    return (
        <div className="mfgdate">
            {/* <span>20</span>
            <span>January</span>
            <span>1999</span> */}
            {/* removed the hard code and below is the way to put code dynamically */}
            <span> {day} </span>
            <span> {month} </span>
            <span> {year} </span>
        </div>
    )

}
export default ItemDate;