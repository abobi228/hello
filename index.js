const fs = require('fs');
function parseEmails(filePath) {
  const lines = fs.readFileSync(filePath, 'utf8').split('\n');
  const emails= [];

  lines.forEach((line) => {
    const [email = '', imapPass = ''] = line.split(':');
    emails.push({ email: email.trim(), imapPass: imapPass.trim() });
  });

  return emails;
}
function parseProxies(filePath) {
  const lines = fs.readFileSync(filePath, 'utf8').split('\n');
  const proxies = [];

  lines.forEach((line) => {
    const proxy = line.trim();
    proxies.push(proxy);
  });

  return proxies;
}
const emails = parseEmails('./inputs/emails.txt');
const proxies = parseProxies('./inputs/proxies.txt');


console.log(emails,proxies)
