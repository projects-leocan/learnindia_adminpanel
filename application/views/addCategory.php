<style>

</style>
<div class="wrapper ScrollStyle">
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2" id="manage">
                    <div class="col-sm-6">
                        <h1 class="m-0 mx-3">Add Category</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <button type="button" class="btn btn-block btn-primary" id="back_to_category" style=" width: 100%">BACK</button>
                        </ol>
                    </div>
                </div>
            </div>

            <div class="card-body">
                <div class="form-group row">

                    <label for="category_name" class="col-sm-2 col-form-label">Category Name
                        <span style="color:red;"> * </span></label>
                    <div class="col-sm-10">
                        <input type="text" value="" class="form-control " id="category_name"
                            placeholder="Category Name">
                    </div>

                    <label for="category_type" class="col-sm-2 col-form-label">Category Type
                        <span style="color:red;"> * </span></label>
                    <div class="col-sm-10">
                        <input type="text" value="" class="form-control" id="category_type"
                            placeholder="Category Type">
                    </div>

                    <label for="Description" class="col-sm-2 col-form-label">Description
                        <span style="color:red;"> * </span></label>
                    <div class="col-sm-10">
                        <textarea class="form-control" name="category_Description" id="category_Description" rows="3" placeholder="Description"></textarea>
                    </div>

                    <label for="season_details" class="col-sm-2 col-form-label"> Season Details
                        <span style="color:red;"> * </span></label>
                    <div class="col-sm-10">
                        <textarea class="form-control" name="category_Description" id="season_details" rows="3" placeholder="Season Details"></textarea>
                    </div>

                    <label for="nutritional_Information" class="col-sm-2 col-form-label"> Nutritional Information
                        <span style="color:red;">*</span></label>
                    <div class="col-sm-10">
                        <textarea class="form-control" name="category_Description" id="nutritional_Information" rows="3" placeholder="Nutritional Information"></textarea>
                    </div>

                    <label for="storage_Description" class="col-sm-2 col-form-label"> Storage Description
                        <span style="color:red;"> * </span></label>
                    <div class="col-sm-10">
                        <textarea rows="3" value="" class="form-control" id="storage_Description"
                            placeholder="Storage Description"></textarea>
                    </div>

                    <label for="Quantity" class="col-sm-2 col-form-label"> Quantity
                        <span style="color:red;"> * </span></label>
                    <div class="col-sm-10">
                        <input type="number" value="" class="form-control" id="Quantity"
                            placeholder="Quantity">
                    </div>

                    <label class="col-sm-2 col-form-label">Image<span style="color:red;">*</span></label>
                    <div class="col-sm-10">
                        <div class="custom-file">
                            <input type="file" class="form-control-file" name="imageFile" id="customFile" required>
                            <a href="#">
                                <div id="imgPreview">

                                </div>
                            </a>
                        </div>
                    </div>

                </div>
                <button type="submit" id="category_submit" class="common-btn-padding btn btn-success d-block m-auto "> Add </button>
            </div>
        </div>
        <!-- Main content -->
        <section class="content">
            <div class="container-fluid" >
                <div class="table-responsive">
                    <table id="category_list" class="table table-bordered table-striped" style="text-align: center;">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Image</th>
                                <th>Category Name</th>
                                <th>Category Type</th>
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

</div>