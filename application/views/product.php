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
                <div class="row mb-2" id="manage">
                    <div class="col-sm-6">
                        <h1 class="m-0 mx-2">Product</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <button type="button" class="btn btn-block btn-primary" id="add_product" style=" width: 100%">Add Product</button>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <section class="content">
            <div class="container-fluid">
                <table id="product_list" class="table table-bordered table-striped" style="text-align: center;">
                    <thead>
                        <tr>
                            <th style="width:30px">No.</th>
                            <th style="width:30px">image</th>
                            <th style="width:30px">Product Name</th>
                            <th style="width:30px">Product Price</th>
                            <th style="width:160px">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </section>
    </div>
</div>