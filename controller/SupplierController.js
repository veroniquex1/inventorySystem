import express from 'express'
import bodyParser from 'body-parser'
import { suppliers } from '../model/index.js'

const supplierRouter = express.Router()

// fetch suppliers
supplierRouter.get('/suppliers', (req, res) => {
    try {
        suppliers.fetchSuppliers(req, res)
    } catch (error) {
        res.json({
            status: res.errorCode,
            message: 'Cannot retrieve supplier lisy. Try again later'
        })
    }
})

// fetch single  supplier 
supplierRouter.get('/supplier/:id', (req, res) => {
    try {
        suppliers.fetchSupplier(req, res)
    } catch (error) {
        res.json({
            status: res.errorCode,
            message: 'Cannot retrieve supplier. Please try again.'
        })
    }
})

//  create new supplier
supplierRouter.post('/addSupplier', bodyParser.json(), (req, res) => {
    try {
        suppliers.addSupplier(req, res)
    } catch (error) {
        res.json({
            status: res.errorCode,
            message: 'Cannot add supplier.'
        })
    }
})

// update supplier details
supplierRouter.patch('/update/:id', bodyParser.json(), (req, res) => {
    try {
        suppliers.updateSupplier(req, res)
    } catch (error) {
        res.json({
            status: res.errorCode,
            message: "Cannot update supplier details."
        })
    }
})

// delete supplier
supplierRouter.delete('/delete/:id', (req, res) => {
    try {
        suppliers.deleteSupplier(req, res)
    } catch (e) {
        res.json({
            status: res.errorCode,
            message: "Could not delete supplier. Try again"
        })
    }
})

export {
    supplierRouter, express
}