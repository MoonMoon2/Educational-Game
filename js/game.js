var inputs = {
    question: document.getElementById('question'),
    answer: document.getElementById('answer'),

}

async function timeTaken(correct, tstart, tallow) {
    if (correct == 0) {
        var tstart = new Date().getTime();
        console.log(tstart);
        await sleep(2000);
        var ttaken = (new Date().getTime() - tstart);
        console.log(ttaken);
    } else {
        return 0
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function mainGame() {
     
}
