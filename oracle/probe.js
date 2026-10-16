const handshakeCommands = ['wink', 'double blink', 'close your eyes', 'jump'];

const commands = (handshake) => {
  if (typeof handshake !== 'number') {
    throw new Error('Handshake must be a number');
  }

  const shakeWith = handshakeCommands.filter(
    (_, i) => handshake & Math.pow(2, i),
  );

  if (handshake & Math.pow(2, 4)) shakeWith.reverse();

  return shakeWith;
};

const __in = [1, 2, 4, 8, 3, 19, 24, 16, 15, 31, 0];
const __out = [];
for (const x of __in) {
  try { __out.push({ok: true, v: commands(x)}); }
  catch (e) { __out.push({ok: false, e: String(e).slice(0, 40)}); }
}
console.log(JSON.stringify({out: __out}));
