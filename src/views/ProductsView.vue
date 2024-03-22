<template>
    <div class="container px-4 py-5">
        <h2 class="pb-2 border-bottom d-flex justify-content-center">Manage Products</h2>
    </div>


    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">Prod ID</th>
                <th scope="col">Prod #</th>
                <th scope="col">Product Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Cost</th>
                <th scope="col">Category</th>
                <!-- <th scope="col">Total Cost</th> -->
                <th scope="col">Prod URL</th>
                <th scope="col">Edit | Delete</th>
            </tr>
        </thead>
        <tbody v-if="products">
            <tr v-for="product in products" :key="product.prodID">
                <td>{{ product.prodID }}</td>
                <td>{{ product.prodNo }}</td>
                <td>{{ product.prodName }}</td>
                <td>{{ product.quantity }}</td>
                <td>R {{ product.cost }}</td>
                <td>{{ product.category }}</td>
                <td>{{ product.prodURL }}</td>
                <td>{{ product.prodDesc }}</td>
                <td class="d-flex justify-content-between">
                    <UpdateProduct :product="product" id="crudBtn" />
                    <button class="btn deleteButton" @click="event => deleteProduct(product.prodID)"
                        id="button">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
    <div>
        <AddProduct class="btn" id="crudBtn"></AddProduct>
        <button @click="downloadPDF" class="btn" id="crudBtn">Download Report</button>
    </div>
</template>

<script>

import AddProduct from '../components/AddProduct.vue';
import UpdateProduct from '../components/UpdateProduct.vue';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
export default {
    components: {
        UpdateProduct,
        AddProduct,
    },
    computed: {
        products() {
            return this.$store.state.products
        },
    },
    mounted() {
        this.$store.dispatch("fetchProducts")
    },
    methods: {
        deleteProduct(prodID) {
            this.$store.dispatch('deleteProduct', { id: prodID });
        },
        UpdateProduct(product) {
            let editProduct = { productID: product.prodID, prodNo: product.prodNo, productName: product.prodName, quantity: product.quantity, amount: product.amount, Category: product.category, prodURL: product.prodURL, prodDesc: product.prodDesc }
            this.$store.dispatch('UpdateProduct', { id: product.prodID, data: editProduct })
        },
        downloadPDF() {
            const element = document.querySelector('.table-responsive');
            html2canvas(element).then(canvas => {
                const pdf = new jsPDF('p', 'mm', 'a4');
                const imgData = canvas.toDataURL('image/png');
                const imgWidth = 208;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                pdf.save('products_report.pdf');
            });
        }
    }
}

</script>

<style src="../assets/css/style.css"></style>