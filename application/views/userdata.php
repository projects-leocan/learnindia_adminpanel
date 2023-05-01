<div class="wrapper ScrollStyle">


    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->

        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2" id="manage">
                    <div class="col-sm-6">
                        <h1 class="m-0">User</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <button type="button" class="btn btn-block btn-primary" id="back_to_user_list"
                                style=" width: 100%;">BACK</button>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">

                        <!-- Profile Image -->
                        <div class="card card-primary card-outline">
                            <div class="card-body box-profile">
                                <div class="text-center">
                                    <img class="profile-user-img img-fluid img-circle" src="<?php echo $image ?>"
                                        alt="User profile picture">
                                </div>

                                <h3 class="profile-username text-center"><?php echo $user_full_name ?></h3>

                                <!-- <p class="text-muted text-center">Software Engineer</p> -->

                            </div>
                            <!-- /.card-body -->
                        </div>
                        <!-- /.card -->


                        <!-- /.card -->
                    </div>
                    <!-- /.col -->
                    <div class="col-md-9">
                        <div class="card">

                            <div class="card-body">
                                <div class="tab-content">
                                    <div class="active tab-pane" id="activity">
                                        <!-- Post -->
                                        <div class="post">
                                            <div class="user-block">
                                                <img class="img-circle img-bordered-sm" src="<?php echo $image ?>"
                                                    alt="user image">
                                                <span class="username">
                                                    <a href="#"><?php echo $name ?></a>

                                                </span>

                                            </div>
                                            <!-- /.user-block -->
                                            <p>
                                                <?php echo $address?>
                                            </p>

                                        </div>
                                        <!-- /.post -->


                                    </div>

                                </div>
                                <!-- /.tab-content -->
                            </div><!-- /.card-body -->
                        </div>
                        <!-- /.card -->
                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.row -->
            </div><!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->



    <!-- /.control-sidebar -->
</div>
<!-- ./wrapper -->



<script>
<?php require_once("application/libraries/custom.js");?>
</script>