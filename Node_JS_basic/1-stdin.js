// Display the initial welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Set the encoding for stdin so we get strings instead of buffers
process.stdin.setEncoding('utf-8');

// Listen for user input
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

// Listen for the end of the stream (e.g., Ctrl+D or piped input finishing)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
