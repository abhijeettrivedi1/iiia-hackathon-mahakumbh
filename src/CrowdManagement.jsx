
import React , {useState , useEffect} from 'react';
import MyMap from './map';
import Table from './Table';

const CrowdManagement = () => {
 
  // console.log(data)
  return (
    <div style={{ display: 'flex', justifyContent: 'centre' , flexDirection : "column" , alignItems : "center" }}>
      <div style={{ width: '80%' }}>
        <MyMap />
      </div>
      <div style={{ width: '80%' }}>
        <Table />
      </div>
      {/* {console.log(data)} */}
    </div>
  );
};

export default CrowdManagement;

