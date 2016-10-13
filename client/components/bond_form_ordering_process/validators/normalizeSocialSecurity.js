/**
 * Created by gregorydrake on 8/29/16.
 */
const normalizeSocial = (value, previousValue) => {
    if (!value) {
        return value
    }
    const onlyNums = value.replace(/[^\d]/g, '')
    if (!previousValue || value.length > previousValue.length) {
        // typing forward
       // console.log('first if, typign forward');
        if (onlyNums.length === 3) {
        //    console.log('-if === 3', onlyNums)
            return onlyNums + '-'
        }
        if (onlyNums.length === 5) {
        //    console.log('-if ===5', onlyNums)
            return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3) + '-'
        }
    }
    if (onlyNums.length <= 3) {
      //  console.log('if <= 3', onlyNums)
        return onlyNums
    }
    if (onlyNums.length <= 5) {
     //   console.log('if <= 5', onlyNums)
        return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3)
    }
   // console.log("final return", onlyNums);
    return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3, 5) + '-' + onlyNums.slice(5, 9)
}

export default normalizeSocial