import {useState} from "react";

function ListGroup()
   {

    let items =[
      'Rwanda',
      'Tanzania',
      'Kenya',
      'Uganda',
      'Burundi'
      
    ];

    const [selectediIndex, setSelectedIndex] = useState(-1);
   
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found </p>}

      <ul className="list-group">

      {items.map((item, index) =>(

      <li 
          className={ selectediIndex === index ? "list-group-item active" : "list-group-item" } 
           key={item} 
          onClick ={() => {setSelectedIndex(index); }}
          >
            {item}</li>
      
     
    ))};        
     
      </ul>
    </>
    
  );
}

export default ListGroup;
