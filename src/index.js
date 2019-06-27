'use strict';

const express = require('express');
require('./db/mongoose');

const taskRouter = require('./routers/taskRouter');
const userRouter = require('./routers/userRouter');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//     res.status(503).send("Site is Under Maintanence. Please Try again.");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});