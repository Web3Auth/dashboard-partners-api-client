# dashboard-partners-api-client
Frontend client that serves as a working example of authenticating with and making use of Web3Auth Dashboard Partners API endpoints

### Getting started
- Install dependencies
```
npm install
```

- Generate public address and private key by running:
```
npm run keygen
```
- Send the public address generated above to Web3Auth to grant permission to access APIs
- Create a `.env` file from `.env.example` and fill in the values:
- Check and finish TODO items in the `index.ts` file (e.g., set `ORGANIZATION_ID` and `PROJECT_ID` when using related endpoints)
- Run
```
npm start
```
