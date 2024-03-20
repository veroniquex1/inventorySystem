<template>
    <div class="container px-4 py-5">
        <h2 class="pb-2 border-bottom d-flex justify-content-center">Products</h2>
    </div>


    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">Edit | Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                    <button class="btn" id="button">Edit</button>
                    <button class="btn" id="button">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
    <div>
        <button class="btn" id="button">Add Product</button>
    </div>
</template>

<script>

</script>

<style src="../assets/css/style.css"></style>