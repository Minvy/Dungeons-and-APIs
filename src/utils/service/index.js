const { execSync } = require("child_process");

const serviceUtils = {}

serviceUtils.spawn = (name) => {
    const shellCmd = [
        'cd services',
        `mkdir service-${name}`,
        `cd service-${name}`,
        'npm init -y',
        'npm install express',
        'npm install body-parser',
        `echo {} > data.json`,
        `echo console.log('hello world') > app.js`
    ].join(' && ')
    _execute(shellCmd)
}

serviceUtils.destroy = (name) => {
    const shellCmd = [
        'cd services',
        `rd /s /q service-${name}`,
    ].join(' && ')
    _execute(shellCmd)
}

const _execute = (shellCmd) => {
    execSync(shellCmd, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}

module.exports = serviceUtils