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
                        <h1 class="m-0 mx-2">Career articles</h1>
                    </div>
                    <div class="col-sm-2">
                        <ol class="breadcrumb float-sm-right">
                            <button type="button" class="btn btn-block btn-success" id="show_articles" style=" width: 100%"> Show Articles</button>
                        </ol>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="form-group">

                    <textarea name="content" id="editor">
                    &lt;p&gt;Add Your Content Here .&lt;/p&gt;
                </textarea>

                </div>


                <div class="form-group row">
                    <label for="" class="col-sm-2 col-form-label"> Heading</label>
                    <div class="col-sm-4">
                        <input type="text" id="heading" value="" class="form-control"
                            placeholder="Heading Here">
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Image</label>
                    <div class="col-sm-10">
                        <div class="custom-file">
                            <input type="file" class="form-control-file customFile" name="imageFile" id="customFile"  >
                            <a href="#">
                                <div class="imgPreview">

                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <button type="submit" id="addCareerArticles" class="common-btn-padding btn btn-success mx-4"> Save </button>
        <button type="submit" id="clear" class="mx-2 common-btn-padding btn btn-danger "> Clear </button>

        <div id="loader" class="fulfilling-bouncing-circle-spinner">
                    <div class="circle"></div>
                    <div class="orbit"></div>
                </div>

        <!-- The Modal -->
        <div class="idMyModal modal">
            <span class="close">&times;</span>
            <img class="modal-content">
        </div>
    </div>
</div>

<script>
    ClassicEditor
        .create(document.querySelector('#editor'))
        .then(editor => {
            // Set the editor's content to the value from localStorage on page load
            let DBhtmlContent = localStorage.getItem("articlesContent");
            if (DBhtmlContent) {
                editor.setData(DBhtmlContent);
            }

            editor.model.document.on('change:data', () => {
                // Save the latest HTML content to localStorage whenever the editor content changes
                let editorData = editor.getData();
                let htmlContent = editorData.trim();
                localStorage.setItem("articlesContent", htmlContent);
            });

             // Clear the editor's content when the "Clear" button is clicked
             $('#clear').on('click', () => {
                editor.setData('');
                $("#heading").val("");
            });
        })
        .catch(error => {
            console.error(error);
        });
</script>

