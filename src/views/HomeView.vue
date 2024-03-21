<template>
  <div class="container px-4 py-5">
    <h2 class="pb-2 border-bottom ">Home</h2>

    <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
      <div class="col d-flex flex-column align-items-center gap-2">
        <h2 class="fw-bold text-body-emphasis">Inventory management made easy.</h2>
        <h4 class="text-body-secondary pt-1"> Keep track of your stocks, income and
          expense reports all in one place.
        </h4>
      </div>

      <div class="col">
        <div class="row row-cols-1 row-cols-sm-2 g-4" id="homeContent">
          <div class="col d-flex flex-column gap-2">
            <div
              class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
              <a href="/products">
                <img src="https://i.ibb.co/1XKh8JZ/package.png" alt="icon" loading="lazy">
              </a>
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis">Products</h4>
            <p class="text-body-secondary">Add, remove and update stock.</p>
          </div>


          <div class="col d-flex flex-column gap-2">
            <div
              class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
              <a href="/suppliers">
                <img src="https://i.ibb.co/mqCBXvG/supplier.png" alt="icon" loading="lazy">
              </a>
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis">Suppliers</h4>
            <p class="text-body-secondary">Manage supplier information</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div
              class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
              <a href="/users">
                <img src="https://iili.io/JXV4wUG.png" alt="icon" loading="lazy">
              </a>
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis">Users</h4>
            <p class="text-body-secondary">Register new user</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div
              class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
              <a href="/reports">
                <img src="https://i.ibb.co/pQYSzFt/diagram.png" alt="icon" loading="lazy">
              </a>
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis">Reports</h4>
            <p class="text-body-secondary">Access income and expense reports easily</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

</script>

<style src="../assets/css/style.css"></style>
