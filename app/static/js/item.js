async function eventClickedItem(item_click) {
    const item = document.createElement("div");
    const workspace_container = document.querySelector(".main-workspace-container-header");

    item.classList.add("item-view-container");

    const item_id = document.createElement("p");
    item_name.classList.add("item-view-container-line")
    item_name.innerHTML = item_click.name;

    const user_id = item_click.id;

    const item_description = document.createElement("p");
    item_description.classList.add("item-view-container-line");
    const request = await fetch('/description_get', {
        method: ["POST"],
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id = user_id)
    });

    const respone = await request.json()
    item_description.innerHTML = JSON.parse(respone)

    const button_cart = documnet.createElement("button")
    button_cart.classList.add("button-card")
    button_cart.innerHTML = "Add to card"


    while (workspace_container.firstChild) {
        workspace_container.removeChild(workspace_container.firstChild);
    }

}