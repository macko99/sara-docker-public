
function errorToConsole(error) {

    const resMessage =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
    console.log(resMessage)
}

export default errorToConsole;