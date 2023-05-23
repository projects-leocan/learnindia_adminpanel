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
</style>
<div class="wrapper ScrollStyle">
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-10">
                        <h1 class="m-0 mx-2">How we will help you in your Career journey ?</h1>
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
                    &lt;p&gt;Add Your Content Here .&lt;/p&gt;
                </textarea>

                </div>
                <button type="submit" id="addCareerJourneyContent" class="common-btn-padding btn btn-success "> Save </button>
                <button type="submit" id="clear" class="mx-2 common-btn-padding btn btn-danger "> Clear </button>

                <!-- Loader HTML code -->
                <div id="loader" class="fulfilling-bouncing-circle-spinner">
                    <div class="circle"></div>
                    <div class="orbit"></div>
                </div>

            </div>

        </div>
    </div>
</div>

<script>
    ClassicEditor
        .create(document.querySelector('#editor'))
        .then(editor => {
            // Set the editor's content to the value from localStorage on page load
            let htmlContent = localStorage.getItem("last_career_journey_cnt");
            if (htmlContent) {
                editor.setData('');
                editor.setData(htmlContent);
            }
            editor.model.document.on('change:data', () => {
                // Save the latest HTML content to localStorage whenever the editor content changes
                let editorData = editor.getData();
                let htmlContent = editorData.trim();
                localStorage.setItem("careerjourneyContent", htmlContent);
            });

            // Clear the editor's content when the "Clear" button is clicked
            $('#clear').on('click', () => {
                editor.setData('');
            });
        })
        .catch(error => {
            console.error(error);
        });
</script>