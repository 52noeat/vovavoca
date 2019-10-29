var Metaphone_ = require('metaphone')

metaphone = {};

metaphone.SVC = async function (input, dataset, k){
    let code1 = Metaphone_(input);
    let output = new Array();
    console.log(input,code1)

    for(i in dataset){
        if(input == dataset[i]){
            continue;
        }
        let code2 = Metaphone_(dataset[i])
        console.log(dataset[i],code2)
        if(code1==code2) {
            output.push(dataset[i])

        }
    }
    return output
}

module.exports = metaphone;

metaphone.SVC("sell", ["cell", "sail","scale","sale","school","shallow","celebrity"], 3);
