function solution(files) {
    files.sort((a, b) => {
        let HeadRex = /[a-zA-Z.\s-]+/;

        let aHead = HeadRex.exec(a);
        let bHead = HeadRex.exec(b);
        
        let NumberRex = /[0-9]{1,5}/;
        
        let aNumber = NumberRex.exec(a.substr(aHead[0].length));
        let bNumber = NumberRex.exec(b.substr(bHead[0].length));
        
        if(aHead[0].toUpperCase() === bHead[0].toUpperCase()) {
            let aNum = parseInt(aNumber[0]);
            let bNum = parseInt(bNumber[0]);
            return aNum - bNum;
        } else return aHead[0].toUpperCase().localeCompare(bHead[0].toUpperCase());
    });
    
    return files;
}