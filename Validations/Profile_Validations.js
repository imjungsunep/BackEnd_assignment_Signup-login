export function Profile_Validation(body = {}){
    const errors = {}
    const {qualification, skils} = body;
    
    if(!qualification || String(qualification).trim().length<=5 || String(qualification).trim().length>=50){
        errors.push('Qualification can not be empty.');
    }
    if(!skils || String(skils).trim().length<=5 || String(skils).trim().length>=100){
        errors.push('Skills can not be empty.');
    }
}