let BASEURL;

switch (process.env.NODE_ENV) {
    case 'development':
        BASEURL = 'development';
        break;
    case 'production':
        BASEURL = 'production';
        break;
    default:
        BASEURL = 'test';
}

console.error(BASEURL);

module.exports = {
    BASEURL
}
