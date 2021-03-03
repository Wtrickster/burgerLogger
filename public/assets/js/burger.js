$(function() {

    //function to change devour status
    $(".change-devour").on("click", function(event) {
        const id = $(this).data("id");
        const newDevour = $(this).data("newdevour");

        //send the put request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",

        }).then(
            function() {
                console.log("Changed devour to ", newDevour);
                location.reload();
            }
        )
        console.log({ newDevour });
        console.log({ id });
    })

    //create burger form & function
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        const newBurger = {
            name: $("#burg").val().trim(),
        };

        if (newBurger.name === "") return;

        //send Post request
        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added new burger");
            location.reload();
        });

    });


    //delete burger function
    $(".delete-burger").on("click", function(event) {
        const id = $(this).data("id");

        //send ajax delete call
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("Deleted Burger #" + id);
                location.reload();
            }
        );

    });

})