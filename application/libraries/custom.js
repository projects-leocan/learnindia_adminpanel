// Define Global base path...

// local base_url...
const base_url = 'http://localhost/learnindia_adminpanel/';

// API Host URL
const host_url = "http://localhost/learnindia_adminpanel/learnindia_API/v1/";

// Image URL 
const image_url = "http://localhost/learnindia_adminpanel/learnindia_API/uploads/";
$(document).ready(function () {
    state_management();

    if (window.location.href == base_url + 'keyToSuccess') {
        fetchSuccessContent();
    }
    if (window.location.href == base_url + 'careerGuidanceHelp') {
        fetchGuidanceHelpContent();
    }
    if (window.location.href == base_url + 'careerJourney') {
        fetchCareerJourneyContent();
    }
    if (window.location.href == base_url + 'counseling') {
        fetchCounsellingSection();
    }
    if (window.location.href == base_url + 'successStory') {
        fetchSucessStorySection();
        let sName = localStorage.getItem("student_name");
        if(sName != null && sName != undefined && sName != ""){
            $("#student_name").val(sName);
        }
    }
    if (window.location.href == base_url + 'showStory') {
        fetchSucessStorySection();
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

// Show loader 
function showLoader() {
    $(".fulfilling-bouncing-circle-spinner").show();
}
function hideLoader() {
    $(".fulfilling-bouncing-circle-spinner").hide();
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
$("#show_story").on("click", function (event) {
    window.location = 'showStory';
});
$("#back_to_sucsess_story").on("click", function (event) {
    window.location = 'successStory';
    localStorage.removeItem("last_added_id_sus_story");
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

// ========================  HOME ====================

const fetchSuccessContent = () => {
    // fetch last added content of keyToSucess Section 

    // AJAX Call 
    $.ajax({
        url: host_url + 'fetchKeyToSuccess',
        method: 'get',
        beforeSend: function (data) {
            showLoader();
        },
        complete: function (data) {
            hideLoader();
        },
        error: function (data) {
            alert("Something went wrong");
            hideLoader();
        },
        success: function (data) {
            hideLoader();
            if (data.success) {
                const content = data.Response.content;
                localStorage.setItem("last_added_id", data.Response.id);
                localStorage.setItem("last_keyToS_cnt", content);
            }
        }
    });
}

$("#keyToSuccessAdd").on("click", function () {

    let keyToSuccessContent = localStorage.getItem('keyToSuccessContent');
    let content_id = localStorage.getItem("last_added_id");
    let data = new FormData();
    data.append('content', keyToSuccessContent);

    if (content_id != "" && content_id != undefined) {

        data.append('content_id', content_id);

        $.ajax({
            url: host_url + 'updateKeyToSuccess',
            data: data,
            type: "POST",
            cache: false,
            processData: false,
            contentType: false,
            dataType: false,
            beforeSend: function (data) {
                showLoader();
            },
            complete: function (data) {
                hideLoader();
            },
            error: function (e) {
                Swal.fire("Failed To Update Content .");
                hideLoader();
            },
            success: function (data) {
                hideLoader();
                if (data.Status == "Success") {
                    Swal.fire({
                        title: '',
                        text: `${data.Message}`,
                        confirmButtonText: 'Ok',
                        confirmButtonColor: '#F28123'
                    }).then((result) => {
                    })
                }
                else {
                    Swal.fire(`${data.Message}`);
                }
            },
        });
    }
    else {

        $.ajax({
            url: host_url + 'addKeyToSuccess',
            data: data,
            type: "POST",
            cache: false,
            processData: false,
            contentType: false,
            dataType: false,
            beforeSend: function (data) {
                showLoader();
            },
            complete: function (data) {
                hideLoader();
            },
            error: function (e) {
                showAlert("Failed to Data Add.");
                hideLoader();
            },
            success: function (data) {
                hideLoader();
                if (data.Status == "Success") {
                    Swal.fire({
                        title: '',
                        text: `${data.Message}`,
                        confirmButtonText: 'Ok',
                        confirmButtonColor: '#F28123'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            localStorage.setItem("last_added_id", data.last_added);
                            // localStorage.removeItem("keyToSuccessContent");
                        }
                    })
                }
                else {
                    Swal.fire(`${data.Message}`);
                }
            },
        });
    }
});



// Career Guidance help section 
const fetchGuidanceHelpContent = () => {
    // fetch last added content of keyToSucess Section 

    // AJAX Call 
    $.ajax({
        url: host_url + 'fetchGuidenceContent',
        method: 'get',
        beforeSend: function (data) {
            showLoader();
        },
        complete: function (data) {
            hideLoader();
        },
        error: function (data) {
            alert("Something went wrong");
            hideLoader();
        },
        success: function (data) {
            hideLoader();
            if (data.success) {
                localStorage.setItem("last_career_gui_id", data.Response.id);
                localStorage.setItem("last_career_gui_content", data.Response.content);
                $(".imgPreview").empty();
                $('.imgPreview').append(`<img src=${image_url}${data.Response.image} class="toZoom mx-2 mt-2" style="width:100px;height:100px;object-fit: contain;"/>`);
                $('.imgPreview').append(`<img src=${image_url}${data.Response.image2} class="toZoom mx-2 mt-2" style="width:100px;height:100px;object-fit: contain;"/>`);

            }
        }
    });

}

$("#saveCareerGuidanceHelp").on("click", function () {
    let careerGuidanceContent = localStorage.getItem('careerGuidanceContent');
    let content_id = localStorage.getItem("last_career_gui_id");

    let content_image = $("#customFile").prop('files')[0];
    let content_image1 = $("#customFile").prop('files')[1];

    let data = new FormData();

    data.append('content', careerGuidanceContent);
    data.append('content_image', content_image);
    data.append('content_image2', content_image1);

    if (content_id != "" && content_id != undefined) {

        data.append('content_id', content_id);

        $.ajax({
            url: host_url + 'updateGuidenceContent',
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
                Swal.fire("Failed To Update Content .");
            },
            success: function (data) {
                if (data.Status == "Success") {
                    Swal.fire({
                        title: '',
                        text: `${data.Message}`,
                        confirmButtonText: 'Ok',
                        confirmButtonColor: '#F28123'
                    }).then((result) => {
                    })
                }
                else {
                    Swal.fire(`${data.Message}`);
                }
            },
        });
    }
    else {
        $.ajax({
            url: host_url + 'addGuidenceContent',
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
                Swal.fire("Failed to Data Add.");
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
                            localStorage.setItem("last_career_gui_id", data.last_added);
                        }
                    })
                }
                else {
                    Swal.fire(`${data.Message}`);
                }
            },
        });
    }
});

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

$(document).on("click", '.close', function (event) {
    const modal = $(this).closest('.idMyModal');
    modal.css('display', 'none');
    modal.find('.modal-content').attr('src', '');
});


// How we will help you in your Career journey? 
const fetchCareerJourneyContent = () => {
    // AJAX Call 
    $.ajax({
        url: host_url + 'fetchJourneyContent',
        method: 'get',
        beforeSend: function (data) {
            showLoader();
        },
        complete: function (data) {
            hideLoader();
        },
        error: function (data) {
            alert("Something went wrong");
            hideLoader();
        },
        success: function (data) {
            hideLoader();
            if (data.success) {
                const content = data.Response.content;
                localStorage.setItem("last_added_id_cj", data.Response.id);
                localStorage.setItem("last_career_journey_cnt", content);
            }
        }
    });
}



$("#addCareerJourneyContent").on("click", function () {

    let careerJourneyContent = localStorage.getItem('careerjourneyContent');
    let content_id = localStorage.getItem("last_added_id_cj");
    let data = new FormData();
    data.append('content', careerJourneyContent);

    if (content_id != "" && content_id != undefined) {

        data.append('content_id', content_id);

        $.ajax({
            url: host_url + 'updateJourneyContent',
            data: data,
            type: "POST",
            cache: false,
            processData: false,
            contentType: false,
            dataType: false,
            beforeSend: function (data) {
                showLoader();
            },
            complete: function (data) {
                hideLoader();
            },
            error: function (e) {
                Swal.fire("Failed To Update Content .");
                hideLoader();
            },
            success: function (data) {
                hideLoader();
                if (data.Status == "Success") {
                    Swal.fire({
                        title: '',
                        text: `${data.Message}`,
                        confirmButtonText: 'Ok',
                        confirmButtonColor: '#F28123'
                    })
                }
                else {
                    Swal.fire(`${data.Message}`);
                }
            },
        });
    }
    else {

        $.ajax({
            url: host_url + 'addJourneyContent',
            data: data,
            type: "POST",
            cache: false,
            processData: false,
            contentType: false,
            dataType: false,
            beforeSend: function (data) {
                showLoader();
            },
            complete: function (data) {
                hideLoader();
            },
            error: function (e) {
                showAlert("Failed to Data Add.");
                hideLoader();
            },
            success: function (data) {
                hideLoader();
                if (data.Status == "Success") {
                    Swal.fire({
                        title: '',
                        text: `${data.Message}`,
                        confirmButtonText: 'Ok',
                        confirmButtonColor: '#F28123'
                    }).then((result) => {
                        localStorage.setItem("last_added_id_cj", data.last_added);
                    })
                }
                else {
                    Swal.fire(`${data.Message}`);
                }
            },
        });
    }
});


const fetchCounsellingSection = () => {
    // AJAX Call 
    $.ajax({
        url: host_url + 'fetchCounselingContent',
        method: 'get',
        beforeSend: function (data) {
            showLoader();
        },
        complete: function (data) {
            hideLoader();
        },
        error: function (data) {
            alert("Something went wrong");
            hideLoader();
        },
        success: function (data) {
            hideLoader();
            if (data.success) {
                localStorage.setItem("last_added_id_counselling", data.Response.id);
                localStorage.setItem("latest_counselling_cnt", data.Response.content);
                $("#heading").val(data.Response.heading)
            }
        }
    });
}

$("#counsellingSectionAdd").on("click", function () {

    let counseling = localStorage.getItem('latest_counselling_cnt');
    let heading = $("#heading").val();
    let content_id = localStorage.getItem("last_added_id_counselling");
    if (counseling == "" || counseling == undefined || counseling == null) {
        Swal.fire("Please fill in the counseling field");
    }
    else if (heading == "" || heading == undefined || heading == null) {
        Swal.fire("Please fill in the heading field");
    }
    else {

        let data = new FormData();
        data.append('content', counseling);
        data.append('heading', heading);

        if (content_id != "" && content_id != undefined) {

            data.append('content_id', content_id);

            $.ajax({
                url: host_url + 'updateCounseling',
                data: data,
                type: "POST",
                cache: false,
                processData: false,
                contentType: false,
                dataType: false,
                beforeSend: function (data) {
                    showLoader();
                },
                complete: function (data) {
                    hideLoader();
                },
                error: function (e) {
                    Swal.fire("Failed To Update Content .");
                    hideLoader();
                },
                success: function (data) {
                    hideLoader();
                    if (data.Status == "Success") {
                        Swal.fire({
                            title: '',
                            text: `${data.Message}`,
                            confirmButtonText: 'Ok',
                            confirmButtonColor: '#F28123'
                        })
                    }
                    else {
                        Swal.fire(`${data.Message}`);
                    }
                },
            });
        }
        else {

            $.ajax({
                url: host_url + 'addCounseling',
                data: data,
                type: "POST",
                cache: false,
                processData: false,
                contentType: false,
                dataType: false,
                beforeSend: function (data) {
                    showLoader();
                },
                complete: function (data) {
                    hideLoader();
                },
                error: function (e) {
                    showAlert("Failed to Data Add.");
                    hideLoader();
                },
                success: function (data) {
                    hideLoader();
                    if (data.Status == "Success") {
                        Swal.fire({
                            title: '',
                            text: `${data.Message}`,
                            confirmButtonText: 'Ok',
                            confirmButtonColor: '#F28123'
                        }).then((result) => {
                            localStorage.setItem("last_added_id_counselling", data.last_added);
                        })
                    }
                    else {
                        Swal.fire(`${data.Message}`);
                    }
                },
            });
        }
    }
});

const fetchSucessStorySection = () => {
    // AJAX Call 
    $.ajax({
        url: host_url + 'fetchSuccessStory',
        method: 'get',
        beforeSend: function (data) {
            showLoader();
        },
        complete: function (data) {
            hideLoader();
        },
        error: function (data) {
            alert("Something went wrong");
            hideLoader();
        },
        success: function (data) {
            hideLoader();
            if (data.success) {
                let table = $('#story_table').DataTable();
                table.clear().draw();
                if (data.success) {
                    data.Response.forEach(function (currentStory, index) {
                        let count = index + 1;
                        let student_name = currentStory.student_name;
                        let content = currentStory.content;

                        $("#story_table").DataTable().row.add([
                            count,content,student_name,
                            `<a mx-2" id="story_edit" story_id="${currentStory.id}" content="${content}" student_name="${student_name}" ><i class="mx-2 fa fa-edit"></i></a>`
                        ]).draw();
                    });
                }
            }
        }
    });
}

$(document).on("click","#story_edit",function(e){
    let story_id = $(this).attr("story_id");
    let content = $(this).attr("content");
    let student_name = $(this).attr("student_name");

    localStorage.setItem("last_added_id_sus_story", story_id);
    localStorage.setItem("latest_succ_story_cnt", content);
    localStorage.setItem("student_name", student_name);

    window.location = 'successStory';
})

$("#studentSuceessAdd").on("click", function () {

    let storyContent = localStorage.getItem('latest_succ_story_cnt');
    let student_name = $("#student_name").val();
    let content_id = localStorage.getItem("last_added_id_sus_story");
    if (storyContent == "" || storyContent == undefined || storyContent == null) {
        Swal.fire("Please fill in the Success story field");
    }
    else if (student_name == "" || student_name == undefined || student_name == null) {
        Swal.fire("Please fill in the Student Name field");
    }
    else {
        let data = new FormData();
        data.append('content', storyContent);
        data.append('student_name', student_name);

        if (content_id != "" && content_id != undefined) {

            data.append('content_id', content_id);

            $.ajax({
                url: host_url + 'updateSuccessStory',
                data: data,
                type: "POST",
                cache: false,
                processData: false,
                contentType: false,
                dataType: false,
                beforeSend: function (data) {
                    showLoader();
                },
                complete: function (data) {
                    hideLoader();
                },
                error: function (e) {
                    Swal.fire("Failed To Update Content .");
                    hideLoader();
                },
                success: function (data) {
                    hideLoader();
                    if (data.Status == "Success") {
                        Swal.fire({
                            title: '',
                            text: `${data.Message}`,
                            confirmButtonText: 'Ok',
                            confirmButtonColor: '#F28123'
                        })
                    }
                    else {
                        Swal.fire(`${data.Message}`);
                    }
                },
            });
        }
        else {

            $.ajax({
                url: host_url + 'addSuccessStory',
                data: data,
                type: "POST",
                cache: false,
                processData: false,
                contentType: false,
                dataType: false,
                beforeSend: function (data) {
                    showLoader();
                },
                complete: function (data) {
                    hideLoader();
                },
                error: function (e) {
                    showAlert("Failed to Data Add.");
                    hideLoader();
                },
                success: function (data) {
                    hideLoader();
                    if (data.Status == "Success") {
                        Swal.fire({
                            title: '',
                            text: `${data.Message}`,
                            confirmButtonText: 'Ok',
                            confirmButtonColor: '#F28123'
                        }).then((result) => {
                            // localStorage.setItem("last_added_id_sus_story", data.last_added);
                        })
                    }
                    else {
                        Swal.fire(`${data.Message}`);
                    }
                },
            });
        }
    }
});




