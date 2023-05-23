<style>
.ck-editor__editable {
    height: 30vh;
}

.btn-success {
    color: #fff;
    background-color: #046A38;
    border-color: #046A38;
    box-shadow: none;
}

.toZoom {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

.toZoom:hover {
    opacity: 0.7;
}

.modal {
    display: none;
    position: absolute;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.9);
}

/* Modal Content (image) */
.modal-content {
    margin: auto;
    display: block;
    width: 20%;
    max-width: 700px;
}

/* Add Animation */
.modal-content {
    animation-name: zoom;
    animation-duration: 0.4s;
}

@keyframes zoom {
    from {
        transform: scale(0.1)
    }

    to {
        transform: scale(1)
    }
}

/* The Close Button */
.close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
}

.close:hover,
.close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px) {
    .modal-content {
        width: 100%;
    }
}
</style>
<div class="wrapper">
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2" id="manage">
                    <div class="col-sm-10">
                        <h1 class="m-0 mx-2"> Education Logo </h1>
                    </div>
                    <div class="col-sm-2">
                        <ol class="breadcrumb float-sm-right">
                            <!-- <button type="button" class="btn btn-block btn-success" id="add_product" style=" width: 100%">Show Logo </button> -->
                        </ol>
                    </div>
                </div>
            </div>
            <div class="card-body">

                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Logo </label>
                    <div class="col-sm-6">
                        <div class="custom-file">
                            <input type="file" class="form-control-file customFile" name="imageFile" id="customLOGO"
                                multiple>
                            <a href="#">
                                <div class="imgPreview">

                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <button type="submit" id="saveEducationLogo" class="common-btn-padding btn btn-success"> Save
                        </button>
                    </div>
                </div>
                <div id="loader" class="fulfilling-bouncing-circle-spinner">
                    <div class="circle"></div>
                    <div class="orbit"></div>
                </div>
                
            </div>
            <section class="content mt-5">
                <div class="container-fluid">
                    <div class="table-responsive">
                        <table id="logo_table" class="table table-bordered table-striped"
                            style="text-align: center;">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Logo</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </div>
        <!-- The Modal -->
        <div class="idMyModal modal">
            <span class="close">&times;</span>
            <img class="modal-content">
        </div>
        <div class="idMyModal modal">
            <span class="close">&times;</span>
            <img class="modal-content">
        </div>
        <div class="idMyModal modal">
            <span class="close">&times;</span>
            <img class="modal-content">
        </div>
        <div class="idMyModal modal">
            <span class="close">&times;</span>
            <img class="modal-content">
        </div>
    </div>
</div>