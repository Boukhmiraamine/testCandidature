//Verifier si une chaine est valide
function verifyChar(c) {
    let increasing = true;
    let decreasing = true;

    for (let i = 1; i < report.length; i++) {
        const diff = Math.abs(c[i] - c[i - 1]);
        if (diff < 1 || diff > 3) {
            return false; 
        }
        if (c[i] > c[i - 1]) {
            decreasing = false; 
        } else if (c[i] < c[i - 1]) {
            increasing = false; 
        }
    }

    return increasing || decreasing;
}

//Compter le nombre de chaines valides
function countChar(data) {
    let count = 0;

    data.forEach(c => {
        if (verifyChar(c)) {
            count++;
        }
    });

    return count;
}

const numbs = [[7, 6, 4, 2, 1],[1, 2, 7, 8, 9],[9, 7, 6, 2, 1],[1, 3, 2, 4, 5],[8, 6, 4, 4, 1],[1, 3, 6, 7, 9]];

console.log('Nombre des chaines validés:', analyzeReports(numbs));