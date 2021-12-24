function saveToLocal(key, itemsToSet) {
    return localStorage.setItem(key, JSON.stringify(itemsToSet));
}

function loadFromLocal(key) {
    try {
        return JSON.parse(localStorage.getItem(key))
    }
    catch(error) {
    console.log(error.message)
    }
}

export {saveToLocal, loadFromLocal}