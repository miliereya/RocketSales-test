const router = require('express').Router()
// const amoCRM = require('../amoCRM')

router.route('/get').get( async (req, res) => {
    let query = req.query.query
    if(query < 3) {
        query = ''
    }

    const bearer = 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjYwZDVjNGJjODc0NDQzY2ZiZDMzNGMzYTZlZTU2NGM4MWVkZmJlM2JhNTM4YjY3MTdmOWI2NjI1NTYxY2E3MmMwNDBlNzZhNTg1ZTZlNWE0In0.eyJhdWQiOiIyZTZjYTk4OC04MjFmLTQxN2EtOGMzZC1hMWM4ZmVlMTNiMjciLCJqdGkiOiI2MGQ1YzRiYzg3NDQ0M2NmYmQzMzRjM2E2ZWU1NjRjODFlZGZiZTNiYTUzOGI2NzE3ZjliNjYyNTU2MWNhNzJjMDQwZTc2YTU4NWU2ZTVhNCIsImlhdCI6MTY2MDIyNTE5MiwibmJmIjoxNjYwMjI1MTkyLCJleHAiOjE2NjAzMTE1OTIsInN1YiI6Ijg0NDAwMTUiLCJhY2NvdW50X2lkIjozMDMyMzA2Miwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.afKzXmp8ZLE81ER_Jg-XZ5bAxyW5c4kLbE_nAfmDxidsyU0lJ_H-RghO7CGgo8yGC_K4JHqyxTxu7GaZhU3t-AH913UUFMMa410MAb4QvmqDhfffC-maEAvE83_Nj-kcbvG1nqgiKv5XU688lNTtmJqxa3WkJ9Xs8ErKB6PwMkc2DWBHEg6J12sHdOtYuh9LO6mD7sB4RFcQjZTI3eYTblE0ykGs016a4NErfFwaYSur6facFDP0HuiqfgyO7xGDzuc1ajnQAefHeT-Wy-dC_0pvc_4bvimIyXjMWYV2SLVIUD3f8oBFJe41B5VglXY-KmcbSF7yVFLuUt9rTkempQ';
    async function postData(url = '', data = {}) {
      
        const response = await fetch(url, {
          method: 'GET', 
          mode: 'cors', 
          cache: 'no-cache', 
          credentials: 'same-origin', 
          headers: {
            'Content-Type': 'application/json',
            Authorization: bearer
  
          },
          redirect: 'follow', 
          referrerPolicy: 'no-referrer', 
        });
        if(response.status===200){
          return response.json()
        } else {
          return 0
        } 
    }
    postData(`https://miliereya.amocrm.ru/api/v4/leads?query=${query}`)
    .then((data) => {
      let response

      data===0 ? response = 'Nothing was found' : response = data._embedded.leads

      res.json(response); 
    });
      
    // const response = await amoCRM.get()
})  

module.exports = router