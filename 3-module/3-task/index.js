function camelize(str) {
    str_res = str.split("-")
    str_res2 = str_res[0]
    for (let i = 1; i < str_res.length; i++){
        str_res2 = str_res2 + (str_res[i][0].toUpperCase() + str_res[i].slice(1,str_res[i].length+1))
    }
    return str_res2
}
