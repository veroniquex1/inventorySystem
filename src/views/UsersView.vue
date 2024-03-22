<template>
    <div class="container px-4 py-5">
        <h2 class="pb-2 border-bottom d-flex justify-content-center">Manage Users</h2>
    </div>


    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">User ID</th>
                <th scope="col">Username</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Gender</th>
                <th scope="col">User Role</th>

                <!-- <th scope="col">Total Cost</th> -->
                <th scope="col">User Email</th>
                <th scope="col">User Password</th>
                <th scope="col">Delete | Edit</th>
            </tr>
        </thead>
        <tbody v-if="users">
            <tr v-for="user in users" :key="user.userID">
                <td>{{ user.userID }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.firstName }}</td>
                <td>{{ user.lastName }}</td>
                <td>{{ user.gender }}</td>
                <td>{{ user.userRole }}</td>
                <td>{{ user.userEmail }}</td>
                <td>{{ user.userPwd }}</td>
                <td class="d-flex justify-content-between">
                    <UpdateUser :user="user" />
                    <button class="btn deleteButton" @click="event => deleteUser(user.userID)"
                        id="button">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
    <div>
        <AddUser class="btn" id="addBtn"></AddUser>
    </div>
</template>

<script>

import AddUser from '../components/AddUser.vue';
import UpdateUser from '../components/UpdateUser.vue';
export default {
    components: {
        UpdateUser,
        AddUser,
    },
    computed: {
        users() {
            return this.$store.state.users
        },
    },
    mounted() {
        this.$store.dispatch("fetchUsers")
    },
    methods: {
        deleteUser(userID) {
            this.$store.dispatch('deleteUser', { id: userID });
        },
        UpdateUser(user) {
            let editUser = { userID: user.userID, username: user.username, firstName: user.firstName, lastName: user.lastName, gender: user.gender, userRole: user.userRole, userEmail: user.userEmail, userPwd: user.userPwd }
            this.$store.dispatch('UpdateUser', { id: user.userID, data: editUser })
        }
    }
}

</script>

<style src="../assets/css/style.css"></style>