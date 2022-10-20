// This script will upload the contents of the `dist` folder to web3.storage, so you
// can view the application using an IPFS gateway.

TOKEN = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDEwRjk4OUMxMWMwRTU4MTdkOTVkYzAwM0M0ZDc0ZDBEOTMyQWIzNjIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2MzU1MTM3MjEyNzcsIm5hbWUiOiJoYWNrYXRob24xIHRva2VuIn0.X7GaA7dsoRXC8sn4H_ctxe7buUMV3_c6xy8BH01oesc
    //ipfs gateway
const fs = require('fs')
const { Web3Storage, getFilesFromPath } = require('web3.storage')

function die(message) {
    console.error(message)
    process.exit(1)
}

async function deploy() {
    const { TOKEN } = process.env
    if (!TOKEN) {
        die('this script needs an env variable named WEB3STORAGE_TOKEN containing API token for web3.storage')
    }

    if (!fs.existsSync('./dist')) {
        die('dist folder not found. Try running this first: npm run build')
    }

    const web3Storage = new Web3Storage({ token: TOKEN })
    console.log('Loading site files...')
    const files = await getFilesFromPath(path)
    console.log(`Uploading ${files.length} files to Web3.Storage...`)
    const cid = await web3Storage.put(files, { wrapWithDirectory: false })
    console.log('Deployed to Web3.Storage!')
    console.log('Root cid: ', cid)
    console.log(`Gateway url: https://${cid}.ipfs.dweb.link`)
}

deploy()
    .catch(console.error)