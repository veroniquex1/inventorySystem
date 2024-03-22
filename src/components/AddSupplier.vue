<template>
    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add Supplier
    </button>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <input type="text" class="form-control w-50 mx-auto" placeholder="Supplier ID"
                                v-model="payload.suppID" />
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control w-50 mx-auto" placeholder="Supplier Number"
                                v-model="payload.suppNo" />
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control w-50 mx-auto" placeholder="Supplier Name"
                                v-model="payload.suppName" />
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control w-50 mx-auto" placeholder="Supplier Address"
                                v-model="payload.suppAddress" />
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control w-50 mx-auto" placeholder="Supplier Tel"
                                v-model="payload.suppTel" />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="submit" @click.prevent="addingSupplier" class="btn " id="crudBtn"
                                data-bs-dismiss="modal">
                                Add Supplier
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "addSupplier",
    data() {
        return {
            payload: {
                suppID: null,
                suppNo: "",
                suppName: null,
                suppAddress: "",
                suppTel: null,
            },
        };
    },
    methods: {
        addingSupplier() {
            try {
                this.$store.dispatch("addSupplier", this.payload);
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>

<style src="../assets/css/style.css"></style>