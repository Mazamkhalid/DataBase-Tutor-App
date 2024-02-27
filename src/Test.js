// import { Table } from "antd";
// import React, { useState, useEffect,Component } from "react";
// import './App.css';


// function TableColumns() {
//     const [tableColumns, setTableColumns] = useState([]);
   
//     useEffect(() => {
//         fetch("http://localhost/FYPAPI/api/Student/GetTableColumns")
//             .then((response) => response.json())
//             .then((data) => setTableColumns(data));
//     }, []);

//     console.log(tableColumns);

//     return (
// <div class="tree-view">
//   <h1>Datbase : Student System </h1>
//   <ul>
//     {tableColumns && tableColumns.length > 0 ? (
//       tableColumns.map((table) => {
//         console.log("TABLE", table.ColumnNames)
//         return (
//           <li key={table.tableName}>
//             <h3>{table.TableName}</h3>
//             {table.ColumnNames && table.ColumnNames.length > 0 ? (
//               <ul>
//                 {table.ColumnNames.map((column) => {
//                   return (
//                     <li key={column}>{column}</li>
//                   )
//                 })}
//               </ul>
//             ) : (
//               <p>No columns found.</p>
//             )}
//           </li>
//         )
//       })
//     ) : (
//       <p>Loading...</p>
//     )}
//   </ul>
// </div>

        
      

//     );
    
// }

// export default TableColumns;



// //

// import React, { useState } from "react";

// function RunQuery() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch(
//         `http://localhost/FYPAPI/api/Student/RunQuery?sqlQuery=${query}`
//       );
//       const data = await response.json();
//       setResults(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleChange = (event) => {
//     setQuery(event.target.value);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} style={formStyle}>
//         <label  htmlFor="query" style={labelStyle}>
//           Enter SQL Query:
//           <input type="text"
//         id="query"
//         name="query"
        
//         value={query}
//         onChange={handleChange}
//         style={inputStyle} />
//         </label>
//         <button type="submit" style={buttonStyle}>
//         Submit
//       </button>
//       </form>
//       {results && results.length > 0 ? (
//         <table style={tableStyle}>
//         <thead>
//         <tr>
//             {Object.keys(results[0]).map((key) => (
//             <th key={key}>{key}</th>
//             ))}
//         </tr>
//         </thead>
//         <tbody>
//         {results.map((result, index) => (
//             <tr key={index}>
//             {Object.values(result).map((value, index) => (
//                 <td key={index}>{value}</td>
//             ))}
//             </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No Results Found</p>
//       )}
//     </div>
//   );
// }

// export default RunQuery;




// const tableStyle = {
//   borderCollapse: 'collapse',
//   margin: '20px 0',
//   fontSize: '1rem',
//   width: '100%',
//   textAlign: 'left',
//   border: '1px solid #ddd',
// };

// const thStyle = {
//   padding: '8px',
//   fontWeight: 'bold',
//   backgroundColor: '#f2f2f2',
//   borderBottom: '1px solid #ddd',
// };

// const tdStyle = {
//   padding: '8px',
//   borderBottom: '1px solid #ddd',
// };


// //
// const formStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   margin: '20px',
// };

// const labelStyle = {
//   fontWeight: 'bold',
//   fontSize: '1.2rem',
//   marginBottom: '10px',
//   textAlign: 'center',
// };

// const inputStyle = {
//   padding: '10px',
//   fontSize: '1rem',
//   borderRadius: '5px',
//   border: '1px',
//   boxShadow: '0px 2px 5px rgba(0,0,0,0.3)',
//   margin: '10px 0',
//   width: '110%',
//   height: '100px',
//   boxSizing: 'border-box',
// };

// const buttonStyle = {
//   padding: '10px',
//   fontSize: '1rem',
//   fontWeight: 'bold',
//   color: 'white',
//   backgroundColor: 'blue',
//   borderRadius: '5px',
//   border: 'none',
//   cursor: 'pointer',
//   transition: 'background-color 0.3s ease',
//   width: '100%',
//   boxSizing: 'border-box',
// };


