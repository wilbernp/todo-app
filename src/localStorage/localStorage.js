function getItemLocalStorage(keyItemSearch){
    return JSON.parse(localStorage.getItem(keyItemSearch))
}

function setItemLocalStorage(key, item){
    localStorage.setItem(key, JSON.stringify(item))
}

export{
    getItemLocalStorage,
    setItemLocalStorage
}