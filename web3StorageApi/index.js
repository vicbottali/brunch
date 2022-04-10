const express = require('express')
const fileUpload = require('express-fileupload');
const cors = require('cors');
const Web3Storage = require('web3.storage');

const client = new Web3Storage.Web3Storage({ token: 'omit'});
const app = express()
const port = 3000

app.use(fileUpload());
app.use(cors());

console.log(client);
app.get('/', (req, res) => {
    res.send('File Upload Api')
})

app.post('/upload', async function (req, res) {
    let sampleFile;
    let uploadPath;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    console.log(req.files, 'files');
    for(key in Object.keys(req.files)){
        console.log(key, req.files[key], 'file');
    }

    const rootCid = await client.put(req.files)
    return res.status(200).send(`https://dweb.link/ipfs/${rootCid}`);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
