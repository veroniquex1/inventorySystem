<template>
    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add User
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
                            <input type="text" class="form-control w-50 mx-auto" placeholder="User ID"
                                v-model="payload.userID" />
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control w-50 mx-auto" placeholder="Username"
                                v-model="payload.username" />
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control w-50 mx-auto" placeholder="First name"
                                v-model="payload.firstName" />
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control w-50 mx-auto" placeholder="Last name"
                                v-model="payload.lastName" />
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control w-50 mx-auto" placeholder="Gender"
                                v-model="payload.gender" />
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control w-50 mx-auto" placeholder="Role"
                                v-model="payload.userRole" />
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control w-50 mx-auto" placeholder="user email"
                                v-model="payload.userEmail" />
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control w-50 mx-auto" placeholder="user password"
                                v-model="payload.userPwd" />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="submit" @click.prevent="addingUser" class="btn " id="crudBtn"
                                data-bs-dismiss="modal">
                                Add User
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
    name: "addUser",
    data() {
        return {
            payload: {
                userID: null,
                username: "",
                firstName: "",
                lastName: "",
                gender: "",
                userRole: "",
                userEmail: "",
                userPwd: "",
            },
        };
    },
    methods: {
        addingUser() {
            try {
                this.$store.dispatch("register", this.payload);
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>

<style src="../assets/css/style.css"></style>