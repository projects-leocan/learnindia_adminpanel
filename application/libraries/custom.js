// Define Global base path...

// local base_url...
// const base_url = 'http://localhost/learnindia_adminpanel/';
const base_url = 'https://leocan.co/subFolder/learnIndiaWeb/Admin/';

// API Host URL
const host_url = "https://leocan.co/subFolder/learnIndiaWeb/API/v1/";
// const host_url = "http://localhost/learnindia_API/v1/";

// Image URL 
const image_url = "https://leocan.co/subFolder/learnIndiaWeb/API/uploads/";
// const image_url = "http://localhost/learnindia_API/uploads/";
$(document).ready(function () {
    state_management();

    fetchSuccessContent();
    fetchGuidanceHelpContent();
    fetchCareerJourneyContent();
    fetchCounsellingSection();
    fetchSucessStorySection();
    if (window.location.href == base_url + 'successStory') {
        let sName = localStorage.getItem("student_name");
        if (sName != null && sName != undefined && sName != "") {
            $("#student_name").val(sName);
        }
    }
    fetchSucessStorySection();
    fetchAboutContent();
    fetchAboutInnerContent();
    fetchEducationLogo();
    fetchOurMemeberContent();
    fetchBlogContent();
    fetchBlogInnerContent();
    fetchCareerArticlesSection();
    if (window.location.href == base_url + 'careerArticle') {
        // $("#heading").val(localStorage.getItem("heading"))

        if (localStorage.getItem("image") != undefined && localStorage.getItem("image") != null) {
            $(".imgPreview").empty();
            $('.imgPreview').append(`<img src=${image_url}${localStorage.getItem("image")} class="toZoom mx-2 mt-2" style="width:100px;height:100px;object-fit: contain;"/>`)
        }

    }

    fetchCareerArticlesSection();
    fetchServeyContent();
    fetchServeyForm();
    fetchTermsContent();
    fetchTermsInnerContent();
    fetchTerms_condition_Section();
    if (window.location.href == base_url + 'terms_conditions') {
        $("#heading").val(localStorage.getItem("TermsHeading"));
    }
    fetchTerms_condition_Section();
    fetchContactUsContent();
    fetchContactResponse();
    fetchQuestions();
    show_answer();


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

// HOME SECTION
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

// ABOUT US SECTION 
$("#aboutUsContent").on("click", function (event) {
    window.location = 'aboutUs';
});
$("#aboutUsInner").on("click", function (event) {
    window.location = 'aboutUsInner';
});
$("#educationLogo").on("click", function (event) {
    window.location = 'educationLogo';
});
$("#teamMember").on("click", function (event) {
    window.location = 'ourTeamMember';
});
// BLOG SECTION
$("#blogArea").on("click", function (event) {
    window.location = 'blog';
});
$("#blogAreaInner").on("click", function (event) {
    window.location = 'blogInner';
});
$("#careerArticle").on("click", function (event) {
    window.location = 'careerArticle';
});
$("#show_articles").on("click", function (event) {
    window.location = 'show_articles';
});
$("#back_to_article").on("click", function (event) {
    localStorage.removeItem("last_added_article_id");
    localStorage.removeItem("articlesContent");
    localStorage.removeItem("heading");
    localStorage.removeItem("image");
    window.location = 'careerArticle';
});
// SERVEY SECTION
$("#serveyArea").on("click", function (event) {
    window.location = 'serveyContent';
});
$("#setQuestion").on("click", function (event) {
    window.location = 'questionnaire';
});
$("#surveyFormDetails").on("click", function (event) {
    window.location = 'surveyFormDetails';
});
$("#show_question").on("click", function (event) {
    window.location = 'show_question';
});
$("#back_to_question").on("click", function (event) {
    window.location = 'questionnaire';
});
$("#back_to_form").on("click", function (event) {
    window.location = 'surveyFormDetails';
});

// Term & Conditons
$("#termArea").on("click", function (event) {
    window.location = 'term';
});
$("#innerTerms").on("click", function (event) {
    window.location = 'termInner';
});
$("#terms_conditions").on("click", function (event) {
    window.location = 'terms_conditions';
});
$("#show_terms").on("click", function (event) {
    window.location = 'showTerms';
});
$("#back_to_terms").on("click", function (event) {
    window.location = 'terms_conditions';
});
// CONTACT US SECTION
$("#contactUsContent").on("click", function (event) {
    window.location = 'contactUs';
});
$("#contactUsDetails").on("click", function (event) {
    window.location = 'contactUsDetails';
});


// ========================= ADMIN SIGN UP ==========================

$("#sign_in").on("click", function () {
    var email = $("#signin_user_email").val();
    var password = $("#signin_user_password").val();

    if (email == null || email == '') {
        Swal.fire("Enter Email");
    }
    // else if (!validateEmail(email)) {
    //     Swal.fire("Please enter valid email address.");
    // }
    else if (password == null || password == '') {
        Swal.fire('Enter Password');
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
                        window.location = 'home';
                        // Swal.fire({
                        //     title: 'Login Success',
                        //     text: 'Redirecting...',
                        //     icon: 'success',
                        //     timer: 2000,
                        // }).then(() => {
                        //     window.location = 'home';
                        // });
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
        denyButtonText: `Cancel`,
    }).then((result) => {
        if (result.isConfirmed) {
            signOut();
        } else if (result.isDenied) {

        }
    })
});

function signOut() {
    $.ajax({
        url: base_url + 'home/logout',
        method: 'post',
        error: function (data) {
            alert("Something went wrong");
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
                        confirmButtonText: 'Ok'
                    }).then((result) => {
                    })
                }
                else {
                    Swal.fire(`Content remains the same. No changes were made.`);
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
                        confirmButtonText: 'Ok'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            localStorage.setItem("last_added_id", data.last_added);
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

                if (window.location.href == base_url + 'careerGuidanceHelp') {
                    $(".imgPreview").empty();
                    $('.imgPreview').append(`<img src=${image_url}${data.Response.image} class="toZoom mx-2 mt-2" style="width:100px;height:100px;object-fit: contain;"/>`);
                    $('.imgPreview').append(`<img src=${image_url}${data.Response.image2} class="toZoom mx-2 mt-2" style="width:100px;height:100px;object-fit: contain;"/>`);
                   
                }

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
                        confirmButtonText: 'Ok'
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
                        confirmButtonText: 'Ok'
                    })
                }
                else {
                    Swal.fire(`Content remains the same. No changes were made.`);
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
                        confirmButtonText: 'Ok'
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
                if (window.location.href == base_url + 'counseling') {
                    $("#heading").val(data.Response.heading)
                }
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
                let table = $('#story_table').DataTable(
                    {
                        "bDestroy": true,
                        "columns": [
                            { "width": "5%" },
                            { "width": "50%" },
                            { "width": "10%" },
                            { "width": "5%" },
                        ],
                        "columnDefs": [
                            { "targets": "_all", "className": "text-wrap" } // Wrap text if needed
                        ],
                        "autoWidth": false // Disable automatic column width calculation
                    });

                table.clear().draw();
                if (data.success) {
                    data.Response.forEach(function (currentStory, index) {
                        let count = index + 1;
                        let student_name = currentStory.student_name;
                        let content = currentStory.content;

                        $("#story_table").DataTable().row.add([
                            count, content, student_name,
                            `<a mx-2" id="story_edit" story_id="${currentStory.id}" content="${content}" student_name="${student_name}" ><i class="mx-2 fa fa-edit"></i></a>`
                        ]).draw();
                    });
                }
            }
        }
    });
}

$(document).on("click", "#story_edit", function (e) {
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
                        Swal.fire(`Content remains the same. No changes were made.`);
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


// ABOUT US SECTION 
const fetchAboutContent = () => {
    $.ajax({
        url: host_url + 'fetchAbout',
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
                localStorage.setItem("last_added_about_id", data.Response.id);
                localStorage.setItem("aboutUsContent", content);
            }
        }
    });
}

$("#aboutUsAdd").on("click", function () {

    let content = localStorage.getItem('aboutUsContent');
    let content_id = localStorage.getItem("last_added_about_id");
    let data = new FormData();
    data.append('content', content);

    if (content_id != "" && content_id != undefined) {

        data.append('content_id', content_id);

        $.ajax({
            url: host_url + 'updateAbout',
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
                    Swal.fire(`Content remains the same. No changes were made.`);
                }
            },
        });
    }
    else {

        $.ajax({
            url: host_url + 'addAbout',
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
                        localStorage.setItem("last_added_about_id", data.last_added);
                    })
                }
                else {
                    Swal.fire(`${data.Message}`);
                }
            },
        });
    }
});

const fetchAboutInnerContent = () => {
    $.ajax({
        url: host_url + 'fetchAboutInner',
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
                localStorage.setItem("last_added_inner_about_id", data.Response.id);
                localStorage.setItem("InnerAboutContent", content);
            }
        }
    });
}

$("#addInnerAboutUs").on("click", function () {

    let careerJourneyContent = localStorage.getItem('InnerAboutContent');
    let content_id = localStorage.getItem("last_added_inner_about_id");
    let data = new FormData();
    data.append('content', careerJourneyContent);

    if (content_id != "" && content_id != undefined) {

        data.append('content_id', content_id);

        $.ajax({
            url: host_url + 'updateAboutInner',
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
                    Swal.fire(`Content remains the same. No changes were made.`);
                }
            },
        });
    }
    else {

        $.ajax({
            url: host_url + 'addAboutInner',
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
                        localStorage.setItem("last_added_inner_about_id", data.last_added);
                    })
                }
                else {
                    Swal.fire(`${data.Message}`);
                }
            },
        });
    }
});


function fetchEducationLogo() {
    // AJAX Call 
    $.ajax({
        url: host_url + 'fetchEducationLogo',
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
                let table = $('#logo_table').DataTable();
                table.clear().draw();
                if (data.success) {
                    data.Response.forEach(function (currentLogo, index) {
                        let count = index + 1;
                        let logo = `<img src="${image_url}${currentLogo.image}" class="toZoom" style="width:100px;height:auto;border-radius: 10px;">`;

                        let editLink = `<a class="logo_edit text-dark mx-2" logo_id="${currentLogo.id}" logo="${currentLogo.image}"><i class="mx-2 fa fa-edit"></i></a>` + `<a class="logo_delete text-dark mx-2" logo_id="${currentLogo.id}"><i class="mx-2 fa fa-trash"></i></a>`;

                        $("#logo_table").DataTable().row.add([
                            count, logo, editLink
                        ]).draw();
                    });
                }
            }
        }

    });
}

$(document).on("click", ".logo_edit", function (e) {
    let id = $(this).attr("logo_id")
    let logo = $(this).attr("logo");

    localStorage.setItem("logo_id", id);

    $(".imgPreview").empty();
    $('.imgPreview').append(`<img src=${image_url}${logo} class="toZoom mx-2 mt-2" style="width:100px;height:100px;"/>`);
})

$(document).on('click', ".logo_delete", function (event) {
    let id = $(this).attr("logo_id")

    Swal.fire({
        title: 'Do You want to delete this Logo ?',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: `No`,
    }).then((result) => {
        if (result.isConfirmed) {

            $.ajax({
                url: host_url + 'deleteEducationLogo',
                data: {
                    'logo_id': id,
                },
                method: 'post',
                beforeSend: function () {
                },
                complete: function () {
                },
                success: function (data) {
                    hideLoader();
                    if (data.Status == "Success") {
                        Swal.fire({
                            title: '',
                            text: `${data.Message}`,
                            confirmButtonText: 'Ok',
                        }).then((result) => {
                            fetchEducationLogo()
                        })
                    }
                    else {
                        Swal.fire(`${data.Message}`);
                    }
                }
            });

        } else if (result.isDenied) {

        }
    })
})


$(document).on("change", "#customLOGO", function () {
    if ($(this)[0].files.length > 4) {
        Swal.fire("You can select only up to 4 images");
        $(this).val("");
        $(".imgPreview").empty();
        return false;
    }

    $(".imgPreview").empty();
    for (let i = 0; i < $(this)[0].files.length; i++) {
        $('.imgPreview').append(`<img src=${URL.createObjectURL($(this)[0].files[i])} class="toZoom mx-2 mt-2" style="width:100px;height:100px;"/>`);
    }

});


$("#saveEducationLogo").on("click", function () {

    let image = $("#customLOGO").prop('files');
    let id = localStorage.getItem("logo_id");

    let data = new FormData();
    for (let i = 0; i < image.length; i++) {
        data.append("image[]", image[i]);
    }

    if (id != "" && id != undefined) {

        data.append('id', id);


        $.ajax({
            url: host_url + 'updateEducationLogo',
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
                Swal.fire("Please Choose a logo");
                hideLoader();
            },
            success: function (data) {
                fetchEducationLogo(); // Call the function to fetch education logo
                localStorage.removeItem("logo_id");
                hideLoader();
                if (data.Status == "Success") {
                    Swal.fire({
                        title: '',
                        text: `${data.Message}`,
                        confirmButtonText: 'Ok',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            fetchEducationLogo(); // Call the function to fetch education logo
                            localStorage.removeItem("logo_id");
                        }
                    })
                }
                else {
                    Swal.fire(`Content remains the same. No changes were made.`);
                }
            },
        });
    }
    else {

        $.ajax({
            url: host_url + 'addEducationLogo',
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
                Swal.fire("Please Choose a logo");
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
                            fetchEducationLogo(); // Call the function to fetch education logo
                        }
                    })
                    fetchEducationLogo();
                }
                else {
                    Swal.fire(`${data.Message}`);
                }
            },
        });
    }
});

function fetchOurMemeberContent() {
    $.ajax({
        url: host_url + 'fetchTeamMember',
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
                let table = $('#member_list').DataTable();
                table.clear().draw();
                if (data.success) {
                    data.Response.forEach(function (currentMember, index) {

                        let count = index + 1;
                        let teacher_name = currentMember.teacher_name;
                        let image = `<img src="${image_url}${currentMember.image}" class="toZoom" style="width:100px;height:auto;border-radius: 10px;">`


                        $("#member_list").DataTable().row.add([
                            count, image, teacher_name,
                            `<a id="team_edit" member_id="${currentMember.id}" teacher_name="${teacher_name}" image="${currentMember.image}">
                            <i class="mx-2 fa fa-edit"></i></a>`+ `<a id="team_delete" member_id="${currentMember.id}"><i class="mx-2 fa fa-trash"></i></a>`
                        ]).draw();
                    });
                }
            }
        }
    });
}

$(document).on('click', "#team_delete", function (event) {
    let id = $(this).attr('member_id');

    Swal.fire({
        title: 'Do You want to delete this Member ?',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: `No`,
    }).then((result) => {
        if (result.isConfirmed) {

            $.ajax({
                url: host_url + 'deleteTeamMember',
                data: {
                    'member_id': id,
                },
                method: 'post',
                beforeSend: function () {
                },
                complete: function () {
                },
                success: function (data) {
                    hideLoader();
                    if (data.Status == "Success") {
                        Swal.fire({
                            title: '',
                            text: `${data.Message}`,
                            confirmButtonText: 'Ok',
                        }).then((result) => {
                            fetchOurMemeberContent();
                        })
                    }
                    else {
                        Swal.fire(`${data.Message}`);
                    }
                }
            });

        } else if (result.isDenied) {

        }
    })
})

$(document).on('click', "#team_edit", function (event) {
    let id = $(this).attr("member_id");
    let teacher_name = $(this).attr("teacher_name");
    let image = $(this).attr("image");
    localStorage.setItem("last_added_teacher_id", id);
    $("#teacher_name").val(teacher_name);

    $(".imgPreview").empty();
    $('.imgPreview').append(`<img src="${image_url}${image}" class="toZoom mx-2 mt-2" style="width:100px;height:100px;"/>`);
})

$("#addTeamMembers").on("click", function () {

    let teacherName = $("#teacher_name").val();
    let content_image = $("#customFile").prop('files')[0];
    let content_id = localStorage.getItem("last_added_teacher_id");
    let data = new FormData();
    data.append('teacher_name', teacherName);
    data.append('content_image', content_image);

    if (content_id != "" && content_id != undefined) {

        data.append('content_id', content_id);

        $.ajax({
            url: host_url + 'updateTeamMember',
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
                    }).then((result) => {
                        fetchOurMemeberContent();
                        localStorage.removeItem("last_added_teacher_id");
                    })
                }
                else {
                    Swal.fire(`Content remains the same. No changes were made.`);
                }
            },
        });
    }
    else {

        $.ajax({
            url: host_url + 'addTeamMember',
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
                    }).then((result) => {
                        fetchOurMemeberContent();
                    })
                }
                else {
                    Swal.fire(`${data.Message}`);
                }
            },
        });
    }
});

// BLOG SECTION 
const fetchBlogContent = () => {

    // AJAX Call 
    $.ajax({
        url: host_url + 'fetchBlogContent',
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
                localStorage.setItem("last_added_blog_id", data.Response.id);
                localStorage.setItem("last_blog_cnt", content);
            }
        }
    });
}

$("#addBlogContent").on("click", function () {

    let blogContent = localStorage.getItem('blogContent');
    let content_id = localStorage.getItem("last_added_blog_id");
    let data = new FormData();
    data.append('content', blogContent);

    if (content_id != "" && content_id != undefined) {

        data.append('content_id', content_id);

        $.ajax({
            url: host_url + 'updateBlogContent',
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
                        confirmButtonText: 'Ok'
                    }).then((result) => {
                    })
                }
                else {
                    Swal.fire(`Content remains the same. No changes were made.`);
                }
            },
        });
    }
    else {

        $.ajax({
            url: host_url + 'addBlogContent',
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
                        confirmButtonText: 'Ok'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            localStorage.setItem("last_added_blog_id", data.last_added);
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

const fetchBlogInnerContent = () => {

    // AJAX Call 
    $.ajax({
        url: host_url + 'fetchblogInnerContent',
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
                localStorage.setItem("last_added_blog_Inner_id", data.Response.id);
                localStorage.setItem("last_blog_Inner_cnt", content);
            }
        }
    });
}

$("#addBlogInnerContent").on("click", function () {

    let innerBlogContent = localStorage.getItem('blogInnerContent');
    let content_id = localStorage.getItem("last_added_blog_Inner_id");
    let data = new FormData();
    data.append('content', innerBlogContent);

    if (content_id != "" && content_id != undefined) {

        data.append('content_id', content_id);

        $.ajax({
            url: host_url + 'updateblogInner',
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
                        confirmButtonText: 'Ok'
                    }).then((result) => {
                    })
                }
                else {
                    Swal.fire(`Content remains the same. No changes were made.`);
                }
            },
        });
    }
    else {

        $.ajax({
            url: host_url + 'addBlogInner',
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
                        confirmButtonText: 'Ok'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            localStorage.setItem("last_added_blog_Inner_id", data.last_added);
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

const fetchCareerArticlesSection = () => {
    $.ajax({
        url: host_url + 'fetchCareerArticles',
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
                let table = $('#article_table').DataTable(
                    {
                        "bDestroy": true,
                        "columns": [
                            { "width": "5%" },
                            { "width": "5%" },
                            { "width": "20%" },
                            { "width": "50%" },
                            { "width": "5%" },
                        ],
                        "columnDefs": [
                            { "targets": "_all", "className": "text-wrap" } // Wrap text if needed
                        ],
                        "autoWidth": false // Disable automatic column width calculation
                    });

                table.clear().draw();
                if (data.success) {
                    data.Response.forEach(function (currentArticle, index) {
                        let count = index + 1;
                        let heading = currentArticle.heading;
                        let content = currentArticle.content;
                        let image = `<img src="${image_url}${currentArticle.image}" class="toZoom" style="width:100px;height:auto;border-radius: 10px;">`

                        $("#article_table").DataTable().row.add([
                            count, image, heading, content,
                            `<a mx-2" id="article_edit" article_id="${currentArticle.id}" heading="${heading}" content="${content}" image="${currentArticle.image}"  ><i class="mx-2 fa fa-edit"></i></a>` +
                            `<a mx-2" id="article_delete" article_id="${currentArticle.id}" ><i class="mx-2 fa fa-trash"></i></a>`
                        ]).draw();
                    });
                }
            }
        }
    });
}

$(document).on("click", "#article_edit", function (e) {
    let article_id = $(this).attr("article_id");
    let heading = $(this).attr("heading");
    let content = $(this).attr("content");
    let image = $(this).attr("image");

    localStorage.setItem("last_added_article_id", article_id);
    localStorage.setItem("articlesContent", content);
    localStorage.setItem("heading", heading);
    localStorage.setItem("image", image);

    window.location = 'careerArticle';
})

$(document).on('click', "#article_delete", function (event) {
    let id = $(this).attr('article_id');

    Swal.fire({
        title: 'Do You want to delete this article ?',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: `No`,
    }).then((result) => {
        if (result.isConfirmed) {

            $.ajax({
                url: host_url + 'deleteCareerArticles',
                data: {
                    'content_id': id,
                },
                method: 'post',
                beforeSend: function () {
                },
                complete: function () {
                },
                success: function (data) {
                    hideLoader();
                    if (data.Status == "Success") {
                        Swal.fire({
                            title: '',
                            text: `${data.Message}`,
                            confirmButtonText: 'Ok',
                        }).then((result) => {
                            fetchCareerArticlesSection();
                        })
                    }
                    else {
                        Swal.fire(`${data.Message}`);
                    }
                }
            });

        } else if (result.isDenied) {

        }
    })
})

$("#addCareerArticles").on("click", function () {

    let articles = localStorage.getItem('articlesContent');
    let heading = $("#heading").val();
    let content_image = $("#customFile").prop('files')[0];
    let content_id = localStorage.getItem("last_added_article_id");

    if (articles == "" || articles == undefined || articles == null) {
        Swal.fire("Please fill in the article field");
    }
    else if (heading == "" || heading == undefined || heading == null) {
        Swal.fire("Please fill in the heading field");
    }
    else {
        let data = new FormData();
        data.append('content', articles);
        data.append('heading', heading);
        data.append('content_image', content_image);

        if (content_id != "" && content_id != undefined) {

            data.append('content_id', content_id);

            $.ajax({
                url: host_url + 'updateCareerArticles',
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
                            confirmButtonText: 'Ok'
                        }).then((result) => {
                            localStorage.removeItem("last_added_article_id");
                            localStorage.removeItem("articlesContent");
                            localStorage.removeItem("heading");
                            localStorage.removeItem("image");
                        })
                    }
                    else {
                        Swal.fire(`Content remains the same. No changes were made.`);
                    }
                },
            });
        }
        else {

            $.ajax({
                url: host_url + 'addCareerArticles',
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
                            confirmButtonText: 'Ok'
                        }).then((result) => {

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

// SERVEY SECTION

const fetchServeyContent = () => {
    $.ajax({
        url: host_url + 'fetchServeyContent',
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
                localStorage.setItem("last_added_servey_id", data.Response.id);
                localStorage.setItem("serveyContent", content);
            }
        }
    });
}

$("#addServeyContent").on("click", function () {

    let content = localStorage.getItem('serveyContent');
    let content_id = localStorage.getItem("last_added_servey_id");
    let data = new FormData();
    data.append('content', content);

    if (content_id != "" && content_id != undefined) {

        data.append('content_id', content_id);

        $.ajax({
            url: host_url + 'updateServeyContent',
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
                        confirmButtonText: 'Ok'
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
            url: host_url + 'addServeyContent',
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
                        confirmButtonText: 'Ok'
                    }).then((result) => {
                        localStorage.setItem("last_added_servey_id", data.last_added);
                    })
                }
                else {
                    Swal.fire(`${data.Message}`);
                }
            },
        });
    }
});


const addOption = () => {
    var newOption = $('<div>').addClass('form-check');
    var optionLabel = $('<label>').addClass('form-check-label editable-option');
    var optionText = $('<span>').addClass('option-text').text('Option');
    var editIcon = $('<span>').addClass('edit-icon').html('<i class="fas fa-pencil-alt"></i>');
    var deleteIcon = $('<span>').addClass('delete-icon').html('<i class="fas fa-times"></i>');

    optionLabel.append(optionText);
    optionLabel.append(editIcon);
    optionLabel.append(deleteIcon);
    newOption.append(optionLabel);
    $('#optionsContainer').append(newOption);

    // Edit option
    editIcon.on('click', function () {
        var option = $(this).closest('.form-check');
        var optionText = option.find('.option-text');
        var inputField = $('<input type="text" class="option-input">').val(optionText.text());
        optionText.replaceWith(inputField);

        inputField.on('blur', function () {
            var newText = $(this).val().trim();
            var newSpan = $('<span class="option-text">').text(newText);
            $(this).replaceWith(newSpan);
        });

        option.addClass('editing');
        inputField.focus();
    });

    // Delete option
    deleteIcon.on('click', function () {
        $(this).closest('.form-check').remove();
    });
};

const fetchServeyForm = () => {
    $.ajax({
        url: host_url + 'fetchServeyForm',
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
                // let table = $('#survey_table').DataTable({
                //     "bDestroy": true,
                //     columnDefs: [
                //       { orderable: false, targets: [0] } // Disable sorting for the checkbox column
                //     ]
                //   });
                let table = $('#survey_table').DataTable();
                table.clear().draw();
                if (data.success) {
                    data.Response.forEach(function (currentUser, index) {
                        let count = index + 1;
                        let first_name = currentUser.first_name;
                        let last_name = currentUser.last_name;
                        let email = currentUser.email;
                        let date_of_birth = currentUser.date_of_birth;
                        let gender = currentUser.gender;
                        let grade = currentUser.grade;
                        let submitted_date = currentUser.submitted_date;
                        let view = `<a mx-2" id="survey_view" user_id="${currentUser.id}" email="${email}"><i class="mx-2 fa fa-eye"></i></a>`;

                        // let checkboxHtml = `<input type="checkbox" class="row-checkbox" user_id="${currentUser.id}">`;

                        $("#survey_table").DataTable().row.add([
                            count, first_name, last_name, email, date_of_birth, gender, grade,view,submitted_date,
                            `<a mx-2" id="survey_delete" user_id="${currentUser.id}" ><i class="mx-2 fa fa-trash"></i></a>`
                        ]).draw();
                    });
                }
            }
        }
    });
}

$(document).on('click', "#survey_view", function (event) {
    let email = $(this).attr('email');
    window.location = "show_answer";
    localStorage.setItem("user_email", email);
})


function show_answer() {
    let data = new FormData();
    let email = localStorage.getItem("user_email");
    data.append('email', email);

    $.ajax({
        url: host_url + 'fetchAnswers',
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
            if (data.success) {
                let table = $('#answer_table').DataTable({
                    "columns": [
                        { "width": "5%" },
                        { "width": "50%" },
                        { "width": "20%" },
                    ],
                    "columnDefs": [
                        { "targets": "_all", "className": "text-wrap" } // Wrap text if needed
                    ],
                    "autoWidth": false // Disable automatic column width calculation
                });

                table.clear().draw();
                if (data.success) {
                    data.Response.map((res, index) => {
                        let question = res.question;
                        let answer = res.answer;

                        table.row.add([
                            index + 1,
                            question,
                            answer
                        ]).draw();

                    })
                }
            }
        }
    });
}


$(document).on('click', "#survey_delete", function (event) {
    let id = $(this).attr('user_id');

    Swal.fire({
        title: 'Do You want to delete this response ?',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: `No`,
    }).then((result) => {
        if (result.isConfirmed) {

            $.ajax({
                url: host_url + 'deleteServeyResponse',
                data: {
                    'user_id': id,
                },
                method: 'post',
                beforeSend: function () {
                },
                complete: function () {
                },
                success: function (data) {
                    hideLoader();
                    if (data.Status == "Success") {
                        Swal.fire({
                            title: '',
                            text: `${data.Message}`,
                            confirmButtonText: 'Ok',
                        }).then((result) => {
                            fetchServeyForm();
                        })
                    }
                    else {
                        Swal.fire(`${data.Message}`);
                    }
                }
            });

        } else if (result.isDenied) {

        }
    })
})

const fetchQuestions = () => {
    $.ajax({
        url: host_url + 'fetchQuestions',
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
                let table = $('#questionaire_table').DataTable({
                    "bDestroy": true,
                    "columns": [
                        { "width": "5%" },
                        { "width": "50%" },
                        { "width": "20%" },
                        { "width": "5%" },
                    ],
                    "columnDefs": [
                        { "targets": "_all", "className": "text-wrap" } // Wrap text if needed
                    ],
                    "autoWidth": false // Disable automatic column width calculation
                });

                table.clear().draw();
                if (data.success) {
                    data.Response.forEach(function (currentQuestion, index) {
                        let count = index + 1;
                        let question = currentQuestion.question;
                        let options = currentQuestion.options;

                        let optionsArray = options.split(',');

                        let optionHtml = "";
                        if (Array.isArray(optionsArray)) {
                            optionsArray.forEach(function (option) {
                                optionHtml += `<span>${option}</span><br>`;
                            });
                        }

                        $("#questionaire_table").DataTable().row.add([
                            count, question, optionHtml,
                            `<a mx-2" id="edit_question" question_id="${currentQuestion.id}" question="${question}" options="${options}"><i class="mx-2 fa fa-edit"></i></a>` +
                            `<a mx-2" id="delete_question" question_id="${currentQuestion.id}" ><i class="mx-2 fa fa-trash"></i></a>`
                        ]).draw();
                    });
                }
            }
        }
    });
}

// Update the click event handler for editing a question
$(document).on("click", "#edit_question", function (event) {
    let id = $(this).attr('question_id');
    let question = $(this).attr('question');
    let options = $(this).attr('options');
    localStorage.setItem('last_added_question', id);
    localStorage.setItem('letest_question', question);
    localStorage.setItem('letest_options', options); // Save the options in local storage

    // Redirect to the questionnaire page
    window.location = "questionnaire";
});

const populateQuestionAndOptions = () => {
    let question = localStorage.getItem('letest_question');
    let options = localStorage.getItem('letest_options');

    // Populate the question field
    $("#question_field").val(question);

    // Check if options exist and are not null
    if (options && options !== "null") {
        // Split the options string into an array
        let optionsArray = options.split(',');

        // Generate the HTML for displaying options
        let optionHtml = "";

        // Add the "Add Option" button
        let addOptionButton = $('<div class="form-check add-option-container">')
            .append($('<label class="form-check-label" for="addOption">').text('Add option'))
            .append($('<span class="add-option-icon" id="addOptionIcon">').text('+'))
            .on('click', addOption);

        optionHtml += addOptionButton[0].outerHTML;

        optionsArray.forEach(function (option) {
            let newOption = $('<div>').addClass('form-check');
            let optionLabel = $('<label>').addClass('form-check-label editable-option');
            let optionText = $('<span>').addClass('option-text').text(option);
            let editIcon = $('<span>').addClass('edit-icon').html('<i class="fas fa-pencil-alt"></i>');
            let deleteIcon = $('<span>').addClass('delete-icon').html('<i class="fas fa-times"></i>');

            optionLabel.append(optionText);
            optionLabel.append(editIcon);
            optionLabel.append(deleteIcon);
            newOption.append(optionLabel);
            optionHtml += newOption[0].outerHTML;
        });

        // Append the option HTML to the options container
        $("#optionsContainer").html(optionHtml);
    }
};

// Call the populateQuestionAndOptions function when needed (e.g., on page load)
populateQuestionAndOptions();

// Edit option
$(document).on('click', '.edit-icon', function () {
    var option = $(this).closest('.form-check');
    var optionText = option.find('.option-text');
    var inputField = $('<input type="text" class="option-input">').val(optionText.text());
    optionText.replaceWith(inputField);

    inputField.on('blur', function () {
        var newText = $(this).val().trim();
        var newSpan = $('<span class="option-text">').text(newText);
        $(this).replaceWith(newSpan);
    });

    option.addClass('editing');
    inputField.focus();
});

// Delete option
$(document).on('click', '.delete-icon', function () {
    $(this).closest('.form-check').remove();
});

// Add option
$('#addOptionIcon').on('click', addOption);



$(document).on("click", "#delete_question", function (event) {
    let id = $(this).attr('question_id');

    Swal.fire({
        title: 'Do You want to delete this Question ?',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: `No`,
    }).then((result) => {
        if (result.isConfirmed) {

            $.ajax({
                url: host_url + 'deleteQuestionnaire',
                data: {
                    'question_id': id,
                },
                method: 'post',
                beforeSend: function () {
                },
                complete: function () {
                },
                success: function (data) {
                    hideLoader();
                    if (data.Status == "Success") {
                        Swal.fire({
                            title: '',
                            text: `${data.Message}`,
                            confirmButtonText: 'Ok',
                        }).then((result) => {
                            fetchQuestions();
                        })
                    }
                    else {
                        Swal.fire(`${data.Message}`);
                    }
                }
            });

        } else if (result.isDenied) {

        }
    })
})


$("#submitQuestion").on("click", function () {
    let question = localStorage.getItem('letest_question');
    let question_id = localStorage.getItem("last_added_question");

    // Check if the question has been modified
    if (question_id && question_id !== "" && question_id !== undefined) {
        let originalQuestion = localStorage.getItem("letest_question");
        if (originalQuestion === question) {

            // No changes made to the question, so no need to update
            let response = new FormData();
            let option_arr = [];

            $(".option-text").each(function () {
                option_arr.push($(this).text());
            });

            let option_str = option_arr.join(", "); // Join the options with a comma separator

            response.append('option', option_str);
            response.append('question_id', question_id)

            $.ajax({
                url: host_url + 'updateOption',
                data: response,
                type: "POST",
                cache: false,
                processData: false,
                contentType: false,
                dataType: false,
                beforeSend: function (response) {
                    showLoader();
                },
                complete: function (response) {
                    hideLoader();
                },
                error: function (e) {
                    showAlert("Failed to Data Add.");
                    hideLoader();
                },
                success: function (response) {
                    hideLoader();
                    localStorage.removeItem("letest_question");
                    localStorage.removeItem("last_added_question");
                    localStorage.removeItem("letest_options");
                }
            });

        }
    }

    let data = new FormData();
    data.append('question', question);

    if (question_id && question_id !== "" && question_id !== undefined) {
        data.append('question_id', question_id);

        $.ajax({
            url: host_url + 'updateQuestionnaire',
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
                        confirmButtonText: 'Ok'
                    }).then((result) => {

                        let response = new FormData();
                        let option_arr = [];

                        $(".option-text").each(function () {
                            option_arr.push($(this).text());
                        });

                        let option_str = option_arr.join(", "); // Join the options with a comma separator

                        response.append('option', option_str);
                        response.append('question_id', question_id)

                        $.ajax({
                            url: host_url + 'updateOption',
                            data: response,
                            type: "POST",
                            cache: false,
                            processData: false,
                            contentType: false,
                            dataType: false,
                            beforeSend: function (response) {
                                showLoader();
                            },
                            complete: function (response) {
                                hideLoader();
                            },
                            error: function (e) {
                                showAlert("Failed to Data Add.");
                                hideLoader();
                            },
                            success: function (response) {
                                hideLoader();
                                localStorage.removeItem("letest_question");
                                localStorage.removeItem("last_added_question");
                                $("#editor").html("")
                            }
                        });
                    })
                }
                else {
                    Swal.fire(`${data.Message}`);
                }
            },
        });
    } else {
        $.ajax({
            url: host_url + 'addQuestionnaire',
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
                        confirmButtonText: 'Ok'
                    }).then((result) => {

                        let response = new FormData();
                        let option_arr = [];

                        $(".option-text").each(function () {
                            option_arr.push($(this).text());
                        });

                        let option_str = option_arr.join(", "); // Join the options with a comma separator

                        response.append('option', option_str);
                        response.append('question_id', data.last_added)

                        $.ajax({
                            url: host_url + 'addOption',
                            data: response,
                            type: "POST",
                            cache: false,
                            processData: false,
                            contentType: false,
                            dataType: false,
                            beforeSend: function (response) {
                                showLoader();
                            },
                            complete: function (response) {
                                hideLoader();
                            },
                            error: function (e) {
                                showAlert("Failed to Data Add.");
                                hideLoader();
                            },
                            success: function (response) {
                                hideLoader();
                                localStorage.removeItem("letest_question");
                                $("#editor").html("")
                            }
                        });
                    })
                }
                else {
                    Swal.fire(`${data.Message}`);
                }
            },
        });
    }
});


// TERMS & CONDITION SECTION
const fetchTermsContent = () => {
    $.ajax({
        url: host_url + 'fetchTerms',
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
                localStorage.setItem("last_added_terms_id", data.Response.id);
                localStorage.setItem("termsContent", content);
            }
        }
    });
}

$("#addTerms").on("click", function () {

    let content = localStorage.getItem('termsContent');
    let content_id = localStorage.getItem("last_added_terms_id");
    let data = new FormData();
    data.append('content', content);

    if (content_id != "" && content_id != undefined) {

        data.append('content_id', content_id);

        $.ajax({
            url: host_url + 'updateTerms',
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
                        confirmButtonText: 'Ok'
                    })
                }
                else {
                    Swal.fire(`Content remains the same. No changes were made.`);
                }
            },
        });
    }
    else {

        $.ajax({
            url: host_url + 'addTerms',
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
                        confirmButtonText: 'Ok'
                    }).then((result) => {
                        localStorage.setItem("last_added_terms_id", data.last_added);
                    })
                }
                else {
                    Swal.fire(`${data.Message}`);
                }
            },
        });
    }
});

const fetchTermsInnerContent = () => {
    $.ajax({
        url: host_url + 'fetchTermsContent',
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
                localStorage.setItem("last_added_termsInner_id", data.Response.id);
                localStorage.setItem("termsContentInner", content);
            }
        }
    });
}

$("#addTermsInner").on("click", function () {

    let content = localStorage.getItem('termsContentInner');
    let content_id = localStorage.getItem("last_added_termsInner_id");
    let data = new FormData();
    data.append('content', content);

    if (content_id != "" && content_id != undefined) {

        data.append('content_id', content_id);

        $.ajax({
            url: host_url + 'updateTermsContent',
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
                        confirmButtonText: 'Ok'
                    })
                }
                else {
                    Swal.fire(`Content remains the same. No changes were made.`);
                }
            },
        });
    }
    else {

        $.ajax({
            url: host_url + 'addTermsContent',
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
                        confirmButtonText: 'Ok'
                    }).then((result) => {
                        localStorage.setItem("last_added_termsInner_id", data.last_added);
                    })
                }
                else {
                    Swal.fire(`${data.Message}`);
                }
            },
        });
    }
});


const fetchTerms_condition_Section = () => {
    $.ajax({
        url: host_url + 'fetchTerms_condition',
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
                let table = $('#terms_table').DataTable({
                    "bDestroy": true,
                    "columns": [
                        { "width": "5%" },
                        { "width": "30%" },
                        { "width": "50%" },
                        { "width": "5%" },
                    ],
                    "columnDefs": [
                        { "targets": "_all", "className": "text-wrap" } // Wrap text if needed
                    ],
                    "autoWidth": false // Disable automatic column width calculation
                });
                table.clear().draw();
                if (data.success) {
                    data.Response.forEach(function (currentTerms, index) {
                        let count = index + 1;
                        let heading = currentTerms.heading;
                        let content = currentTerms.content;

                        $("#terms_table").DataTable().row.add([
                            count, heading, content,
                            `<a mx-2" id="term_edit" term_id="${currentTerms.id}" heading="${heading}" content="${content}">
                            <i class="mx-2 fa fa-edit"></i></a>` +
                            `<a mx-2" id="term_delete" term_id="${currentTerms.id}" ><i class="mx-2 fa fa-trash"></i></a>`
                        ]).draw();
                    });
                }
            }
        }
    });
}

$(document).on("click", "#term_edit", function (e) {
    let term_id = $(this).attr("term_id");
    let heading = $(this).attr("heading");
    let content = $(this).attr("content");

    localStorage.setItem("last_added_id_terms_condtion_id", term_id);
    localStorage.setItem("latest_terms_cnt", content);
    localStorage.setItem("TermsHeading", heading);

    window.location = 'terms_conditions';
})

$(document).on('click', "#term_delete", function (event) {
    let id = $(this).attr('term_id');

    Swal.fire({
        title: 'Do You want to delete this Term ?',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: `No`,
    }).then((result) => {
        if (result.isConfirmed) {

            $.ajax({
                url: host_url + 'deleteTerms_conditon',
                data: {
                    'content_id': id,
                },
                method: 'post',
                beforeSend: function () {
                },
                complete: function () {
                },
                success: function (data) {
                    hideLoader();
                    if (data.Status == "Success") {
                        Swal.fire({
                            title: '',
                            text: `${data.Message}`,
                            confirmButtonText: 'Ok',
                        }).then((result) => {
                            fetchTerms_condition_Section();
                        })
                    }
                    else {
                        Swal.fire(`${data.Message}`);
                    }
                }
            });

        } else if (result.isDenied) {

        }
    })
})


$("#addTerms_condition").on("click", function () {

    let termsContent = localStorage.getItem('latest_terms_cnt');
    let heading = $("#heading").val();
    let content_id = localStorage.getItem("last_added_id_terms_condtion_id");
    if (heading == "" || heading == undefined || heading == null) {
        Swal.fire("Please fill in the heading field");
    }
    else {

        let data = new FormData();
        data.append('content', termsContent);
        data.append('heading', heading);

        if (content_id != "" && content_id != undefined) {

            data.append('content_id', content_id);

            $.ajax({
                url: host_url + 'updateTerms_condition',
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
                            confirmButtonText: 'Ok'
                        }).then((result) => {
                            localStorage.removeItem("last_added_id_terms_condtion_id");
                            localStorage.removeItem("latest_terms_cnt");
                            localStorage.removeItem("TermsHeading");
                        })
                    }
                    else {
                        Swal.fire(`Content remains the same. No changes were made.`);
                    }
                },
            });
        }
        else {

            $.ajax({
                url: host_url + 'addTerms_condition',
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
                            confirmButtonText: 'Ok'
                        }).then((result) => {
                            $("#heading").val("");
                        })
                    }
                    else {
                        Swal.fire(`${data.Message}`);
                    }
                    window.location.reload();
                },
            });
        }
    }
});

// CONTACT US SECTION 
const fetchContactUsContent = () => {

    $.ajax({
        url: host_url + 'fetchContact',
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
                localStorage.setItem("last_added_contact_us_id", data.Response.id);
                localStorage.setItem("contactUsContent", content);
                $("#contactNo").val(data.Response.contact_num);
                $("#email").val(data.Response.email);
                $("#address").val(data.Response.address);
            }
        }
    });
}

$("#addContactContent").on("click", function () {

    let contactUsContent = localStorage.getItem('contactUsContent');
    let contactNo = $("#contactNo").val();
    let email = $("#email").val();
    let address = $("#address").val();

    let content_id = localStorage.getItem("last_added_contact_us_id");
    let data = new FormData();
    data.append('content', contactUsContent);
    data.append('contact_num', contactNo);
    data.append('email', email);
    data.append('address', address);

    if (content_id != "" && content_id != undefined) {

        data.append('content_id', content_id);

        $.ajax({
            url: host_url + 'updateContact',
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
                        confirmButtonText: 'Ok'
                    }).then((result) => {
                    })
                }
                else {
                    Swal.fire(`Content remains the same. No changes were made.`);
                }
            },
        });
    }
    else {

        $.ajax({
            url: host_url + 'addContact',
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
                        confirmButtonText: 'Ok'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            localStorage.setItem("last_added_contact_us_id", data.last_added);
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

const fetchContactResponse = () => {
    $.ajax({
        url: host_url + 'fetchContactFormDetails',
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
                let table = $('#contact_table').DataTable({
                    "columns": [
                        { "width": "5%" },
                        { "width": "15%" },
                        { "width": "10%" },
                        { "width": "50%" },
                        { "width": "20%" }
                    ],
                    "columnDefs": [
                        { "targets": "_all", "className": "text-wrap" } // Wrap text if needed
                    ],
                    "autoWidth": false // Disable automatic column width calculation
                });

                table.clear().draw();
                if (data.success) {
                    data.Response.forEach(function (currentResponse, index) {
                        let count = index + 1;
                        let userName = currentResponse.user_name;
                        let message = currentResponse.message;
                        let email = currentResponse.email;
                        let date = currentResponse.form_submitted_date;

                        table.row.add([
                            count, userName, email, message, date
                        ]).draw();
                    });
                }
            }
        }
    });
}



