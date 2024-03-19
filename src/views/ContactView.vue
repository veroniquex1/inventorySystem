<template>
    <div class="container px-4 py-2">
        <h2 class="pb-2 border-bottom d-flex justify-content-start display-5">Contact us!</h2>
    </div>
    <div class="container col-xxl-8 px-4 py-2">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-2">
            <div class="col-10 col-sm-8 col-lg-6">
                <div class="modal modal-sheet position-static d-block p-4 py-md-5" tabindex="-1" role="dialog"
                    id="modalSignin">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content rounded-4 shadow">
                            <div class="modal-header p-5 pb-4 border-bottom-0">
                                <h1 class="fw-bold mb-0 fs-2">Location</h1>
                            </div>
                            <div class="modal-body p-5 pt-0">

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-lg-6">
                <div class="modal modal-sheet position-static d-block p-4 py-md-5" tabindex="-1" role="dialog"
                    id="modalSignin">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content rounded-4 shadow">
                            <div class="modal-header p-5 pb-4 border-bottom-0">
                                <h1 class="fw-bold mb-0 fs-2">Sent us a message</h1>
                            </div>
                            <div class="modal-body p-5 pt-0">
                                <form class="">
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control rounded-3" id="floatingInput"
                                            placeholder="name@example.com">
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="name" class="form-control rounded-3" id="floatingInput"
                                            placeholder="name">
                                        <label for="floatingInput">Full name</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="message" class="form-control rounded-3" id="floatingMessage"
                                            placeholder="Message">
                                        <label for="floatingMessage">Message</label>
                                    </div>
                                    <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit"
                                        id="submitBtn">Submit</button>
                                    <small class="text-body-secondary">We will contact you back within 24 hours!</small>
                                    <hr class="my-4">
                                    <h2 class="fs-5 fw-bold mb-3">Other ways to contact us</h2>
                                    <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                                        <svg class="bi me-1" width="16" height="16">
                                            <use xlink:href="#twitter"></use>
                                        </svg>
                                        Start a chat
                                    </button>
                                    <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit"
                                        id="callBtn">
                                        <svg class="bi me-1" width="16" height="16">
                                            <use xlink:href="#facebook"></use>
                                        </svg>
                                        Call now!
                                    </button>
                                    <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                                        <svg class="bi me-1" width="16" height="16">
                                            <use xlink:href="#github"></use>
                                        </svg>
                                        Send feedback
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style src="../assets/css/style.css"></style>