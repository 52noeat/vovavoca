var Soundex_ = require('soundex-encode')
var Metaphone_ = require('metaphone')
soundex = {};

soundex.SVC = function (input, dataset){
    let code1 = Soundex_(input);
    let output = new Array();
    // console.log(input,code1)

    for(i in dataset){
        if(input == dataset[i]){
            continue;
        }
        let code2 = Soundex_(dataset[i])
        // console.log(dataset[i],code2)
        if(code1==code2) {
            output.push(dataset[i])
        }
    }
    return output
}

module.exports = soundex;

// soundex.SVC("sell", ["cell", "sail","scale","sale","school","shallow","celebrity"]);
