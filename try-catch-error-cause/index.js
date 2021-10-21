/**
 * This requires Node.js v17+
 */

function doWork() {
  try {
    doSomeWork();
  } catch (err) {
    throw new Error('Some work failed', { cause: err });
  }
  try {
    doMoreWork();
  } catch (err) {
    throw new Error('More work failed', { cause: err });
  }
}

try {
  doWork();
} catch (err) {
  switch(err.message) {
    case 'Some work failed':
      handleSomeWorkFailure(err.cause);
      break;
    case 'More work failed':
      handleMoreWorkFailure(err.cause);
      break;
  }
}

function handleSomeWorkFailure(cause) {
  console.log(cause.message);
}
