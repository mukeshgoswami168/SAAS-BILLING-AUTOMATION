const express=require("express");
const database = require("./config/database");
const userRoutes = require("./routes/user");
const dataRoutes = require("./routes/data");
const productRoutes = require("./routes/product");
const axios = require('axios');
const bodyParser = require('body-parser');


const app=express();
const cors = require("cors");


database.connect();
app.use(cors());

app.use(express.json());
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/data", dataRoutes);
app.use("/api/v1/product", productRoutes);

app.get("/", (req, res) => {
    console.log("hello")
	return res.json({
		success: true,
		message: "Your server is up and running ...",
        
	});
});

// app.post('/send-pdf', async (req, res) => {
// 	const { email, subject,body,Cc,Bcc, attachment } = req.body;
  
// 	try {
// 	  await axios.post('https://hooks.zapier.com/hooks/catch/19172418/2oq9tq1/', {
// 		email,
// 		subject,
// 		body,
// 		Cc,
// 		Bcc,
// 		attachment,
// 	  });
// 	  res.status(200).send('PDF sent to Zapier webhook');
// 	} catch (error) {
// 	  console.error("Error sending PDF to Zapier webhook:", error);
// 	  res.status(500).send('Error sending PDF to Zapier webhook');
// 	}
//   });
  
  

app.listen(8000,()=>{

    console.log("App is running on Port 8000");

})