// Create Token and saving in cookie

const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken();
    const days = parseInt(process.env.COOKIE_EXPIRE.match(/^\d+/)[0]);
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
    // options for cookie
    const options = {
        expires,
        httpOnly: true,
    };
    // console.log('expires:', expires);
    // console.log('options:', options);
    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        token,
    });
};

module.exports = sendToken;