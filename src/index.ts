// Sort Descending Order
const GetSortOrderDesc = (prop: string) => {
    var objProp: any = []
    var properties
    // Checking if property is multi level
    if (prop.includes('.')) {
        properties = prop.split('.')
        // Seprating properties
        for (let index = 0; index < properties.length; index++) {
            const element = properties[index]
            index === 0 ? prop = element : objProp.push(element)
        }
    }
    return (a: any, b: any) => {
        if (prop === '') {
            return b - a
        }
        var aValue = a[prop]
        var bValue = b[prop]
        if (!aValue || !bValue) {
            return b - a
        }
        // if property of level two
        if (objProp.length > 0 && objProp.length === 1) {
            for (const key in a[prop]) {
                if (a[prop].hasOwnProperty(key)) {
                    if (key === objProp[0]) {
                        const element = a[prop][key]
                        aValue = element
                    }
                }
            }
            for (const key in b[prop]) {
                if (b[prop].hasOwnProperty(key)) {
                    if (key === objProp[0]) {
                        const element = b[prop][key]
                        bValue = element
                    }
                }
            }
        }
        // if property of level three
        if (objProp.length > 0 && objProp.length === 2) {
            for (const key in a[prop][objProp[0]]) {
                if (a[prop][objProp[0]].hasOwnProperty(key)) {
                    if (key === objProp[1]) {
                        const element = a[prop][objProp[0]][key]
                        aValue = element
                    }
                }
            }
            for (const key in b[prop][objProp[0]]) {
                if (b[prop][objProp[0]].hasOwnProperty(key)) {
                    if (key === objProp[1]) {
                        const element = b[prop][objProp[0]][key]
                        bValue = element
                    }
                }
            }
        }
        // Actually ordering the array
        if (bValue > aValue) {
            return 1
        } else if (bValue < aValue) {
            return -1
        }
        return 0
    }
}
// Sort Ascending Order
const GetSortOrderAsc = (prop: string) => {
    var objProp: any = []
    var properties
    // Checking if property is multi level
    if (prop.includes('.')) {
        properties = prop.split('.')
        // Seprating the properties
        for (let index = 0; index < properties.length; index++) {
            const element = properties[index]
            index === 0 ? prop = element : objProp.push(element)
        }
    }
    return (a: any, b: any) => {
        if (prop === '') {
            return a - b
        }
        var aValue = a[prop]
        var bValue = b[prop]
        if (!aValue || !bValue) {
            return a - b
        }
        // if property of level two
        if (objProp.length > 0 && objProp.length === 1) {
            for (const key in a[prop]) {
                if (a[prop].hasOwnProperty(key)) {
                    if (key === objProp[0]) {
                        const element = a[prop][key]
                        aValue = element
                    }
                }
            }
            for (const key in b[prop]) {
                if (b[prop].hasOwnProperty(key)) {
                    if (key === objProp[0]) {
                        const element = b[prop][key]
                        bValue = element
                    }
                }
            }
        }
        // if property of level three
        if (objProp.length > 0 && objProp.length === 2) {
            for (const key in a[prop][objProp[0]]) {
                if (a[prop][objProp[0]].hasOwnProperty(key)) {
                    if (key === objProp[1]) {
                        const element = a[prop][objProp[0]][key]
                        aValue = element
                    }
                }
            }
            for (const key in b[prop][objProp[0]]) {
                if (b[prop][objProp[0]].hasOwnProperty(key)) {
                    if (key === objProp[1]) {
                        const element = b[prop][objProp[0]][key]
                        bValue = element
                    }
                }
            }
        }
        // Actually ordering the array
        if (aValue > bValue) {
            return 1
        } else if (aValue < bValue) {
            return -1
        }
        return 0
    }
}

const sortArray = (arr: any = [], order: 'ASC' | 'DESC', key: string = '') => {
    return order === 'ASC' ? arr.sort(GetSortOrderAsc(key)) : arr.sort(GetSortOrderDesc(key))
}

module.exports = sortArray
