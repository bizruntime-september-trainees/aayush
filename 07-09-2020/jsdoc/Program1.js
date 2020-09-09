/**
 * this function will accept details about hospital
 * create object 
 * 
 * @param {number} bed no of bed
 * @param {string} patientname persons name
 * @returns {object}
 */
function hospital(bed,patientname){
    return{
        bed:bed,
        patientname:patientname
    }
}
hospital