const express = reqiure('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.send();
});

app.listen(port, () => {
    console.log(`${port}`);
});