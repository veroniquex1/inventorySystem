<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn modalButton" data-bs-toggle="modal" data-bs-target="#updateSupplierModal">
        Update Suppliers
    </button>
    <!-- Modal -->
    <div class="modal fade" id="updateSupplierModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Update Suppliers</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="updateSupplier">
                        <div class="mb-3">
                            <input type="text" class="form-control w-50 mx-auto" placeholder="Supplier ID"
                                v-model="payload.suppID">
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control w-50 mx-auto" placeholder="Supplier No"
                                v-model="payload.suppNo">
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control w-50 mx-auto" placeholder="Supplier Name"
                                v-model="payload.suppName">
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control w-50 mx-auto" placeholder="Supplier Address"
                                v-model="payload.suppAddress">
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control w-50 mx-auto" placeholder="Supplier Tel"
                                v-model="payload.suppTel">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-success" data-bs-dismiss="modal">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UpdateSupplier',
    data() {
        return {
            payload: {
                suppID: '',
                suppNo: '',
                suppName: '',
                suppAddress: '',
                suppTel: ''
            }
        }
    },
    methods: {
        updateSupplier() {
            this.$store.dispatch('updateSupplier', { id: this.payload.suppID, data: this.payload });
            window.location.reload()
        }
    }
}
</script>

<style src="../assets/css/style.css"></style>