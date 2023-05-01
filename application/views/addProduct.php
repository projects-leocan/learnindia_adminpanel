<style>
    .select2-container .select2-selection--single {
        height: 35px !important;
    }

    img {
        height: 100px;
        width: 100px;
    }
</style>
<div class="wrapper ScrollStyle" >


    <div class="content-wrapper">

        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 mx-2">Add Product</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <button type="button" class="btn btn-block btn-primary" id="back_to_product" style=" width: 100%">BACK</button>
                        </ol>
                    </div>
                </div>
            </div>


            <div class="card-body">
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Category Name <span style="color:red;">*</span> </label>
                    
                    <div class="col-sm-10">
                        <select id="category_list_dropdown" class="form-control select2"
                            style="width: 100%;line-height: 18px !important;">
                            <option value="-1"> Select Category</option>

                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="product_name" class="col-sm-2 col-form-label">Producat Name
                        <span style="color:red;">*</span>
                        </label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="product_name" placeholder="Producat Name">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="product_price" class="col-sm-2 col-form-label">Price
                        <span style="color:red;">*</span></label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="product_price" placeholder="Price">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="Quantity" class="col-sm-2 col-form-label"> Quantity
                        <span style="color:red;"> * </span></label>
                    <div class="col-sm-10">
                        <input type="number" value="" class="form-control" id="Quantity"
                            placeholder="Quantity">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="Weight" class="col-sm-2 col-form-label"> Weight
                        <span style="color:red;"> * </span></label>
                    <div class="col-sm-10">
                        <input type="number" value="" class="form-control" id="Weight"
                            placeholder="Weight">
                    </div>
                </div>
    
                <div class="form-group row">
                    <label for="Description" class="col-sm-2 col-form-label">Description
                        <span style="color:red;"> * </span></label>
                    <div class="col-sm-10">
                        <textarea class="form-control" name="product_Description" id="product_Description" rows="3" placeholder="Description"></textarea>
                    </div>
                </div>

                <div class="form-group row">
                    
                    <label for="nutritional_Information" class="col-sm-2 col-form-label"> Nutritional Information
                        <span style="color:red;">*</span></label>
                    <div class="col-sm-10">
                        <textarea class="form-control" name="" id="nutritional_Information" rows="3" placeholder="Nutritional Information"></textarea>
                    </div>
                </div>

                <div class="form-group row">
                    
                    <label for="origin_Information" class="col-sm-2 col-form-label"> Origin 
                        <span style="color:red;">*</span></label>
                    <div class="col-sm-10">
                        <textarea class="form-control" name="" id="origin_Information" rows="3" placeholder="origin Information"></textarea>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="season_details" class="col-sm-2 col-form-label"> Season Details
                        <span style="color:red;"> * </span></label>
                    <div class="col-sm-10">
                        <textarea class="form-control" name="" id="season_details" rows="3" placeholder="Season Details"></textarea>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="storage_Description" class="col-sm-2 col-form-label"> Storage Description
                        <span style="color:red;"> * </span></label>
                    <div class="col-sm-10">
                        <textarea rows="3" value="" class="form-control" id="storage_Description"
                            placeholder="Storage Description"></textarea>
                    </div>

                </div>
                
                <div class="form-group row">
                    <label for="bestBeforeDate" class="col-sm-2 col-form-label"> Best Before Date
                        <span style="color:red;"> * </span></label>
                    <div class="col-sm-10">
                        <input type="datetime-local" value="" class="form-control" id="bestBeforeDate">
                    </div>

                </div>


                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Image
                        <span style="color:red;">*</span></label>
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
                <button type="submit" id="product_submit" class="common-btn-padding btn btn-success d-block m-auto "> Add </button>
            </div>
        </div>
    </div>
</div>