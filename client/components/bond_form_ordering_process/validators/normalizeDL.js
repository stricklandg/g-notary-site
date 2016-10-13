/**
 * Created by gregorydrake on 8/29/16.
 */
const normalizeDL = (value, previousValue) => {
    if (!value) {
        return value
    }
    const onlyNums = value.replace(/[^\d]/g, '')
    return onlyNums.slice(0, 8)
}

export default normalizeDL