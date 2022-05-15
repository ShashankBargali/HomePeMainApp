import React, {useContext} from 'react'
import AppContext from '../../context/AppContext'
import QrSect from '../components/QrScanner/Templates/QrSect'

const QrScanner = () => {
    const context = useContext(AppContext)
    return (
        <QrSect setUpiId={context.setUpiId} urlParser={context.urlParser}/>
    )
}

export default QrScanner