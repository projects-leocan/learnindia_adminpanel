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
    .form-check {
        position: relative;
        padding-left: 30px;
    }
    
    .delete-option {
        position: absolute;
        right: 0;
        top: 0;
        cursor: pointer;
        transform: scale(1.5);
    }

    .delete-option:hover {
        color: #ff0000;
    }
</style>
<div class="wrapper ScrollStyle">
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-10">
                        <h1 class="m-0 mx-2">Career Support Questionnaire</h1>
                    </div>
                    <div class="col-sm-2">
                        <ol class="breadcrumb float-sm-right">
                            <!-- <button type="button" class="btn btn-block btn-primary" id="add_coupon" style=" width: 100%"> Add Coupon </button> -->
                        </ol>
                    </div>
                </div>
            </div>

            <div class="card-body">
                <div class="form-group">

                    <textarea name="content" id="editor">
                    &lt;p&gt; Untitled Question .&lt;/p&gt;
                </textarea>

                </div>
                <div class="form-group row">
                    <div class="col-sm-4" id="optionsContainer">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="options" id="addOption">
                            <label class="form-check-label text-muted" for="addOption">
                                Add option
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <button type="submit" id="" class="common-btn-padding btn btn-success  mx-3"> Save </button>
        </div>

    </div>
</div>
</div>

<script>
    ClassicEditor
        .create(document.querySelector('#editor'))
        .then(editor => {
            // Set the editor's content to the value from localStorage on page load
            // let htmlContent = localStorage.getItem("latest_counselling_cnt");
            // if (htmlContent) {
            //     editor.setData(htmlContent);
            // }
            editor.model.document.on('change:data', () => {
                // Save the latest HTML content to localStorage whenever the editor content changes
                let editorData = editor.getData();
                let htmlContent = editorData.trim();
                localStorage.setItem("latest_counselling_cnt", htmlContent);
            });
        })
        .catch(error => {
            console.error(error);
        });
</script>