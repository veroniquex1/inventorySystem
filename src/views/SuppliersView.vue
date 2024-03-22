<template>
    <div class="container px-4 py-5">
        <h2 class="pb-2 border-bottom d-flex justify-content-center">Manage Suppliers</h2>
    </div>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">SuppID</th>
                <th scope="col">Supplier #</th>
                <th scope="col">Supplier Name</th>
                <th scope="col">Supplier Address</th>
                <th scope="col">Supplier Tel</th>
                <th scope="col">Edit | Delete</th>
            </tr>
        </thead>
        <tbody v-if="suppliers">
            <tr v-for="supplier in suppliers" :key="supplier.suppID">
                <td>{{ supplier.suppID }}</td>
                <td>{{ supplier.suppNo }}</td>
                <td>{{ supplier.suppName }}</td>
                <td>{{ supplier.suppAddress }}</td>
                <td>{{ supplier.suppTel }}</td>
                <td class="d-flex justify-content-between">
                    <UpdateSupplier :supplier="supplier" />
                    <button class="btn " @click="event => deleteSupplier(supplier.suppID)" id="crudBtn">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
    <div>
        <AddSupplier class="btn" id="addBtn"></AddSupplier>
        <button @click="downloadPDF" class="btn btn-primary " id="crudBtn">Download Report</button>
    </div>
</template>

<script>

import AddSupplier from '../components/AddSupplier.vue';
import UpdateSupplier from '../components/UpdateSupplier.vue';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
export default {
    components: {
        UpdateSupplier,
        AddSupplier,
    },
    computed: {
        suppliers() {
            return this.$store.state.suppliers
        },
    },
    mounted() {
        this.$store.dispatch("fetchSuppliers")
    },
    methods: {
        deleteSupplier(suppID) {
            this.$store.dispatch('deleteSupplier', { id: suppID });
        },
        UpdateSupplier(supplier) {
            let editSupplier = { suppID: supplier.suppID, suppNo: supplier.suppNo, suppName: supplier.suppName, suppAddress: supplier.suppAddress, suppTel: supplier.suppTel }
            this.$store.dispatch('UpdateSupplier', { id: supplier.suppID, data: editSupplier })
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