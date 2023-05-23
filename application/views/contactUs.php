<style>
.ck-editor__editable {
    height: 30vh;
}

</style>
<div class="wrapper ">
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 mx-3">Contact Us</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <!-- <button type="button" class="btn btn-block btn-primary" id="" style=" width: 100%">Add Category</button> -->
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
                    <label for="" class="col-sm-2 col-form-label"> Contact No </label>
                    <div class="col-sm-4">
                        <input type="tel" id="contactNo" value="" class="form-control" placeholder="Contact No" >
                    </div>

                </div>
                <div class="form-group row">
                    <label for="" class="col-sm-2 col-form-label"> Email </label>
                    <div class="col-sm-4">
                        <input type="email" id="email" value="" class="form-control" placeholder="Email" >
                    </div>
                </div>
                        <div class="form-group row">
            <label for="" class="col-sm-2 col-form-label">Address</label>
            <div class="col-sm-4">
                <textarea id="address" class="form-control" placeholder="Address"></textarea>
            </div>
        </div>
                <button type="submit" id="addContactContent" class="common-btn-padding btn btn-success "> Save </button>
                <button type="submit" id="clear" class="mx-2 common-btn-padding btn btn-danger "> Clear </button>

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
            let htmlContent = localStorage.getItem("contactUsContent");
            if (htmlContent) {
                editor.setData(htmlContent);
            }
            editor.model.document.on('change:data', () => {
                // Save the latest HTML content to localStorage whenever the editor content changes
                let editorData = editor.getData();
                let htmlContent = editorData.trim();
                localStorage.setItem("contactUsContent", htmlContent);
            });

             // Clear the editor's content when the "Clear" button is clicked
             $('#clear').on('click', () => {
                editor.setData('');
                $("#contactNo").val("")
                $("#email").val("")
                $("#address").val("")
            });
        })
        .catch(error => {
            console.error(error);
        });
</script>
