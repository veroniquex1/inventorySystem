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
                <th scope="col">Delete | Edit</th>
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
                    <button class="btn deleteButton" @click="event => deleteSupplier(supplier.suppID)"
                        id="button">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
    <div>
        <AddSupplier class="btn" id="addBtn"></AddSupplier>
    </div>
</template>

<script>

import AddSupplier from '../components/AddSupplier.vue';
import UpdateSupplier from '../components/UpdateSupplier.vue';
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
        }
    }
}

</script>

<style src="../assets/css/style.css"></style>