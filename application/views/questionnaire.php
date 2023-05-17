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

    .add-option-container {
        display: flex;
        align-items: center;
    }

    .add-option-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        font-size: 25px;
        color: #fff;
        background-color: #046A38;
        border-radius: 50%;
        cursor: pointer;
        margin-left: 10px;
    }
</style>
<div class="wrapper ScrollStyle">
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-10">
                        <h1 class="m-0 mx-2">Add Questionnaire</h1>
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

                <h4>Add Options</h4>
                <div class="form-group row">
                    <div class="col-sm-4" id="optionsContainer">
                        <div class="form-check add-option-container">
                            <label class="form-check-label" for="addOption">
                                Add option
                            </label>
                            <span class="add-option-icon" id="addOptionIcon">&#43;</span>
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