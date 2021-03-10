// eslint-disable-next-line import/no-extraneous-dependencies
const axios = require('axios')

async function main() {
  try {
    const response = await axios.post('http://localhost:3000/users', {
      name: 'furkan',
      age: 23,
      gender: 'm',
    })

    console.log(response.data)
    // const res = await axios.get('http://localhost:3000/users')
  } catch (e) {
    console.log(e.message)
  }
}
main()
