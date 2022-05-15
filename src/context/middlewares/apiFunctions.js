const url = 'https://home-pe-router.herokuapp.com';
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2EwNDRmMGM5NmNhOTFlODJmOTkwMSIsImlhdCI6MTY1MjE2MzY2M30.pt1_MFUacGpnKxtxbNTxcso-oHtL00VTzFu5UIFhpVY';

const fetchBalance = async () => {
    const data = await fetch(`${url}/api/user/fetchbalance`, {
        method: 'GET',
        headers: {
            'auth-token': authToken
        }
    }).catch(err => {
        return "error";
    })

    if (data === 'error') {
        const parsedData = {
            success: false,
            response: 'Server_error'
        }
        return parsedData
    }
    const parsedData = await data.json();
    return parsedData;
}

const sendMoney = async (upiId, amount) => {
    const data = await fetch(`${url}/api/user/send`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': authToken
        },
        body: JSON.stringify({ upiId, amount })
    }).catch(err => {
        return "error";
    })

    if (data === 'error') {
        const parsedData = {
            success: false,
            response: 'Server_error'
        }
        return parsedData
    }
    const parsedData = await data.json();
    return parsedData;
}


const checkPin = async () => {
    const data = await fetch(`${url}/api/user/getpin`, {
        method: 'GET',
        headers: {
            'auth-token': authToken
        }
    }).catch(err => {
        return "error";
    })

    if (data === 'error') {
        const parsedData = {
            success: false,
            response: 'Server_error'
        }
        return parsedData
    }
    const parsedData = await data.json();
    return parsedData;

}


const qrCode = async () => {
    const data = await fetch(`${url}/api/user/qrcode`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': authToken
        }
    }).catch(err => {
        return "error"
    })

    if (data === 'error') {
        const parsedData = {
            success: false,
            response: 'Server_error'
        }
        return parsedData
    }
    const parsedData = await data.json();
    return parsedData;
}


const rcntTrnx = async () => {
    const data = await fetch(`${url}/api/transaction/fetchtr`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': authToken
        }
    }).catch(err => {
        return "error";
    })

    if (data === 'error') {
        const parsedData = {
            success: false,
            response: 'Server_error'
        }
        return parsedData
    }
    const parsedData = await data.json();
    return parsedData;
}


const fetchBankDetails = async () => {
    const data = await fetch(`${url}/api/auth/fetchbankdetails`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': authToken
        }
    }).catch(err => {
        return "error";
    })

    if (data === 'error') {
        const parsedData = {
            success: false,
            response: 'Server_error'
        }
        return parsedData
    }
    const parsedData = await data.json();
    return parsedData;
}

export { sendMoney, checkPin, fetchBalance, qrCode, rcntTrnx, fetchBankDetails }