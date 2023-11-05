export default {
    setCookie(name, value) {
        // Encode value in order to escape semicolons, commas, and whitespace
        var cookie = name + "=" + encodeURIComponent(value);

        var now = new Date();
        var date = now.getDate()
        let tempMonth = now.getMonth() + 1
        var month = tempMonth > 9 ? tempMonth : `0${tempMonth}`
        var year = now.getFullYear()
        var expireTime = `${date}/${month}/${year}/23:59:59`
        now.setDate(expireTime);
        /* Sets the max-age attribute so that the cookie expires
        after the specified number of days */
        cookie += "; max-age=" + now +';SameSite=strict' 

        document.cookie = cookie;

    },
}