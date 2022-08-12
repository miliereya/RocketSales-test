//OAuth авторизация amoCRM
require('express')

const amoCRM = {}

const { Client } = require('amocrm-js')
const client = new Client({
  domain: 'miliereya', 
  auth: {
    client_id: '2e6ca988-821f-417a-8c3d-a1c8fee13b27', // ID интеграции
    client_secret: 'fcTwMoR8HfX0aBG8FlKaaRP9R9wwwOMXyJcUYb24oVk4NEtEQ5IO0QsfkYiV4exz', // Секретный ключ
    redirect_uri: 'https://cd01-92-245-31-230.eu.ngrok.io', // Ссылка для перенаправления
    server: { 
      port: 3001
    }
  },
})


// Генерация ссылки для доступа
amoCRM.reg = async () => {
    const url = client.auth.getUrl()
    console.log({url})
}
// Получение сделок
amoCRM.get = async () => {
    const response = await client.request.get('/api/v4/leads')
    console.log(response)
}

module.exports = amoCRM