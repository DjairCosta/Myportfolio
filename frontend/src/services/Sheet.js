import axios from 'axios'

export const save = (data) => {
    const config = {
        method: 'post',
        url: "https://sheet.best/api/sheets/80798045-9eae-40d5-b2d5-3e30ba35d527",
        headers: {
            "Content-Type": "application/json",
        },
        data
    };

    //console.log("spreadsheet config", config)

    return axios(config)
        .then(res => {
            console.log("Dados da planilha", res)
            return true
        })
        .catch(err => {
            console.log(err)
            return false
        })
}
