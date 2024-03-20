<template>
    <div class="container px-4 py-5">
        <h2 class="pb-2 border-bottom d-flex justify-content-start display-5">Login</h2>
    </div>
    <div class="container  form-signin w-25 m-auto" id="formContainer">
        <form>
            <img class="mb-4" src="https://i.ibb.co/y8fjpND/scourgify-initial-white-bg.png" alt="initialLogo"
                height="65">
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                    fdprocessedid="7np32no">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                    fdprocessedid="6b215l">
                <label for="floatingPassword">Password</label>
            </div>

            <div class="form-check text-start my-3">
                <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    Remember me
                </label>
            </div>
            <div>
                <a href="/login">
                    <button type="button" class="btn" id="button">Sign in</button>
                </a>
                <a href="/register">
                    <button type="button" class="btn" id="button">Sign-up</button>
                </a>
            </div>
            <!-- <button class="btn btn-primary w-100 py-2" type="submit" fdprocessedid="degj2q" id="signinBtn">Sign
                in</button> -->
            <p class="mt-5 mb-3 text-body-secondary">© Scourgify</p>
        </form>
    </div>
</template>

<style src="../assets/css/style.css"></style>