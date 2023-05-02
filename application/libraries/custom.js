// Define Global base path...

// local base_url...
const base_url = 'http://localhost/learnindia_adminpanel/';



$(document).ready(function () {
    state_management();

    if (window.location.href == base_url + 'home') {
        getUserList();
    }
    if (window.location.href == base_url + 'category') {
        getCategoryList();
    }
    if (window.location.href == base_url + 'product') {
        getCategoryListForDropDown();
        getProductList();
    }
    if (window.location.href == base_url + 'addCoupon') {
        getCategoryListForDropDown();
        getProductListForDropDown();
    }

});


//sidebar statemanagement...
function state_management() {
    var href = window.location.href;
    $('li a').each(function (e, i) {
        if (href.indexOf($(this).attr('href')) >= 0) {
            var elem, style;
            elem = $(this)[0];
            $("li a").removeClass('active2');
            $(this).addClass('active2');
        }
    });
}

// Loader function...
function showLoader() {
    $(".dot").show();
}
function hideLoader() {
    $(".dot").hide();
}
function showdotLoader() {
    $(".dot1").show();
}
function hidedotLoader() {
    $(".dot1").hide();
}



// popup function...
function showAlert(alertText) {
    $.alert({
        title: '',
        theme: 'modern',
        // typeAnimated: true,
        closeIcon: false,
        // backgroundDismiss: false,
        // backgroundDismissAnimation: '',
        // animation: 'news',
        // closeAnimation: 'news',
        content: alertText,
        buttons: {
            ok: {
                text: "Ok",
                btnClass: 'btn-alert',
            },
        }
    });
}


// sidebar menu option's redirection
$("#keyToSuccess").on("click", function (event) {
    window.location = 'keyToSuccess';
});

$("#careerGuidanceHelp").on("click", function (event) {
    window.location = 'careerGuidanceHelp';
});

$("#careerJourney").on("click", function (event) {
    window.location = 'careerJourney';
});
$("#counseling").on("click", function (event) {
    window.location = 'counseling';
});
$("#successStory").on("click", function (event) {
    window.location = 'successStory';
});
$("#aboutUsContent").on("click", function (event) {
    window.location = 'aboutUsContent';
});
$("#back_to_coupon").on("click", function (event) {
    window.location = 'coupon';
});
$("#add_product").on("click", function (event) {
    window.location = 'addProduct';
});
$("#back_to_product").on("click", function (event) {
    window.location = 'product';
});
$("#add_category").on("click", function (event) {
    window.location = 'addCategory';
});
$("#back_to_category").on("click", function (event) {
    window.location = 'category';
});


// ========================= ADMIN SIGN UP ==========================

$("#sign_in").on("click", function () {
    var email = $("#signin_user_email").val();
    var password = $("#signin_user_password").val();

    if (email == null || email == '') {
        $("#signin_user_email").effect("shake");
        showAlert('Enter Email');
    }
    else if (!validateEmail(email)) {
        $("#signin_user_email").effect("shake");
        showAlert("Please enter valid email address.");
    }
    else if (password == null || password == '') {
        $("#signin_user_password").effect("shake");
        showAlert('Enter Password');
    }
    else {
        signInUser(email, password);
    }
});

function signInUser(email, password) {
    var fd = new FormData();
    fd.append('email', email);
    fd.append('password', password);
    $.ajax({
        url: host_url + 'adminLogin',
        data: fd,
        processData: false,
        contentType: false,
        method: 'post',
        error: function (data) {
            alert("Something went wrong");
        },
        success: function (data) {
            localStorage.setItem("admin_id", data.Response.admin_id)
            if (data.Status == "Success") {
                $.ajax({
                    url: base_url + 'Home/set_session',
                    data: fd,
                    processData: false,
                    contentType: false,
                    method: 'post',
                    error: function (data) {
                        alert("Something went wrong");
                    },
                    success: function () {
                        Swal.fire({
                            title: 'Login Success',
                            text: 'Redirecting...',
                            icon: 'success',
                            timer: 2000,
                        }).then(() => {
                            window.location = 'home';
                        });
                    }
                })
            }
            else {
                Swal.fire('Invalid Email or Password');
            }
        },
    });
}

$("#logout_menu").on("click", function (event) {
    Swal.fire({
        title: 'Are you sure you want to logout?',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        confirmButtonColor: '#F28123',
        denyButtonText: `Cancel`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            // signOut();
        } else if (result.isDenied) {

        }
    })
});


function signOut() {
    $.ajax({
        url: base_url + 'home/logout',
        method: 'post',
        error: function (data) {
            alert("Something went wrong1");
        },
        success: function (data) {
            localStorage.clear();
            window.location = 'home';
        },
    });
}

// ========================  USER FUNCTIONALITIES ====================


// keyToSuccessAdd

$(document).on("change", "#customFile", function () {
    if ($(this)[0].files.length > 2) {
        Swal.fire("You can select only up to 2 images");
        $(this).val("");
        $(".imgPreview").empty();
        return false;
    }
    $(".imgPreview").empty();
    for (let i = 0; i < $(this)[0].files.length; i++) {
        $('.imgPreview').append(`<img src=${URL.createObjectURL($(this)[0].files[i])} class="toZoom mx-2 mt-2" style="width:100px;height:100px;"/>`);
    }

});


// const modal = $('.idMyModal');
// const modalImg = $('.modal-content');

$(document).on("click", ".toZoom", function (event) {
    const i = $(".toZoom").index(this);
    const modal = $('.idMyModal').eq(i);
    const modalImg = modal.find('.modal-content');
    modal.css('display', 'block');
    modalImg.attr('src', $(this).attr('src'));
});



$(document).on("click",'.close',function(event){
    const modal = $(this).closest('.idMyModal');
    modal.css('display', 'none');
    modal.find('.modal-content').attr('src', '');
});
// const span = $('.close');
// span.click(function () {
//     const i = span.index($(this));
//     $(this).next('.idMyModal').css('display', 'none');
//     $(this).next('.idMyModal').find('.modal-content').attr('src', '');
// });


// ========================  USER FUNCTIONALITIES ====================

function getUserList() {
    $.ajax({
        url: host_url + 'getAllUserList',
        method: 'get',
        beforeSend: function (data) {
            $(".dot").show();
        },
        complete: function (data) {
            $(".dot").hide();
        },
        error: function (data) {
            alert("Something went wrong");
        },
        success: function (data) {
            let table = $('#user_list').DataTable();
            table.clear().draw();
            if (data.Status == "Success") {
                data.Response.map((currentUser, index) => {
                    let count = index + 1;
                    let user_name = currentUser.user_name;
                    let email = currentUser.email;
                    let contact_num = currentUser.contact_num;
                    let gender = currentUser.gender;
                    let profile_image = currentUser.profile_image;
                    let setProfileImage = `<img src="${image_url}${profile_image}" style="width:35px;height:35px;border-radius: 50% 50%;">`;


                    $("#user_list").DataTable().row.add([
                        count, setProfileImage, user_name, email, contact_num, gender,
                        `<a id="view_user" user_id="${currentUser.user_id}"> <i class="mx-2 fa fa-eye"></i></a>`
                    ]).draw();
                })

            }
        },
    });
}

// ========================  CATEGORY ====================

function getCategoryList() {
    $.ajax({
        url: host_url + 'fatchAllCategory',
        method: 'get',
        beforeSend: function (data) {
        },
        complete: function (data) {
        },
        error: function (data) {
            alert("Something went wrong");
        },
        success: function (data) {
            var table = $('#category_list').DataTable();
            table.clear().draw();
            if (data.success) {
                data.Response.map((currentElement, index) => {
                    // console.log("currentElement :",currentElement);
                    let count = index + 1;
                    let category_name = currentElement.cat_name;
                    let category_type = currentElement.cat_type;
                    let category_image = currentElement.image;
                    let setCategoryImage = `<img src="${image_url}${category_image}" style="width:100px;height:auto;border-radius: 10px;">`;
                    $("#category_list").DataTable().row.add([
                        count, setCategoryImage, category_name, category_type,

                        `<a mx-2" id="edit_category" edit_category="${currentElement.cat_id}" category_name="${category_name}"  Description="${currentElement.cat_description}" Season_Details="${currentElement.season}" Nutritional_Information="${currentElement.nutritional_information}"  category_type="${currentElement.cat_type}" Storage_Description="${currentElement.storage_desc}" Quantity="${currentElement.quantity}" category_image="${category_image}"  "><i class="mx-2 fa fa-edit"></i></a>` +
                        `<a id="category_delete" category_delete="${currentElement.cat_id}" category_name="${category_name}" ><i class="mx-2 fa fa-trash"></i></a>`
                    ]).draw();
                })
            }
        },
    });
}

$(document).on("change", "#customFile", function () {
    $("#imgPreview").empty();
    $('#imgPreview').prepend('<img  src="' + URL.createObjectURL($(this)[0].files[0]) + '" style="width:100px;height:100px; margin-top:10px"/>')
})


$("#category_submit").on("click", function () {

    var url = decodeURIComponent(document.URL);
    var init_array = url.substring(url.lastIndexOf('?') + 1);
    let array = init_array.split('=');
    let id = array[1];

    let category_name = $("#category_name").val();
    let Description = $("#category_Description").val();
    let adminID = localStorage.getItem("admin_id");
    let category_type = $("#category_type").val();
    let Season_Details = $("#season_details").val();
    let Nutritional_Information = $("#nutritional_Information").val();
    let Storage_Description = $("#storage_Description").val();
    let Quantity = $("#Quantity").val();
    let category_image = $("#customFile").prop('files')[0];



    if (id != '' && id != undefined) {
        updateCategory(id, category_name, Description, adminID, category_type, Season_Details, Nutritional_Information, Storage_Description, Quantity, category_image);
    }
    else {


        // Validation
        if (category_name == null || category_name == '') {
            showAlert("Category Name is required field.");
        }
        else if (category_type == null || category_type == '') {
            showAlert("Category type is required field.");
        }
        else if (category_Description == null || category_Description == '') {
            showAlert("Description is required field.");
        }
        else if (season_details == null || season_details == '') {
            showAlert("Season Details is required field.");
        }
        else if (nutritional_Information == null || nutritional_Information == '') {
            showAlert("Nutritional Information is required field.");
        }
        else if (storage_Description == null || storage_Description == '') {
            showAlert("Storage Description is  required field.");
        }
        else if (Quantity == null || Quantity == '') {
            showAlert("Quantity is  required field.");
        }
        else if (category_image == null || category_image == '') {
            showAlert("Image is required field.");
        }
        else {
            addCategory(category_name, category_type, category_Description, season_details, nutritional_Information, storage_Description, Quantity, category_image);
        }
    }
});

function addCategory(category_name, category_type, category_Description, season_details, nutritional_Information, storage_Description, Quantity, category_image) {
    let data = new FormData();
    let adminID = localStorage.getItem("admin_id");
    data.append('category_name', category_name);
    data.append('description', category_Description);
    data.append('adminID', adminID);
    data.append('category_type', category_type);
    data.append('season_information', season_details);
    data.append('nutritional_information', nutritional_Information);
    data.append('storage_description', storage_Description);
    data.append('quantity', Quantity);
    data.append('pro_image', category_image);

    $.ajax({
        url: host_url + 'addCategory',
        data: data,
        type: "POST",
        cache: false,
        processData: false,
        contentType: false,
        dataType: false,
        beforeSend: function (data) {

        },
        complete: function (data) {
        },
        error: function (e) {
            showAlert("Failed to Data Add.");
        },
        success: function (data) {
            if (data.Status == "Success") {
                Swal.fire({
                    title: '',
                    text: `${data.Message}`,
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#F28123'
                }).then((result) => {
                    if (result.isConfirmed) {
                        getCategoryList();
                    }
                })
            }
            else {
                Swal.fire(`${data.Message}`);
            }
        },
    });
}

$(document).on("click", "#edit_category", function (event) {
    let id = $(this).attr('edit_category');
    let category_name = $(this).attr('category_name');
    let category_type = $(this).attr('category_type');
    let Description = $(this).attr('Description');
    let Season_Details = $(this).attr('Season_Details');
    let Nutritional_Information = $(this).attr('Nutritional_Information');
    let Storage_Description = $(this).attr('Storage_Description');
    let Quantity = $(this).attr('Quantity');
    let category_image = $(this).attr('category_image');
    $("#imgPreview").empty();
    $('#imgPreview').append(`<img  src="${image_url}${category_image}" style="width:100px;height:100px; margin-top:10px"/>`)


    window.history.replaceState(null, null, '?id=' + id + '');

    $("#category_name").val(category_name);
    $("#category_type").val(category_type);
    $("#category_Description").val(Description);
    $("#season_details").val(Season_Details);
    $("#nutritional_Information").val(Nutritional_Information);
    $("#storage_Description").val(Storage_Description);
    $("#Quantity").val(Quantity);
});

function updateCategory(id, category_name, Description, adminID, category_type, Season_Details, Nutritional_Information, Storage_Description, Quantity, category_image) {

    let data = new FormData();
    data.append('category_id', id);
    data.append('category_name', category_name);
    data.append('description', Description);
    data.append('adminID', adminID);
    data.append('category_type', category_type);
    data.append('season_info', Season_Details);
    data.append('nutritional_information', Nutritional_Information);
    data.append('storage_desc', Storage_Description);
    data.append('quantity', Quantity);
    data.append('pro_image', category_image);


    $.ajax({
        url: host_url + 'updateCategory',
        data: data,
        type: "POST",
        cache: false,
        processData: false,
        contentType: false,
        dataType: false,
        beforeSend: function (data) {
        },
        complete: function (data) {
        },
        error: function (e) {
            showAlert("Failed to Data Add.");
        },
        success: function (data) {
            console.log("data :", data);
            // data = JSON.parse(JSON.stringify(data));
            if (data.success) {
                Swal.fire({
                    title: '',
                    text: `${data.Message}`,
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#53B175'
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        var url = window.location.href;
                        url = url.slice(0, url.indexOf('?'));
                        history.pushState(null, '', url);
                        getCategoryList();
                    }

                })
            }
            else {
                Swal.fire("Category Not Update");
            }
        },
    });
}

$(document).on("click", "#category_delete", function (event) {
    var id = $(this).attr('category_id');
    localStorage.setItem('category_id', id);

    Swal.fire({
        title: 'Do You want to delete this Category ?',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        confirmButtonColor: '#F28123',
        denyButtonText: `No`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            var id = localStorage.getItem('category_id');
            // categoryBindWithProduct(id);
            categoryDelete(id);
        } else if (result.isDenied) {

        }
    })
});

function categoryBindWithProduct(id) {
    $.ajax({
        url: host_url + 'categoryBindWithProduct',
        data: {
            'id': id,
        },
        method: 'post',
        beforeSend: function () {
        },
        complete: function () {
        },
        success: function (data) {
            //    hideLoader()
            var data = JSON.parse(JSON.stringify(data));
            if (data.success) {

                data.list.forEach(function (list, index) {
                    var count = index + 1;
                    var html = '<b>' + count + '</b>'
                    Swal.fire(' ', 'This Category Bind With' + ' ' + html + ' ' + 'Product,So You can not Delete This Category', 'warning');
                });
            }
            else {
                categoryDelete(id);
            }
        }
    });
}

function categoryDelete(id) {
    $.ajax({
        url: host_url + 'deleteCategory',
        data: {
            'id': id,
        },
        method: 'post',
        beforeSend: function () {
        },
        complete: function () {
        },
        success: function (data) {
            //    hideLoader()
            var data = JSON.parse(JSON.stringify(data));
            if (data.success) {
                Swal.fire({
                    title: '',
                    text: 'Category Delete Succssfully.',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#F28123'
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        getCategoryList();
                    }

                })
                // window.location = 'category';
            }
            else {
                Swal.fire('Category not Delete');
            }
        }
    });
}

function getCategoryListForDropDown() {
    $.ajax({
        url: host_url + 'fatchAllCategory',
        method: 'get',
        beforeSend: function (data) {
        },
        complete: function (data) {
        },
        error: function (data) {
            alert("Something went wrong");
        },
        success: function (data) {
            if (data.success) {
                data.Response.forEach(function (currentCategory) {
                    let category_name = currentCategory.cat_name;
                    let categoryNameBind = `<option value="${currentCategory.cat_id}"> ${category_name} </option>`
                    $("#category_list_dropdown").append(categoryNameBind);
                });
            }
        },
    });
}

