<div class="wrapper ScrollStyle">
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 mx-2">Coupon</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <button type="button" class="btn btn-block btn-primary" id="back_to_coupon" style=" width: 100%"> Back</button>
                        </ol>
                    </div>
                </div>
            </div>

            <div class="card-body">

                <div class="form-group row">
                    <label for="coupon_code" class="col-sm-2 col-form-label">Coupon Code
                        <span style="color:red;">*</span>
                    </label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="coupon_code" placeholder="">
                        <a href="#" id="generateCouponCode"> Generate Code </a>
                    </div>
                </div>


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
                    <label class="col-sm-2 col-form-label">Product Name <span style="color:red;">*</span> </label>

                    <div class="col-sm-10">
                        <select id="product_list_dropdown" class="form-control select2"
                            style="width: 100%;line-height: 18px !important;">
                            <option value="-1"> Select Product</option>

                        </select>
                    </div>
                </div>

                <div class="form-group row">
                    <label for="purchaseAmount" class="col-sm-2 col-form-label"> Purchase Amount
                        <span style="color:red;">*</span></label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control" id="purchaseAmount" placeholder="Purchase Amount">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="offerPrice" class="col-sm-2 col-form-label"> Offer Price
                        <span style="color:red;"> * </span></label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control" id="offerPrice" placeholder="Offer Price">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="couponType" class="col-sm-2 col-form-label"> Coupon Type
                        <span style="color:red;"> * </span></label>
                    <div class="col-sm-10">
                        <select id="couponType" class="form-control select2"
                            style="width: 100%;line-height: 18px !important;">
                            <option value="-1"> Select Coupon Type</option>
                            <option> Free shipping coupon</option>
                            <option> Fixed price coupons </option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="mini_purchase_amount" class="col-sm-2 col-form-label"> Minimum Purchase Amount
                        <span style="color:red;"> * </span></label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control" id="mini_purchase_amount" placeholder="Minimum purchase amount">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="max_purchase_amount" class="col-sm-2 col-form-label"> Maximum Purchase Amount
                        <span style="color:red;"> * </span></label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control" id="max_purchase_amount" placeholder="Maximum purchase amount">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="UsageLimit" class="col-sm-2 col-form-label"> Usage Limit
                        <span style="color:red;"> * </span></label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control" id="UsageLimit" placeholder="Usage Limit">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label"> Status <span style="color:red;">*</span> </label>

                    <div class="col-sm-10">
                        <select id="coupon_status" class="form-control select2"
                            style="width: 100%;line-height: 18px !important;">
                            <option  value="-1"> Select Status </option>
                            <option> Enable </option>
                            <option> Disable </option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label"> Expire Date <span style="color:red;">*</span> </label>
                    <div class="col-sm-10">
                        <input type="date" class="form-control" id="expire_date">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label"> User Restriction <span style="color:red;">*</span> </label>
                    <div class="col-sm-10">
                        <textarea class="form-control" name="user_restrication" id="user_restrication" rows="3" placeholder="User Restrictions"></textarea>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label"> Instructions <span style="color:red;">*</span> </label>
                    <div class="col-sm-10">
                        <textarea class="form-control" name="user_Instructions" id="user_Instructions" rows="3" placeholder="Instructions"></textarea>
                    </div>
                </div>
                <button type="submit" id="coupon_submit" class="common-btn-padding btn btn-success d-block m-auto ">
                    Add
                </button>
            </div>
        </div>
    </div>
</div>