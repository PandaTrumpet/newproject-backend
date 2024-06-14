// import express from "express";
// import cors from "cors";
// import pino from "pino-http";

// import env from "./utils/env.js";

// import movies from "./db/movies.js";

// const port = env("PORT", "3000");

// const startServer = ()=> {
//     const app = express();

//     const logger = pino({
//         transport: {
//             target: "pino-pretty"
//         }
//     });

//     app.use(logger);
//     app.use(cors());

//     app.get("/api/movies", (req, res)=> {
//         res.json(movies);
//     })

//     app.use((req, res)=> {
//         res.status(404).json({
//             message: "Not Found"
//         })
//     })

//     app.listen(port, ()=> console.log(`Server running on ${port} PORT`))
// }

// export default startServer;

// import express from 'express';
// import cors from 'cors';
// import movies from './db/movies.js';
// const startServer = () => {
//   const app = express();
//   app.use(cors());

//   app.get('/api/movies', (req, res) => {
//     res.json(movies);
//   });
//   app.get((req, res) => {
//     res.status(404).json({
//       message: 'Not Found',
//     });
//   });
//   app.listen(3000, () => {
//     console.log('Server is runig 3000');
//   });
// };
// export default startServer;

import express from 'express';
import cors from 'cors';
import movies from './db/movies.js';
import pino from 'pino-http';
import dotenv from 'dotenv';
dotenv.config();
const { PORT } = process.env;
console.log(PORT);
const startServer = () => {
  const app = express();
  const logger = pino({
    transport: {
      target: 'pino-pretty',
    },
  });
  app.use(cors());
  app.use(logger);
  app.get('/api/movies', (req, res) => {
    res.json(movies);
  });
  app.use((req, res) => {
    res.status(404).json({
      message: 'Not found',
    });
  });
  app.listen(3000, () => {
    console.log(`Server is runnig ${PORT}`);
  });
};

export default startServer;
