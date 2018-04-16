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

async function mainGame(uname, pscore) {
    if (fs.existsSync(localStorage.path) && fs.statSync(localStorage.path).size > 0) {
        let data = render(JSON.parse(fs.readFileSync(localStorage.path)));
    } else {
        // Display "no data" warning if no data is found
        warning.style.display = 'block';
    }
}
