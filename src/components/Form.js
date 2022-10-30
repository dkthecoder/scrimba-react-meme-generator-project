
function Form() {

    

    return (
        <div class="container">
            <form class="needs-validation" novalidate>
                <div class="row g-3">
                    <div class="col-sm-6">
                        <label for="firstName" class="form-label">Top Text</label>
                        <input type="text" class="form-control" id="firstName" placeholder="" value="" required></input>
                        <div class="invalid-feedback">Field is required.</div>
                    </div>
                    <div class="col-sm-6">
                        <label for="lastName" class="form-label">Bottom Text</label>
                        <input type="text" class="form-control" id="lastName" placeholder="" value="" required></input>
                        <div class="invalid-feedback">Field is required.</div>
                    </div>
                </div>
                <button class="w-100 btn btn-primary btn-lg mt-3" type="submit">Continue to checkout</button>
            </form>
        </div>
    );
}

export default Form;
