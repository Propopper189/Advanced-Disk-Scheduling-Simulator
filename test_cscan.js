function CSCAN(reqs, start, minTrack, maxTrack, dir='RIGHT') {
    const sorted = [...reqs].sort((a,b)=>a-b);
    let left = sorted.filter(r => r < start);
    let right = sorted.filter(r => r >= start);
    let seq = [];

    if (dir === 'RIGHT') {
        seq = [...right];
        if (seq.length === 0 || seq[seq.length-1] !== maxTrack) seq.push(maxTrack);
        // jump to minTrack (include to show teleport)
        seq.push(minTrack);
        seq.push(...left);
    } else {
        // LEFT direction: serve left, go to min, jump to max, serve right
        seq = [...left.reverse()];
        if (seq.length === 0 || seq[seq.length-1] !== minTrack) seq.push(minTrack);
        seq.push(maxTrack);
        seq.push(...right.reverse());
    }

    return seq;
}

const reqs = [82, 170, 43, 140, 24, 16, 190];
const start = 50;
const minTrack = 0;
const maxTrack = 199;
const dir = 'LEFT';

console.log("Input Reqs:", reqs);
console.log("Start:", start);
console.log("Direction:", dir);
console.log("Sequence:", CSCAN(reqs, start, minTrack, maxTrack, dir));
