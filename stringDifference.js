// Function to calculate differences between two strings
function stringDifference(baseString, comparisonString) {
    let differences = [];
    let startIndex = null;
    for (let i = 0; i < baseString.length; i++) {
        if (baseString[i] !== comparisonString[i]) {
            if (startIndex === null) startIndex = i;
            if (i === baseString.length - 1 || baseString[i+1] === comparisonString[i+1]) {
                differences.push({
                    'startIndex': startIndex,
                    'endIndex': i,
                    'difference': baseString.slice(startIndex, i+1)
                });
                startIndex = null;
            }
        }
    }
    return differences;
}

// Export the function as a module
module.exports = stringDifference;
