const brandUrl = 'http://localhost:8080/brand';
let brands = [];

function myFetch(url, fetchData, callback, awaitBody = true) {
    fetchData.headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
    fetchData.body = JSON.stringify(fetchData.body);
    fetch(url, fetchData)
        .then(res => {
            if (awaitBody)
                return res.json()
            else
                callback();
        })
        .then(
            (response) => {
                callback(response);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                //catch err
            }
        )
}

function nullsToConstant(brand) {
    brand.description = brand.description ?? '';
}

function renderFuelList() {
    $list = $('#car-list');
    $list.empty();
    brands.forEach(brand => {
        nullsToConstant(brand);
        const $template = getTemplate(brand);
        $list.append($template);
    })
}

function refreshData() {
    myFetch(brandUrl + '/all',
        { 'method': 'GET' },
        (result) => {
            brands = result;
            renderFuelList();
        })
}

function handleCreate(item) {
    myFetch(brandUrl,
        {
            'method': 'POST',
            'body': item
        },
        () => {
            refreshData();
        })
}

function handleEdit(item) {
    myFetch(brandUrl,
        { 'method': 'PUT', 'body': item },
        () => {
            refreshData();
        })
}

function handleDelete(id) {
    myFetch(brandUrl + `/?id=${id}`,
        { 'method': 'DELETE' },
        () => {
            refreshData();
        },
        false)
}

function getTemplate(item) {
    const $template = `<tr>
                        <td class="brand-id" scope="row">${item.id}</th>
                        <td class="brand-name">${item.BrandID}</td>
                        <td class="brand-description">${item.FuelID}</td>
                        <td class="brand-description">${item.Model}</td>
                        <td class="brand-description">${item.ReleaseYear}</td>
                        <td class="brand-description">${item.HorsePower}</td>

                        <td>
                            <button type="button" 
                                class="btn btn-primary" 
                                data-toggle="modal" 
                                data-target="#editModal" 
                                data-id=${item.id}
                                data-name=${item.name}
                                data-description=${item.description}>Edit</button>
                            <button type="button" onClick="handleDelete(value)" value=${item.id} class="btn btn-danger">Delete</button>
                        </td>
                        </tr>`;

    return $template;
}

function editModal() {
    $('#editModal').on('show.bs.modal', function (e) {
        let btn = $(e.relatedTarget);
        let id = btn.data('id');
        let name = btn.data('name');
        let description = btn.data('description');
        $('.editNameInput').val(name);
        $('.editDescriptionInput').val(description);

        $('.edit').data('id', id);
    })

    $('.edit').on('click', function () {
        let id = $(this).data('id');

        let name = $('.editNameInput').val();
        let description = $('.editDescriptionInput').val();

        handleEdit({ id, name, description });

        $('#editModal').modal('toggle');
    })
}

function createModal() {
    $('#createModal').on('show.bs.modal', function (e) {
        $('.createNameInput').val('');
        $('.createDescriptionInput').val('');
    })
    $('.create').on('click', function () {
        let name = $('.createNameInput').val();
        let description = $('.createDescriptionInput').val();

        handleCreate({ name, description });
        $('#createModal').modal('toggle');
    })
}

refreshData();
setTimeout(editModal, 10);
setTimeout(createModal, 10);
