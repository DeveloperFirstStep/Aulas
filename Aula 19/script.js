const settings = {
    host: "108.0.0.5",
    port: 3564,
    username:"NomeDeUsuario",
    password:"Minh@S3nha123.",
    schema: "DevFirstStep",
    databases:[
        {
            name:"db_nome1",
            password:"123@321"
        },
        {
            name: "db_name2",
            password: "092#$67"
        }
    ]
}

const settingsJSON = JSON.stringify(settings)

const JSONtoObject = JSON.parse(settingsJSON)

console.log(JSONtoObject.username);
