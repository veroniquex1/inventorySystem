<template>
    <div class="container-fluid" id="navbar">
        <header
            class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
            <div class="col-md-3 mb-md-0">
                <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
                    <img src="https://iili.io/JX5AMWg.png" alt="logo">
                </a>
            </div>

            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="/" class="nav-link">Home</a></li>
                <li><a href="/about" class="nav-link px-2">About</a></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                        aria-expanded="false">Dashboard</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/products">Manage Products</a></li>
                        <li><a class="dropdown-item" href="/suppliers">Manage Suppliers</a></li>
                        <li><a class="dropdown-item" href="/users">Manage Users</a></li>
                        <li><a class="dropdown-item" href="/reports">Reports</a></li>
                    </ul>
                </li>
                <li><a href="/contact" class="nav-link px-2">Contact</a></li>
            </ul>

            <div class="col-md-3 text-end">
                <a href="/login">
                    <button type="button" class="btn btn-outline-primary me-2">Login</button>
                </a>
            </div>
        </header>
    </div>
</template>

<style src="../assets/css/style.css"></style>