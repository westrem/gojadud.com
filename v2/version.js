import dateFormat from 'dateformat';
import randomstring from 'randomstring';
import crypto from 'crypto';

const now = new Date();
const dateFormatted = dateFormat(now, 'yyyy-mm-dd--HH-MM-ss');
const dateHashed = crypto.createHmac('sha256', dateFormatted).digest('hex');
const hash = randomstring.generate(6);
const buildDir = `${dateFormatted}---${hash}/`;

const VERSION = `${dateHashed}-${hash}`;

export default VERSION;

export {
  dateFormatted,
  dateHashed,
  hash,
  buildDir
};
