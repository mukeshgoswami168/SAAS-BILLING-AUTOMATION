import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import DataTable from 'react-data-table-component';
import { getAllProduct } from '../../services/operations/productAPI';
import SideBar from "../common/SideBar";
import Navbar from "../common/Navbar";
import jsPDF from "jspdf";
//import { jsPDF } from 'jspdf';
import axios from "axios";
import 'jspdf-autotable';


const Order = () => {
  //const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const email= useSelector((state)=>state.auth)
  const result = [
    { features: 'Feature A', price: 100, discountedPrice: 90, durationUsed: 5, total: 500 },
    { features: 'Feature B', price: 150, discountedPrice: 120, durationUsed: 7, total: 1050 },
    { features: 'Feature C', price: 200, discountedPrice: 180, durationUsed: 10, total: 2000 },
    
    // Add more rows as needed
  ];

  const userId = useSelector((state) => state.auth.userId); // Assuming you have userId in your redux store

  useEffect(() => {
    const fetchData = async () => {
     // setLoading(true);
      try {
        //const result = await getAllProduct(userId);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } 
    };

    fetchData();
  }, [userId]);

  const columns = [
    {
      name: 'Features',
      selector: row => row.features,
    },
    {
      name: 'Price',
      selector: row => row.price,
      format: row => `$${row.price}`,
    },
    {
      name: 'Discounted Price',
      selector: row => row.discountedPrice,
      format: row => `$${row.discountedPrice}`,
    },
    {
      name: 'Duration Used (hr)',
      selector: row => row.durationUsed,
    },
    {
      name: 'Total',
      selector: row => row.total,
      format: row => `$${row.total}`,
    },
  ];

  const generatePDF = async () => {
   // const userEmail = user.email; // Assuming `user` is defined somewhere in your component

    const pdf = new jsPDF();
    pdf.setFontSize(18);
    pdf.text("SAAS Software Billing Info Invoice", 20, 20);
    pdf.setFontSize(12);
  
    const bodyData = data.map((row) =>
      columns.map((col) =>
        col.dataIndex === "total" ? `$${row[col.dataIndex]}` : row[col.dataIndex]
      )
    );
  
    const totalSum = data.reduce((sum, row) => sum + row.total, 0);
    bodyData.push(["", "", "", "", `Total: $${totalSum}`]);
  
    const headingHeight =
      20 + pdf.getTextDimensions("SAAS Software Billing Info Invoice").h + 10;
  
    pdf.autoTable({
      startY: headingHeight,
      head: [columns.map((col) => col.title)],
      body: bodyData,
    });
    const pdfOutput = pdf.output("datauristring");
    const webhookUrl = 'https://hooks.zapier.com/hooks/catch/19172418/2oq9tq1/';
    try {
      await axios.post(webhookUrl, {
        email: email,
        subject: "Invoice for SaaS Usage",
        body:"This is your Bill Summary",
        attachment: pdfOutput
      });
      console.log("PDF sent to Zapier webhook");
    } catch (error) {
      console.error("Error sending PDF to Zapier webhook", error);
    }
    pdf.save("order_summary.pdf");
  }

  

  return (
    <div className="flex flex-col min-h-screen w-full relative">
      <Navbar />
      <div className="flex">
        <SideBar />
        <div className="flex flex-col">
          <p className="font-bold text-3xl text-white m-5 mt-8">Your Order</p>
          <div className="ml-[200px] w-[800px] rounded-lg mx-auto ">
            <DataTable
              columns={columns}
              data={data}
              pagination
              paginationPerPage={5}
            />
          </div>
          <div className="ml-[200px] mt-11 text-2xl font-semibold text-blue-500 rounded-lg">
             {
                data.length >0 ? (<button className="bg-white rounded-lg w-[180px] h-[40px]" onClick={generatePDF}>
                    Download Bill 
                </button>):
                
                (<div></div>)
             }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
