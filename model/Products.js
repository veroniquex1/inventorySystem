import { connection } from '../config/index.js'

class Products{
    // fetch all products
    fetchProducts(req, res) {
        const dbQry = `
        SELECT prodID, prodNo, prodName, quantity,
        cost, category, prodURL, prodDesc
        FROM Products;
        `
        connection.query(dbQry, (error, results) => {
            if (error) throw error
            res.json({
                status: res.errorCode,
                results
            })
        })
    }

    // fetch a single product
    fetchProduct(req, res) {
        const dbQry = `
        SELECT prodID, prodNo, prodName, quantity,
        cost, category, prodURL, prodDesc
        FROM Products
        WHERE prodID = ${req.params.id};
        `
        connection.query(dbQry, (error, result) => {
            if (error) throw error
            res.json({
                status: res.errorCode,
                result: result[0]
            })
        })
    }

    // add a new product
    addProduct(req, res) {
        const dbQry = `
        INSERT INTO Products
        SET ?;
        `
        connection.query(dbQry, [req.body], (error) => {
            if (error) throw error
            res.json({
                status: res.errorCode,
                message: 'New product added'
            })
        })
    }

    // update an existing product
    updateProduct(req, res) {
        const dbQry = `
        UPDATE Products
        SET ?
        WHERE prodID = ${req.params.id};
        `
        connection.query(dbQry, [req.body], (error) => {
            if (error) throw error
            res.json({
                status: res.errorCode,
                message: "Product information updated"
            })
        })
    }

    // delete a product
    deleteProduct(req, res) {
        const dbQry = `
        DELETE FROM Products
        WHERE prodID = ${req.params.id};
        `
        connection.query(dbQry, (error) => {
            if (error) throw error
            res.json({
                status: res.statusCode,
                message: "Product deleted."
            })
        })
    }
}

export {
    Products
}