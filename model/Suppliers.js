import { connection } from '../config/index.js'

class Suppliers{
    // fetch add suppliers
    fetchSuppliers(req, res) {
        const dbQry = `
        SELECT suppID, suppNo, suppName, suppAddress, suppTel
        FROM Suppliers;
        `
        connection.query(dbQry, (error, results) => {
            if (error) throw error
            res.json({
                status: res.errorCode,
                results
            })
        })
    }

    // fetch a single supplier
    fetchSupplier(req, res) {
        const dbQry = `
        SELECT suppID, suppNo, suppName, suppAddress, suppTel
        FROM Suppliers
        WHERE suppID = ${req.params.id};
        `
        connection.query(dbQry, (error, result) => {
            if (error) throw error
            res.json({
                status: res.errorCode,
                result: result[0]
            })
        })
    }

    //  create new supplier
    addSupplier(req, res) {
        const dbQry = `
        INSERT INTO Suppliers
        SET ?;
        `
        connection.query(dbQry, [req.body], (error) => {
            if (error) throw error
            res.json({
                status: res.errorCode,
                message: 'New supplier added'
            })
        })
    }

    // update supplier details
    updateSupplier(req, res) {
        const dbQry = `
        UPDATE Suppliers
        SET ?
        WHERE suppID = ${req.params.id};
        `
        connection.query(dbQry, [req.body], (error) => {
            if (error) throw error
            res.json({
                status: res.errorCode,
                message: "Supplier information successfully updated",
                results
            })
        })
    }

    // delete an existing supplier
    deleteSupplier(req, res) {
        const dbQry = `
        DELETE FROM Suppliers
        WHERE suppID = ${req.params.id};
        `
        connection.query(dbQry, (error) => {
            if (error) throw error
            res.json({
                status: res.statusCode,
                message: "Supplier deleted."
            })
        })
    }
}

export {
    Suppliers
}