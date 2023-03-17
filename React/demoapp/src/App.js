import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';

function App() {
  // const itemTwoName ="SurfExcel";
  const response =[
    {
      itemName:"Nirma",
      itemDay:"20",
      itemMonth:"July",
      itemYear:"2000"
    },
    {
      itemName:"Wheel",
      itemDay:"6",
      itemMonth:"May",
      itemYear:"1999"
    },
    {
      itemName:"Surf Excel",
      itemDay:"2",
      itemMonth:"August",
      itemYear:"2005"
    },

  ];
  return (
    <div>
      <Card>
      <Item name={response[0].itemName}>
        Welcome to ReactJs
      </Item>
      <ItemDate day={response[0].itemDay} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>
      {/* <Item name="Nirma"></Item> */}
      {/* <ItemDate day="01" month="May" year="2003"></ItemDate> */}

      {/* <Item name={itemTwoName}></Item> */}
      <Item name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDay} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

      <Item name={response[2].itemName}></Item>
      <ItemDate day={response[2].itemDay} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
      <div className="App">
          Hello Jee          
      </div>
      </Card>
    </div>
  );
}

export default App;
