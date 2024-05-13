export function StringManipulation(CheckString,MethodString){
    if(MethodString == "indexOf"){
        let check = Math.floor(Math.random() * CheckString.length);
        let checkstr = CheckString[check];
        return (CheckString.indexOf(checkstr));
    }
    else if(MethodString == "toUpperCase"){
        return (CheckString.toUpperCase())
    }
    else if(MethodString == "toLowerCase"){
        return (CheckString.toLowerCase());
    }
    else if(MethodString == "lastIndexOf"){
        let check = Math.floor(Math.random() * CheckString.length);
        let checkstr = CheckString[check];
        let result = CheckString.lastIndexOf(checkstr);
        return result;
    }
    else if(MethodString == "replace"){
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let length = 5;
        let resultstr = "";
        let newstr = "";
        for(let i=0;i<length;i++){
            let result = Math.floor(Math.random() * characters.length);
            resultstr = characters.substring(result,result+5);
            newstr = CheckString.replace(CheckString,resultstr);
        }
        return newstr;
    }
    else if(MethodString == "slice"){
        let randomnum1 = Math.floor(Math.random() * CheckString.length - CheckString.length);
        let randomnum2 = Math.floor(Math.random() * CheckString.length);
        let copystr = CheckString.slice(randomnum1,randomnum2);
        if(copystr.length <= 0){
            console.log("Please reEvaluate function!");
        }
        return copystr;
    }
    else if(MethodString == "repeat"){
        let rannum = Math.floor(Math.random () * CheckString.length)+1;
        let repstr = CheckString.repeat(rannum);
        return repstr;
    }
    else if(MethodString == "substring"){
        let startingRange = Math.floor(Math.random () * CheckString.length);
        let numberOfRange = Math.floor(Math.random () * CheckString.length);
        let subStr = CheckString.substring(startingRange,numberOfRange);
        return subStr;
    }
}
