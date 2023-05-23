<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>LearnIndia | Dashboard</title>

    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Tempusdominus Bootstrap 4 -->
    <link rel="stylesheet" href="plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css">
    <!-- iCheck -->
    <link rel="stylesheet" href="plugins/icheck-bootstrap/icheck-bootstrap.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="dist/css/adminlte.min.css">
    <!-- overlayScrollbars -->
    <link rel="stylesheet" href="plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
    <!-- Daterange picker -->
    <link rel="stylesheet" href="plugins/daterangepicker/daterangepicker.css">
    <!-- summernote -->
    <link rel="stylesheet" href="plugins/summernote/summernote-bs4.min.css">
    <!-- alert -->
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <!-- Popup Style -->
    <link rel="stylesheet" type="text/css" href="assets/css/popupstyle.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.css">
    <!-- DataTables -->
    <link rel="stylesheet" href="plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
    <link rel="stylesheet" href="plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
    <link rel="stylesheet" href="plugins/datatables-buttons/css/buttons.bootstrap4.min.css">
    <!-- Select2 -->
    <link rel="stylesheet" href="plugins/select2/css/select2.min.css">
    <link rel="stylesheet" href="plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css">
    <!-- jQuery -->
    <script src="plugins/jquery/jquery.min.js"></script>
    <!-- CKEDITOR -->
    <script src="https://cdn.ckeditor.com/ckeditor5/30.0.0/classic/ckeditor.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

    <!-- <script src="https://cdn.ckeditor.com/ckeditor5/12.0.0/classic/ckeditor.js"></script> -->

</head>

<body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">

        <!-- Preloader -->
        <!-- <div class="preloader flex-column justify-content-center align-items-center">
            <img class="animation__shake" src="dist/img/Logo.jpeg" alt="LearnIndia" height="100" width="100">
        </div>  -->


        <style>
            .ScrollStyle {
                overflow-y: auto;
                overflow-x: hidden;
                max-height: calc(100vh - 30px - 30px)
            }

            .active2 {
                background-color: #F28123;
                color: black;
            }

            .swal2-styled.swal2-confirm {
                background-color: #046A38 !important;
            }

            .swal2-styled.swal2-confirm:focus {
                box-shadow: 0 0 0 3px rgba(17, 64, 34, 0.5);
            }

            .swal-modal {
                width: 300px;
            }

            .swal-title {
                color: green;
                text-transform: none;
                position: relative;
                display: block;
                padding: 13px 16px;
                font-size: 18px;
                line-height: normal;
                text-align: center;
                margin-bottom: 0;
            }

            .swal-button {
                background-color: #046A38;
                color: #fff;
                border: none;
                box-shadow: none;
                border-radius: 3px;
                font-size: 12px;
                padding: 7px 19px;
                cursor: pointer;
            }

            .swal2-title {
                position: relative;
                max-width: 100%;
                margin: 0;
                padding: 0.8em 1em 0;
                color: inherit;
                font-size: 1.125em !important;
                font-weight: 400 !important;
                text-align: center;
                text-transform: none;
                word-wrap: break-word;
            }

            .common-btn-padding {
                padding: 5px 15px;
            }

            .set-logo {
                transform: scale(2);
                /* margin-left: 1rem; */
                border-radius: 2px;
            }

            .center-utl {
                display: flex !important;
                align-items: center !important;
                justify-content: space-evenly !important;
            }

            .submenu {
                display: none;
            }

            .btn-success {
                color: #fff;
                background-color: #046A38;
                border-color: #046A38;
                box-shadow: none;
            }

            /* Loader */
            .fulfilling-bouncing-circle-spinner,
            .fulfilling-bouncing-circle-spinner * {
                box-sizing: border-box;
            }

            .fulfilling-bouncing-circle-spinner {
                height: 90px;
                width: 90px;
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 9999;
                animation: fulfilling-bouncing-circle-spinner-animation infinite 4000ms ease;
            }


            .fulfilling-bouncing-circle-spinner .orbit {
                height: 90px;
                width: 90px;
                position: absolute;
                top: 0;
                left: 0;
                border-radius: 50%;
                border: calc(90px * 0.03) solid #FF671F;
                animation: fulfilling-bouncing-circle-spinner-orbit-animation infinite 4000ms ease;
            }

            .fulfilling-bouncing-circle-spinner .circle {
                height: 90px;
                width: 90px;
                color: #FF671F;
                display: block;
                border-radius: 50%;
                position: relative;
                border: calc(90px * 0.1) solid #FF671F;
                animation: fulfilling-bouncing-circle-spinner-circle-animation infinite 4000ms ease;
                transform: rotate(0deg) scale(1);
            }

            @keyframes fulfilling-bouncing-circle-spinner-animation {
                0% {
                    transform: rotate(0deg);
                }

                100% {
                    transform: rotate(360deg);
                }
            }

            @keyframes fulfilling-bouncing-circle-spinner-orbit-animation {
                0% {
                    transform: scale(1);
                }

                50% {
                    transform: scale(1);
                }

                62.5% {
                    transform: scale(0.8);
                }

                75% {
                    transform: scale(1);
                }

                87.5% {
                    transform: scale(0.8);
                }

                100% {
                    transform: scale(1);
                }
            }

            @keyframes fulfilling-bouncing-circle-spinner-circle-animation {
                0% {
                    transform: scale(1);
                    border-color: transparent;
                    border-top-color: inherit;
                }

                16.7% {
                    border-color: transparent;
                    border-top-color: initial;
                    border-right-color: initial;
                }

                33.4% {
                    border-color: transparent;
                    border-top-color: inherit;
                    border-right-color: inherit;
                    border-bottom-color: inherit;
                }

                50% {
                    border-color: inherit;
                    transform: scale(1);
                }

                62.5% {
                    border-color: inherit;
                    transform: scale(1.4);
                }

                75% {
                    border-color: inherit;
                    transform: scale(1);
                    opacity: 1;
                }

                87.5% {
                    border-color: inherit;
                    transform: scale(1.4);
                }

                100% {
                    border-color: transparent;
                    border-top-color: inherit;
                    transform: scale(1);
                }
            }
        </style>
        </head>