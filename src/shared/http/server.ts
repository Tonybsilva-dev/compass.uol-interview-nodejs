import swaggerUi from "swagger-ui-express";
import swaggerFile from "../../../src/swagger.json";
import { app } from "./app";


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen( process.env.PORT_SERVER  , () => {
    console.log(`✅ Server started on port ${ process.env.PORT_SERVER }`)
  })