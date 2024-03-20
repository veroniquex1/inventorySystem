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
                        <li><a class="dropdown-item" href="/products">Products</a></li>
                        <li><a class="dropdown-item" href="/suppliers">Suppliers</a></li>
                        <li><a class="dropdown-item" href="/users">Users</a></li>
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




    <!-- <nav class="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Twelfth navbar example" id="navbar">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10"
                aria-controls="navbarsExample10" aria-expanded="true" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a href="/"
                class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <img src="https://iili.io/JX5AMWg.png" alt="logo">
            </a>

            <div class="navbar-collapse justify-content-md-center collapse show" id="navbarsExample10" style="">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                            aria-expanded="false">Dashboard</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/products">Products</a></li>
                            <li><a class="dropdown-item" href="/suppliers">Suppliers</a></li>
                            <li><a class="dropdown-item" href="/users">Users</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="/contact">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="/login">Login</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav> -->
</template>

<style src="../assets/css/style.css"></style>